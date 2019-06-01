// Node modules
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// Function for sass compiling and autoprefixing
function compileSass() {
  return gulp
  .src('css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}

// Gulp task for sass compilation
gulp.task('sass', compileSass);

// Grouping multiple js files
function gulpJS() {
  return gulp
  .src('js/main/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
      presets: ['@babel/env']
  }))
  .pipe(gulp.dest('js/'))
}

gulp.task('mainjs', gulpJS);

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
  gulp.watch('css/scss/*.scss', compileSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Init watch task
gulp.task('watch', watch);

// Gulp's default task which inits watch and browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs'));