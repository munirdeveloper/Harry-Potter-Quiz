// import { purgeCss } from 'vite-plugin-tailwind-purgecss';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	base: "/Harry-Potter-Quiz/",
// 	plugins: [sveltekit(), purgeCss()]
// });

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
  base: "/Harry-Potter-Quiz/", // Specify the base URL for your project (optional)
  plugins: [
    sveltekit(), // Use SvelteKit Vite plugin
    purgeCss()   // Use PurgeCSS plugin for Tailwind CSS
  ]
});
