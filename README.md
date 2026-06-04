# Alex Morgan — PM Portfolio

A modern, responsive portfolio website for a Senior Product Manager specializing in AI products.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Fonts**: Fraunces (display) + DM Sans (body) via Google Fonts

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### All content lives in one file:
**`src/data/portfolio.js`** — Edit this file to change:
- Personal info (name, email, LinkedIn, location)
- Stats (years, products shipped, revenue influenced)
- Skills and expertise
- Work experience and education
- Case studies (all details: problem, research, strategy, metrics, etc.)
- Blog articles

### Styling
- **Colors and fonts**: `tailwind.config.js` and `src/index.css`
- **Dark mode**: Automatically persisted in localStorage

### Adding Your Resume PDF
1. Place your resume PDF at `public/resume.pdf`
2. The Download Resume buttons will automatically link to it

### Adding Case Study Images/Wireframes
1. Create a folder: `public/case-studies/[slug]/`
2. Add your images there
3. Reference them in the `caseStudies` array in `portfolio.js`

### Wiring Up the Contact Form
The contact form currently simulates submission. To make it functional:

**Option A — Formspree (easiest):**
```js
// In Contact.jsx, replace the handleSubmit function:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — Netlify Forms:** Add `data-netlify="true"` to the form element.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Vite — click Deploy
4. Your site is live! 🚀

The `vercel.json` file handles SPA client-side routing automatically.

## Project Structure

```
src/
  data/
    portfolio.js        ← All content lives here
  components/
    Navbar.jsx
    Footer.jsx
    AnimatedSection.jsx
  pages/
    Home.jsx
    About.jsx
    CaseStudies.jsx
    CaseStudyDetail.jsx
    Thinking.jsx
    Resume.jsx
    Contact.jsx
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  resume.pdf            ← Add your resume here
```
