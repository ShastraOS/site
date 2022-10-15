/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
({
	dest: 'public'
  })
import runtimeCaching from 'next-pwa/cache';

export default withPWA({

	pwa: {
		runtimeCaching,
		dest: "public",
		register: true,
		skipWaiting: true,
	}
});
