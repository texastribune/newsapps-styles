/* global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('styleguide/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.cached('styleguide'))
    .pipe($.sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
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
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['styleguide/**/*.html'], reload);
  gulp.watch(['styleguide/**/*.scss'], ['styles', reload]);
});

gulp.task('default', ['styles']);
gulp.task('build', ['default']);
