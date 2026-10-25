# Swapnil Kag — Fold-phone Android simulation portfolio

A foldable-phone Android simulation built as a portfolio for a mobile app developer.
Scroll: the phone unfolds → Android home screen → open apps in dual-pane (left = app
details, right = running app) → scroll to the end and it folds back to the lock screen.

Based on a reverse-engineered clone of the Foldfolio Framer template's device frame
and scroll mechanics; the screen now runs a simulated Android UI.

## Run it

```bash
cd foldphone_portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

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
live clock, app-open animations, toasts, and the page-level theme controls
(Basic / Glow / Orbit backgrounds, Titanium / Graphite / Coral / Sage frame).

## Put in YOUR data (5 minutes)

Everything lives in one place — the `DATA` object at the top of **main.js**:

- `name`, `role`, `location`, `email`, `phone`, `linkedin`, `instagram`, `github`
- `stats` — the quick facts in About
- `bio`, `experience[]`, `education[]` — About app content
- `skills{}` — Skills app categories and chips
- `projects[]` — My Apps list: name, emoji, colors, description, tech, Play/GitHub links

Also:
- Drop your resume at `assets/resume.pdf` (the About app links to it)
- Page title / header name: `index.html`
- Giant background words (`SWAPNIL` / `KAG`): `.bg-name-*` spans in `index.html`
- Lock-screen notifications: `.notif` blocks in `index.html`
- App icons/labels/order: the `APPS` and `DOCK` arrays in `main.js`

## Structure

- `index.html` — device shell, home screen skeleton, lock screen
- `style.css` — Android UI + device + page styles (design tokens at top)
- `main.js` — `DATA` config, app registry, scroll engine, app window system
- `assets/img/` — wallpaper + lock-screen images (replace with your own)

## Notes

- Under 920px the device frame is dropped and the phone UI runs full-width, single-pane.
- The lock-screen wallpaper image came from the original template demo — swap it
  (`assets/img/lock-wallpaper.jpg`) with your own before publishing.
