# Spark Landing Page

A professional, responsive landing page for the Spark networking app. Built as a simple static site suitable for GitHub Pages deployment.

## Features

- Modular structure: external CSS (`css/style.css`) and JS (`js/main.js`)
- Responsive layout (mobile/tablet/desktop) with sticky navigation
- Hero section with gradient text headline and clear CTA buttons
- Feature grid and roadmap timeline
- Interactive NFC demo mock (simulate/reset)
- Accessible semantic HTML (landmarks, aria labels)
- Mobile navigation toggle under 720px width

## Project Structure

```text
index.html
css/
  style.css
js/
  main.js
assets/
  logo.png (placeholder - add your own)
  spark.apk (placeholder APK path)
```

## Customization

- Replace `assets/logo.png` with your final logo (recommended 512x512 PNG with transparency).
- Update placeholder URLs in `js/main.js` (`repoUrl`, `pagesUrl`, `contactMail`).
- Adjust color palette by editing CSS variables in `:root` inside `css/style.css`.

## Development

No build step required. Open `index.html` directly or serve with a lightweight static server for local testing.

### Quick local preview (macOS fish shell)

```fish
python3 -m http.server 8080
```

Then visit: <http://localhost:8080>

### Editing Tips

- Keep sections organized using the `.section-title` pattern.
- Use utility classes like `.stack` for vertical rhythm without extra CSS.
- For new feature blocks, copy a `.feature` div and update contents.

## Responsive Behavior

- Under 1024px: Hero stacks vertically.
- Under 920px: Right column becomes inline (no sticky positioning).
- Under 720px: Navigation collapses behind a toggle (`☰`).

## Roadmap Extensions (Ideas)

- Add testimonials slider
- Embed short product video (optimized MP4 + poster image)
- Add newsletter signup form (e.g., using a service like Buttondown or Mailchimp)
- Light/dark theme toggle (CSS variables swap)

## Accessibility

- Landmarks: `header`, `main`, `footer`, `nav` used properly.
- Buttons and interactive elements have discernible text.
- Contrast ratios are high enough for most text; adjust if needed for WCAG AA.

## License

You may adapt and reuse this landing page for Spark-related academic or portfolio purposes. Replace proprietary assets (logo/APK) with your own when publishing.

## Deployment

Push to a GitHub repository and enable GitHub Pages (root directory). Update the `pagesUrl` variable in `js/main.js` accordingly.

---

Feel free to ask for enhancements like adding a testimonial carousel, analytics snippet, or theme switcher.
