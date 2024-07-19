export { headings }

import type { HeadingDefinition } from '@brillout/docpress'

const headings = [
  {
    level: 1,
    title: 'Overview',
    titleEmoji: 'compass'
  },
  {
    level: 2,
    title: 'Introduction',
    titleDocument: 'Vike',
    url: '/'
  },
  {
    level: 2,
    title: 'Why Vike',
    url: '/why'
  },
  {
    level: 2,
    title: 'FAQ',
    url: '/faq'
  },
  {
    level: 2,
    title: 'Next.js Comparison',
    url: '/nextjs',
    sectionTitles: ['React Server Components']
  },
  {
    level: 1,
    title: 'Get Started',
    titleEmoji: 'seedling'
  },
  /*
  {
    level: 2,
    title: 'Getting started with Vike',
    url: '/start'
  },
  */
  {
    level: 2,
    title: 'Scaffold new Vike app',
    url: '/new'
  },
  {
    level: 2,
    title: 'Add SSR/SSG to existing Vite app',
    url: '/add'
  },
  {
    level: 1,
    title: 'Guides',
    titleEmoji: 'books'
  },
  {
    level: 4,
    title: 'Basics'
  },
  {
    level: 2,
    title: 'Data Fetching',
    url: '/data-fetching',
    sectionTitles: ['Pre-rendering (SSG)']
  },
  {
    level: 2,
    title: 'Pre-rendering (SSG)',
    url: '/pre-rendering'
  },
  {
    level: 2,
    title: 'Common Issues',
    url: '/common-issues'
  },
  {
    level: 4,
    title: 'Routing'
  },
  {
    level: 2,
    title: 'Routing',
    url: '/routing'
  },
  {
    level: 2,
    title: 'Base URL',
    url: '/base-url'
  },
  {
    level: 2,
    title: 'Active Links',
    url: '/active-links'
  },
  {
    level: 4,
    title: 'More'
  },
  {
    level: 2,
    title: '`<head>` meta tags',
    url: '/head'
  },
  {
    level: 2,
    title: 'Authentication',
    url: '/auth'
  },
  {
    level: 2,
    title: 'Static Directory (`public/`)',
    url: '/static-directory'
  },
  {
    level: 2,
    title: '`.server.js` / `.client.js` / `.shared.js`',
    titleInNav: '`.server.js`/`.client.js`/`.shared.js`',
    url: '/file-env'
  },
  {
    level: 2,
    title: 'Environment Variables',
    url: '/env'
  },
  {
    level: 2,
    title: 'Internationalization (i18n)',
    url: '/i18n'
  },
  {
    level: 2,
    title: 'File Structure',
    url: '/file-structure'
  },
  {
    level: 2,
    title: 'Paths Aliases',
    url: '/path-aliases'
  },
  {
    level: 2,
    title: 'Preloading',
    url: '/preloading'
  },
  {
    level: 2,
    title: 'HTML Streaming',
    url: '/streaming'
  },
  {
    level: 2,
    title: 'API Routes',
    url: '/api-routes'
  },
  {
    level: 2,
    title: 'RPC',
    url: '/RPC'
  },
  {
    level: 2,
    title: 'Error Handling',
    url: '/errors'
  },
  {
    level: 2,
    title: 'Debug',
    url: '/debug'
  },
  {
    level: 2,
    title: 'Build Your Own Framework',
    url: '/build-your-own-framework'
  },
  {
    level: 1,
    title: 'Deploy',
    titleEmoji: 'earth'
  },
  {
    level: 4,
    title: 'Static hosts'
  },
  {
    level: 2,
    title: 'GitHub Pages',
    url: '/github-pages'
  },
  {
    level: 2,
    title: 'Cloudflare Pages',
    url: '/cloudflare-pages',
    sectionTitles: ['Full-stack']
  },
  {
    level: 2,
    title: 'Netlify',
    url: '/netlify'
  },
  {
    level: 2,
    title: 'Static Hosts',
    titleInNav: '... more',
    url: '/static-hosts'
  },
  {
    level: 4,
    title: 'Serverless'
  },
  {
    level: 2,
    title: 'Cloudflare Workers',
    url: '/cloudflare-workers',
    sectionTitles: ['Cloudflare Pages']
  },
  {
    level: 2,
    title: 'Vercel',
    url: '/vercel'
  },
  {
    level: 2,
    title: 'AWS Lambda',
    url: '/aws-lambda'
  },
  {
    level: 2,
    title: 'Netlify Functions',
    url: '/netlify-functions'
  },
  {
    level: 4,
    title: 'Full-stack'
  },
  {
    level: 2,
    title: 'AWS',
    url: '/aws'
  },
  {
    level: 2,
    title: 'Docker',
    url: '/docker'
  },
  {
    level: 4,
    title: 'Other'
  },
  {
    level: 2,
    title: 'Deploy',
    titleInNav: 'Other deployment',
    url: '/deploy'
  },
  {
    level: 1,
    title: 'Integration',
    titleEmoji: 'plug'
  },
  {
    level: 4,
    title: 'Data fetching'
  },
  {
    level: 2,
    title: 'Telefunc (RPC)',
    url: '/telefunc'
  },
  {
    level: 2,
    title: 'tRPC',
    url: '/tRPC'
  },
  {
    level: 2,
    title: 'TanStack Query',
    url: '/tanstack-query'
  },
  {
    level: 2,
    title: 'Apollo (GraphQL)',
    url: '/apollo-graphql'
  },
  {
    level: 2,
    title: 'Relay (GraphQL)',
    url: '/relay'
  },
  {
    level: 2,
    title: 'urql (GraphQL)',
    url: '/urql'
  },
  {
    level: 2,
    title: 'gRPC',
    url: '/grpc'
  },
  {
    level: 2,
    title: 'Socket.IO',
    url: '/socket-io'
  },
  {
    level: 2,
    titleInNav: '... more',
    title: 'Data Tools',
    url: '/data-tools'
  },
  {
    level: 4,
    title: 'State management'
  },
  {
    level: 2,
    title: 'Redux',
    url: '/redux'
  },
  {
    level: 2,
    title: 'Pinia',
    url: '/pinia'
  },
  {
    level: 2,
    title: 'Stores',
    titleInNav: '... more',
    url: '/stores'
  },
  {
    level: 4,
    title: 'Authentication'
  },
  {
    level: 2,
    title: 'Auth.js',
    url: '/Auth.js'
  },
  {
    level: 4,
    title: 'CSS'
  },
  {
    level: 2,
    title: 'Tailwind CSS',
    url: '/tailwind-css'
  },
  {
    level: 2,
    title: 'daisyUI',
    url: '/daisyui'
  },
  {
    level: 2,
    title: 'Compiled',
    url: '/compiled'
  },
  {
    level: 2,
    title: 'Vuetify',
    url: '/vuetify'
  },
  {
    level: 2,
    title: 'styled-components',
    titleInNav: 'styled-components',
    url: '/styled-components'
  },
  {
    level: 2,
    title: '`styled-jsx`',
    titleInNav: 'styled-jsx',
    url: '/styled-jsx'
  },
  {
    level: 2,
    title: 'MUI',
    url: '/mui'
  },
  {
    level: 2,
    title: 'PrimeReact',
    url: '/primereact'
  },
  {
    level: 2,
    title: 'NextUI',
    url: '/nextui'
  },
  {
    level: 2,
    title: 'Bootstrap',
    url: '/bootstrap'
  },
  {
    level: 2,
    title: 'Grommet',
    url: '/grommet'
  },
  {
    level: 2,
    title: 'Mantine',
    url: '/mantine'
  },
  {
    level: 2,
    title: 'Sass / Less / Stylus',
    url: '/sass'
  },
  {
    level: 2,
    titleInNav: '... more',
    title: 'CSS Tools',
    url: '/css-tools',
    sectionTitles: ['Collect styles upon SSR']
  },
  {
    level: 4,
    title: 'UI framework'
  },
  {
    level: 2,
    title: 'React',
    url: '/react',
    sectionTitles: ['React Server Components']
  },
  {
    level: 2,
    title: 'Vue',
    url: '/vue'
  },
  {
    level: 2,
    title: 'Svelte',
    url: '/svelte'
  },
  {
    level: 2,
    title: 'Preact',
    url: '/preact'
  },
  {
    level: 2,
    title: 'Solid',
    url: '/solid'
  },
  {
    level: 2,
    title: 'Angular',
    url: '/angular'
  },
  {
    level: 2,
    titleInNav: '... more',
    title: 'UI Frameworks',
    url: '/ui-frameworks'
  },
  {
    level: 4,
    title: 'JavaScript Server'
  },
  {
    level: 2,
    title: 'HTTPS',
    url: '/https'
  },
  {
    level: 2,
    title: 'Express.js',
    url: '/express'
  },
  {
    level: 2,
    title: 'Hono',
    url: '/hono'
  },
  {
    level: 2,
    title: 'Deno',
    url: '/deno'
  },
  {
    level: 2,
    title: 'Fastify',
    url: '/fastify'
  },
  {
    level: 2,
    title: 'Nitro',
    url: '/nitro'
  },
  {
    level: 2,
    title: 'H3',
    url: '/h3'
  },
  {
    level: 2,
    title: 'Servers',
    titleInNav: '... more',
    url: '/servers'
  },
  {
    level: 4,
    title: 'Backend'
  },
  {
    level: 2,
    title: 'Ruby on Rails',
    url: '/ruby-on-rails'
  },
  {
    level: 2,
    title: 'Firebase',
    url: '/firebase'
  },
  {
    level: 2,
    title: 'Nginx',
    url: '/nginx'
  },
  {
    level: 2,
    title: 'Backends',
    titleInNav: '... more',
    url: '/backends'
  },
  {
    level: 4,
    title: 'Other'
  },
  {
    level: 2,
    title: 'Markdown',
    url: '/markdown'
  },
  {
    level: 2,
    title: 'MDXEditor',
    url: '/MDXEditor'
  },
  {
    level: 2,
    title: 'Tauri',
    url: '/tauri'
  },
  {
    level: 2,
    title: 'Tool integration',
    titleInNav: '... more',
    url: '/integration'
  },
  {
    level: 1,
    title: 'API',
    titleEmoji: 'gear'
  },
  {
    level: 2,
    title: '`pageContext`',
    url: '/pageContext'
  },
  {
    level: 2,
    titleInNav: '`Page`',
    title: '`<Page>`',
    url: '/Page'
  },
  {
    level: 2,
    title: '`route`',
    url: '/route'
  },
  {
    level: 2,
    titleInNav: '`Head`',
    title: '`<Head>`',
    url: '/Head'
  },
  {
    level: 2,
    titleInNav: '`Layout`',
    title: '`<Layout>`',
    url: '/Layout'
  },
  {
    level: 2,
    title: 'Config',
    url: '/config'
  },
  {
    level: 2,
    title: 'Error page',
    url: '/error-page'
  },
  {
    level: 2,
    title: '`+client.js`',
    url: '/client'
  },
  {
    level: 4,
    title: 'Routing'
  },
  {
    level: 2,
    title: 'Filesystem Routing',
    url: '/filesystem-routing'
  },
  {
    level: 2,
    title: 'Route String',
    url: '/route-string'
  },
  {
    level: 2,
    title: 'Route Function',
    url: '/route-function'
  },
  {
    level: 2,
    title: 'Routing Precedence',
    url: '/routing-precedence'
  },
  {
    level: 4,
    title: 'Hooks'
  },
  {
    level: 2,
    title: '`data()` hook',
    titleInNav: '`data()`',
    url: '/data',
    sectionTitles: ['Without `vike-{react,vue,solid}`']
  },
  {
    level: 2,
    title: '`guard()` hook',
    titleInNav: '`guard()`',
    url: '/guard'
  },
  {
    level: 2,
    title: '`onBeforeRender()` hook',
    titleInNav: '`onBeforeRender()`',
    url: '/onBeforeRender',
    sectionTitles: ['`onBeforeRender()` + `meta`']
  },
  {
    level: 2,
    title: '`onHydrationEnd()` hook',
    titleInNav: '`onHydrationEnd()`',
    url: '/onHydrationEnd'
  },
  {
    level: 2,
    title: '`onPageTransitionStart()` hook',
    titleInNav: '`onPageTransitionStart()`',
    url: '/onPageTransitionStart'
  },
  {
    level: 2,
    title: '`onPageTransitionEnd()` hook',
    titleInNav: '`onPageTransitionEnd()`',
    url: '/onPageTransitionEnd'
  },
  {
    level: 2,
    title: '`onBeforePrerenderStart()` hook',
    titleInNav: '`onBeforePrerenderStart()`',
    url: '/onBeforePrerenderStart'
  },
  {
    level: 2,
    title: '`onPrerenderStart()` hook',
    titleInNav: '`onPrerenderStart()`',
    url: '/onPrerenderStart'
  },
  {
    level: 2,
    title: 'Hooks',
    titleInNav: '... more',
    url: '/hooks'
  },
  {
    level: 4,
    title: 'Utils (server- & client-side)'
  },
  {
    level: 2,
    title: '`useData()`',
    url: '/useData',
    sectionTitles: ['TypeScript', 'Without `vike-{react,vue,solid}`']
  },
  {
    level: 2,
    title: '`usePageContext()`',
    url: '/usePageContext'
  },
  {
    level: 2,
    title: '`useConfig()`',
    url: '/useConfig'
  },
  {
    level: 2,
    title: '`clientOnly()`',
    url: '/clientOnly'
  },
  {
    level: 2,
    title: '`throw redirect()`',
    url: '/redirect'
  },
  {
    level: 2,
    title: '`throw render()`',
    url: '/render'
  },
  {
    level: 4,
    title: 'Utils (client-side)'
  },
  {
    level: 2,
    title: '`navigate()`',
    url: '/navigate'
  },
  {
    level: 2,
    title: '`reload()`',
    url: '/reload'
  },
  {
    level: 2,
    title: '`prefetch()`',
    url: '/prefetch'
  },
  {
    level: 4,
    title: 'Utils (server-side)'
  },
  {
    level: 2,
    title: '`renderPage()`',
    url: '/renderPage'
  },
  {
    level: 2,
    title: '`escapeInject`',
    url: '/escapeInject'
  },
  {
    level: 2,
    title: '`injectFilter()`',
    url: '/injectFilter'
  },
  {
    level: 2,
    title: '`prerender()`',
    url: '/prerender-programmatic'
  },
  {
    level: 4,
    title: 'Settings'
  },
  {
    level: 2,
    title: '`title`',
    url: '/title'
  },
  {
    level: 2,
    title: '`ssr`',
    url: '/ssr'
  },
  {
    level: 2,
    title: '`prerender`',
    url: '/prerender',
    sectionTitles: ['`disableAutoRun`']
  },
  {
    level: 2,
    title: '`redirects`',
    url: '/redirects'
  },
  {
    level: 2,
    title: '`prefetchStaticAssets`',
    url: '/prefetchStaticAssets'
  },
  {
    level: 2,
    title: '`hooksTimeout`',
    url: '/hooksTimeout'
  },
  {
    level: 2,
    title: '`passToClient`',
    url: '/passToClient'
  },
  {
    level: 2,
    title: '`clientRouting`',
    url: '/clientRouting'
  },
  {
    level: 2,
    title: '`meta`',
    url: '/meta',
    sectionTitles: [
      'Example: `dataEndpointUrl`',
      'Example: `sql`',
      'Example: `title` and `description`',
      'Example: `Layout`',
      'Example: modify `data()` env'
    ]
  },
  {
    level: 2,
    title: 'Settings',
    titleInNav: '... more',
    url: '/settings'
  }
] satisfies HeadingDefinition[]
