# GREATER & BIGGER VENTURES — One-page Website

This repository contains a small, responsive, one-page site for GREATER & BIGGER VENTURES (mini-grocery). It includes a copyable MoMo number with a toast confirmation and a dynamically generated QR code linking to the shop website.

Features
- Header with logo and tagline
- "Copy MoMo Number" button that copies 0243138819 and shows an animated toast (3s auto-close)
- QR code generated with QRCode.js that links to the shop website
- About & Contact section and footer with social icons

Tech
- HTML + TailwindCSS (via CDN)
- JavaScript (vanilla) + QRCode.js (via CDN)

Files
- `index.html` — main page
- `assets/styles.css` — small custom styles (toast, QR scaling)
- `assets/script.js` — JS interactions (copy, toast, QR gen)

Assumptions
- The shop website used for the QR is set to https://greaterandbiggerventures.com in `assets/script.js`. Update the `shopUrl` constant if you have a different landing URL.

How to run
1. Open `index.html` in a browser (double-click or serve via a local static server).
2. Click "Copy MoMo Number" to copy the number to your clipboard and see the toast.
3. Scan or click the QR code to open the shop website.

Notes & Next Steps
- Replace placeholder shopUrl with the real live landing page when available.
- For production, consider bundling Tailwind (instead of CDN) and hosting assets on a static host.

© 2025 GREATER & BIGGER VENTURES. Powered by 11TechWeave.
