/* global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  rename: {'gulp-ruby-sass': 'sass'}
});
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return $.sass('styleguide/', {
    loadPath: ['.'],
    precision: 10,
    sourcemap: true
  })
  .on('error', function(err) {
    console.error('Error:', err.message);
  })
  .pipe($.cached('styleguide'))
  .pipe($.autoprefixer({
    browsers: ['last 2 versions', 'IE 9', 'IE 8'],
    cascade: false
  }))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('styleguide'))
  .pipe($.size({title: 'styles'}));
});

gulp.task('serve', ['styles'], function() {
  browserSync({
    notify: false,
    logPrefix: 'NEWSAPPS',
    open: false,
    server: {
      baseDir: ['styleguide'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  gulp.watch(['styleguide/**/*.html'], reload);
  gulp.watch(['./**/*.scss'], ['styles', reload]);
});

gulp.task('default', ['styles']);
gulp.task('build', ['default']);
