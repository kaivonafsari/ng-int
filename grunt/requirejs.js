module.exports =  {
  compile: {
    options: {
      optimize: 'uglify2',
      uglify2: {
        mangler: {
          toplevel: true
        }
      },
      baseUrl: '<%= config.app %>/src',
      mainConfigFile: '<%= config.app %>/src/requireConfig.js',
      name: 'almond',
      include: 'main.es6.js',
      insertRequire: ['main.es6.js'],
      out: '<%= config.dist %>/src/main.es6.js',
      wrap: true
    }
  }
};
