var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    console.log('gulpfile configured');
});

gulp.task('process-styles', function() {
    return gulp.src('src/main.css')
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dest/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dest/'));
});

gulp.task('process-scripts', function() {
    return gulp.src('src/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dest/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['process-scripts']);
});
