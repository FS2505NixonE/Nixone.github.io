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
          <h1>E'Onna Nixon</h1>
          <p className="portfolio-hero__tagline">
            Building solutions. <span>Creating possibilities.</span>
          </p>
          <p>
            I’m a Full-Stack Web Developer with a passion for turning ideas into 
            functional, meaningful digital experiences. My journey into technology 
            is about more than learning how to code—it's about challenging myself, 
            creating new opportunities, and developing skills that allow me to 
            build solutions that can make a real impact.
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
          {/* AI-generated image (see Research.md): created with OpenAI DALL-E 3 via ChatGPT */}
          <img
            className="about-portrait"
            src="/images/ai-portrait.png"
            alt="Stylized digital portrait of a full-stack developer working at a desk with a laptop and dual monitors, rendered in indigo and violet tones"
            width={720}
            height={450}
            loading="lazy"
          />
          <p>I enjoy taking something complicated, breaking it into manageable pieces, and figuring out how those pieces work together. Coding has strengthened that ability even more.</p>
          <div className="stat-row"><span><strong>01</strong><small>Curiosity</small></span><span><strong>02</strong><small>Craft</small></span><span><strong>03</strong><small>Impact</small></span></div>
        </div>
      </section>

      <section id="skills" className="portfolio-section portfolio-section--skills">
        <div className="section-heading">
          <p className="eyebrow">Technical skills</p>
          <h2>Tools I reach for<br />to ship real work.</h2>
        </div>
        <div className="skill-grid">
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#9883;</span>
            <h3>Frontend engineering</h3>
            <p>Component-driven interfaces with React and TypeScript, styled with modern CSS for responsive, accessible layouts.</p>
          </article>
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#9881;</span>
            <h3>Backend &amp; APIs</h3>
            <p>Designing REST endpoints and server logic, keeping data flows predictable and well validated.</p>
          </article>
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#9707;</span>
            <h3>Databases</h3>
            <p>Modeling relational data in PostgreSQL and Supabase, including row-level security and query design.</p>
          </article>
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#9095;</span>
            <h3>Version control</h3>
            <p>Branch-based Git workflows, pull request reviews, and automated deploys with GitHub Actions.</p>
          </article>
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#10003;</span>
            <h3>Testing &amp; quality</h3>
            <p>Linting, type checking, and automated tests that keep each release dependable.</p>
          </article>
          <article className="skill-card">
            <span className="skill-card__icon" aria-hidden="true">&#9635;</span>
            <h3>Responsive design</h3>
            <p>Translating designs into fluid layouts that hold up from small phones to wide desktops.</p>
          </article>
        </div>
      </section>

      <section id="strengths" className="portfolio-section portfolio-section--soft">
        <div className="section-heading">
          <p className="eyebrow">Soft skills &amp; talents</p>
          <h2>How I work<br />with a team.</h2>
        </div>
        <div className="soft-skill-content">
          {/* AI-generated image (see Research.md): created with OpenAI DALL-E 3 via ChatGPT */}
          <img
            className="soft-skill-banner"
            src="/images/ai-workspace.png"
            alt="Illustration of a collaborative team workspace with people sketching on a whiteboard, sticky notes, and open laptops"
            width={960}
            height={412}
            loading="lazy"
          />
          <div className="skill-grid">
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#9993;</span>
              <h3>Communication</h3>
              <p>Explaining technical trade-offs in plain language so teammates and stakeholders can make confident decisions.</p>
            </article>
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#8644;</span>
              <h3>Collaboration</h3>
              <p>Working openly in code reviews and pairing sessions, sharing context early instead of hoarding it.</p>
            </article>
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#8635;</span>
              <h3>Adaptability</h3>
              <p>Staying steady when priorities shift, picking up unfamiliar tools quickly, and adjusting the plan without drama.</p>
            </article>
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#9873;</span>
              <h3>Problem solving</h3>
              <p>Breaking vague problems into small, testable steps and questioning assumptions before writing code.</p>
            </article>
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#9201;</span>
              <h3>Time management</h3>
              <p>Scoping work realistically, protecting focus time, and flagging risks before they become blockers.</p>
            </article>
            <article className="skill-card">
              <span className="skill-card__icon" aria-hidden="true">&#9825;</span>
              <h3>Empathy</h3>
              <p>Designing for real users and supporting teammates, keeping accessibility and clarity in every decision.</p>
            </article>
          </div>
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
