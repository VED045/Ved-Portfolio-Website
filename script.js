const projects = [
  {
    name: 'Daily News Intelligence',
    category: 'AI / NEWS INTELLIGENCE',
    title: 'The day,\ndistilled.',
    description: 'AI-curated headlines, trends, bookmarks, and a daily digest.',
    href: 'https://github.com/VED045/daily-news-intelligence',
    className: 'screen-news',
    metric: 'GEMINI + FASTAPI + REACT',
    visual: `<div class="news-visual"><div class="news-visual-top"><span>DAINIK-VIDYA</span><b>● LIVE BRIEF</b></div><div class="news-feature"><span>TOP STORY / 01</span><strong>The world<br>in focus.</strong><small>AI-POWERED DAILY BRIEFING</small></div><div class="news-mini-list"><div><b>02</b><span>WORLD</span><strong>Global stories, clearly ranked</strong></div><div><b>03</b><span>TECH</span><strong>Signals behind the headlines</strong></div></div><div class="news-trend"><span>TRENDING NOW</span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`
  },
  {
    name: 'TripMate',
    category: 'PRODUCT / TRAVEL',
    title: 'Every trip.\nTogether.',
    description: 'Shared expenses, memories, and trip insights for the whole crew.',
    href: 'https://github.com/VED045/TripMate',
    className: 'screen-trip',
    metric: 'NEXT.JS + SUPABASE + PWA',
    visual: `<div class="trip-visual"><div class="trip-sky"><span class="trip-sun"></span><span class="trip-mountain mountain-back"></span><span class="trip-mountain mountain-front"></span><div class="trip-route"><i></i><i></i><span>GOA / INDIA</span></div></div><div class="trip-crew"><span>CREW TRIP</span><strong>Goa, together.</strong><small>4 PEOPLE · 6 DAYS</small></div><div class="trip-summary"><div><span>TOTAL SPENT</span><strong>₹24,800</strong></div><div><span>TO SETTLE</span><strong>₹2,340</strong></div></div><div class="trip-avatars"><i>V</i><i>A</i><i>S</i><i>R</i><span>ALL IN SYNC</span></div></div>`
  },
  {
    name: 'Player Tracking',
    category: 'COMPUTER VISION / SPORTS',
    title: 'Every move.\nIn focus.',
    description: 'Real-time player detection and identity tracking across a football match.',
    href: 'https://github.com/VED045/Players_Tracking_Repo_Ved',
    className: 'screen-player',
    metric: 'YOLOv8 + RESNET50',
    visual: `<div class="pitch"><div class="pitch-goal top"></div><div class="pitch-goal bottom"></div><div class="tracking-line" style="left:22%;top:29%;width:34%;transform:rotate(24deg)"></div><div class="tracking-line" style="left:47%;top:55%;width:27%;transform:rotate(-31deg)"></div><span class="player-dot" style="top:21%;left:30%"><small>#07</small></span><span class="player-dot alt" style="top:34%;left:65%"><small>#12</small></span><span class="player-dot" style="top:55%;left:49%"><small>#03</small></span><span class="player-dot alt" style="top:69%;left:24%"><small>#18</small></span><span class="player-dot" style="top:77%;left:71%"><small>#09</small></span><div class="scanline"></div></div><div class="pitch-hud"><span>LIVE TRACKING</span><b>05 ACTIVE</b></div>`
  },
  {
    name: 'Face Attendance',
    category: 'AI / EDUCATION',
    title: 'A smarter\nclassroom.',
    description: 'Recognition, OCR, and transcription working together to simplify attendance.',
    href: 'https://github.com/VED045/Face_Detection_Attendance',
    className: 'screen-face',
    metric: 'FACE DETECTION + OCR',
    visual: `<div class="face-art"><div class="face-outline"><i></i></div><span class="face-corner tl"></span><span class="face-corner tr"></span><span class="face-corner bl"></span><span class="face-corner br"></span></div><div class="scanline"></div><div class="face-metric"><span>IDENTITY VERIFIED</span><b>98.4% MATCH</b></div>`
  },
  {
    name: 'TeleMedX',
    category: 'FULL STACK / HEALTHCARE',
    title: 'Care, closer\nto you.',
    description: 'A connected platform for appointments, prescriptions, and health sync.',
    href: 'https://github.com/VED045/TeleMedX_TechFiesta_25',
    live: 'https://telemedx.netlify.app/',
    className: 'screen-tele',
    metric: 'TOP 10 / TECHFIESTA',
    visual: `<div class="tele-visual"><div class="tele-banner"><div><strong>Your health,<br>your way.</strong><span>PERSONALIZED CARE</span></div><div class="tele-cross">✳</div></div><div class="tele-subtitle">UPCOMING APPOINTMENTS</div><div class="tele-appointment"><div class="tele-avatar">✚</div><div><strong>Video consultation</strong><small>General care · Today</small></div><b>10:30</b></div><div class="tele-appointment"><div class="tele-avatar">♥</div><div><strong>Health sync</strong><small>Google Fit connected</small></div><b>LIVE</b></div></div>`
  },
  {
    name: 'Diabetes Predictor',
    category: 'MACHINE LEARNING / HEALTH',
    title: 'Insight before\nit matters.',
    description: 'A predictive model that turns health data into earlier insight.',
    href: 'https://github.com/VED045/Diabetes_Prediction_TechRush25',
    className: 'screen-diabetes',
    metric: '1ST / IEEE TECHRUSH',
    visual: `<div class="diabetes-visual"><span class="risk-label">MODEL CONFIDENCE</span><div class="risk-score">97.4<span> % ACCURACY</span></div><div class="risk-meter"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="risk-grid"><div><small>MODEL</small><strong>ML</strong></div><div><small>RESULT</small><strong>READY</strong></div></div><div class="risk-wave"></div></div>`
  }
];

const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tabs = [...document.querySelectorAll('.project-item')];
const content = document.getElementById('phone-content');
const panel = document.getElementById('phone-project');
const phone = document.getElementById('phone');
const stage = document.getElementById('device-stage');
const counter = document.getElementById('project-counter');
const rotateButton = document.getElementById('rotate-phone');
let activeProject = 0;
let transitionTimer = 0;

function renderProject(index, immediate = false) {
  const project = projects[index];
  const update = () => {
    content.innerHTML = `<div class="screen-app ${project.className}"><div class="screen-top"><span>VED / LABS</span><span class="screen-top-dot">✳</span></div><div class="screen-head"><span class="screen-eyebrow">${project.category}</span><h3>${project.title.replace('\n', '<br>')}</h3><p>${project.description}</p></div><div class="screen-visual">${project.visual}</div><div class="screen-bottom"><div class="screen-bottom-label"><span>SELECTED PROJECT</span><span>${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span></div><a href="${project.live || project.href}" target="_blank" rel="noopener noreferrer">${project.live ? 'OPEN LIVE PROJECT' : 'VIEW ON GITHUB'} <span>↗</span></a><div class="screen-footnote">${project.metric}</div></div></div>`;
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
    panel.setAttribute('aria-labelledby', `project-tab-${index}`);
    content.classList.remove('is-changing');
  };
  clearTimeout(transitionTimer);
  if (immediate || prefersReducedMotion) update();
  else { content.classList.add('is-changing'); transitionTimer = setTimeout(update, 180); }
}

function selectProject(index, focusTab = false) {
  activeProject = (index + projects.length) % projects.length;
  tabs.forEach((tab, i) => {
    const isActive = i === activeProject;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });
  if (focusTab) tabs[activeProject].focus();
  if (phone.classList.contains('flipped')) {
    phone.classList.remove('flipped');
    rotateButton.setAttribute('aria-label', 'Rotate phone to view the back');
    rotateButton.innerHTML = 'ROTATE <span>⟳</span>';
    panel.inert = false;
  }
  renderProject(activeProject);
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectProject(i));
  tab.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { event.preventDefault(); selectProject(i + 1, true); }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') { event.preventDefault(); selectProject(i - 1, true); }
    if (event.key === 'Home') { event.preventDefault(); selectProject(0, true); }
    if (event.key === 'End') { event.preventDefault(); selectProject(projects.length - 1, true); }
  });
});
document.getElementById('prev-project').addEventListener('click', () => selectProject(activeProject - 1));
document.getElementById('next-project').addEventListener('click', () => selectProject(activeProject + 1));
rotateButton.addEventListener('click', () => {
  const flipped = phone.classList.toggle('flipped');
  rotateButton.setAttribute('aria-label', flipped ? 'Rotate phone to view the screen' : 'Rotate phone to view the back');
  rotateButton.innerHTML = `${flipped ? 'VIEW SCREEN' : 'ROTATE'} <span>⟳</span>`;
  panel.inert = flipped;
  if (flipped) {
    phone.classList.remove('selfie-open');
    cameraButton.setAttribute('aria-pressed', 'false');
    cameraButton.setAttribute('aria-label', 'Raise pop-up front camera');
    cameraButton.innerHTML = 'CAMERA <span>▣</span>';
  }
});
const cameraButton = document.getElementById('selfie-camera');
cameraButton.addEventListener('click', () => {
  if (phone.classList.contains('flipped')) {
    phone.classList.remove('flipped');
    rotateButton.innerHTML = 'ROTATE <span>⟳</span>';
    rotateButton.setAttribute('aria-label', 'Rotate phone to view the back');
    panel.inert = false;
  }
  const isOpen = phone.classList.toggle('selfie-open');
  cameraButton.setAttribute('aria-pressed', String(isOpen));
  cameraButton.setAttribute('aria-label', isOpen ? 'Retract pop-up front camera' : 'Raise pop-up front camera');
  cameraButton.innerHTML = `${isOpen ? 'RETRACT' : 'CAMERA'} <span>▣</span>`;
});
renderProject(0, true);

if (!prefersReducedMotion) {
  let touching = false, touchStartX = 0;
  stage.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') { touching = true; touchStartX = event.clientX; }
  });
  stage.addEventListener('pointerup', event => {
    if (!touching) return;
    const delta = event.clientX - touchStartX;
    if (Math.abs(delta) > 45) selectProject(activeProject + (delta < 0 ? 1 : -1));
    touching = false;
  });
  stage.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    phone.style.setProperty('--ry', `${(x * 17).toFixed(2)}deg`);
    phone.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
  });
  stage.addEventListener('pointerleave', () => {
    phone.style.setProperty('--ry', '0deg');
    phone.style.setProperty('--rx', '0deg');
  });
}

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.getElementById('mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}));

document.getElementById('year').textContent = new Date().getFullYear();
const progress = document.querySelector('.scroll-progress');
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${maxScroll > 0 ? window.scrollY / maxScroll * 100 : 0}%`;
    scrollTicking = false;
  });
}, { passive: true });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: .1, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

const terminalBody = document.getElementById('terminal-body');
const terminalForm = document.getElementById('terminal-form');
const terminalInput = document.getElementById('terminal-input');
const commandResponses = {
  help: 'COMMANDS: projects · experience · about · contact · skills · clear',
  whoami: 'Ved Deshpande — engineer working across AI, vision, and the web.',
  skills: 'Java · Python · React · Spring Boot · FastAPI · LLMs · RAG · OpenCV',
  projects: 'Opening selected work: Daily News Intelligence, TripMate, and more.',
  experience: 'Opening experience: Barclays India, Tenancy Passport, Thelios.ai.',
  about: 'Opening the story behind the work.',
  contact: 'Opening contact links.'
};

function terminalLine(text, className) {
  const line = document.createElement('div');
  line.className = className;
  line.textContent = text;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function runCommand(raw) {
  const command = raw.trim().toLowerCase();
  if (!command) return;
  if (command === 'clear') {
    terminalBody.replaceChildren();
    terminalLine('Terminal cleared. Type help to explore.', 'terminal-output terminal-muted');
    return;
  }
  terminalLine(`❯ ${command}`, 'terminal-line terminal-entered');
  terminalLine(commandResponses[command] || `Command not found: ${command}. Try help.`, 'terminal-output terminal-response');
  while (terminalBody.children.length > 16) terminalBody.firstElementChild.remove();
  if (['projects', 'experience', 'about', 'contact'].includes(command)) {
    const target = document.getElementById(command === 'projects' ? 'work' : command);
    setTimeout(() => target.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth', block: 'start' }), 320);
  }
}

terminalForm.addEventListener('submit', event => {
  event.preventDefault();
  runCommand(terminalInput.value);
  terminalInput.value = '';
});
document.querySelectorAll('[data-command]').forEach(button => button.addEventListener('click', () => {
  runCommand(button.dataset.command);
  terminalInput.focus();
}));

if (!prefersReducedMotion) {
  const laptopVisual = document.querySelector('.laptop-visual');
  const laptop = document.getElementById('laptop');
  laptopVisual.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = laptopVisual.getBoundingClientRect();
    laptop.style.setProperty('--laptop-ry', `${((event.clientX - rect.left) / rect.width - .5) * 8}deg`);
    laptop.style.setProperty('--laptop-rx', `${((event.clientY - rect.top) / rect.height - .5) * -6}deg`);
  }, { passive: true });
  laptopVisual.addEventListener('pointerleave', () => {
    laptop.style.setProperty('--laptop-ry', '0deg');
    laptop.style.setProperty('--laptop-rx', '0deg');
  });
}

