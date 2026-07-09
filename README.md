# Hybrid Commercial Services — Website

A simple 4-page static website for a cleaning services business: `index.html` (Home), `services.html`, `about.html`, and `contact.html`, sharing one stylesheet (`style.css`) and one script (`script.js`).

## 1. How the code is put together

**HTML (`.html` files)** — Each page is plain HTML with no build tools or frameworks. All four pages share the same header/nav and footer markup (copy-pasted into each file, since it's a small static site — no templating engine needed at this scale). The important bits:
- `<header class="site-header">` — the logo, nav links, "Get a Free Quote" button, and a hamburger button for mobile.
- `<section class="hero">` / `<section class="page-hero">` — the big banner at the top of each page.
- `<div class="grid-3">` / `<div class="card">` — reusable card layout used for feature lists, services, and values.
- `<footer>` — contact info and quick links, same on every page.

**CSS (`style.css`)** — Everything at the top inside `:root { ... }` is a **CSS variable**. Change `--color-primary` and the button color, links, and accents update everywhere at once — you never need to hunt through the file for individual colors. Layout is done with **Flexbox** (nav bar) and **CSS Grid** (`.grid-3`, `.about-grid`, `.footer-grid`). The `@media (max-width: 720px)` block at the bottom is what rearranges things for phones and hides the desktop nav in favor of the hamburger menu.

**JavaScript (`script.js`)** — Just one job: when the hamburger icon is clicked, it toggles a `menu-open` class on the nav, which the CSS uses to show/hide the mobile menu. That's the only interactive behavior on the site.

## 2. How to customize it

| Want to change... | Edit this |
|---|---|
| Business name text | Search and replace "Hybrid Commercial Services" across all 4 HTML files |
| Logo image | Save your logo file into this same folder, named exactly `logo.jpg` (all 4 pages already reference it) |
| Colors / fonts | The `:root` variables at the top of `style.css` — already set to match the logo (blue `#1d8ce0`, navy `#0f2a4a`, leaf green `#4caf50`) |
| Phone, email, hours, address | The `<footer>` section (all pages) and `contact.html`'s "Contact Details" column |
| Services & pricing | `services.html` cards, and the "Services Preview" section in `index.html` |
| Photos | Replace the Unsplash placeholder URL in `about.html` with your own image (add image files to this folder and reference them, e.g. `src="team.jpg"`) |
| Testimonial | The `<section class="testimonial">` block in `index.html` |

## 3. Making the contact form actually send emails

GitHub Pages only serves static files — it can't run server code, so a plain HTML form can't send email by itself. The easiest free fix:

1. Go to [formspree.io](https://formspree.io) and sign up for a free account (50 submissions/month free).
2. Create a new form and copy the endpoint it gives you (looks like `https://formspree.io/f/abc123xy`).
3. In `contact.html`, replace `YOUR_FORM_ID` in the `<form action="...">` line with your real endpoint.
4. Submit a test message from your live site to confirm it lands in your inbox.

## 4. Hosting it for free with GitHub Pages

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one.
2. **Create a new repository** — click "+" → "New repository". Name it anything (e.g. `bright-and-tidy-site`), keep it **Public**, and don't add a README (you already have one).
3. **Upload your files** — the easiest way without using command-line git:
   - Open your new repo, click "Add file" → "Upload files".
   - Drag in `index.html`, `services.html`, `about.html`, `contact.html`, `style.css`, `script.js`, and `README.md`.
   - Click "Commit changes".
4. **Turn on GitHub Pages**:
   - In the repo, go to **Settings** → **Pages** (left sidebar).
   - Under "Build and deployment", set **Source** to "Deploy from a branch".
   - Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
5. **Wait 1–2 minutes**, then refresh that Pages settings page — it will show your live URL, something like:
   `https://your-username.github.io/bright-and-tidy-site/`
6. Visit that URL — your site is now live and free, permanently, with no hosting bill.

### Optional: use your own domain name
You already have `hybridcommercialservices.com.au` — see the go-live instructions for exact DNS records to point it at GitHub Pages.
1. In the repo, go back to **Settings** → **Pages** and enter your domain under "Custom domain".
2. At your domain registrar, add a CNAME record pointing to `your-username.github.io`.
3. GitHub will auto-provision a free HTTPS certificate for it within a few minutes to hours.

## 5. Making future edits

Any time you want to change text or styling: edit the file locally, then go back to your GitHub repo, open the file, click the pencil (edit) icon, paste in your changes, and commit. GitHub Pages automatically redeploys the site within about a minute of every commit.
