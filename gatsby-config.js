module.exports = {
  siteMetadata: {
    title: "Val's Place"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`julius sans one`]
      }
    }
  ]
};
