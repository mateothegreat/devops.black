/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'devops.rehab',
    tagline: 'prod problem now.',
    url: 'https://devops.rehab',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'mateothegreat',
    projectName: 'devops.rehab',
    themeConfig: {
        announcementBar: {
            id: 'support_us', // Any value that will identify this message.

            content:
                'We are looking to revamp our docs, please fill out&nbsp;<a target="" rel="noopener noreferrer" href="#">this survey</a>',
            backgroundColor: '#4e89e8', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
            isCloseable: true, // Defaults to `true`.
        },
        colorMode: {
            defaultMode: 'dark',
        },
        googleAnalytics: {
            trackingID: 'G-4K4907CP3E',
            anonymizeIP: true
        },
        navbar: {

            title: '',
            logo: {
                alt: 'devops.rehab Logo',
                src: 'img/logo-text.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://www.dsicommunity.org',
                    label: 'Discord Chat 💬',
                    position: 'right'
                },
                {
                    href: 'https://github.com/mateothegreat/devops.rehab',
                    label: 'View on GitHub ❤️',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Learn',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Contributors',
                    items: [
                        {
                            label: 'matthewdavis.io',
                            href: 'https://matthewdavis.io',
                        },
                        {
                            label: 'Canadian Luke',
                            href: 'https://talk-about-it.ca',
                        }
                    ],
                },
            ],
            logo: {
                alt: 'devops.rehab Logo',
                src: 'img/logo.png',
                href: 'https://devops.rehab',
            },
            copyright: `Copyright © ${new Date().getFullYear()} devops.rehab`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {

                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/mateothegreat/ops.rehab/edit/main/',

                    include: ['**/*.md', '**/*.mdx'],

                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,

                    docLayoutComponent: '@theme/DocPage',
                    docItemComponent: '@theme/DocItem',


                },
                blog: {

                    showReadingTime: true,
                    editUrl: 'https://github.com/mateothegreat/ops.rehab/edit/main/',

                },
                theme: {

                    customCss: require.resolve('./src/css/custom.css'),

                },
                sitemap: {

                    changefreq: 'daily',
                    priority: 0.5,
                    trailingSlash: false,

                }

            }

        ]
    ],

    plugins: [

        '@docusaurus/plugin-ideal-image'

    ],

};
