import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro'
import solid from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [
    solid(),
    Unocss({})
  ]
});
