'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('public/assets/dev/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/assets/dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('public/assets/dev/scss/**/*.scss', ['sass']);
});