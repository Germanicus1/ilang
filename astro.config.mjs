// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

const BASEURL = process.env.BASEURL || '';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: 'https://germanicus1.github.io',
  base: process.env.BASEURL || '/',
});