// Copies remaining files to places other tasks can use
module.exports = {
    dev: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.app %>',
            dest: '<%= config.tmp %>',
            src: ['**/*.*', '!index.html', '!**/*.es6.js']
        }]
    },
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.tmp %>',
            dest: '<%= config.dist %>',
            src: [
                'content/**/**.*',
                '.htaccess',
                'src/**/*.html',
            ]
        }]
    }
};
