# Eat Drink Healthy - website

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
    - Story file location and naming convention
        + filename.stories.js
        + place in `__stories__/` directory in a `tests/` directory
            - although source files in the imports directory are not eagerly loaded for the build, by placing them in a tests/ directory, a running server in dev mode will not restart when changes are made to the file
* Configuration
    - storybook files are placed in `/__stories__/` directories, and follow a naming convention of `*.stories.jsx?`

### Testing
* when testing with a snapshot, __be sure to THOROUGHLY examine the first created snapshot file__
    - it is possible that the snapshot may contain json you are not expecting, even an error, which can still match when subsequently comparing
    - consider adding an additional test condition / expect when snapshot testing, to confirm you are getting the type of snapshot you are expecting, and not something like 'undefined'
        + eg, adding a hasClass check, is informative when doing TDD and snapshot is not yet finalized or captured
   
### EMail
* An email service account has been setup with mailgun (per the Meteor Guide, and The Meteor Chef) to enable using the Meteor mail API
    - this allows easy sending of mail from a contact form on the EDH website
    - NOTE: a MAIL_URL must be set (per the guide) in order for the meteor mail API to function correctly
        + a script file has been created, `set_mail_url.sh`, and stored in the project's config repo (or backed up local storage)
        + also note, for convenience during development, check local aliases that run that script (e.g. 'smu')
