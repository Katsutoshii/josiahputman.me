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

gulp.task('pug', function buildHTML() {
    gulp.src('*.pug')
        .pipe(pug())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass', 'pug'], function() {
    gulp.watch('*.scss', ['sass']);
    gulp.watch('*.pug', ['pug']);
});

