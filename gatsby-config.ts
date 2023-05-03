import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `with-linaria`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-linaria',
  ]
}

export default config
