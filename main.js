import './style.css'
import { characters, navItems } from './data.js'

// Remove old starter files from build graph
// (counter.js, javascript.svg are no longer used)

let currentPage = 'home'
let particleInterval = null
let rippleInterval = null

// =====================
// NAVBAR
// =====================
function renderNavbar() {
  const links = navItems.map(key => {
    const c = characters[key]
    return `<li><a data-page="${key}" class="${key === currentPage ? 'active' : ''}">
      <i class="${c.icon} nav-fa"></i>
      <span class="d-none d-sm-inline">${c.navText}</span>
    </a></li>`
  }).join('')

  return `
    <nav class="navbar-f4" id="navbar">
      <div class="brand" data-page="home">
        <i class="fa-solid fa-fire brand-icon"></i>
        <span class="d-none d-sm-inline">Fantastic Four</span>
        <span class="d-sm-none">FF</span>
      </div>
      <button class="menu-toggle" id="menuToggle"><i class="fa-solid fa-bars"></i></button>
      <ul class="nav-links" id="navLinks">${links}</ul>
    </nav>
  `
}

// =====================
// HOME PAGE
// =========================
function renderHome() {
  const c = characters.home
  const memberCards = c.members.map(m => `
    <div class="col-6 col-lg-3 mb-4">
      <div class="member-card" data-page="${m.key}">
        <i class="${m.icon} member-icon"></i>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
      </div>
    </div>
  `).join('')

  const stats = c.stats.map(s => `
    <div class="col-6 col-lg-3 mb-3">
      <div class="stat-card">
        <i class="${s.icon} stat-icon"></i>
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    </div>
  `).join('')

  return `
    <div class="page-container font-rubik">
      <section class="hero-section">
        <h1 class="hero-title font-orbitron">Fantastic Four</h1>
        <p class="hero-tagline">${c.tagline}</p>
        <p class="hero-subtitle">
          Earth's greatest heroes — blessed by cosmic rays, united by family.
          Explore each member's unique powers, origins, and legendary battles.
        </p>
        <button class="btn-f4" data-page="reed">Meet the Team <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </section>

      <div class="container mb-5">
        <div class="text-center mb-4">
          <h2 class="section-heading font-orbitron">The Team</h2>
        </div>
        <div class="row">${memberCards}</div>
      </div>

      <div class="container mb-5">
        <div class="text-center mb-4">
          <h2 class="section-heading font-orbitron">By The Numbers</h2>
        </div>
        <div class="row">${stats}</div>
      </div>
    </div>
  `
}

// =========================
// CHARACTER PAGE
// =========================
function renderCharacter(key) {
  const c = characters[key]
  const powerBars = c.powers.map(p => `
    <div class="power-bar-item">
      <div class="power-bar-label">
        <span><i class="${p.icon} pbl-icon"></i>${p.name}</span>
        <span>${p.level}%</span>
      </div>
      <div class="power-bar-track">
        <div class="power-bar-fill" style="width: ${p.level}%;"></div>
      </div>
    </div>
  `).join('')

  const abilities = c.abilities.map(a => `
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="ability-card">
        <i class="${a.icon} ability-icon"></i>
        <h4>${a.title}</h4>
        <p>${a.text}</p>
      </div>
    </div>
  `).join('')

  return `
    <div class="page-container" style="font-family: ${c.font};">
      <section class="char-hero">
        <i class="${c.icon} char-icon-big"></i>
        <h1>${c.name}</h1>
        <p class="real-name">${c.realName}</p>
        <p class="char-tagline">${c.tagline}</p>
      </section>

      <div class="container">
        <div class="row g-4 mb-5 align-items-stretch">
          <div class="col-lg-6">
            <div class="bio-card h-100">
              <h3 class="section-heading" style="font-family: ${c.font};">Origin Story</h3>
              <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text); margin: 0;">
                ${c.bio}
              </p>
              <p class="quote">"${c.quote}"</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bio-card h-100">
              <h3 class="section-heading" style="font-family: ${c.font};">Power Levels</h3>
              ${powerBars}
            </div>
          </div>
        </div>

        <div class="mb-5">
          <div class="text-center mb-4">
            <h2 class="section-heading" style="font-family: ${c.font};">Signature Abilities</h2>
          </div>
          <div class="row">${abilities}</div>
        </div>

        <div class="text-center mb-5">
          <button class="btn-f4" data-page="home">
            <i class="fa-solid fa-house me-2"></i>Back to Home
          </button>
        </div>
      </div>
    </div>
  `
}

// =========================
// FOOTER
// =========================
function renderFooter() {
  const year = new Date().getFullYear()
  return `
    <footer class="footer-f4">
      <p>
        <span class="footer-brand">FANTASTIC FOUR</span> &mdash; Heroes Unite &copy; ${year}
      </p>
      <p class="mt-1">A fan-made tribute page. Characters belong to Marvel Entertainment.</p>
    </footer>
  `
}

// =========================
// PARTICLE SYSTEM
// =========================
function clearParticles() {
  if (particleInterval) { clearInterval(particleInterval); particleInterval = null }
  if (rippleInterval) { clearInterval(rippleInterval); rippleInterval = null }
  document.querySelectorAll('.particle-layer').forEach(el => el.remove())
}

function createParticleLayer() {
  const layer = document.createElement('div')
  layer.className = 'particle-layer'
  return layer
}

function spawnDotParticle(layer, accent) {
  const p = document.createElement('div')
  p.className = 'particle'
  const size = Math.random() * 8 + 4
  p.style.width = size + 'px'
  p.style.height = size + 'px'
  p.style.left = Math.random() * 100 + '%'
  p.style.background = accent
  p.style.opacity = Math.random() * 0.5 + 0.2
  p.style.animationDuration = (Math.random() * 8 + 6) + 's'
  layer.appendChild(p)
  setTimeout(() => p.remove(), 15000)
}

function spawnFlameParticle(layer) {
  const p = document.createElement('div')
  p.className = 'flame-particle'
  const size = Math.random() * 15 + 10
  p.style.width = size + 'px'
  p.style.height = (size * 3) + 'px'
  p.style.left = Math.random() * 100 + '%'
  p.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px')
  p.style.animationDuration = (Math.random() * 4 + 3) + 's'
  layer.appendChild(p)
  setTimeout(() => p.remove(), 8000)
}

function spawnRockParticle(layer) {
  const p = document.createElement('div')
  p.className = 'rock-particle'
  const size = Math.random() * 20 + 12
  p.style.width = size + 'px'
  p.style.height = size + 'px'
  p.style.left = Math.random() * 100 + '%'
  p.style.animationDuration = (Math.random() * 6 + 5) + 's'
  layer.appendChild(p)
  setTimeout(() => p.remove(), 12000)
}

function spawnRipple(layer) {
  const r = document.createElement('div')
  r.className = 'ripple-particle'
  r.style.left = (Math.random() * 80 + 10) + '%'
  r.style.bottom = (Math.random() * 60 + 20) + '%'
  r.style.animationDelay = '0s'
  layer.appendChild(r)
  setTimeout(() => r.remove(), 4000)
}

function startParticles(page) {
  clearParticles()
  const layer = createParticleLayer()
  document.getElementById('app').appendChild(layer)

  const c = characters[page]
  if (!c) return

  if (page === 'johnny') {
    particleInterval = setInterval(() => {
      for (let i = 0; i < 2; i++) spawnFlameParticle(layer)
    }, 200)
  } else if (page === 'ben') {
    particleInterval = setInterval(() => spawnRockParticle(layer), 400)
  } else if (page === 'sue') {
    rippleInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) spawnRipple(layer)
    }, 600)
    particleInterval = setInterval(() => spawnDotParticle(layer, c.accent || '#c4b5fd'), 300)
  } else if (page === 'reed') {
    particleInterval = setInterval(() => spawnDotParticle(layer, c.accent || '#60a5fa'), 250)
  } else {
    // home: mixed blue + amber dots
    particleInterval = setInterval(() => {
      spawnDotParticle(layer, '#60a5fa')
      if (Math.random() > 0.6) spawnDotParticle(layer, '#f59e0b')
    }, 200)
  }
}

// =========================
// PAGE ROUTING
// =========================
function renderPage(page) {
  currentPage = page
  const app = document.getElementById('app')
  const c = characters[page]
  if (!c) { renderPage('home'); return }

  // Set body class for theme
  document.body.className = c.heroClass

  // Update navbar active state
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page)
  })

  // Render page content
  const content = page === 'home' ? renderHome() : renderCharacter(page)

  app.innerHTML = `
    ${renderNavbar()}
    <div class="animated-bg"></div>
    ${content}
    ${renderFooter()}
  `

  // Apply CSS variables from character theme to app root
  if (c.primary) {
    app.style.setProperty('--accent', c.accent)
    app.style.setProperty('--accent-2', c.primary)
  }

  // Bind events
  bindNavigation()
  startParticles(page)
  bindScrollReveal()
}

// =========================
// EVENT BINDING
// =========================
function bindNavigation() {
  // Any element with data-page
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const page = el.dataset.page
      if (page && page !== currentPage) {
        renderPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      // Close mobile menu
      document.getElementById('navLinks')?.classList.remove('open')
    })
  })

  // Mobile menu toggle
  const toggle = document.getElementById('menuToggle')
  const navLinks = document.getElementById('navLinks')
  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open')
    })
  }
}

function bindScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.member-card, .stat-card, .ability-card, .bio-card').forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
}

// =========================
// INIT
// =========================
renderPage('home')
