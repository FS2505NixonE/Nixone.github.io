function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          <strong>Nixon E.</strong> Building thoughtful digital experiences.
        </p>
        <div className="site-footer__links" aria-label="Professional links">
          <a href="mailto:nixon@example.com">Email</a>
          <a href="https://github.com/FS2505NixonE" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contact">Start a conversation</a>
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Nixon E.
        </p>
      </div>
    </footer>
  )
}

export default Footer
