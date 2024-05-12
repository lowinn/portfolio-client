import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
  export default withNextIntl(withMDX(nextConfig));
