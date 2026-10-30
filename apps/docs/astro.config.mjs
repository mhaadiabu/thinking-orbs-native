import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import nimbus, { defineConfig as defineNimbusConfig } from '@cloudflare/nimbus-docs';

const nimbusConfig = defineNimbusConfig({
  site: 'https://orbs-native.mhaadi.dev',
  title: 'Thinking Orbs',
  description: 'Native-feeling thinking states for React Native.',
  locale: 'en',
  github: 'https://github.com/mhaadiabu/thinking-orbs-native',
  socialImageAlt: 'Thinking Orbs documentation preview',
});

export default defineConfig({
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    icon(),
    nimbus(nimbusConfig, {
      rules: {
        'nimbus/frontmatter-shape': 'error',
        'nimbus/internal-link': 'error',
      },
    }),
  ],
});
