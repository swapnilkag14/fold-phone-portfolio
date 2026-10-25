/* ============================================================
   Foldfolio — Android fold-phone simulation
   Scroll: 0–25% unfold · 25–75% phone open · 75–100% fold back
   ============================================================ */

/* ------------------------------------------------------------------
   ★ EDIT YOUR DATA HERE — everything the phone shows comes from this
   ------------------------------------------------------------------ */
const DATA = {
  name: "Swapnil Kag",
  initials: "SK",
  role: "Android Developer",
  location: "Pune, India",
  email: "swapnil@example.com",            // ← your email
  phone: "+919876543210",                  // ← your phone (digits only for tel:)
  phonePretty: "+91 98765 43210",
  linkedin: "https://www.linkedin.com/in/swapnilkag",   // ← your LinkedIn
  instagram: "https://www.instagram.com/swapnilkag",    // ← your Instagram
  github: "https://github.com/swapnilkag",              // ← your GitHub
  resumeUrl: "assets/resume.pdf",                       // ← drop your resume PDF in assets/
  stats: [
    { num: "4+", label: "Years building Android" },
    { num: "10", label: "Apps shipped" },
    { num: "100K+", label: "Play Store downloads" },
  ],
  bio:
    "I'm an Android developer who cares about cold starts, clean architecture and interfaces that feel native. I ship production apps in Kotlin, love Jetpack Compose, and break things on emulators so users never see them break in production.",
  featured: "p1",
  certifications: [
    "🎓 Google Associate Android Developer",
    "🧭 Jetpack Compose Pathway",
    "⚙️ Android Kotlin Fundamentals",
    "🏪 Play Academy — Store listings",
    "🧪 Android Performance",
  ],
  experience: [
    { role: "Android Developer", org: "Current company", period: "2023 — now",
      desc: "Own the Android app end to end: Compose migration, modularisation, CI and Play releases." },
    { role: "Junior Android Developer", org: "Previous company", period: "2021 — 2023",
      desc: "Built features in Kotlin, wrote instrumented tests, cut cold start by 40%." },
    { role: "Freelance", org: "Self-directed projects", period: "2020 — 2021",
      desc: "Published first Play Store apps; learned the hard way about ProGuard." },
  ],
  education: [
    { title: "B.E. Computer Engineering", org: "Your university", period: "2017 — 2021" },
  ],
  skills: {
    "Languages": ["Kotlin", "Java", "Coroutines", "Flow", "SQL", "Dart"],
    "Android SDK": ["Jetpack Compose", "Room", "ViewModel", "WorkManager", "Navigation", "Hilt", "DataStore"],
    "Architecture": ["MVVM", "Clean Architecture", "Multi-module", "MVI"],
    "Tools & Cloud": ["Gradle", "Retrofit", "Coil", "Firebase", "Play Console", "Git", "CI/CD"],
  },
  projects: [
    {
      id: "p1", name: "MyNotes", emoji: "📝", grad: "linear-gradient(145deg,#ffb84d,#e08a00)",
      tagline: "Offline-first notes with instant sync",
      category: "Productivity · Play Store",
      description: "A note-taking app that works fully offline and syncs the moment a connection returns. Conflict-free syncing, full-text search, and zero-friction widgets.",
      tech: ["Kotlin", "Compose", "Room", "WorkManager", "Hilt"],
      role: "Solo developer — design to Play Store release",
      links: { play: "#", repo: "#" },
    },
    {
      id: "p2", name: "FitPulse", emoji: "🏃", grad: "linear-gradient(145deg,#5ee08a,#1f9d55)",
      tagline: "Workout tracker with wearable sync",
      category: "Health & Fitness · Play Store",
      description: "Tracks workouts, rest timers and progress charts, with Health Connect integration and a home-screen widget for the current routine.",
      tech: ["Kotlin", "Compose", "Health Connect", "DataStore"],
      role: "Android lead in a team of 3",
      links: { play: "#", repo: "#" },
    },
    {
      id: "p3", name: "WalletWatch", emoji: "💳", grad: "linear-gradient(145deg,#8ab4f8,#2455d6)",
      tagline: "Private expense tracker — no cloud",
      category: "Finance · Play Store",
      description: "All data stays on device with biometric lock. Monthly reports, category insights and CSV export. Featured in a 'private by design' collection.",
      tech: ["Kotlin", "Compose", "Room", "Biometric API"],
      role: "Solo developer",
      links: { play: "#", repo: "#" },
    },
    {
      id: "p4", name: "CastDeck", emoji: "📺", grad: "linear-gradient(145deg,#c78bff,#7a3fd6)",
      tagline: "Chromecast presenter remote",
      category: "Tools · Open source",
      description: "Turns a foldable into a presentation controller with per-screen notes — the idea for this very portfolio. Open source on GitHub.",
      tech: ["Kotlin", "Cast SDK", "Dual-pane layouts"],
      role: "Creator & maintainer",
      links: { play: "#", repo: "#" },
    },
  ],
};

/* ------------------------------------------------------------------
   App registry
   type 'app'  → opens in the dual-pane window (my apps)
   type 'link' → opens a link-out card (LinkedIn / Instagram)
   type 'dialer' → phone dialer
   type 'system' → Android system app (shows a polite toast)
   ------------------------------------------------------------------ */
const APPS = [
  { id: "about",    name: "About",     type: "app",    emoji: "👤", grad: "linear-gradient(145deg,#8ab4f8,#2455d6)" },
  { id: "projects", name: "My Apps",   type: "app",    emoji: "📱", grad: "linear-gradient(145deg,#5ee08a,#1f9d55)" },
  { id: "skills",   name: "Skills",    type: "app",    emoji: "🛠️", grad: "linear-gradient(145deg,#ffb84d,#e08a00)" },
  { id: "contact",  name: "Contact",   type: "app",    emoji: "✉️", grad: "linear-gradient(145deg,#ff8a8a,#d63d3d)" },
  { id: "linkedin", name: "LinkedIn",  type: "link",   emoji: "💼", grad: "linear-gradient(145deg,#5aa9ff,#0a66c2)" },
  { id: "instagram",name: "Instagram", type: "link",   emoji: "📸", grad: "linear-gradient(145deg,#ffd26d,#ff5db1,#8a3fff)" },
  { id: "camera",    name: "Camera",    type: "system", emoji: "📷" },
  { id: "files",     name: "Files",     type: "system", emoji: "📁" },
  { id: "photos",    name: "Photos",    type: "system", emoji: "🖼️" },
  { id: "settings",  name: "Settings",  type: "system", emoji: "⚙️" },
  { id: "calculator",name: "Calculator",type: "system", emoji: "🧮" },
  { id: "clock",     name: "Clock",     type: "system", emoji: "⏰" },
  { id: "maps",      name: "Maps",      type: "system", emoji: "🗺️" },
  { id: "music",     name: "Music",     type: "system", emoji: "🎵" },
  { id: "weather",   name: "Weather",   type: "system", emoji: "⛅" },
  { id: "recorder",  name: "Recorder",  type: "system", emoji: "🎙️" },
];
const DOCK = [
  { id: "dialer",   name: "Phone",   type: "dialer", emoji: "📞", grad: "linear-gradient(145deg,#5ee08a,#1f9d55)" },
  { id: "messages", name: "Messages",type: "system", emoji: "💬" },
  { id: "chrome",   name: "Chrome",  type: "system", emoji: "🌐" },
  { id: "camera2",  name: "Camera",  type: "system", emoji: "📷" },
];
const appById = (id) => APPS.concat(DOCK).find((a) => a.id === id);

/* ================================================================
   Scroll engine — exact port of the Foldfolio fold mechanics
   ----------------------------------------------------------------
   One sticky stage; scroll progress e (px, from the track top) is
   exponentially smoothed (12%/frame, dt-normalised) and split into:
     open  a = e / (1.15·vh · 0.9)          easeInOutCubic
     inner s = (e − 1.15·vh) / scale         clamped to content
     close o = (e − open − inner − 8%·1.1·vh) / (92%·1.1·vh)
     c = ease(a)·(1−ease(o))   u = 1−c (fold amount)   d = 180·u
   leaf  : perspective(2800px) rotateY(d)      hinged right edge
   cover : perspective(2800px) rotateY(d−180)  hinged left edge
   device: translate(−u·W/4, sin(t/1500)·5·u)  idle float while folded
   ================================================================ */
(function () {
  const wrap = document.getElementById("stageWrap");
  const pos = document.getElementById("devicePos");
  const rig = document.getElementById("deviceRig");
  const leaf = document.getElementById("panelLeaf");
  const cover = document.getElementById("panelCover");
  const rightPanel = document.getElementById("panelRight");
  const screenRight = document.getElementById("screenRight");
  const shF = document.getElementById("shF");
  const shB = document.getElementById("shB");
  const shR = document.getElementById("shR");
  const crease = document.getElementById("crease");
  const shadow = document.getElementById("phoneShadow");
  const planeLive = document.getElementById("planeLive");
  const planeClone = document.getElementById("planeClone");
  const homeScroll = document.getElementById("homeScroll");
  const nmL = document.getElementById("bgNameL");
  const nmR = document.getElementById("bgNameR");
  const callScreen = document.getElementById("callScreen");
  const hint = document.getElementById("coverHint");
  const controls = document.getElementById("stageControls");

  // Reference device geometry + motion config (vh multiples)
  const DEV_W = 1080, DEV_H = 736;
  const OPEN_LEN = 1.15, CLOSE_LEN = 1.1, HOLD_LEN = 0.4, SMOOTH = 0.12;
  const TOP_SPACE = 76, BOTTOM_SPACE = 44;

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const easeIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut3 = (t) => 1 - Math.pow(1 - t, 3);
  const isMobile = () => window.matchMedia("(max-width: 920px)").matches;
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let vw = 0, vh = 800, z = 0.9, cy = 0;
  let U1 = 0, U2 = 0, innerMax = 0, innerPx = 0, sectionTop = 0;
  let cur = 0, lastU = 1, lastS = -1, lastRad = "";
  let running = false, lastT = 0;
  const nmSize = { L: { w: 1, h: 1 }, R: { w: 1, h: 1 } };

  const rightFrame = rightPanel.querySelector(".panel-frame");

  /* ---------------- leaf-screen visual mirror ---------------- */
  function buildClone() {
    const src = planeLive.cloneNode(true);
    src.removeAttribute("id");
    src.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    src.querySelectorAll("script").forEach((el) => el.remove());
    planeClone.replaceChildren(...src.childNodes);
    syncCloneScroll();
  }
  function syncCloneScroll() {
    const cs = planeClone.querySelectorAll(".home-scroll, .app-rail, .app-body");
    const ls = planeLive.querySelectorAll(".home-scroll, .app-rail, .app-body");
    for (let i = 0; i < cs.length && i < ls.length; i++) cs[i].scrollTop = ls[i].scrollTop;
  }
  // Keep the mirror in sync with any DOM change inside the live plane
  let clonePending = false;
  new MutationObserver(() => {
    if (clonePending) return;
    clonePending = true;
    requestAnimationFrame(() => { clonePending = false; buildClone(); });
  }).observe(planeLive, {
    childList: true, subtree: true, characterData: true,
    attributes: true, attributeFilter: ["class", "hidden"],
  });
  // Clicks on the mirrored left half are replayed on the live plane
  planeClone.addEventListener("click", (e) => {
    const t = e.target.closest("a,button,[data-action],[data-app]");
    e.preventDefault();
    e.stopPropagation();
    if (!t) return;
    const mirrorAll = planeClone.querySelectorAll("a,button,[data-action],[data-app]");
    const i = Array.prototype.indexOf.call(mirrorAll, t);
    if (i < 0) return;
    const liveAll = planeLive.querySelectorAll("a,button,[data-action],[data-app]");
    if (liveAll[i]) liveAll[i].click();
  });

  /* ---------------- measurement ---------------- */
  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    if (isMobile()) { wrap.style.height = "auto"; return; }
    const availH = Math.max(200, vh - TOP_SPACE - BOTTOM_SPACE);
    z = Math.min((vw * 0.9) / DEV_W, availH / DEV_H, 1.3);
    cy = Math.round(TOP_SPACE + availH / 2);
    pos.style.top = cy + "px";
    rig.style.transform = `scale(${z.toFixed(4)})`;
    U1 = vh * OPEN_LEN;
    U2 = vh * CLOSE_LEN;
    innerMax = Math.max(0, homeScroll.scrollHeight - homeScroll.clientHeight);
    innerPx = innerMax * z;
    wrap.style.height = Math.round(vh + U1 + innerPx + U2 + vh * HOLD_LEN) + "px";
    sectionTop = wrap.getBoundingClientRect().top + window.scrollY;
    shadow.style.width = Math.round(DEV_W * z * 0.96) + "px";
    shadow.style.top = Math.round(cy + (DEV_H * z) / 2 - 26) + "px";
    nmSize.L = { w: Math.max(1, nmL.offsetWidth), h: Math.max(1, nmL.offsetHeight) };
    nmSize.R = { w: Math.max(1, nmR.offsetWidth), h: Math.max(1, nmR.offsetHeight) };
    apply(cur, performance.now());
  }

  /* ---------------- the fold state machine ---------------- */
  function apply(e, now) {
    if (isMobile()) return;
    const a = U1 > 0 ? clamp(e / (U1 * 0.9), 0, 1) : 1;
    const s = clamp((e - U1) / z, 0, innerMax);
    const o = U2 > 0 ? clamp((e - U1 - innerPx - U2 * 0.08) / (U2 * 0.92), 0, 1) : 0;
    const c = easeIO(a) * (1 - easeIO(o));
    const u = +(1 - c).toFixed(4);
    const d = 180 * u;
    lastU = u;

    // Fold translate keeps the stack centred; gentle idle float while folded.
    // translate comes AFTER scale so it lives in the device's own (scaled) space,
    // exactly like the original: rendered shift = -u·W/4·scale.
    const floatY = u > 0 ? Math.sin(now / 1500) * 5 * u : 0;
    rig.style.transform = u < 0.003
      ? `scale(${z.toFixed(4)})`
      : `scale(${z.toFixed(4)}) translate(${(-u * DEV_W / 4).toFixed(2)}px, ${floatY.toFixed(2)}px)`;

    // The swinging flap: leaf and cover are its two faces
    const front = d < 90;
    leaf.style.visibility = front ? "visible" : "hidden";
    leaf.style.transform = d < 0.2
      ? "none"
      : `perspective(2800px) rotateY(${d.toFixed(3)}deg)`;
    cover.style.visibility = front ? "hidden" : "visible";
    cover.style.transform = d > 179.8
      ? "none"
      : `perspective(2800px) rotateY(${(d - 180).toFixed(3)}deg)`;
    crease.style.visibility = d > 176 ? "hidden" : "visible";

    // Right panel corners: fully rounded while folded, outer-only when open
    const rad = front ? "r" : "f";
    if (rad !== lastRad) {
      lastRad = rad;
      const f = front ? "0px 44px 44px 0px" : "44px";
      const fs = front ? "0px 36px 36px 0px" : "36px";
      rightFrame.style.borderRadius = f;
      screenRight.style.borderRadius = fs;
      shR.style.borderRadius = fs;
    }

    // Inner screens go dark when nearly folded; scroll with the page
    const pv = u > 0.985 ? "hidden" : "inherit";
    planeLive.style.visibility = pv;
    planeClone.style.visibility = pv;
    if (Math.abs(s - lastS) > 0.05) {
      lastS = s;
      homeScroll.scrollTop = s;
      syncCloneScroll();
    }

    // Fold shadows
    shF.style.opacity = front ? (Math.pow(d / 90, 1.6) * 0.8).toFixed(3) : "0";
    shB.style.opacity = front ? "0" : (Math.pow(2 - d / 90, 1.6) * 0.7).toFixed(3);
    shR.style.opacity = (Math.pow(Math.sin((d * Math.PI) / 180), 1.8) * 0.5).toFixed(3);

    // Incoming-call screen fades in while the phone folds shut
    const co = clamp((o - 0.02) * 6, 0, 1);
    callScreen.style.opacity = co.toFixed(3);
    callScreen.style.pointerEvents = co > 0.5 ? "auto" : "none";

    // Floor shadow halves under the folded stack
    shadow.style.transform = `translateX(-50%) scaleX(${(0.5 + 0.5 * c).toFixed(4)})`;

    // Giant names flank the folded phone, slide out + fade as it opens
    const y = DEV_W * z, half = y / 2, gap = half * 0.06;
    const dd = half / 2 - gap + (vw * 0.22 + y / 4) * easeOut3(c);
    const area = (vw - y) / 2, sh2 = vh * 0.42;
    const sl = Math.min((area - vw * 0.03 + gap) / nmSize.L.w, sh2 / nmSize.L.h);
    const sr = Math.min((area - vw * 0.03 + gap) / nmSize.R.w, sh2 / nmSize.R.h);
    nmL.style.transform =
      `translate(calc(${(vw / 2 - dd).toFixed(1)}px - 100%), ${cy}px) translateY(-50%) scale(${sl.toFixed(4)})`;
    nmR.style.transform =
      `translate(${(vw / 2 + dd).toFixed(1)}px, ${cy}px) translateY(-50%) scale(${sr.toFixed(4)})`;
    const nmOp = (1 - c * 0.9).toFixed(3);
    nmL.style.opacity = nmOp;
    nmR.style.opacity = nmOp;

    if (hint) hint.style.opacity = clamp(1 - e / 120, 0, 1).toFixed(3);
    if (controls) controls.style.opacity = c.toFixed(3);
  }

  /* ---------------- smoothed scroll loop ---------------- */
  const target = () => Math.max(0, window.scrollY - sectionTop);

  // Advance the exponential smoother one tick; returns true while it should keep running
  function advance(now) {
    const t = target();
    const dt = lastT ? Math.min(64, now - lastT) : 16.7;
    lastT = now;
    if (reduced()) {
      cur = t;
    } else {
      // subdivide long gaps so the smoothing curve stays the same as per-frame ticking
      let rem = dt;
      while (rem > 0) {
        const stepDt = Math.min(66.7, rem);
        rem -= stepDt;
        const f = 1 - Math.pow(1 - SMOOTH, stepDt / 16.67);
        cur += (t - cur) * f;
      }
      if (Math.abs(t - cur) < 0.1) cur = t;
    }
    apply(cur, now);
    return cur !== t || (!reduced() && lastU > 0.0005);   // idle float keeps ticking while folded
  }

  function step(now) {
    if (advance(now)) requestAnimationFrame(step);
    else running = false;
  }
  function wake() {
    if (isMobile()) return;
    if (!running) { running = true; requestAnimationFrame(step); }
  }

  window.addEventListener("scroll", wake, { passive: true });
  window.addEventListener("resize", () => { measure(); wake(); });
  document.addEventListener("visibilitychange", wake);
  window.addEventListener("pageshow", wake);
  // Watchdog: some webviews/panes stop firing rAF and even scroll events while
  // unfocused, but timers still run — keep the fold following the scrollbar there.
  setInterval(() => {
    if (isMobile()) return;
    if (performance.now() - lastT > 150) advance(performance.now());
  }, 120);

  function init() {
    buildClone();
    measure();
    cur = target();
    apply(cur, performance.now());
    wake();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Content height settles late (fonts, images) — re-measure like the original
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); wake(); });
  window.addEventListener("load", () => { measure(); wake(); });
  setTimeout(() => { measure(); wake(); }, 1200);
})();

/* ================================================================
   Live clock
   ================================================================ */
(function () {
  const st = document.getElementById("statusTime");
  const cv = document.getElementById("coverTime");
  const hc = document.getElementById("homeClock");
  const hd = document.getElementById("homeDate");
  const cc = document.getElementById("coverClock");
  const cd = document.getElementById("coverDate");
  function tick() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const t = `${hh}:${mm}`;
    if (st) st.textContent = t;
    if (cv) cv.textContent = t;
    if (hc) hc.textContent = t;
    if (cc) cc.textContent = t;
    const date = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    if (hd) hd.textContent = date;
    if (cd) cd.textContent = date;
  }
  tick();
  setInterval(tick, 15000);
})();

/* ================================================================
   Home screen: grid + dock
   ================================================================ */
const grid = document.getElementById("appGrid");
const dock = document.getElementById("dock");

function iconEl(app, forDock) {
  const b = document.createElement("button");
  b.className = `app-icon ${app.type === "system" ? "app-system" : "app-mine"}`;
  b.dataset.app = app.id;
  b.innerHTML = `
    <span class="tile" ${app.grad ? `style="background:${app.grad}"` : ""}>${app.emoji}</span>
    ${forDock ? "" : `<span class="label">${app.name}</span>`}`;
  b.setAttribute("aria-label", app.name);
  return b;
}
APPS.forEach((a) => grid.appendChild(iconEl(a, false)));
DOCK.forEach((a) => dock.appendChild(iconEl(a, true)));

/* Home extras: featured app + certifications */
(function () {
  const f = DATA.projects.find((p) => p.id === DATA.featured) || DATA.projects[0];
  document.getElementById("featuredCard").innerHTML = `
    <button class="featured-card" data-action="open" data-app="projects" style="width:100%;text-align:left">
      <span class="tile" style="background:${f.grad}">${f.emoji}</span>
      <span>
        <h4>${f.name}</h4>
        <p>${f.tagline}</p>
        <p class="fmeta">${f.category}</p>
      </span>
    </button>`;
  document.getElementById("certChips").innerHTML =
    DATA.certifications.map((c) => `<span class="chip">${c}</span>`).join("");
})();

/* ================================================================
   App window / recents / toast / navbar
   ================================================================ */
const win = document.getElementById("appWindow");
const rail = document.getElementById("appRail");
const body = document.getElementById("appBody");
const recents = document.getElementById("recents");
const recentsCards = document.getElementById("recentsCards");
const toastEl = document.getElementById("toast");

let openAppId = null;          // app currently in the window
let recentIds = [];            // most-recent-first
let sel = {};                  // per-app selection state
let toastTimer = null;

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2400);
}

const tileHTML = (app, size) =>
  `<span class="tile" ${app.grad ? `style="background:${app.grad}"` : ""}>${app.emoji}</span>`;

function railHead(app, devNote) {
  return `
    <div class="rail-head">
      ${tileHTML(app)}
      <div>
        <p class="rail-name">${app.name}</p>
        <p class="rail-dev">${devNote || DATA.name}</p>
      </div>
    </div>`;
}

/* ---------------- per-app renderers ---------------- */
const RENDERERS = {
  about: {
    rail: () => `
      ${railHead(appById("about"))}
      <p class="rail-label">Quick facts</p>
      <div class="rail-facts" style="border-top:0;padding-top:0;margin-top:8px">
        ${DATA.stats.map((s) => `<div class="rail-fact"><span>${s.label}</span><b>${s.num}</b></div>`).join("")}
        <div class="rail-fact"><span>Location</span><b>${DATA.location}</b></div>
        <div class="rail-fact"><span>Email</span><b>${DATA.email}</b></div>
      </div>`,
    body: () => `
      <h2 class="app-title">${DATA.name}</h2>
      <p class="app-sub">${DATA.role} · ${DATA.location}</p>
      <div class="section-gap"></div>
      <p style="font-size:14.5px;line-height:1.65;color:var(--android-text-dim);max-width:620px">${DATA.bio}</p>
      <div class="section-gap"></div>
      <p class="rail-label" style="margin-top:0">Experience</p>
      <div class="timeline">
        ${DATA.experience.map((e) => `
          <div class="tl-item">
            <div class="card" style="margin-bottom:0">
              <p class="meta">${e.period}</p>
              <h4>${e.role} · ${e.org}</h4>
              <p>${e.desc}</p>
            </div>
          </div>`).join("")}
      </div>
      <p class="rail-label">Education</p>
      ${DATA.education.map((e) => `
        <div class="card"><p class="meta">${e.period}</p><h4>${e.title}</h4><p>${e.org}</p></div>`).join("")}
      <div class="btn-row">
        <a class="btn-android" href="${DATA.resumeUrl}" target="_blank" rel="noopener">⬇ Download resume</a>
        <button class="btn-android ghost" data-action="open" data-app="contact">Contact me</button>
      </div>`,
  },

  projects: {
    rail: () => `
      ${railHead(appById("projects"))}
      <p class="rail-label">Installed apps</p>
      ${DATA.projects.map((p) => `
        <button class="rail-item ${sel.projects === p.id ? "active" : ""}" data-action="selProject" data-id="${p.id}">
          <span class="mini">${p.emoji}</span>${p.name}
        </button>`).join("")}
      <p class="rail-label">Totals</p>
      <div class="rail-facts" style="border-top:0;padding-top:0;margin-top:8px">
        <div class="rail-fact"><span>Apps shipped</span><b>${DATA.projects.length}</b></div>
        <div class="rail-fact"><span>Crash-free</span><b>99.8%</b></div>
      </div>`,
    body: () => {
      const p = DATA.projects.find((x) => x.id === (sel.projects || DATA.projects[0].id)) || DATA.projects[0];
      return `
        <h2 class="app-title">${p.emoji} ${p.name}</h2>
        <p class="app-sub">${p.tagline} — ${p.category}</p>
        <div class="section-gap"></div>
        <div class="card">
          <p class="meta">About this app</p>
          <p>${p.description}</p>
        </div>
        <div class="card">
          <p class="meta">My role</p>
          <p>${p.role}</p>
        </div>
        <p class="rail-label" style="margin-top:0">Built with</p>
        <div class="chips">${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        <div class="btn-row">
          <a class="btn-android" href="${p.links.play}" target="_blank" rel="noopener">▶ Google Play</a>
          <a class="btn-android ghost" href="${p.links.repo}" target="_blank" rel="noopener">⌥ Source code</a>
        </div>`;
    },
  },

  skills: {
    rail: () => {
      const cats = Object.keys(DATA.skills);
      return `
        ${railHead(appById("skills"))}
        <p class="rail-label">Categories</p>
        ${cats.map((c, i) => `
          <button class="rail-item ${(sel.skills ?? 0) === i ? "active" : ""}" data-action="selSkill" data-i="${i}">
            <span class="mini">${["🈴","🧩","🏗️","🔧"][i % 4]}</span>${c}
          </button>`).join("")}`;
    },
    body: () => {
      const cats = Object.keys(DATA.skills);
      const i = sel.skills ?? 0;
      return `
        <h2 class="app-title">${cats[i]}</h2>
        <p class="app-sub">Tools I reach for daily</p>
        <div class="section-gap"></div>
        <div class="chips">${DATA.skills[cats[i]].map((s) => `<span class="chip">${s}</span>`).join("")}</div>
        <div class="section-gap"></div>
        <p class="rail-label" style="margin-top:0">Full stack</p>
        ${cats.map((c, j) => `
          <div class="card" ${j === i ? 'style="border-color:rgba(138,180,248,.4)"' : ""}>
            <p class="meta">${c}</p>
            <div class="chips" style="margin-top:6px">${DATA.skills[c].map((s) => `<span class="chip">${s}</span>`).join("")}</div>
          </div>`).join("")}`;
    },
  },

  contact: {
    rail: () => {
      const methods = [
        { i: 0, emoji: "📞", name: "Phone" },
        { i: 1, emoji: "✉️", name: "Email" },
        { i: 2, emoji: "💼", name: "LinkedIn" },
        { i: 3, emoji: "📸", name: "Instagram" },
        { i: 4, emoji: "⌥", name: "GitHub" },
      ];
      return `
        ${railHead(appById("contact"))}
        <p class="rail-label">Reach me on</p>
        ${methods.map((m) => `
          <button class="rail-item ${(sel.contact ?? 0) === m.i ? "active" : ""}" data-action="selContact" data-i="${m.i}">
            <span class="mini">${m.emoji}</span>${m.name}
          </button>`).join("")}
        <p class="rail-label">Direct</p>
        <div class="rail-facts" style="border-top:0;padding-top:0;margin-top:8px">
          <div class="rail-fact"><span>Phone</span><b>${DATA.phonePretty}</b></div>
          <div class="rail-fact"><span>Email</span><b>${DATA.email}</b></div>
        </div>`;
    },
    body: () => {
      const i = sel.contact ?? 0;
      const cards = [
        { emoji: "📞", title: "Phone", sub: `Ring me at ${DATA.phonePretty} — happy to talk Android.`,
          btn: `Call now`, href: `tel:${DATA.phone}` },
        { emoji: "✉️", title: "Email", sub: `Best for detailed briefs and resumes.`,
          btn: `Send email`, href: `mailto:${DATA.email}` },
        { emoji: "💼", title: "LinkedIn", sub: `Connect and see the full work history.`,
          btn: `Open LinkedIn`, href: DATA.linkedin },
        { emoji: "📸", title: "Instagram", sub: `Side projects and build-in-public shots.`,
          btn: `Open Instagram`, href: DATA.instagram },
        { emoji: "⌥", title: "GitHub", sub: `Code, experiments and open-source work.`,
          btn: `Open GitHub`, href: DATA.github },
      ];
      const c = cards[i];
      return `
        <h2 class="app-title">${c.title}</h2>
        <p class="app-sub">Contact · ${DATA.name}</p>
        <div class="section-gap"></div>
        <div class="card" style="text-align:center;padding:34px 20px">
          <div style="font-size:44px;margin-bottom:12px">${c.emoji}</div>
          <p style="font-size:15px;line-height:1.6">${c.sub}</p>
        </div>
        <div class="btn-row" style="justify-content:center">
          <a class="btn-android" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${c.btn} ↗</a>
        </div>`;
    },
  },

  linkedin: {
    rail: () => railHead(appById("linkedin"), "Social · links out"),
    body: () => `
      <h2 class="app-title">LinkedIn</h2>
      <p class="app-sub">Professional profile</p>
      <div class="section-gap"></div>
      <div class="card" style="text-align:center;padding:36px 20px;background:linear-gradient(160deg,#0a66c2,#08467e);border:0">
        <div style="font-size:46px;margin-bottom:10px">💼</div>
        <h4 style="color:#fff;font-size:19px">${DATA.name}</h4>
        <p style="color:rgba(255,255,255,.8)">${DATA.role} · ${DATA.location}</p>
      </div>
      <div class="btn-row" style="justify-content:center">
        <a class="btn-android" href="${DATA.linkedin}" target="_blank" rel="noopener">Open LinkedIn ↗</a>
      </div>`,
  },

  instagram: {
    rail: () => railHead(appById("instagram"), "Social · links out"),
    body: () => `
      <h2 class="app-title">Instagram</h2>
      <p class="app-sub">Side projects & build-in-public</p>
      <div class="section-gap"></div>
      <div class="card" style="text-align:center;padding:36px 20px;background:linear-gradient(140deg,#ffd26d,#ff5db1 55%,#8a3fff);border:0">
        <div style="font-size:46px;margin-bottom:10px">📸</div>
        <h4 style="color:#fff;font-size:19px">@${DATA.instagram.split("/").pop()}</h4>
        <p style="color:rgba(255,255,255,.85)">Android dev life, one post at a time</p>
      </div>
      <div class="btn-row" style="justify-content:center">
        <a class="btn-android" href="${DATA.instagram}" target="_blank" rel="noopener">Open Instagram ↗</a>
      </div>`,
  },

  dialer: {
    rail: () => `
      ${railHead(appById("dialer"), "Dialer · demo")}
      <p class="rail-label">Contact card</p>
      <div class="card" style="text-align:center">
        <div class="call-avatar" style="margin:0 auto 10px;width:52px;height:52px;font-size:16px">${DATA.initials}</div>
        <h4>${DATA.name}</h4>
        <p>${DATA.role}</p>
      </div>
      <div class="rail-facts" style="border-top:0;padding-top:6px;margin-top:10px">
        <div class="rail-fact"><span>Mobile</span><b>${DATA.phonePretty}</b></div>
      </div>`,
    body: () => `
      <h2 class="app-title">Dialer</h2>
      <p class="app-sub">Tap a number, then call</p>
      <div class="section-gap"></div>
      <div class="dialer">
        <div class="dialer-display" id="dialerDisplay">${DATA.phonePretty.replace(/\s/g, "")}</div>
        <div class="dialer-pad">
          ${["1","2","3","4","5","6","7","8","9","*","0","#"].map((d) =>
            `<button class="dialer-key" data-action="dial" data-key="${d}">${d}</button>`).join("")}
        </div>
        <div class="dialer-actions">
          <button class="dialer-del" data-action="dialDel" aria-label="Delete">⌫</button>
          <a class="dialer-call" id="dialerCall" href="tel:${DATA.phone}" aria-label="Call">✆</a>
          <span style="width:66px"></span>
        </div>
      </div>`,
  },
};

/* ---------------- open / close / recents ---------------- */
function renderApp() {
  const app = appById(openAppId);
  if (!app || !RENDERERS[app.id]) return;
  rail.innerHTML = RENDERERS[app.id].rail();
  body.innerHTML = RENDERERS[app.id].body();
  body.classList.toggle("app-body-light", false);
  body.scrollTop = 0;
}

function openApp(id) {
  const app = appById(id);
  if (!app) return;
  if (app.type === "system") {
    showToast(`${app.emoji} ${app.name} is a system app — only ${DATA.name.split(" ")[0]}'s apps run in this demo`);
    return;
  }
  openAppId = app.id;
  sel[app.id] = sel[app.id] ?? (app.id === "projects" ? DATA.projects[0].id : 0);
  recentIds = [app.id, ...recentIds.filter((x) => x !== app.id)].slice(0, 6);
  recents.hidden = true;
  win.hidden = false;
  win.classList.remove("closing");
  renderApp();
}

function closeApp() {
  if (win.hidden) return;
  win.classList.add("closing");
  setTimeout(() => { win.hidden = true; win.classList.remove("closing"); openAppId = null; }, 200);
}

function renderRecents() {
  if (!recentIds.length) {
    recentsCards.innerHTML = `<p class="recents-empty">No recent apps — open something from the home screen</p>`;
    return;
  }
  recentsCards.innerHTML = recentIds.map((id) => {
    const a = appById(id);
    return `
      <button class="recent-card" data-action="open" data-app="${id}">
        ${tileHTML(a)}
        <p>${a.name}</p>
        <span>${a.type === "system" ? "system" : DATA.name}</span>
      </button>`;
  }).join("");
}

/* ---------------- global click delegation ---------------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-action],[data-app]");
  if (!t) return;

  if (t.dataset.app && !t.dataset.action) { openApp(t.dataset.app); return; }

  switch (t.dataset.action) {
    case "open": openApp(t.dataset.app); break;
    case "selProject": sel.projects = t.dataset.id; renderApp(); break;
    case "selSkill": sel.skills = Number(t.dataset.i); renderApp(); break;
    case "selContact": sel.contact = Number(t.dataset.i); renderApp(); break;
    case "dial": {
      const d = document.getElementById("dialerDisplay");
      d.textContent = (d.textContent === DATA.phonePretty.replace(/\s/g, "") ? "" : d.textContent) + t.dataset.key;
      break;
    }
    case "dialDel": {
      const d = document.getElementById("dialerDisplay");
      d.textContent = d.textContent.slice(0, -1);
      break;
    }
  }
});

/* ---------------- navbar ---------------- */
document.getElementById("navBack").addEventListener("click", () => {
  if (!recents.hidden) { recents.hidden = true; return; }
  closeApp();
});
document.getElementById("navHome").addEventListener("click", () => {
  recents.hidden = true;
  closeApp();
});
document.getElementById("navRecents").addEventListener("click", () => {
  if (!recents.hidden) { recents.hidden = true; return; }
  renderRecents();
  recents.hidden = false;
});
document.getElementById("recentsClear").addEventListener("click", () => {
  recentIds = [];
  recents.hidden = true;
});

/* ================================================================
   Theme controls (persisted)
   ================================================================ */
(function () {
  const bgButtons = document.querySelectorAll(".ctl-pill[data-bg]");
  const dotButtons = document.querySelectorAll(".ctl-dot[data-finish]");
  function setBg(name) {
    document.body.dataset.bg = name;
    bgButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.bg === name)));
    try { localStorage.setItem("ff-bg", name); } catch (_) {}
  }
  function setFinish(name) {
    document.body.dataset.finish = name;
    dotButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.finish === name)));
    try { localStorage.setItem("ff-finish", name); } catch (_) {}
  }
  bgButtons.forEach((b) => b.addEventListener("click", () => setBg(b.dataset.bg)));
  dotButtons.forEach((b) => b.addEventListener("click", () => setFinish(b.dataset.finish)));
  try {
    const savedBg = localStorage.getItem("ff-bg");
    const savedFinish = localStorage.getItem("ff-finish");
    if (savedBg && [...bgButtons].some((b) => b.dataset.bg === savedBg)) setBg(savedBg);
    if (savedFinish && [...dotButtons].some((b) => b.dataset.finish === savedFinish)) setFinish(savedFinish);
  } catch (_) {}
})();
