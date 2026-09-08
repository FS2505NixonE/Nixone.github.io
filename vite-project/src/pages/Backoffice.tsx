import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { signOut } from '../lib/auth'
import {
  type ContactMessage,
  deleteMessage,
  listMessages,
} from '../lib/contactMessages'

type LoadState = 'loading' | 'ready' | 'error'

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Protected admin area. Only rendered by <RequireAuth> once the Supabase
 * session is confirmed, so this component can assume the admin is signed in.
 */
function Backoffice() {
  const navigate = useNavigate()
  const { session } = useAuth()

  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)
  const [isSigningOut, setIsSigningOut] = useState(false)

  const dialogRef = useRef<HTMLDialogElement>(null)
  const selected = messages.find((message) => message.id === selectedId) ?? null

  const fetchMessages = useCallback(async () => {
    const result = await listMessages()
    if (result.ok) {
      setMessages(result.data)
      setLoadState('ready')
    } else {
      setLoadState('error')
    }
  }, [])

  function retry() {
    setActionError(null)
    setLoadState('loading')
    void fetchMessages()
  }

  useEffect(() => {
    document.title = 'Back office'
    // On-mount data fetch: the state updates happen only after the network
    // round-trip resolves (not synchronously), so the cascading-render concern
    // this rule guards against does not apply.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchMessages()
  }, [fetchMessages])

  // Drive the native <dialog> from React state: open when a message is
  // selected, close when it is not. showModal() gives Escape-to-close and the
  // ::backdrop for free.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedId && !dialog.open) dialog.showModal()
    else if (!selectedId && dialog.open) dialog.close()
  }, [selectedId])

  // Sync state back whenever the dialog closes by any route (Escape, backdrop
  // click, or a close button). This is the endorsed "subscribe to an external
  // system" effect pattern.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => setSelectedId(null)
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [])

  async function handleDelete(id: string) {
    if (!window.confirm('Delete this message? This cannot be undone.')) return
    setDeletingId(id)
    setActionError(null)
    const result = await deleteMessage(id)
    setDeletingId(null)
    if (result.ok) {
      if (selectedId === id) setSelectedId(null)
      setMessages((current) => current.filter((message) => message.id !== id))
    } else {
      setActionError('Could not delete that message. Please try again.')
    }
  }

  async function handleSignOut() {
    setIsSigningOut(true)
    await signOut()
    navigate('/login', { replace: true })
  }

  return (
    <main id="main-content" className="admin-shell admin-shell--wide">
      <section className="backoffice" aria-labelledby="backoffice-heading">
        <header className="backoffice__bar">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 id="backoffice-heading">Messages</h1>
          </div>
          <div className="backoffice__account">
            <span>{session?.user.email ?? 'Signed in'}</span>
            <button type="button" onClick={handleSignOut} disabled={isSigningOut}>
              {isSigningOut ? 'Logging out…' : 'Log out'}
            </button>
          </div>
        </header>

        {loadState === 'loading' && (
          <p className="route-status" role="status">
            Loading messages…
          </p>
        )}

        {loadState === 'error' && (
          <div className="backoffice__notice">
            <p className="form-error">
              <span className="feedback-icon" aria-hidden="true">
                &#10005;
              </span>
              Couldn’t load messages.
            </p>
            <button type="button" onClick={retry}>
              Try again
            </button>
          </div>
        )}

        {loadState === 'ready' && messages.length === 0 && (
          <p className="route-status">No messages yet.</p>
        )}

        {loadState === 'ready' && messages.length > 0 && (
          <>
            {actionError && (
              <p className="form-error">
                <span className="feedback-icon" aria-hidden="true">
                  &#10005;
                </span>
                {actionError}
              </p>
            )}
            <p className="route-status">
              {messages.length} message{messages.length === 1 ? '' : 's'}
            </p>
            <div className="backoffice__table-wrap">
              <table className="backoffice__table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr
                      key={message.id}
                      className="backoffice__row"
                      onClick={() => setSelectedId(message.id)}
                    >
                      <td>{message.name}</td>
                      <td>
                        <a
                          href={`mailto:${message.email}`}
                          onClick={(event) => event.stopPropagation()}
                        >
                          {message.email}
                        </a>
                      </td>
                      <td>
                        <time dateTime={message.created_at}>
                          {formatDateTime(message.created_at)}
                        </time>
                      </td>
                      <td className="backoffice__actions">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedId(message.id)
                          }}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="backoffice__delete"
                          onClick={(event) => {
                            event.stopPropagation()
                            void handleDelete(message.id)
                          }}
                          disabled={deletingId === message.id}
                        >
                          {deletingId === message.id ? 'Deleting…' : 'Delete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <dialog
          ref={dialogRef}
          className="backoffice__dialog"
          aria-labelledby="message-dialog-title"
          onClick={(event) => {
            if (event.target === dialogRef.current) setSelectedId(null)
          }}
        >
          {selected && (
            <div className="backoffice__dialog-body">
              <div className="backoffice__dialog-head">
                <h2 id="message-dialog-title">Message from {selected.name}</h2>
                <button
                  type="button"
                  className="backoffice__dialog-close"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close"
                >
                  &#10005;
                </button>
              </div>
              <dl className="backoffice__dialog-meta">
                <dt>Name</dt>
                <dd>{selected.name}</dd>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${selected.email}`}>{selected.email}</a>
                </dd>
                <dt>Received</dt>
                <dd>
                  <time dateTime={selected.created_at}>
                    {formatDateTime(selected.created_at)}
                  </time>
                </dd>
              </dl>
              <p className="backoffice__dialog-message">{selected.message}</p>
              <button
                type="button"
                className="backoffice__dialog-dismiss"
                onClick={() => setSelectedId(null)}
              >
                Close
              </button>
            </div>
          )}
        </dialog>
      </section>
    </main>
  )
}

export default Backoffice
