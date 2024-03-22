/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    async rewrites()
    {
        return [
            {
                source: '/map',
                destination: 'http://map.masterbaseguild.it:8123',
            },
            {
                source: '/:path*',
                destination: 'http://map.masterbaseguild.it:8123/:path*',
            },
        ]
    },
}

module.exports = nextConfig