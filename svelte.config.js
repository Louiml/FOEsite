import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
			base: dev ? '' : '/FearOfElronSite'
		},
		
        appDir: 'internal'
    },
    prerender: {
        enabled: true,
        onError: 'fail',
        entries: ['*']
    }
};

export default config;
