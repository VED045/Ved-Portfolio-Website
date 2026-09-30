const projects = [
  {
    name: 'Daily News Intelligence',
    category: 'AI / NEWS INTELLIGENCE',
    title: 'The day,\ndistilled.',
    description: 'AI-curated headlines, trends, bookmarks, and a daily digest.',
    href: 'https://github.com/VED045/daily-news-intelligence',
    className: 'screen-news',
    metric: 'GEMINI + FASTAPI + REACT',
    impact: 'MULTI-SOURCE INTELLIGENCE',
    impactDetail: 'Curated news, trends, bookmarks, and automated daily digests in one workflow.',
    visual: `<div class="product-shot news-shot"><div class="shot-browser"><i></i><i></i><i></i><span>dainik-vidya / dashboard</span></div><img class="live-product-capture dainik-product-capture" src="assets/dainik-vidya-screen.png" alt="Actual Dainik Vidya dashboard webpage"><div class="shot-caption"><span>ACTUAL WEB APP</span><strong>TOP 10 · NEWS · TRENDS</strong></div></div>`
  },
  {
    name: 'TripMate',
    category: 'PRODUCT / TRAVEL',
    title: 'Every trip.\nTogether.',
    description: 'Shared expenses, memories, and trip insights for the whole crew.',
    href: 'https://github.com/VED045/TripMate',
    className: 'screen-trip',
    metric: 'NEXT.JS + SUPABASE + PWA',
    impact: 'ONE SHARED TRIP HUB',
    impactDetail: 'Keeps group expenses, settlements, memories, and plans in sync.',
    visual: `<div class="product-shot trip-shot"><div class="shot-browser"><i></i><i></i><i></i><span>tripmate / live product</span></div><img class="live-product-capture" src="assets/tripmate-screen.png" alt="TripMate live website interface"><div class="shot-caption"><span>LIVE UI CAPTURE</span><strong>PLAN · SPLIT · VAULT</strong></div></div>`
  },
  {
    name: 'Player Tracking',
    category: 'COMPUTER VISION / SPORTS',
    title: 'Every move.\nIn focus.',
    description: 'Real-time player detection and identity tracking across a football match.',
    href: 'https://github.com/VED045/Players_Tracking_Repo_Ved',
    className: 'screen-player',
    metric: 'YOLOv8 + RESNET50',
    impact: 'CONSISTENT PLAYER IDS',
    impactDetail: 'Combines detection, motion, and re-identification across match footage.',
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
    impact: 'AUTOMATED ATTENDANCE',
    impactDetail: 'Turns classroom footage and roll-number OCR into lecture records.',
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
    impact: 'TOP 10 OF 400+ TEAMS',
    impactDetail: 'Connected appointments, prescriptions, payments, and health data.',
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
    impact: '#1 AT IEEE TECHRUSH',
    impactDetail: 'Award-winning predictive health model built for earlier insight.',
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
const sPen = document.getElementById('s-pen');
let activeProject = 0;
let transitionTimer = 0;

function renderProject(index, immediate = false) {
  const project = projects[index];
  const update = () => {
    content.innerHTML = `<div class="screen-app ${project.className}"><div class="screen-top"><span>VED / LABS</span><span class="screen-top-dot">✳</span></div><div class="screen-head"><span class="screen-eyebrow">${project.category}</span><h3>${project.title.replace('\n', '<br>')}</h3><p>${project.description}</p></div><div class="screen-visual">${project.visual}</div><div class="screen-impact"><span>PROJECT IMPACT</span><strong>${project.impact}</strong><small>${project.impactDetail}</small></div><div class="screen-bottom"><div class="screen-bottom-label"><span>SELECTED PROJECT</span><span>${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span></div><a href="${project.live || project.href}" target="_blank" rel="noopener noreferrer">${project.live ? 'OPEN LIVE PROJECT' : 'VIEW ON GITHUB'} <span>↗</span></a><div class="screen-footnote">${project.metric}</div></div></div>`;
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

function focusPhone() {
  stage.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
  stage.classList.remove('is-focused');
  requestAnimationFrame(() => stage.classList.add('is-focused'));
  setTimeout(() => stage.classList.remove('is-focused'), 950);
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', event => {
    selectProject(i);
    if (event.target.closest('.project-arrow')) focusPhone();
  });
  tab.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { event.preventDefault(); selectProject(i + 1, true); }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') { event.preventDefault(); selectProject(i - 1, true); }
    if (event.key === 'Home') { event.preventDefault(); selectProject(0, true); }
    if (event.key === 'End') { event.preventDefault(); selectProject(projects.length - 1, true); }
  });
});
document.getElementById('prev-project').addEventListener('click', () => selectProject(activeProject - 1));
document.getElementById('next-project').addEventListener('click', () => selectProject(activeProject + 1));
sPen.addEventListener('click', () => {
  selectProject(activeProject + 1);
  sPen.classList.remove('is-clicked');
  requestAnimationFrame(() => sPen.classList.add('is-clicked'));
  setTimeout(() => sPen.classList.remove('is-clicked'), 420);
});
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
  let phoneDragging = false;
  let phonePointer = null;
  let phoneLastX = 0;
  let phoneLastY = 0;
  let phoneRotationX = 0;
  let phoneRotationY = 0;

  const applyPhoneRotation = () => {
    phone.style.setProperty('--rx', `${phoneRotationX.toFixed(2)}deg`);
    phone.style.setProperty('--ry', `${phoneRotationY.toFixed(2)}deg`);
  };

  stage.addEventListener('pointerdown', event => {
    if (event.target.closest('button, a')) return;
    phoneDragging = true;
    phonePointer = event.pointerId;
    phoneLastX = event.clientX;
    phoneLastY = event.clientY;
    phone.classList.add('is-dragging');
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener('pointermove', event => {
    if (!phoneDragging || event.pointerId !== phonePointer) return;
    const deltaX = event.clientX - phoneLastX;
    const deltaY = event.clientY - phoneLastY;
    phoneRotationY += deltaX * .62;
    phoneRotationX = Math.max(-55, Math.min(55, phoneRotationX - deltaY * .48));
    phoneLastX = event.clientX;
    phoneLastY = event.clientY;
    applyPhoneRotation();
  });

  const stopPhoneDrag = event => {
    if (!phoneDragging || (event.pointerId !== undefined && event.pointerId !== phonePointer)) return;
    phoneDragging = false;
    phonePointer = null;
    phone.classList.remove('is-dragging');
  };
  stage.addEventListener('pointerup', stopPhoneDrag);
  stage.addEventListener('pointercancel', stopPhoneDrag);
  stage.addEventListener('dblclick', event => {
    if (event.target.closest('button, a')) return;
    phoneRotationX = 0;
    phoneRotationY = 0;
    phone.classList.remove('flipped');
    panel.inert = false;
    rotateButton.setAttribute('aria-label', 'Rotate phone to view the back');
    rotateButton.innerHTML = 'ROTATE <span>⟳</span>';
    applyPhoneRotation();
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
  let laptopDragging = false;
  let laptopPointer = null;
  let laptopLastX = 0;
  let laptopLastY = 0;
  let laptopRotationX = 0;
  let laptopRotationY = 0;

  const applyLaptopRotation = () => {
    laptop.style.setProperty('--laptop-rx', `${laptopRotationX.toFixed(2)}deg`);
    laptop.style.setProperty('--laptop-ry', `${laptopRotationY.toFixed(2)}deg`);
  };

  laptopVisual.addEventListener('pointerdown', event => {
    if (event.target.closest('input, button, a')) return;
    laptopDragging = true;
    laptopPointer = event.pointerId;
    laptopLastX = event.clientX;
    laptopLastY = event.clientY;
    laptop.classList.add('is-dragging');
    laptopVisual.setPointerCapture?.(event.pointerId);
  });
  laptopVisual.addEventListener('pointermove', event => {
    if (!laptopDragging || event.pointerId !== laptopPointer) return;
    laptopRotationY = Math.max(-24, Math.min(24, laptopRotationY + (event.clientX - laptopLastX) * .18));
    laptopRotationX = Math.max(-16, Math.min(16, laptopRotationX - (event.clientY - laptopLastY) * .15));
    laptopLastX = event.clientX;
    laptopLastY = event.clientY;
    applyLaptopRotation();
  });
  const stopLaptopDrag = event => {
    if (!laptopDragging || (event.pointerId !== undefined && event.pointerId !== laptopPointer)) return;
    laptopDragging = false;
    laptopPointer = null;
    laptop.classList.remove('is-dragging');
  };
  laptopVisual.addEventListener('pointerup', stopLaptopDrag);
  laptopVisual.addEventListener('pointercancel', stopLaptopDrag);
  laptopVisual.addEventListener('dblclick', event => {
    if (event.target.closest('input, button, a')) return;
    laptopRotationX = 0;
    laptopRotationY = 0;
    applyLaptopRotation();
  });
}

document.querySelectorAll('.experience-card').forEach(card => {
  const toggle = card.querySelector('.experience-toggle');
  const details = card.querySelector('.experience-details');
  details.setAttribute('aria-hidden', 'true');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.innerHTML = `${expanded ? 'VIEW' : 'HIDE'} IMPACT <span>${expanded ? '+' : '−'}</span>`;
    card.classList.toggle('is-expanded', !expanded);
    details.setAttribute('aria-hidden', String(expanded));
  });
  if (!prefersReducedMotion) {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    }, { passive: true });
  }
});

