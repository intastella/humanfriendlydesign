const { series, parallel } = require('gulp');

const gulp = require('gulp');
const config = require('./config.json');
// const pkg = require('./package.json');

//General
const rename = require('gulp-rename');

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

//JS
const eslint = require('gulp-eslint');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

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
  cssnano({ 
    preset: ['default', {
      colormin: false,
    }]
  }),
  reporter({ clearMessages: true })
];

const imageminConfig = {
  plugins: [
    { removeUselessStrokeAndFill: true },
    { removeUselessDefs: true },
    { removeTitle: true },
    { cleanupIDs: false },
    { removeViewBox: false }
  ]
}

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
  return gulp.src(['./css/*.css', '!./css/*.min.css'])
    .pipe(postcss(cssMinPlugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js-lint', function () {
  return gulp.src('./src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('js-compile', function () {
  return webpackStream({ config: require('./webpack.config.js') }, webpack)
    .pipe(gulp.dest('./js'));
});

gulp.task('assets-copy-compressed', function () {
  return gulp.src('./src/img/**/*.{ico,mp4,webm}')
    .pipe(gulp.dest('./img'));
});

gulp.task('assets-copy-fonts', function () {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./fonts'));
});

gulp.task('assets-copy-downloads', function () {
  return gulp.src('./src/downloads/**/*')
    .pipe(gulp.dest('./downloads'));
});

gulp.task('assets-imagemin-general', function () {
  return gulp.src('./src/img/*.{png,jpg,gif,svg}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 1 }),
      imagemin.svgo(imageminConfig)
    ]))
    .pipe(gulp.dest('./img'));
});

gulp.task('assets-imagemin-thumbnails', function () {
  return gulp.src('./src/img/Thumbnails/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 1 }),
    ]))
    .pipe(gulp.dest('./img/Thumbnails'));
});

gulp.task('assets-imagemin-work', function () {
  return gulp.src('./src/img/Work/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 1 }),
    ]))
    .pipe(gulp.dest('./img/Work'));
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

gulp.task('js',
  series(
    'js-lint',
    'js-compile'
  )
);

gulp.task('assets',
  parallel(
    'assets-imagemin-general',
    'assets-imagemin-thumbnails',
    'assets-imagemin-work',
    'assets-copy-compressed',
    'assets-copy-fonts',
    'assets-copy-downloads'
  )
);

gulp.task('watch', function () {
  gulp.watch(['./src/html/**/*.pug'], gulp.series('html'));
  gulp.watch('./src/css/**/*.scss', gulp.series('css'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
  gulp.watch('./src/img/*', gulp.series('assets-imagemin-general'));
  gulp.watch('./src/img/Thumbnails/*', gulp.series('assets-imagemin-thumbnails'));
  gulp.watch('./src/img/Work/*', gulp.series('assets-imagemin-work'));
});

gulp.task('default',
  series(
    parallel('html', 'css', 'js', 'assets')
  )
);