import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        turbo:{
            rules:{
                '*.svg':{
                    loaders:['@svgr/webpack'],
                    as:'*.js'
                }
            }
        }
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ];
    }
};
export default withNextIntl(nextConfig);
