# broccoli-sass2scss

The broccoli-sass2scss plugin transpiles `.sass` files to `.scss` files with
[sass2scss](https://github.com/ArnaudRinquin/sass2scss) with some syntax updates by j-mcnally.

## Installation

```bash
npm install --save-dev broccoli-sass2scss
```

## Usage

```js
var sass2scss = require('broccoli-sass2scss')
var sourceTrees = [app, config, 'vendor'].concat(broccoli.bowerTrees());
var appAndDependencies = mergeTrees(sourceTrees, { overwrite: true });
appAndDependencies = sass2scss(appAndDependencies);
var styles = preprocessCss([appAndDependencies], prefix + '/styles', '/assets');
```

This has only been tested with Ember-Cli but should work with any Broccoli project. It basically add the step/middleware of translating sass files to scss so that libsass can handle them.
