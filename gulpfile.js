var gulp = require('gulp');
var server = require('gulp-express');
var less = require('gulp-less');
var path = require('path');
var minify = require('gulp-minify');

gulp.task('less', function () {
   return gulp.src('./src/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['start']);
    gulp.watch('./src/**/*.less', ['less']);
});

gulp.task('server', function () {
    server.run(['index.js']);
});

gulp.task('compress', function() {
    gulp.src('./src/**/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('start', ['less', 'compress', 'server', 'watch'])

