import logo from './assets/nixon-logo.svg'
import ContactForm from './components/ContactForm'
import MainLayout from './components/layout/MainLayout'
import './App.css'

// Newest first — the array order is the on-page order (reverse chronological).
const education = [
  {
    school: 'University of Pheonix',
    program: 'Bachelor of Science in Health Administration',
    dates: '2026 – 2028',
    detail: 'Focused on healthcare management, policy, and administration, providing a strong foundation for understanding the healthcare industry.',
  },
  {
    school: 'Codeboxx',
    program: 'Full-Stack Web Development Program',
    dates: '2025 – 2026',
    detail:
      'Immersive, project-based training in JavaScript, React, REST APIs, SQL, and Git-based team workflows.',
  },
  {
    school: 'Pinellas Technical College',
    program: 'Medical Billing and Coding Program',
    dates: '2018 – 2019',
    detail: 'Trained in medical billing and coding principles, preparing for a career in the healthcare industry.',
  },
  {
    school: 'Gibbs High School',
    program: 'High School Diploma',
    dates: '2009 – 2011',
    detail: 'Completed coursework in mathematics, science, and English, developing strong foundational skills for higher education.',
  },
]

// Newest first — the array order is the on-page order (reverse chronological).
const experience = [
  {
    role: 'Medical Claims Representative / Processor',
    org: 'CVS Health / Aetna Medicare',
    dates: '2024 – Present',
    summary:
      'Review and process healthcare claims and prior-authorization-related information in a remote, computer-based environment.',
    points: [
      'Research claim details, enter and validate data, and maintain accuracy while meeting productivity, schedule, and deadline requirements.',
      'Apply healthcare and insurance knowledge to resolve issues and support accurate, efficient member and provider outcomes.',
    ],
  },
  {
    role: 'Technical Advisor',
    org: 'Kelly – Apple',
    dates: '2023 – 2024',
    summary:
      'Supported clients with technical and service needs while maintaining positive relationships and clear communication.',
    points: [
      'Provided feedback and coaching to support team performance and professional growth.',
      'Helped foster a positive, service-focused environment while resolving customer concerns.',
    ],
  },
  {
    role: 'Registrar I',
    org: 'BayCare',
    dates: '2021 – 2023',
    summary:
      'Managed patient registration data, updated records, confirmed insurance information, and responded to patient inquiries.',
    points: [
      'Reviewed and researched healthcare and insurance information and identified trends requiring follow-up or reporting.',
      'Maintained accurate information across hospital systems while coordinating with patients and internal teams.',
    ],
  },
  {
    role: 'Floor Support',
    org: 'Trulieve',
    dates: '2020 – 2023',
    summary:
      'Resolved high-volume customer inquiries using active listening, critical thinking, and problem-solving.',
    points: [
      'Investigated billing and fraud-related concerns, processed account requests, and assisted with product and hardware/software issues.',
    ],
  },
  {
    role: 'Customer Service Representative',
    org: 'TCS',
    dates: '2018 – 2019',
    summary:
      'Resolved complex service requests and customer inquiries while documenting outcomes accurately.',
    points: [
      'Collaborated in a team-based environment and contributed to shared service and performance goals.',
    ],
  },
]

const projects = [
  {
    name: 'Rocket Elevators',
    kind: 'Full-stack platform',
    image: '/images/project-rocket-elevators.png',
    alt: 'Screenshot of the Rocket Elevators management dashboard',
    description:
      'A full-stack management platform for a fictional elevator company: a public marketing site, a customer quote-request flow, and an internal dashboard for tracking buildings, elevators, and service requests. Built to practise designing one product end to end across the UI, a REST API, and a relational database.',
    tags: ['React', 'REST API', 'MySQL', 'AsyncStorage', 'Expo'],
  },
  {
    name: 'Rocket Elevators Admin App',
    kind: 'CodeBoxx MERN application',
    image: '/images/project-rocket-elevators-admin.png',
    alt: 'Screenshot of the Rocket Elevators admin app screens',
    description:
      'Full-stack administrative platform for managing Rocket Elevators users, agents, transactions, records, and content.',
    tags: ['React Native', 'Express API', 'MySQL', 'MongoDB', 'JWT', 'Mongoose'],
  },
  {
    name: 'CodeBloggs',
    kind: 'Social content app',
    image: '/images/project-codebloggs.png',
    alt: 'Screenshot of the CodeBloggs feed and profile pages',
    description:
      'A social blogging web app where people sign up, manage a profile, publish posts, and interact through a shared feed. Built to practise authentication, full CRUD, and document data modelling on the MERN stack.',
    tags: ['React', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Selenium'],
  },
   {
    name: 'Rocket Food Delivery',
    kind: 'Full-stack platform',
    image: '/images/project-rocket-food.png',
    alt: 'Mobile food-delivery platform connecting customers, restaurants, and couriers through restaurant browsing, ordering, order history, and delivery management.',
    description:
      'A full-stack management platform for a fictional food delivery company: a public marketing site, a customer quote-request flow, and an internal dashboard for tracking restaurants, orders, and deliveries. Built to practise designing one product end to end across the UI, a REST API, and a relational database.',
    tags: ['React', 'REST API', 'MySQL', 'AsyncStorage', 'Expo', 'Spring Boot', 'Java'],
  },
]

// Thumbnails are AI-generated (see Research.md). Each card links out in a new tab.
const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/FS2505NixonE',
    image: '/images/link-github.png',
    alt: 'Illustration representing a GitHub code repository profile',
    description:
      "Every project I've built lives here, including the source for this portfolio. Browse the repositories to see how each app is structured and how it grew commit by commit.",
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eonna-nixon-266323170',
    image: '/images/link-linkedin.png',
    alt: 'Illustration representing a LinkedIn professional profile',
    description:
      'My professional background across healthcare operations, technical support, and customer service, plus my move into full-stack development. The best place to connect or see recommendations.',
  },
  {
    title: 'Résumé (PDF)',
    url: '/EOnna-Nixon-Resume.pdf',
    image: '/images/link-resume.png',
    alt: 'Illustration representing a downloadable résumé document',
    description:
      'A one-page summary of my experience, education, and skills. Opens in a new tab so you can read it inline or save a copy.',
  },
  {
    title: 'Email',
    url: 'mailto:eonnait25@gmail.com',
    image: '/images/link-email.png',
    alt: 'Illustration representing an email envelope',
    description:
      'The most direct way to reach me for roles, collaboration, or questions about any project shown here. I read and reply to everything.',
  },
]

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
            functional, meaningful digital experiences.
          </p>
          <p>
            <strong>I don't just want to write code. I want to build things that matter.</strong>
          </p>
          <div className="hero-actions">
            <a className="hero-cta" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a
              className="hero-cta hero-cta--ghost"
              href="/EOnna-Nixon-Resume.pdf"
              download
              target="_blank"
              rel="noopener"
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
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
          <p>My background reaches beyond technology into healthcare, public administration, and customer service. That mix shapes how I build: I don't only ask whether something works, but who's using it, what problem it solves, and how the experience could be better.</p>
          <p>My goal is to keep sharpening my technical skills while combining them with the professional experience and education I've built in those fields.</p>
          <p>I'm particularly interested in the intersection of technology and healthcare, where better digital solutions can improve workflows, access to information, and people's overall experiences.</p>
          <p>Long term, I want to build technology that connects people across healthcare, business, and everyday life, and to use what I'm learning to create opportunities, develop innovative solutions, build businesses, and eventually lead projects and teams of my own.</p>
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
          <h2>What I bring<br />to the Stack.</h2>
        </div>
        <div className="soft-skill-content">
          {/* AI-generated image (see Research.md): created with OpenAI DALL-E 3 via ChatGPT */}
          <img
            className="soft-skill-banner"
            src="/images/ai-workspace.png"
            alt="Illustration of a collaborative team workspace with people sketching on a whiteboard, sticky notes, and open laptops"
            width={960}
            height={540}
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

      <section id="experience" className="portfolio-section">
        <div className="section-heading">
          <p className="eyebrow">Work experience</p>
          <h2>Where I've put<br />the work in.</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.org}`}>
              <p className="timeline-item__dates">{job.dates}</p>
              <h3>{job.role}</h3>
              <p className="timeline-item__org">{job.org}</p>
              <p>{job.summary}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="portfolio-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>How I learned<br />to build.</h2>
        </div>
        <div className="timeline">
          {education.map((entry) => (
            <article className="timeline-item" key={`${entry.school}-${entry.program}`}>
              <p className="timeline-item__dates">{entry.dates}</p>
              <h3>{entry.school}</h3>
              <p className="timeline-item__org">{entry.program}</p>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="portfolio-section portfolio-section--projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that make<br />the details count.</h2>
        </div>
        {/* Project screenshots live in public/images/ — replace the placeholder
            project-*.png files with real captures (documented in Research.md). */}
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <img
                className="project-card__media"
                src={project.image}
                alt={project.alt}
                width={640}
                height={480}
                loading="lazy"
              />
              <div className="project-card__body">
                <p className="eyebrow">{project.kind}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="links" className="portfolio-section portfolio-section--projects">
        <div className="section-heading">
          <p className="eyebrow">Find me online</p>
          <h2>Links &amp; profiles.</h2>
        </div>
        {/* Link thumbnails are AI-generated placeholders in public/images/ — see Research.md. */}
        <div className="project-grid">
          {links.map((link) => (
            <a
              className="project-card link-card"
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project-card__media"
                src={link.image}
                alt={link.alt}
                width={640}
                height={480}
                loading="lazy"
              />
              <div className="project-card__body">
                <h3>
                  {link.title} <span aria-hidden="true">↗</span>
                </h3>
                <p>{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <ContactForm />
    </MainLayout>
  )
}

export default App
