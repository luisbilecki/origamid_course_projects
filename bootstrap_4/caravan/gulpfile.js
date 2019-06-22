// Node modules
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Init browser-sync lib
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

// Init browser-sync task
gulp.task('browser-sync', browser);

// Watching for changes in html and scss files
function watch() {
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Init watch task
gulp.task('watch', watch);

// Gulp's default task which inits watch and browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync'));