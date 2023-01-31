const { series, parallel } = require('gulp');

const gulp = require('gulp');
const config = require('./config.json');
const pkg = require('./package.json');

//General
const del = require('del');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const replace = require('gulp-replace');

//HTML
const pug = require('gulp-pug');

//CSS
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const focus = require('postcss-focus');
const reporter = require("postcss-reporter");
const cssnano = require('cssnano');

//Assets
const imagemin = require('gulp-imagemin');

const pugOptions = {
  pretty: true,
  verbose: config.debug,
  data: require("./package.json")
}

const sassConfig = {
  includePaths: ['node_modules/'],
  outputStyle: 'expanded',
  sourceMap: true,
  outFile: ''
}

const postCSSPlugins = [
  focus,
  autoprefixer,
  reporter({ clearMessages: true })
];

const cssMinPlugins = [
  cssnano(),
  reporter({ clearMessages: true })
];

gulp.task('html-pug', function () {
  return gulp.src('./src/html/**/[^_]*.pug')
    .pipe(pug(pugOptions))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./src/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('postcss', function () {
  return gulp.src(['./css/*.css', '!./css/*.min.css'])
    .pipe(postcss(postCSSPlugins, { map: true }))
    .pipe(gulp.dest('./css'));
});

gulp.task('css-min', function () {
  return gulp.src(['./css/*.css', '!./docs/css/*.min.css'])
    .pipe(postcss(cssMinPlugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('assets-copy-compressed', function () {
  return gulp.src('./src/img/**/*.{ico,mp4,webm}')
    .pipe(gulp.dest('./img'));
});

gulp.task('assets-imagemin', function () {
  return gulp.src('./src/img/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 1 }),
      imagemin.svgo({
        plugins: [
          { removeUselessStrokeAndFill: true },
          { removeUselessDefs: true },
          { removeTitle: true },
          { cleanupIDs: false },
          { removeViewBox: false }
        ]
      })
    ]))
    .pipe(gulp.dest('./img'));
});

gulp.task('html',
  series(
    'html-pug'
  )
);

gulp.task('css',
  series(
    'sass',
    'postcss',
    'css-min'
  )
);

gulp.task('assets',
  series(
    parallel('assets-imagemin', 'assets-copy-compressed')
  )
);

gulp.task('watch', function () {
  gulp.watch(['./src/html/**/*.pug'], gulp.series('html'));
  gulp.watch('./src/css/**/*.scss', gulp.series('css'));
});

gulp.task('default',
  series(
    parallel('html', 'css')
  )
);