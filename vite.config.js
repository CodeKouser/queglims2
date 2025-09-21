import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	// This is the fix: tell Vite/Rollup to not bundle these Node.js modules
	// and treat them as external dependencies available in the runtime.
	ssr: {
		noExternal: ['mongodb', 'mongodb-connection-string-url', 'bson']
	}
});
