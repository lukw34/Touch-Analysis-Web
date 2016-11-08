var gulp = require('gulp');
var server = require('gulp-express');
var less = require('gulp-less');
var path = require('path');
var minify = require('gulp-minify');
var htmlcpr = require('gulp-htmlcpr');
var concat = require('gulp-concat');

gulp.task('copy-html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(htmlcpr())
        .pipe(gulp.dest('./dist/html'))
})


gulp.task('less', function () {
   return gulp.src('./src/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['compress']);
    gulp.watch('./src/**/*.less', ['less']);
    gulp.watch('./src/**/*.html', ['copy-html']);
});

gulp.task('server', function () {
    server.run(['index.js']);
});

gulp.task('compress', function() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('start', ['less', 'compress', 'copy-html', 'server', 'watch'])

