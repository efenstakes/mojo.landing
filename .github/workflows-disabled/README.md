# Disabled workflows

GitHub Actions only runs files in `.github/workflows/`, so nothing here runs.

## deploy.yml

On every push to `main` (or a manual run), this workflow:

1. lints the site and builds a static export (`npm run build:static`, writes `out/`);
2. adds `deploy/apache.htaccess` as `out/.htaccess` (real 404s, HTTPS, caching, OG image types);
3. uploads `out/` by FTP to the `/mojo/` folder on the Heylixir host, so the site is live at
   https://heylixir.com/mojo. The Heylixir site in `/` is not touched.

### To enable it

1. In the repo's **Settings → Secrets and variables → Actions**, add:
   - Secrets: `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD` (same FTP account as heylixir.inc.landing).
   - Variables:
     - `NEXT_PUBLIC_MOJO_API_URL` (required for the waitlist form, e.g. `https://api.example.com`, no `/api`).
     - Optional: `NEXT_PUBLIC_SITE_URL` (default `https://heylixir.com/mojo`), `FTP_SERVER_DIR`
       (default `/mojo/`), `FTP_PROTOCOL` (default `ftps`; use `ftp` if your host has no FTPS).
     - Optional: `NEXT_PUBLIC_LAUNCH_DATE` (countdown target, default `2026-12-01T00:00:00Z`),
       `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL`, `NEXT_PUBLIC_GA_ID`,
       `NEXT_PUBLIC_TWITTER_HANDLE`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`,
       `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
2. Create a `production` environment (Settings → Environments) if you want approvals before deploys.
3. Move the file:

   ```bash
   git mv .github/workflows-disabled/deploy.yml .github/workflows/deploy.yml
   ```

If you set `NEXT_PUBLIC_SITE_URL` to a different domain (for example `https://getmojo.app`), set
`FTP_SERVER_DIR` to that site's web root as well.
