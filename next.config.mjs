import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { hostname } from 'os';

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'cdn.shopify.com',
            protocol: 'https'
        }]
    }
};

export default nextConfig;