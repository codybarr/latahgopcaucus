import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Latah GOP Caucus Information',
      favicon: '/gop.png',
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content:
              'https://opengraph.b-cdn.net/production/documents/381727fb-b4ba-4c54-b36d-e0e8ac0d2d15.png?token=1k7TjXOtJDf9ZmAt0mQxGSJK-EQiEQavkXTQP4Gex4A&height=630&width=1200&expires=33241008462',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content:
              'https://opengraph.b-cdn.net/production/documents/381727fb-b4ba-4c54-b36d-e0e8ac0d2d15.png?token=1k7TjXOtJDf9ZmAt0mQxGSJK-EQiEQavkXTQP4Gex4A&height=630&width=1200&expires=33241008462',
          },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/codybarr/latahgopcaucus/edit/master/',
      },
      sidebar: [
        {
          label: 'Caucus Information',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Find My Precinct', link: '/caucus/find-precinct/' },
            { label: 'Caucus Location', link: '/caucus/location/' },
            { label: 'Event Details', link: '/caucus/details/' },
          ],
        },
      ],
    }),
  ],
})

// <!-- HTML Meta Tags -->
// <title>Welcome to the Latah GOP Caucus Website</title>
// <meta name="description" content="Look up your local caucus location">

// <!-- Facebook Meta Tags -->
// <meta property="og:url" content="https://latahgopcaucus.vercel.app/">
// <meta property="og:type" content="website">
// <meta property="og:title" content="Welcome to the Latah GOP Caucus Website">
// <meta property="og:description" content="Look up your local caucus location">
// <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/381727fb-b4ba-4c54-b36d-e0e8ac0d2d15.png?token=1k7TjXOtJDf9ZmAt0mQxGSJK-EQiEQavkXTQP4Gex4A&height=630&width=1200&expires=33241008462">

// <!-- Twitter Meta Tags -->
// <meta name="twitter:card" content="summary_large_image">
// <meta property="twitter:domain" content="latahgopcaucus.vercel.app">
// <meta property="twitter:url" content="https://latahgopcaucus.vercel.app/">
// <meta name="twitter:title" content="Welcome to the Latah GOP Caucus Website">
// <meta name="twitter:description" content="Look up your local caucus location">
// <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/381727fb-b4ba-4c54-b36d-e0e8ac0d2d15.png?token=1k7TjXOtJDf9ZmAt0mQxGSJK-EQiEQavkXTQP4Gex4A&height=630&width=1200&expires=33241008462">

// <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta>
