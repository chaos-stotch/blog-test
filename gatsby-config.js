module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Devs Católicos`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `telegram`,
        url: `https://t.me/+9kW3KtaP_SEwZjUx`,
      },
      {
        name: `github`,
        url: `https://github.com/chaos-stotch`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  pathPrefix: "/reponame",
}
