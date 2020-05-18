### Gatsy-image-example

### Required Plugins:
+ gatsby-image
+ gatsby-transformer-sharp
+ gatsby-plugin-sharp


### Install Plugins:
+ `npm install --save gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp`

### Add Plugins to `gatsby-config.js`
+ plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`]

### Setup `gatsby-source-filesystem` to make images available in `graphql`
```js
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}```


### Scss Support
+ installplugins as: `npm install node-sass gatsby-plugin-sass`
+ Add this to `gatsby-config.js`: plugins: `` [`gatsby-plugin-sass`] ``
+ import custom.scss to index.js
