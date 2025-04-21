import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



module.exports = {
    theme: {
      extend: {
        animation: {
          blink: 'blink 1s step-start infinite',
          typewriter: 'typewriter 3s steps(30, end) forwards',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          },
          typewriter: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
          },
        },
      },
    },
  };