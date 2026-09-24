import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingIncludes: {
        '/*': ['./public/posts/**/*'],
    },
};

export default withMDX(nextConfig);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
