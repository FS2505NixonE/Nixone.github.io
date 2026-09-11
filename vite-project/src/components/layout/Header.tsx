import logo from '../../assets/nixon-logo.svg'

const navigationItems = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◌' },
  { label: 'Skills', href: '#skills', icon: '◈' },
  { label: 'Strengths', href: '#strengths', icon: '✦' },
  { label: 'Experience', href: '#experience', icon: '▦' },
  { label: 'Education', href: '#education', icon: '❖' },
  { label: 'Projects', href: '#projects', icon: '◇' },
  { label: 'Contact', href: '#contact', icon: '@' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="site-header__inner">
        <a className="site-brand" href="#home" aria-label="E'Onna Nixon home">
          <img
            className="site-brand__logo"
            src={logo}
            alt="E'Onna Nixon portfolio logo"
          />
          <span>
            Nixon
            <small>Full-stack developer | Problem Solver | Purpose-Driven Creator</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span className="site-nav__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="site-nav__label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
