import { useState } from 'react'
import profileImage from './assets/profile.jpeg'
import './App.css'

const projects = [
  {
    title: 'Copyteque Cyber',
    category: 'Business & Services',
    number: '01',
    description: 'A sharp digital home for a Bungoma cyber and office supplies hub.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85',
    link: 'https://6a1170fd4f73ad234d44823d--sunny-figolla-b6b6ed.netlify.app/',
  },
  {
    title: 'Mutermko VTC',
    category: 'Education',
    number: '02',
    description: 'A modern vocational training centre website built around clarity and access.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85',
    link: 'https://mutermko-vtc.netlify.app/',
  },
  {
    title: 'Fineday General Store',
    category: 'E-Commerce',
    number: '03',
    description: 'A friendly, low-friction storefront for everyday household essentials.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=85',
    link: 'https://munroemil6-bot.github.io/fineday-shop/',
  },
  {
    title: 'Campus Lost & Found',
    category: 'Education',
    number: '04',
    description: 'A reporting platform that makes returning misplaced items less stressful.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85',
    link: 'https://campus-lost-found-frontend-latest.onrender.com/',
  },
  {
    title: 'PesaFlow',
    category: 'Fintech',
    number: '05',
    description: 'A wallet and money-transfer product with user and admin workspaces, beneficiaries, analytics, and transfer flows.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
    link: 'https://pesaflow-frontend-2.vercel.app/',
    repo: 'https://github.com/munroemil6-bot/pesaflow-frontend',
  },
  {
    title: 'BookBarn Library System',
    category: 'Product',
    number: '06',
    description: 'A responsive library platform for authentication, catalog search, borrowing workflows, and administration, backed by a Flask API.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=85',
    link: 'https://library-management-system-frontend-jade.vercel.app/login',
    repo: 'https://github.com/munroemil6-bot/library-management-system-frontend',
  },
  {
    title: 'Royal Events Catering',
    category: 'Hospitality',
    number: '07',
    description: 'An elegant hospitality experience for premium catering and events.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85',
    link: 'https://munroemil6-bot.github.io/Royal-Events-Catering/',
  },
]

const skills = [
  ['HTML', '68%'],
  ['CSS', '70%'],
  ['JavaScript', '70%'],
  ['React', '73%'],
  ['Python', '82%'],
  ['Django', '72%'],
  ['Flask', '78%'],
  ['SQL & Databases', '76%'],
  ['Docker', '68%'],
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)

  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>MYLES<span>.</span></a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['Home', 'Work', 'About', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="header-link" href="mailto:munroemil6@gmail.com">Let's talk <span>{'->'}</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Full-stack web developer / Nairobi, KE</p>
            <h1>I build digital<br /><em>things that matter.</em></h1>
            <p className="hero-intro">I'm Myles Munroe, a full-stack web developer building clear, responsive products from frontend interfaces to Python-powered backends.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">See my work <span>{'->'}</span></a>
              <a className="text-link" href="https://github.com/munroemil6-bot" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame"><img src={profileImage} alt="Myles Munroe" /></div>
            <span className="portrait-note">Curious by default<br />Useful on purpose.</span>
            <span className="hero-stamp">M / 2026</span>
          </div>
          <div className="hero-bottomline"><span>Scroll to explore</span><span className="line"></span><span>01 / 05</span></div>
        </section>

        <section className="statement-section" id="about">
          <p className="section-kicker">A little about me</p>
          <div className="statement-grid">
            <h2>Good design should feel <span>obvious</span> after you see it.</h2>
            <div><p>I care about the details people don't have to think about: a confident first impression, a layout that breathes, and interactions that make sense.</p><p>From React interfaces to Django and Flask APIs, I build the full product surface. I use Docker, SQL, and relational databases to make those products dependable beyond the browser.</p><a className="text-link" href="#contact">Let's build something useful <span>{'->'}</span></a></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2>Built with intent.</h2></div><span className="project-count">{String(projects.length).padStart(2, '0')} projects</span></div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {categories.map((category) => <button key={category} className={activeFilter === category ? 'filter active' : 'filter'} type="button" onClick={() => setActiveFilter(category)}>{category}</button>)}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => <article className="project-card" key={project.title}><a className="project-live" href={project.link} target="_blank" rel="noreferrer"><div className="project-image"><img src={project.image} alt="" /><span className="project-arrow">↗</span></div><div className="project-meta"><span>{project.number} / {project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div></a>{project.repo && <a className="project-repo" href={project.repo} target="_blank" rel="noreferrer">View source <span>↗</span></a>}</article>)}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div><p className="section-kicker">Full-stack toolkit</p><h2>From interface<br /><em>to infrastructure.</em></h2></div>
          <div className="skills-list">{skills.map(([skill, level]) => <div className="skill-row" key={skill}><span>{skill}</span><div className="skill-track"><span style={{ width: level }}></span></div><small>{level}</small></div>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro"><p className="section-kicker">Have a good idea?</p><h2>Let's make<br /><em>it real.</em></h2><p>Tell me what you're building, what is getting in the way, or just say hello.</p></div>
          <div className="contact-links"><a className="contact-link" href="https://wa.me/?text=Hi%20Myles%2C%20I%20found%20your%20portfolio." target="_blank" rel="noreferrer"><span>WhatsApp</span><span>↗</span></a><a className="contact-link" href="mailto:munroemil6@gmail.com"><span>Email</span><span>↗</span></a><a className="contact-link" href="https://github.com/munroemil6-bot" target="_blank" rel="noreferrer"><span>GitHub</span><span>↗</span></a><a className="contact-link" href="https://www.linkedin.com/in/myles-laisa-a65607417" target="_blank" rel="noreferrer"><span>LinkedIn</span><span>↗</span></a></div>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Myles Munroe</span><span>Made with React + curiosity</span><div><a href="https://wa.me/?text=Hi%20Myles%2C%20I%20found%20your%20portfolio." target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:munroemil6@gmail.com">Email</a><a href="https://github.com/munroemil6-bot" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/myles-laisa-a65607417" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  )
}

export default App
