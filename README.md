# GREATER & BIGGER VENTURES — One-page Website

This repository contains a modern, responsive, one-page site for GREATER & BIGGER VENTURES (mini-grocery). It includes:

## Features
- Header with logo and tagline
- "Copy MoMo Number" button (0541159150) with animated toast (3s auto-close)
- QR code generated with QRCode.js linking to the shop website
- Products section: 8 product cards (fruits, rice, sugar, oil, beverages, cleaning, snacks, dairy)
- FAQ section: 7 common questions with collapsible answers
- About & Contact section and footer with social icons

## Tech
- HTML + TailwindCSS (via CDN)
- JavaScript (vanilla) + QRCode.js (via CDN)

## Files
- `index.html` — main page
- `assets/styles.css` — custom styles (toast, QR scaling)
- `assets/script.js` — JS interactions (copy, toast, QR, FAQ accordion)
- `public/shopimg.jpg` — shop background image

## How to run
1. Open `index.html` in a browser (double-click or serve via a local static server).
2. Click "Copy MoMo Number" to copy the number to your clipboard and see the toast.
3. Scan or click the QR code to open the shop website.
4. Browse products and expand FAQ answers.

## Notes & Next Steps
- Replace placeholder shopUrl with the real live landing page when available.
- For production, consider bundling Tailwind (instead of CDN) and hosting assets on a static host.
- To add/edit products or FAQ, update the relevant section in `index.html`.

© 2025 GREATER & BIGGER VENTURES. Powered by 11TechWeave.
