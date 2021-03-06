module.exports = {
  siteMetadata: {
    title: 'choyongjoon',
    author: 'Cho, Yongjun',
    description: '웹 프론트엔드, 음악, 책 등등 by 조용준',
    siteUrl: 'https://choyongjoon.com',
    social: {
      twitter: '@choyongjoon',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139193906-1`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             const siteUrl = site.siteMetadata.siteUrl
    //             const postText = `
    //             <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at choyongjoon.com. You can read it online by <a href="${siteUrl +
    //               edge.node.fields.slug}">clicking here</a>.)</div>
    //           `

    //             let html = edge.node.html
    //             // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
    //             html = html
    //               .replace(/href="\//g, `href="${siteUrl}/`)
    //               .replace(/src="\//g, `src="${siteUrl}/`)
    //               .replace(/"\/static\//g, `"${siteUrl}/static/`)
    //               .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.spoiler,
    //               date: edge.node.fields.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': html + postText }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   html
    //                   fields {
    //                     slug
    //                   }
    //                   frontmatter {
    //                     title
    //                     date
    //                     spoiler
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Cho, Yongjun's choyongjoon.com Blog RSS Feed",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `choyongjoon.com`,
        short_name: `choyongjoon.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-dark-mode',
  ],
}
