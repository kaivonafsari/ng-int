module.exports = {
    options: {
      useStrict: true
    },
    templates: {
      src: ['app/src/**/*.template.html'],
      dest: 'app/src/__templates/__templates.js',
      options: {
          base: 'app/src/module',
          module: 'app.templates'
      }
    }
    // with this definition, all template paths 
    // will be "<templateName>"
    // e.g. templateUrl: "home.template.html"
};
