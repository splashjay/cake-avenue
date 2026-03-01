# Cake Avenue Website (GitHub Pages)

## Quick start
1. Create a GitHub repo (public).
2. Upload ALL files from this folder to the repo root.
3. GitHub → Settings → Pages → Deploy from branch → main / (root).

Your site will be available at:
https://YOURUSERNAME.github.io/REPO_NAME/

## Replace images
Put your real images in:
assets/img/

Recommended:
- hero-placeholder.jpg → your best hero banner photo
- rolls-placeholder.jpg → cinnamon rolls collage
- cookies-placeholder.jpg → cookie collage
- cakes-placeholder.jpg → cakes collage

## Receiving orders (static site)
GitHub Pages can't run server code. Use Formspree:
1. Create a free Formspree form.
2. Copy your endpoint URL.
3. Open order.html and replace action="#" with your endpoint.
   Search for: FORM_ACTION

Alternative: embed a Google Form and remove the HTML form.

## Branding
- Fonts: Bodoni Moda (headings), Parisienne (script), Poppins (body)
- Colors are in assets/css/style.css

## New Release Cookies
Images added in assets/img/:
- new-chocolate-chip-*.png/.jpg
- new-red-velvet-*.png/.jpg
- new-white-choc-chip-*.png/.jpg
Edit prices in menu.html section id="new-release".
