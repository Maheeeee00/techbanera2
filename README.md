# Tech Banara — Agency Website

Static website for Tech Banara: web development, POS systems, custom software, SEO, ads setup, campaign management and maintenance.

Built with plain **HTML, CSS and a little JavaScript**. No build step needed.

## Pages

| File | Page |
|------|------|
| `index.html` | Home (hero, services overview, process) |
| `services.html` | All services |
| `pos.html` | POS systems & hardware |
| `seo-ads.html` | SEO, ads setup & campaigns |
| `pricing.html` | Pricing & FAQ |
| `contact.html` | Contact form |
| `404.html` | Page not found |

Shared files: `css/style.css`, `js/script.js`, `favicon.svg`.

## Run locally

Open `index.html` in your browser, or run a small server:

```bash
npx serve .
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com click **Add New → Project** and import the repository.
3. Framework preset: **Other**. Leave build command and output directory empty.
4. Click **Deploy**.

`vercel.json` enables clean URLs, so `/services` works as well as `/services.html`.

## Before going live

- Replace the email and phone number in `contact.html` and the other pages.
- Update prices in `pricing.html`.
- Replace sample stats (projects delivered, rankings, ROAS) with your real numbers.
- Connect the contact form to a service such as Formspree or Web3Forms so messages reach your inbox.
