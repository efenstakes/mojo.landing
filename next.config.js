/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports -- CommonJS config
const path = require('path')

// The site's public URL (set NEXT_PUBLIC_SITE_URL in .env.production). It is served at the root of
// mojo.heylixir.com, so basePath is empty; a URL with a path (e.g. https://example.com/mojo) would
// serve the site under that path instead.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mojo.heylixir.com'
const basePath = new URL(siteUrl).pathname.replace(/\/+$/, '')

const nextConfig = {
    basePath,
    devIndicators: false,
    trailingSlash: false,
    distDir: '.next',     // Ensure default directory usage
    // needs nodejs server to run it
    output: 'standalone',
    // cleans build for "output: 'standalone'" to avoid mangling the build folders
    outputFileTracingRoot: path.join(__dirname),
    // the social card fonts are read from disk, so ship them with the standalone server
    outputFileTracingIncludes: { '/**': ['./assets/fonts/**'] },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // when using 'output: 'export',', images cannot be optimised because there is no...
    // server to do it from so we have to set 'unoptimized: true' so nextjs doesnt try to optimise them
    // id it tries, images do not load
    images: {
        unoptimized: true,
    },

    // --- RANDOMIZE THE BUILD ID TO BYPASS WAF FIREWALL ---
    generateBuildId: async () => {
        // Generates a random alphanumeric string for chunk routing namespaces
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    },

    // this site's own settings
    cacheComponents: true,
    reactCompiler: true,
    poweredByHeader: false,
    // the site used to live under /mojo; send old links to the same page at the root
    async redirects() {
        return basePath ? [] : [
            { source: '/mojo', destination: '/', permanent: true },
            { source: '/mojo/:path*', destination: '/:path*', permanent: true },
        ]
    },
}

module.exports = nextConfig
