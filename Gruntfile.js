'use strict';

// # Globbing
// For performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// Use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    autoprefixer: {
      options: {
        browsers: ['last 1 version', 'ie 8', 'ie 9']
      },
      dist: {
        files: {
          './styleguide/styleguide.css': './styleguide/styleguide.css'
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          base: ['./styleguide'],
          middleware: function(connect, options) {
            return [
              connect.static(options.base[0]),
              connect().use('/bower_components', connect.static('./bower_components'))
            ];
          }
        }
      }
    },

    sass: {
      options: {
        loadPath: [
          './bower_components'
        ]
      },
      server: {
        files: {
          './styleguide/styleguide.css': './styleguide/styleguide.scss'
        }
      }
    },

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['./styleguide/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'sass:server',
    'autoprefixer',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('default', ['serve']);
};
