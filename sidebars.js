module.exports = {

    someSidebar: {

        'Getting Started': [

            'getting-started/home',

            {

                type: 'category',
                label: 'Components',
                collapsed: false,
                items: [
                    'getting-started/components/security',
                    'getting-started/components/coding',
                    'getting-started/components/infrastructure',
                    'getting-started/components/administration',
                    'getting-started/components/observability',
                    'getting-started/components/accountability',
                ]
            },

            'getting-started/life',
            'getting-started/toolbox'

        ],

        'Survival Guides': [
            'survival-guides/docker',
            'survival-guides/kubernetes'
        ],

        'DevOps & Your Career': [

            'careers/resume-builder'

        ],

        'Community': [

            'community/public'

        ]

    }

};

