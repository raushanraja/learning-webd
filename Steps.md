### 1. Gatsy-image-netlify-example

### 1.1. Image Support:
+ Plugins: 
  + `gatsby-image`+
  + `gatsby-transformer-sharp`
  + `gatsby-plugin-sharp`
+ Install:
  + `npm install --save gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp`
+ Add to `gatsby-config.js`: plugins:
  +  [ \`gatsby-transformer-sharp\`, \`gatsby-plugin-sharp\` ]

### 1.2. Setup `gatsby-source-filesystem` to make images available in `graphql`
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
}
```


### 1.2. SCSS/SASS Support
+ Plugins:
  + `node-sass`
  + `gatsby-plugin-sass`
+ Install :
  +  `npm install --save node-sass gatsby-plugin-sass`
+ Add to `gatsby-config.js`: plugins: 
  + [ \`gatsby-plugin-sass\` ]
+ import custom.scss to index.js

### 1.3. Netlify Support
+ Plugins:
  + `netlify-cms-app`
  + `gatsby-plugin-netlify-cms`
+ Install:
  + `npm install --save netlify-cms-app gatsby-plugin-netlify-cms`
+ + Add to `gatsby-config.js`: plugins: 
  + [ \`gatsby-plugin-netlify-cms\` ]
+ Add Netlify CMS configuration to static/admin/config.yml.
+ 