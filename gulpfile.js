'use strict';

// See node_modules/magento-boilerplate/config.example.json for an example file
// as well as documentation. Note, you will need to strip the comments out
// your configuration file if you choose to copy the example file.
var config = require('./config.json');

// Load the boilerplate's magic, passing through an optional callback that is
// executed when "gulp" is run from the command line
require('magento-boilerplate')(config, function (gulp) {
  // ...
});
