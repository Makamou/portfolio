# Vertex Studio Website — Maintenance Guide

Quick reference for updating and maintaining your Vertex Studio website.

---

## Quick Updates

### Updating Contact Information

**File:** `index.html` (lines 1456-1458)

```html
<!-- Email -->
<a href="mailto:amkristian91@gmail.com">amkristian91@gmail.com</a>

<!-- Phone -->
<a href="tel:+12142070768">+1 (214) 207-0768</a>

<!-- Location -->
Dallas, TX
```

### Adding a New Project

1. Add project image to `img/` folder (PNG recommended, ~1200px width)
2. Find projects grid section (line ~1381)
3. Copy an existing project card and update:
   ```html
   <a class="project" href="PROJECT_URL" target="_blank" rel="noopener noreferrer">
     <div class="project-img" style="background-image: url('./img/image-name.png')">
       <span class="project-tag">TAG</span>
     </div>
     <div class="project-desc">
       <h3>Project Name</h3>
       <p>Short description of the project.</p>
       <div class="project-meta">
         <span>Technology • Domain</span>
       </div>
       <span class="project-arrow">→</span>
     </div>
   </a>
   ```

### Updating Services

**File:** `index.html` (lines ~1295-1340)

Edit the services grid section:
```html
<div class="service-card">
  <div class="service-icon">EMOJI</div>
  <h3>Service Name</h3>
  <p>Service description here.</p>
</div>
```

### Modifying Company Story

**File:** `index.html` (lines ~1261-1273)

Edit the about section content:
```html
<p class="about-content">
  Your company story and mission statement here...
</p>
```

### Updating Skills/Technologies

**File:** `index.html` (lines ~1316-1354)

Each skill card:
```html
<div class="skill-card">
  <img src="ICON_URL" alt="Skill Name" />
  <p>Skill Name</p>
</div>
```

Use devicon URLs: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[name]/[name]-original.svg`

---

## Styling Customization

### Color Changes

All colors are defined as CSS variables in the `:root` selector (lines 20-45):

```css
:root {
  --midnight: #0F172A;           /* Primary dark background */
  --royal-blue: #1E40AF;         /* Accent color */
  --gold: #C8A45D;               /* Primary CTA color */
  --white: #FFFFFF;              /* Primary text */
  --slate: #64748B;              /* Secondary text */
  --silver: #D1D5DB;             /* Tertiary/hover color */
}
```

**To change the accent color:**
1. Locate `--gold: #C8A45D;`
2. Replace `#C8A45D` with new hex color
3. This automatically updates all gold accents throughout the site

**To change the dark background:**
1. Locate `--midnight: #0F172A;`
2. Replace with new color hex
3. All dark surfaces will update

### Font Changes

Located in `:root` (lines ~36-38):

```css
--font-display: "Space Grotesk", system-ui, sans-serif;
--font-body: "Sora", system-ui, sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

Update the font imports at the top (line ~12-14) if using different fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=NewFont:wght@400;600;700&display=swap" rel="stylesheet" />
```

### Animation Speed

Transition timings (lines ~46-49):

```css
--t-fast: 0.2s var(--ease);    /* Quick interactions */
--t-med: 0.4s var(--ease);     /* Standard transitions */
--t-slow: 0.6s var(--ease);    /* Slow animations */
```

Increase values for slower animations, decrease for faster.

### Spacing Adjustments

Use clamp() for responsive spacing throughout:
```css
padding: clamp(min, preferred, max);
gap: clamp(min, preferred, max);
font-size: clamp(min, preferred, max);
```

Example: `clamp(80px, 15vw, 140px)` = 80px min, 15% of viewport width preferred, 140px max

---

## Common Modifications

### Hide/Show Sections

To hide a section, add `display: none;` to its CSS or add inline style:
```html
<section id="services" class="services" style="display: none;">
```

### Change Hero Subtitle

**File:** `index.html` (line ~1214)
```html
<p class="hero-subtitle">Your new subtitle here</p>
```

### Update Footer Copyright Year

**File:** `index.html` (line ~1485)
```html
<p class="footer-copy">© 2025 Vertex Studio. All rights reserved.</p>
```

### Modify Form Placeholder Text

**File:** `index.html` (lines ~1459-1467)
```html
<input type="text" name="name" placeholder="Your Name" required />
<input type="email" name="email" placeholder="Your Email" required />
<textarea name="message" placeholder="Your Message" rows="5" required></textarea>
```

---

## EmailJS Setup

The contact form uses EmailJS to send emails.

### Current Configuration

- **Public Key:** T5TnI2xfX56JfIgaU
- **Service ID:** service_kw9oyum
- **Template ID:** template_pvj7j7w

Located in `index.html` (lines ~1514-1519)

### To Change Email Address

1. Go to [emailjs.com](https://emailjs.com)
2. Login with existing account
3. Create new email template with placeholders: `{{name}}`, `{{email}}`, `{{message}}`
4. Get new Template ID
5. Update `EMAILJS_TEMPLATE_ID` in the JavaScript section (line ~1517)

### To Test Email

Submit the contact form with test data. You should receive email at the configured address.

---

## SEO & Meta Tags

Located in `<head>` section (lines ~4-11):

```html
<meta name="description" content="SEO description here" />
<meta property="og:title" content="Title for social sharing" />
<meta property="og:description" content="Description for social sharing" />
<meta name="twitter:title" content="Twitter-specific title" />
```

**Update for SEO:**
1. Change `meta description` to 155-160 characters
2. Update Open Graph tags for social media appearance
3. Edit page title (line ~9) for browser tab

---

## Performance Monitoring

### Check Performance

1. **Google PageSpeed Insights:** https://pagespeed.web.dev
2. **GTmetrix:** https://gtmetrix.com
3. **WebPageTest:** https://webpagetest.org

### Image Optimization

If you add new project images:
1. Compress before uploading: use TinyPNG or ImageOptim
2. Use 2x resolution for Retina displays
3. Keep file size under 500KB for web
4. Use PNG for screenshots, JPEG for photos

### Lighthouse Testing

1. Open site in Chrome
2. Press F12 (DevTools)
3. Click "Lighthouse" tab
4. Run audit
5. Target: Performance >85, Accessibility >95, SEO >90

---

## Troubleshooting

### Contact Form Not Working

1. Check internet connection
2. Open browser DevTools (F12)
3. Check Console for errors
4. Verify EmailJS credentials in code (lines 1514-1519)
5. Check spam folder for test emails

### Styling Not Updating

1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Do a hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Check that CSS variable is defined in `:root`
4. Ensure semicolons are correct in CSS

### Images Not Displaying

1. Verify image path is correct: `./img/filename.png`
2. Check image file exists in `/img/` folder
3. Use relative paths (with `./`) not absolute paths
4. Check file extension matches (case-sensitive)

### Navigation Not Scrolling

1. Verify section IDs match nav button data-target (case-sensitive)
2. Check scroll-behavior in CSS
3. Verify scroll-padding-top matches navbar height
4. Test in different browser

### Mobile Menu Not Closing

1. Check that `closeMenu()` function is called
2. Verify backdrop click handler is attached
3. Test keyboard escape key
4. Check z-index values are correct

---

## Backup & Version Control

### Before Making Changes

1. Save a backup: duplicate the entire folder
2. Note the current date
3. Keep backups for at least 3 versions

### Recommended: Use Git

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Description of changes"

# View history
git log
```

---

## Analytics & Tracking (Optional)

### Add Google Analytics

1. Create account at google.com/analytics
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `<head>` section:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Conversions

Add event tracking to buttons:
```html
<button onclick="gtag('event', 'contact_click');">Start Your Project</button>
```

---

## Browser Support

The site works on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## File Structure Reference

```
portfolio-main/
├── index.html                    # Main website file
├── BRAND_GUIDE.md               # Brand identity guidelines
├── MAINTENANCE_GUIDE.md         # This file
├── TRANSFORMATION_SUMMARY.md    # Redesign documentation
├── CNAME                        # Domain configuration
└── img/
    ├── vertex-studio-logo.svg   # Brand logo
    ├── GuessNumber.png          # Project images
    ├── ayoFlow.png
    ├── chefChristian.png
    ├── humbleDelicacies.png
    ├── langGuesser.png
    ├── myPicture.jpg
    ├── olaBank.png
    ├── petiteFocus.png
    ├── pigGame.png
    ├── rockpper.png
    ├── shalomEntreprise.png
    ├── ubuntu.png
    └── vividSpaces.png
```

---

## Development Tips

### Edit in Browser

For quick testing, use browser DevTools:
1. Press F12 to open DevTools
2. Click Elements/Inspector tab
3. Right-click element → Edit as HTML
4. Make changes and see real-time updates
5. Note: Changes disappear on refresh

### Local Development

For serious work, edit in code editor:
1. VS Code, Sublime, or Atom recommended
2. Install Live Server extension
3. Right-click index.html → "Open with Live Server"
4. Changes save automatically

### Testing Mobile

1. Open DevTools (F12)
2. Click device toggle (mobile icon)
3. Select device size
4. Test navigation and forms
5. Check orientation changes

---

## Advanced Customizations

### Change Logo

Replace logo SVG in two places:
1. Navigation (line ~1055)
2. Footer (line ~1477)

### Add Custom Font

1. Get font from Google Fonts
2. Add link to `<head>` (line ~12)
3. Update CSS variable in `:root`
4. Update font-family throughout

### Add New Section

1. Copy existing section structure
2. Add unique ID (e.g., `id="new-section"`)
3. Add nav button with data-target
4. Add to sections observer (line ~1541)
5. Style with CSS classes

### Change Layout

Modify grid templates in CSS:
- `.services-grid` (line ~441)
- `.projects-grid` (line ~624)
- `.skills-grid` (line ~554)

---

## Getting Help

If something breaks:
1. Check browser console for errors (F12)
2. Review the TRANSFORMATION_SUMMARY.md
3. Refer to BRAND_GUIDE.md for design specs
4. Verify code syntax (matching braces, quotes, semicolons)
5. Check recent changes to identify what broke

---

## Deployment

### GitHub Pages

If using GitHub Pages:
1. Push to `main` branch
2. Go to repository Settings
3. Navigate to Pages section
4. Select `main` branch as source
5. Site deploys automatically

### Custom Domain

If using custom domain:
1. Update CNAME file with domain
2. Configure domain DNS settings
3. Point to GitHub Pages servers
4. Domain resolves in 24-48 hours

### Regular Hosting

Upload all files to web hosting via:
- FTP (FileZilla)
- Hosting control panel
- Git deployment
- CDN (Netlify, Vercel, etc.)

---

**Vertex Studio Website**
*Production ready • Fully documented • Easy to maintain*

Questions? Refer to BRAND_GUIDE.md or review the HTML comments in index.html.
