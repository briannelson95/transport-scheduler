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
    }
};

export default nextConfig;
