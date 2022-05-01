//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	preprocess:[ preprocess(),mdsvex({
		extensions: ['.md'],
		layout: {
		  blog: 'src/routes/blog/_post.svelte'
		}
	  })
	],
	
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter() // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
	}
};

export default config;
