# Disabled workflows

GitHub Actions only runs files in `.github/workflows/`, so nothing here runs.

## deploy.yml

On every push to `main` (or a manual run) it lints the site, runs `npm run build` (which
produces `deploy.zip`, the Node.js app for Namecheap) and keeps `deploy.zip` as a download on
the workflow run for 14 days. Upload it in cPanel as described in the main README.

### To enable it

1. In the repo's **Settings → Secrets and variables → Actions → Variables**, add
   `NEXT_PUBLIC_MOJO_API_URL` (the API origin, without `/v1`) and, optionally,
   `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_LAUNCH_DATE`, `NEXT_PUBLIC_APP_STORE_URL`,
   `NEXT_PUBLIC_PLAY_STORE_URL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_TWITTER_HANDLE`,
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
2. Move the file:

   ```bash
   git mv .github/workflows-disabled/deploy.yml .github/workflows/deploy.yml
   ```
