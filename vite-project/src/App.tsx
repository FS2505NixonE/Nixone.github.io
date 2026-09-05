import logo from './assets/nixon-logo.svg'
import ContactForm from './components/ContactForm'
import MainLayout from './components/layout/MainLayout'
import './App.css'

function App() {
  return (
    <MainLayout>
      <section id="home" className="portfolio-hero">
        <div className="portfolio-hero__art" aria-hidden="true">
          <div className="hero-orbit hero-orbit--one"></div>
          <div className="hero-orbit hero-orbit--two"></div>
          <img src={logo} alt="" />
        </div>
        <div className="portfolio-hero__copy">
          <p className="eyebrow">Full-stack developer</p>
          <h1>Building solutions.<br /><span>Elevating possibilities.</span></h1>
          <p>
            I design and build thoughtful digital products where strong engineering
            meets a clear, human experience.
          </p>
          <a className="hero-cta" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="value-strip" aria-label="Core values">
        <div><strong>&lt;/&gt;</strong><span><b>Code</b>Passion for building<br />clean, efficient code.</span></div>
        <div><strong>⌁</strong><span><b>Technology</b>Connected, adaptable,<br />problem solver.</span></div>
        <div><strong>↗</strong><span><b>Growth</b>Always learning,<br />leveling up.</span></div>
        <div><strong>♧</strong><span><b>Balance</b>Mental wellness,<br />purpose, peace.</span></div>
        <div><strong>♕</strong><span><b>Leadership</b>Leading by example,<br />creating impact.</span></div>
      </section>

      <section id="about" className="portfolio-section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Curious by default.<br />Precise by practice.</h2>
        </div>
        <div className="about-copy">
          <p>I enjoy turning complicated requirements into approachable interfaces, then backing them with dependable data and accessible interactions.</p>
          <div className="stat-row"><span><strong>01</strong><small>Curiosity</small></span><span><strong>02</strong><small>Craft</small></span><span><strong>03</strong><small>Impact</small></span></div>
        </div>
      </section>

      <section id="projects" className="portfolio-section portfolio-section--projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that make<br />the details count.</h2>
        </div>
        <div className="project-grid">
          <article className="project-card project-card--elevator"><span className="project-number">01</span><p className="eyebrow">Full-stack platform</p><h3>Rocket Elevators</h3><p>A customer-facing platform connecting estimation, operations, and a polished digital experience.</p><div className="tag-row"><span>React</span><span>API</span><span>UX</span></div></article>
          <article className="project-card project-card--food"><span className="project-number">02</span><p className="eyebrow">Product experience</p><h3>Rocket Food Delivery</h3><p>A responsive ordering journey designed around clarity, speed, and delightful interactions.</p><div className="tag-row"><span>TypeScript</span><span>Supabase</span><span>CSS</span></div></article>
          <article className="project-card project-card--blog"><span className="project-number">03</span><p className="eyebrow">Content system</p><h3>CodeBloggs</h3><p>A focused publishing experience that makes technical ideas easier to discover and share.</p><div className="tag-row"><span>Web app</span><span>Data</span><span>Design</span></div></article>
        </div>
      </section>

      <ContactForm />
    </MainLayout>
  )
}

export default App
