module.exports = {
    async rewrites() {
        return [
            {
                source: '/burndrop/:path*',
                destination: 'https://burndrop.iotex.io/_wildcard_api/:path*',
            }
        ]
    },
}
