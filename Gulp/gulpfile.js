const {
    src,
    dest,
    parallel
} = require('gulp')


// Change name
const rename = require('gulp-rename');

// minify de JS
const minifyJS = require('gulp-uglify');

// minify de css
const minifyCSS = require('gulp-uglifycss')

// minify image
const image = require('gulp-image');

// compilador de sass
const sass = require('gulp-sass');


// Babel é para ele aceitar ES6+
const babel = require('gulp-babel')

// Compilador de sass
sass.compiler = require('node-sass');

let javascript = () => {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyJS())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/assets/js'));
}

let css = () => {
    return src('src/css/*.css')
        .pipe(minifyCSS({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/assets/css'));
}

let convertSass = () => {
    return src('src/css/*.scss')
        .pipe(sass())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(minifyCSS({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(dest('dist/assets/css/'))
}

let optimizeImage = () => {
    return src('src/images/*.jpg')
        .pipe(image())
        .pipe(dest('dist/assets/images'))
}

exports.default = parallel(javascript, css, convertSass, optimizeImage)