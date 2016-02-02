var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var header = require('gulp-header');
var pkg = require('./package.json');
var info = '// <%= pkg.name %>@<%= pkg.version %>\n';

gulp.task('test', function() {                      // 'return' = task waits for streamed data to complete
    return gulp.src('src/*.js')                     // input stream
        .pipe(jshint())                             // pipe data into jshint plugin
        //.pipe(jshint.reporter('default'));        // jshint output
        .pipe(jshint.reporter('jshint-stylish'))    // custom reporter
        .pipe(gulp.dest('build/'));                 // write stream
});

gulp.task('build', function() {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(header(info, {pkg: pkg}))
        .pipe(size())
        .pipe(gulp.dest('build/'));
});

// asynchronous flows
gulp.task('all', ['test', 'build']);

// synchronous flows
//    task name, dependencies, task
gulp.task('header', ['test'], function() {
    return gulp.src('src/*.js')
        .pipe(header('// <%= pkg.description %>\n', {pkg: pkg}))
        .pipe(gulp.dest('build/'));
});
