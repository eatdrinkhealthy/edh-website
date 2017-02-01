# Eat Drink Healthy - website
---
[![Build Status](https://semaphoreci.com/api/v1/projects/6ea63609-351c-4fd0-8528-b1d50e5d6ddc/846633/shields_badge.svg)](https://semaphoreci.com/smarsh/edh_website)

a simple splash page with links to the web and mobile app, for now.  (this site is a Meteor app)

## Installation
* clone repo
* yarn must be installed globally
* add [eslint-meteor](https://github.com/eatdrinkhealthy/eslint-meteor) packages and configuration

## Notes
### Storybook
* Setup
    - see config.js & webpack.config.js
    - if using less, need to install packages: css-loader, less, less-loader, style-loader
        + note, remember less as a meteor package is not available to storybook's node
    - must also import the less file(s) in source or config.js
    - for serving files (images), add [static content directory flag](https://getstorybook.io/docs/react-storybook/configurations/serving-static-files) to storybook script (see package.json)
        + eg, storybook -s ./public  ...
* Configuration
    - storybook files are placed in `/__stories__/` directories, and follow a naming convention of `*.stories.jsx?`
### Styling
* Currently, using a convention where DOM style properties and glamor css are stored in a javascript object, as a convenience for css snapshot testing
    - may punt on this convention if ill side effects discovered or code becomes too verbose