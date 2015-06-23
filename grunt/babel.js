module.exports = {
    options: {
        sourceMap: true,
        modules: "amd"
    },
    dev: {
        files: [{
            expand: true,
            src: ['app/src/**/*.es6.js'],
            rename: function(src, matchedSrcPath, options) {
                return matchedSrcPath.replace('app/', '.tmp/');
            }
        }]
    },
    dist: {
        files: [{
            expand: true,
            src: ['app/src/**/*.es6.js'],
            rename: function(src, matchedSrcPath, options) {
                return matchedSrcPath.replace('app/', 'dist/');
            }
        }]
    }
};
