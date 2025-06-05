/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:companyId',
                destination: '/:companyId/dashboard',
                permanent: true
            }
        ]
    },
    env: {
        NEXT_PUBLIC_DEFAULT_ORGANIZATION: process.env.DEFAULT_ORGANIZATION
    }
};

export default nextConfig;
