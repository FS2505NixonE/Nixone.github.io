function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          <strong>E'Onna Nixon</strong> Building solutions. Creating possibilities. Coding a future without limits.
        </p>
        <div className="site-footer__links" aria-label="Professional links">
          <a href="mailto:eonnait25@gmail.com">Email</a>
          <a href="https://github.com/FS2505NixonE" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contact">Start a conversation</a>
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} E'Onna Nixon
        </p>
      </div>
    </footer>
  )
}

export default Footer
