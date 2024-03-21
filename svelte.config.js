import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
		// adapter: firebase()
		adapter: adapter(),
		prerender: {
			default: true
		},
		paths: {
			base: dev ? '' : '/FearOfElronSite'
		},
		appDir: 'internal'
	}
};

export default config;