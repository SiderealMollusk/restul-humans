/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        MY_MSG: 'Hello from next.config.js!',
        SERVER_START_TIME: new Date().toString(),
    },
}

module.exports = nextConfig
