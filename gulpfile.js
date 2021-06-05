'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const browserSync = require('browser-sync');
const { reload } = browserSync;
const autoprefixer = require('autoprefixer');

$.sass.compiler = require('node-sass');

function styles() {
  const plugins = [
    autoprefixer(),
  ];

  return gulp.src('app/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      sourcemap: true
    }).on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true }));
}

function scripts () {
	return gulp.src('app/js/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel({
			presets: ['@babel/env']
		}))
		.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
}

function vendors() {
  return gulp.src([
    'node_modules/swiper/js/swiper.js',
  ]).pipe($.concat('vendors.js'))
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(reload({ stream: true }));
}

function pages() {
  return gulp.src('app/**/*.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
}

function clean() {
  return del(['dist']);
}

function copy() {
  return gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest('dist'));
}

function watch(cb) {
  browserSync.init({
    reloadOnRestart: true,
    notify: false,
    port: 9000,
    startPath: "/",
    server: {
      baseDir: ['dist', 'app', 'app/assets']
    }
  });

  gulp.watch([
    'app/img/**/*',
    'app/*.html'
	]).on('change', reload);

  gulp.watch('app/**/*.html', gulp.series('pages'));
  gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('app/js/**/*.js', gulp.series('scripts', 'vendors'));

  cb()
}

const serve = gulp.series(
  styles,
  scripts,
  vendors,
  watch
);

const build = gulp.series(
  clean,
  styles,
  pages,
  scripts,
  vendors,
  copy
);

exports.styles = styles
exports.scripts = scripts
exports.vendors = vendors
exports.watch = watch
exports.copy = copy
exports.clean = clean
exports.pages = pages
exports.build = build
exports.serve = serve
exports.default = serve 