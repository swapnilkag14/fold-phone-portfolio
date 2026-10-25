# Swapnil Kag — Fold-phone Android simulation portfolio

A foldable-phone Android simulation built as a portfolio for a mobile app developer.
The device folds and unfolds with the **exact mechanics of the Foldfolio Framer
template** (`foldfolio.framer.website`), reverse-engineered from its runtime and
component bundle:

- Three true panels hinged on the shared center edge — a static right base screen,
  a swinging "leaf" (left inner screen, `perspective(2800px) rotateY(180°→0°)`,
  origin at its right edge) and the cover screen (front face while folded,
  `rotateY(0°→-180°)`, origin at its left edge).
- Scroll timeline in viewport-height units: **open 1.15·vh** (eased over its first
  90%), **hold 0.4·vh**, **close 1.1·vh** (starts at 8%, completes at 92%), with the
  inner screen scrolling 1:1 with page scroll in between (section height adapts to
  the content automatically).
- `easeInOutCubic` phases plus the reference's **exponential smoothing (0.12 per
  frame, dt-normalised)** so the fold chases the scrollbar like a damped spring.
- Layered realism: face visibility flips at 90°, fold shadows on the swinging faces,
  hinge shadow on the base screen, corner-radius morph (fully rounded when folded ↔
  outer-only when open), the stack staying perfectly centered while folding, a gentle
  sine idle-float while closed, the giant flanking names sliding out and fading as it
  opens, and an incoming-call screen fading in on the cover while it folds shut.

Both halves of the unfolded screen are interactive: the left screen is a live visual
mirror of the right one (DOM-synced + click mirroring). A timer watchdog keeps the
fold following the scrollbar even in throttled webviews where rAF and scroll events
stop firing. Open apps in dual-pane (left = app rail, right = running app).

## Run it

```bash
cd foldphone_portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Tune the fold

The motion constants at the top of the engine in `main.js` mirror the template's
Framer controls:

- `OPEN_LEN` / `CLOSE_LEN` / `HOLD_LEN` — phase lengths in `vh` (1.15 / 1.1 / 0.4)
- `SMOOTH` — scroll smoothing per frame (0.12)
- `TOP_SPACE` / `BOTTOM_SPACE` — stage margins around the device

## What works

| App | Type | What it does |
|---|---|---|
| About 👤 | my app | Bio, experience timeline, education, **Download resume** button |
| My Apps 📱 | my app | Your apps list (left pane) + selected app detail (right pane) |
| Skills 🛠️ | my app | Skill categories (left) + chips (right) |
| Contact ✉️ | my app | Phone / Email / LinkedIn / Instagram / GitHub action cards |
| LinkedIn 💼 | my app | Profile card + link out |
| Instagram 📸 | my app | Profile card + link out |
| Phone 📞 (dock) | my app | Working demo dialer — call button uses `tel:` |
| Camera, Files, Settings… | system | Polite toast: only my apps run in this demo |

Plus: Android nav bar (back / home / recents with app cards + clear all),
live clock (status bar, home widget and cover lock screen), app-open animations,
toasts, and the page-level theme controls (Basic / Glow / Orbit backgrounds,
Titanium / Graphite / Coral / Sage frame).

## Put in YOUR data (5 minutes)

Everything lives in one place — the `DATA` object at the top of **main.js**:

- `name`, `role`, `location`, `email`, `phone`, `linkedin`, `instagram`, `github`
- `stats` — the quick facts in About
- `featured` — which project gets the big card on the home screen
- `certifications[]` — chips shown on the home screen
- `bio`, `experience[]`, `education[]` — About app content
- `skills{}` — Skills app categories and chips
- `projects[]` — My Apps list: name, emoji, colors, description, tech, Play/GitHub links

Also:

- Drop your resume at `assets/resume.pdf` (the About app links to it)
- Page title / header name: `index.html`
- Giant background words (`SWAPNIL` / `KAG`): `#bgNameL` / `#bgNameR` in `index.html`
- Lock-screen notifications: `.notif` blocks in `index.html` (cover panel)
- Incoming-call screen: `.call-screen` block in the cover panel
- App icons/labels/order: the `APPS` and `DOCK` arrays in `main.js`

## Structure

- `index.html` — the three-panel device (right base screen with the live content
  plane, leaf with its mirror, cover with lock + call screens)
- `style.css` — Android UI + device + fold styles (design tokens at top)
- `main.js` — `DATA` config, the fold engine (exact Foldfolio port), the leaf-plane
  mirror, app registry and app window system

## Notes

- Under 920px the fold is dropped: the cover phone and the open phone stack as
  plain full-width blocks and the launcher scrolls natively.
- The lock-screen wallpaper image came from the original template demo — swap it
  (`assets/img/lock-wallpaper.jpg`) with your own before publishing.
