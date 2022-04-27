import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),

		paths: {
            // change below to your repo name
            base: process.env.NODE_ENV !== "production" ? "" : "/site",
        },
	}
};

export default config;
