import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const podcastDock = {
  name: 'josh-podcast-dock',
  transformIndexHtml() {
    return [{
      tag: 'script',
      attrs: {
        src: 'https://cdn.jsdelivr.net/gh/joshualparris/JoshHub@ebb0d17495c92d3ce09df1fd1bdb5d4c2056914d/public/podcast-launcher-v3.js',
        'data-topics': 'faith',
        'data-label': '🎧 Listen to a different faith podcast',
        'data-launcher-label': '🎧 Podcasts',
        'data-quiet-selectors': "[data-prayer-mode='true'],.prayer-mode,.reflection-mode",
        defer: true,
      },
      injectTo: 'body',
    }]
  },
}

export default defineConfig({
  plugins: [react(), podcastDock],
  // Relative assets make this work on both username.github.io and username.github.io/repo-name.
  base: './',
})