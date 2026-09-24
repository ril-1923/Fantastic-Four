(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const l={home:{name:"Fantastic Four",tagline:"Heroes Unite",heroClass:"theme-home",navText:"Home",icon:"fa-solid fa-fire",members:[{key:"reed",name:"Mr. Fantastic",icon:"fa-solid fa-arrows-left-right",desc:"Brilliant scientist and elastic leader."},{key:"sue",name:"Invisible Woman",icon:"fa-solid fa-eye-slash",desc:"Master of invisibility and force fields."},{key:"johnny",name:"Human Torch",icon:"fa-solid fa-fire-flame-curved",desc:"Flame on — the fiery hot-head of the team."},{key:"ben",name:"The Thing",icon:"fa-solid fa-mountain",desc:"Rock-solid powerhouse with a heart of gold."}],stats:[{label:"Years Active",value:"60+",icon:"fa-solid fa-calendar-days"},{label:"Villains Defeated",value:"500+",icon:"fa-solid fa-shield-halved"},{label:"Baxter Building",value:"HQ",icon:"fa-solid fa-building"},{label:"Galactus Fights",value:"12",icon:"fa-solid fa-globe"}]},reed:{name:"Mr. Fantastic",realName:"Reed Richards",tagline:"Stretch Beyond Limits",heroClass:"theme-reed",navText:"Mr. Fantastic",icon:"fa-solid fa-arrows-left-right",primary:"#2563eb",accent:"#60a5fa",font:"'Rubik', sans-serif",powers:[{name:"Elasticity",icon:"fa-solid fa-expand",level:100},{name:"Genius Intellect",icon:"fa-solid fa-brain",level:98},{name:"Shape-shifting",icon:"fa-solid fa-shapes",level:90},{name:"Leadership",icon:"fa-solid fa-users-gear",level:85}],bio:"Reed Richards is one of the most brilliant minds in the Marvel Universe. Exposed to cosmic rays during an experimental space voyage, he gained the ability to stretch his body into any shape imaginable. As the leader of the Fantastic Four, Reed combines his superhuman elasticity with an unmatched intellect to solve problems no other hero can.",quote:"The greatest discoveries often come from the most unexpected places.",abilities:[{icon:"fa-solid fa-ruler-horizontal",title:"Elongation",text:"Can stretch any part of his body up to 3 miles."},{icon:"fa-solid fa-glasses",title:"Master Inventor",text:"Creator of the Unstable Molecule suits and the Fantasti-Flare."},{icon:"fa-solid fa-hammer",title:"Grappling",text:"Uses elastic limbs as ropes, bridges, and weapons."},{icon:"fa-solid fa-shield",title:"Impact Absorption",text:"Absorbs blows by cushioning them with flexible form."}]},sue:{name:"Invisible Woman",realName:"Sue Storm",tagline:"Unseen Yet Unstoppable",heroClass:"theme-sue",navText:"Invisible Woman",icon:"fa-solid fa-eye-slash",primary:"#7c3aed",accent:"#c4b5fd",font:"'Cinzel', serif",powers:[{name:"Invisibility",icon:"fa-solid fa-eye-slash",level:100},{name:"Force Fields",icon:"fa-solid fa-shield-halved",level:95},{name:"Strategy",icon:"fa-solid fa-chess-queen",level:90},{name:"Leadership",icon:"fa-solid fa-crown",level:82}],bio:"Sue Storm was exposed to cosmic rays alongside her teammates and gained the power to render herself invisible at will. Over time, her abilities evolved to include the creation of powerful invisible force fields, making her arguably the most powerful member of the Fantastic Four. She is the heart and strategic mind of the team.",quote:"You don't need to be seen to make an impact.",abilities:[{icon:"fa-solid fa-ghost",title:"Total Invisibility",text:"Bends light around herself and others completely."},{icon:"fa-solid fa-dome",title:"Force Fields",text:"Projects indestructible barriers of pure energy."},{icon:"fa-solid fa-bolt",title:"Force Bolts",text:"Launches invisible projectiles with concussive force."},{icon:"fa-solid fa-tower-observation",title:"Tactical Mind",text:"Often the field strategist during missions."}]},johnny:{name:"Human Torch",realName:"Johnny Storm",tagline:"Flame On",heroClass:"theme-johnny",navText:"Human Torch",icon:"fa-solid fa-fire-flame-curved",primary:"#dc2626",accent:"#fb923c",font:"'Audiowide', sans-serif",powers:[{name:"Pyrokinesis",icon:"fa-solid fa-fire",level:100},{name:"Flight",icon:"fa-solid fa-feather",level:92},{name:"Heat Resistance",icon:"fa-solid fa-temperature-high",level:95},{name:"Nova Blast",icon:"fa-solid fa-explosion",level:88}],bio:"Johnny Storm is the youngest member of the Fantastic Four and the thrill-seeker of the group. When cosmic rays gave him the ability to engulf his body in flame, he became the Human Torch. With the power of flight, fire manipulation, and nova-level heat output, Johnny is as hot-headed as he is heroic.",quote:"When things get tough, the tough get flamin'!",abilities:[{icon:"fa-solid fa-fire",title:"Body Flame",text:"Engulfs his entire body in superheated plasma fire."},{icon:"fa-solid fa-jet-fighter-up",title:"Supersonic Flight",text:"Flies at speeds up to Mach 5 using thermal updrafts."},{icon:"fa-solid fa-bomb",title:"Nova Blast",text:"Releases all stored energy in a single massive explosion."},{icon:"fa-solid fa-meteor",title:"Fireball Projection",text:"Hurls concentrated fireballs with pinpoint accuracy."}]},ben:{name:"The Thing",realName:"Ben Grimm",tagline:"It's Clobberin' Time",heroClass:"theme-ben",navText:"The Thing",icon:"fa-solid fa-mountain",primary:"#d97706",accent:"#fbbf24",font:"'Russo One', sans-serif",powers:[{name:"Super Strength",icon:"fa-solid fa-dumbbell",level:100},{name:"Rock Skin",icon:"fa-solid fa-mountain",level:98},{name:"Durability",icon:"fa-solid fa-shield",level:95},{name:"Combat Skill",icon:"fa-solid fa-hand-fist",level:80}],bio:"Ben Grimm was Reed Richards' college roommate and best friend. After the cosmic ray incident, Ben was transformed into a creature with skin made of orange rock, granting him incredible strength and near-invulnerability. Despite his fearsome appearance, Ben has the biggest heart on the team and is fiercely loyal to his family.",quote:"It's clobberin' time!",abilities:[{icon:"fa-solid fa-dumbbell",title:"Class 100 Strength",text:"Can lift over 100 tons with raw physical power."},{icon:"fa-solid fa-shield-halved",title:"Rock Armor",text:"His stone skin resists bullets, lasers, and explosions."},{icon:"fa-solid fa-hand-fist",title:"Street Fighting",text:"A seasoned brawler with decades of hand-to-hand combat."},{icon:"fa-solid fa-heart",title:"Unbreakable Will",text:"Never gives up — loyalty is his greatest strength."}]}},h=["home","reed","sue","johnny","ben"];let m="home",o=null,c=null;function u(){return`
    <nav class="navbar-f4" id="navbar">
      <div class="brand" data-page="home">
        <i class="fa-solid fa-fire brand-icon"></i>
        <span class="d-none d-sm-inline">Fantastic Four</span>
        <span class="d-sm-none">FF</span>
      </div>
      <button class="menu-toggle" id="menuToggle"><i class="fa-solid fa-bars"></i></button>
      <ul class="nav-links" id="navLinks">${h.map(e=>{const t=l[e];return`<li><a data-page="${e}" class="${e===m?"active":""}">
      <i class="${t.icon} nav-fa"></i>
      <span class="d-none d-sm-inline">${t.navText}</span>
    </a></li>`}).join("")}</ul>
    </nav>
  `}function v(){const a=l.home,e=a.members.map(s=>`
    <div class="col-6 col-lg-3 mb-4">
      <div class="member-card" data-page="${s.key}">
        <i class="${s.icon} member-icon"></i>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join(""),t=a.stats.map(s=>`
    <div class="col-6 col-lg-3 mb-3">
      <div class="stat-card">
        <i class="${s.icon} stat-icon"></i>
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    </div>
  `).join("");return`
    <div class="page-container font-rubik">
      <section class="hero-section">
        <h1 class="hero-title font-orbitron">Fantastic Four</h1>
        <p class="hero-tagline">${a.tagline}</p>
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
        <div class="row">${e}</div>
      </div>

      <div class="container mb-5">
        <div class="text-center mb-4">
          <h2 class="section-heading font-orbitron">By The Numbers</h2>
        </div>
        <div class="row">${t}</div>
      </div>
    </div>
  `}function p(a){const e=l[a],t=e.powers.map(i=>`
    <div class="power-bar-item">
      <div class="power-bar-label">
        <span><i class="${i.icon} pbl-icon"></i>${i.name}</span>
        <span>${i.level}%</span>
      </div>
      <div class="power-bar-track">
        <div class="power-bar-fill" style="width: ${i.level}%;"></div>
      </div>
    </div>
  `).join(""),s=e.abilities.map(i=>`
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="ability-card">
        <i class="${i.icon} ability-icon"></i>
        <h4>${i.title}</h4>
        <p>${i.text}</p>
      </div>
    </div>
  `).join("");return`
    <div class="page-container" style="font-family: ${e.font};">
      <section class="char-hero">
        <i class="${e.icon} char-icon-big"></i>
        <h1>${e.name}</h1>
        <p class="real-name">${e.realName}</p>
        <p class="char-tagline">${e.tagline}</p>
      </section>

      <div class="container">
        <div class="row g-4 mb-5 align-items-stretch">
          <div class="col-lg-6">
            <div class="bio-card h-100">
              <h3 class="section-heading" style="font-family: ${e.font};">Origin Story</h3>
              <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text); margin: 0;">
                ${e.bio}
              </p>
              <p class="quote">"${e.quote}"</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bio-card h-100">
              <h3 class="section-heading" style="font-family: ${e.font};">Power Levels</h3>
              ${t}
            </div>
          </div>
        </div>

        <div class="mb-5">
          <div class="text-center mb-4">
            <h2 class="section-heading" style="font-family: ${e.font};">Signature Abilities</h2>
          </div>
          <div class="row">${s}</div>
        </div>

        <div class="text-center mb-5">
          <button class="btn-f4" data-page="home">
            <i class="fa-solid fa-house me-2"></i>Back to Home
          </button>
        </div>
      </div>
    </div>
  `}function b(){return`
    <footer class="footer-f4">
      <p>
        <span class="footer-brand">FANTASTIC FOUR</span> &mdash; Heroes Unite &copy; ${new Date().getFullYear()}
      </p>
      <p class="mt-1">A fan-made tribute page. Characters belong to Marvel Entertainment.</p>
    </footer>
  `}function g(){o&&(clearInterval(o),o=null),c&&(clearInterval(c),c=null),document.querySelectorAll(".particle-layer").forEach(a=>a.remove())}function y(){const a=document.createElement("div");return a.className="particle-layer",a}function r(a,e){const t=document.createElement("div");t.className="particle";const s=Math.random()*8+4;t.style.width=s+"px",t.style.height=s+"px",t.style.left=Math.random()*100+"%",t.style.background=e,t.style.opacity=Math.random()*.5+.2,t.style.animationDuration=Math.random()*8+6+"s",a.appendChild(t),setTimeout(()=>t.remove(),15e3)}function w(a){const e=document.createElement("div");e.className="flame-particle";const t=Math.random()*15+10;e.style.width=t+"px",e.style.height=t*3+"px",e.style.left=Math.random()*100+"%",e.style.setProperty("--drift",Math.random()*100-50+"px"),e.style.animationDuration=Math.random()*4+3+"s",a.appendChild(e),setTimeout(()=>e.remove(),8e3)}function x(a){const e=document.createElement("div");e.className="rock-particle";const t=Math.random()*20+12;e.style.width=t+"px",e.style.height=t+"px",e.style.left=Math.random()*100+"%",e.style.animationDuration=Math.random()*6+5+"s",a.appendChild(e),setTimeout(()=>e.remove(),12e3)}function F(a){const e=document.createElement("div");e.className="ripple-particle",e.style.left=Math.random()*80+10+"%",e.style.bottom=Math.random()*60+20+"%",e.style.animationDelay="0s",a.appendChild(e),setTimeout(()=>e.remove(),4e3)}function $(a){g();const e=y();document.getElementById("app").appendChild(e);const t=l[a];t&&(a==="johnny"?o=setInterval(()=>{for(let s=0;s<2;s++)w(e)},200):a==="ben"?o=setInterval(()=>x(e),400):a==="sue"?(c=setInterval(()=>{for(let s=0;s<3;s++)F(e)},600),o=setInterval(()=>r(e,t.accent||"#c4b5fd"),300)):a==="reed"?o=setInterval(()=>r(e,t.accent||"#60a5fa"),250):o=setInterval(()=>{r(e,"#60a5fa"),Math.random()>.6&&r(e,"#f59e0b")},200))}function f(a){m=a;const e=document.getElementById("app"),t=l[a];if(!t){f("home");return}document.body.className=t.heroClass,document.querySelectorAll(".nav-links a").forEach(i=>{i.classList.toggle("active",i.dataset.page===a)});const s=a==="home"?v():p(a);e.innerHTML=`
    ${u()}
    <div class="animated-bg"></div>
    ${s}
    ${b()}
  `,t.primary&&(e.style.setProperty("--accent",t.accent),e.style.setProperty("--accent-2",t.primary)),T(),$(a),I()}function T(){document.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",s=>{var n;s.preventDefault();const i=t.dataset.page;i&&i!==m&&(f(i),window.scrollTo({top:0,behavior:"smooth"})),(n=document.getElementById("navLinks"))==null||n.classList.remove("open")})});const a=document.getElementById("menuToggle"),e=document.getElementById("navLinks");a&&a.addEventListener("click",()=>{e.classList.toggle("open")})}function I(){const a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".member-card, .stat-card, .ability-card, .bio-card").forEach(e=>{e.classList.add("reveal"),a.observe(e)})}f("home");
