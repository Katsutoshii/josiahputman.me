// For automatic sass compilation
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
});

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
    .pipe(pug({
      // Your options in here. 
    }))
  });
