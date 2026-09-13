import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const podcastDock = {
  name: 'josh-podcast-dock',
  transformIndexHtml() {
    return [{
      tag: 'script',
      attrs: {
        src: 'https://cdn.jsdelivr.net/gh/joshualparris/JoshHub@35c4348b4adfbc1c64bad8a3d3e31ede008a4441/public/podcast-dock.js',
        'data-topics': 'faith',
        'data-label': '🎧 Listen to a different faith podcast',
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
