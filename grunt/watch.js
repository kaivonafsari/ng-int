// Watches files for changes and runs tasks based on the changed files
module.exports = function(grunt) {
    'use strict';
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('jscs.src', [filepath]);
        grunt.config('eslint.target', filepath);
    });
    return {
        options: {

        },
        gruntfile: {
            files: ['Gruntfile.js', 'grunt/**/**'],
            options: {
                reload: true
            }
        },
        js: {
            files: ['<%= config.app %>/src/**/**.js'],
            tasks: ['copy:dev'],
            options: {
                spawn: false,
                interrupt: true,
                livereload: true
            }
        },
        es6: {
            files: ['<%= config.app %>/src/**/*.es6.js', '!lib/**/*'],
            tasks: ['babel:dev']
        },
        css: {
            files: ['<%= config.app %>/styles/{,*/}*.css'],
            tasks: ['copy:dev'],
            options: {
                livereload: true
            }
        },
        sass: {
            files: '<%= config.app %>/styles/sass/{,*/}*.{scss,sass}',
            tasks: ['sass:dev']
        },
        html: {
            files: ['<%= config.app %>/{,*/}*.html'],
            tasks: ['html2js', 'processhtml:dev', 'copy:dev'],
            options: {
                livereload: true
            }
        },
        content: {
            files: [
                '<%= config.app %>/content/**/**'
            ],
            tasks: ['copy:dev'],
            options: {
                livereload: true
            }
        }
    };
};