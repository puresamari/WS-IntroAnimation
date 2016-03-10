'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat-util'),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap");
 
gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(sass({outputstyle:'compact'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('resources', function () {
    gulp.src('src/resources/**/*')
        .pipe(gulp.dest(('dist/')));
});
 
gulp.task('vendor', function(){
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(concat('vendor.bundle.js'))
        .pipe(gulp.dest('dist/vendor/'));
});
 
gulp.task('js', function(){
    gulp.src([
        'src/app/*.js'
     ])
    .pipe(uglify({
        mangle: false,
        output: {
            beautify: true
        }
    }))
    .pipe(concat.header('\n//<%= file.path %>\n\n'))
    .pipe(concat('app.js'))
    .pipe(wrap('(function(){\n<%= contents %>\n})();'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', function(){
    gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/app/**/*.js', ['js']);
    gulp.watch('src/html/**/*.html', ['html']);
    gulp.watch('src/resources/*', ['resources']);
});

gulp.task('dist', function(){
    gulp.start(['sass', 'vendor', 'js', 'html', 'resources'])
});

gulp.task('default', ['dist', 'watch']);