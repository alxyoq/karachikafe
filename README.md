# Karachi Kafe

A fast, responsive single-page restaurant website for Karachi Kafe in Voorhees, New Jersey.

## Local preview

No build step is required. Serve the project directory with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

The included `netlify.toml` publishes the repository root directly. In Netlify:

- Build command: leave blank
- Publish directory: `.`

The site is plain HTML, CSS, and JavaScript with no framework or runtime dependency.
