import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Latah GOP Caucus Information',
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
