'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanHtml = require('gulp-cleanhtml')
const minify = require('gulp-minify')

function buildCss() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
}

function clearHtml() {
    return gulp.src('./src/**/*.html')
        .pipe(cleanHtml())
        .pipe(gulp.dest('./dist/'))
}

function clearJS() {
    return gulp.src('./src/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./dist/'))
}

function defaultTask(cb) {
    console.log('test task');
    cb();
}

function watchTask() {
    gulp.watch('./src/styles/**/*.scss', buildCss)
    gulp.watch('./src/**/*.html', clearHtml)
    gulp.watch('./src/**/*.js', clearJS)
}

exports.default = defaultTask
exports.build = buildCss
exports.clearHtml = clearHtml
exports.clearJS = clearJS()
exports.watch = watchTask