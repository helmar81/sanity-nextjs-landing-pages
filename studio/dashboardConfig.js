export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee65909840d1c621e356a01',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7pektcyq',
                  apiId: '6474eaaa-429a-4f45-9295-4d5d9b639b1b'
                },
                {
                  buildHookId: '5ee6590978ea9687fbdb4309',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6snrwik9',
                  apiId: 'b5c3abe4-739b-4b8f-b34f-4cc65d2cea69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helmar81/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6snrwik9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
