const multipleEntryProvider = require('react-app-rewire-multiple-entry')([
    {
      entry: 'src/contact.js',
      template: 'public/contact.html',
      outPath: '/contact.html'
    }
  ]);
module.exports = {
    webpack: function(config, env) {
        multipleEntryProvider.addMultiEntry(config);
      return config;
    }
};