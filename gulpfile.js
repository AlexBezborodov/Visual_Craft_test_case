// var gulp = require('gulp');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var bs = require('browser-sync').create();

// function cssStyle (done) {

//   gulp.src('./app/scss/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass({
//       errorLogToConsole: true,
//       outputStyle: 'compressed'
//     }))
//     .on('error', console.error.bind(console))
//     .pipe(autoprefixer({
//       overrideBrowserslist: ['last 2 versions'],
//         cascade: false
//     }))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./app/css') )
//     .pipe(bs.stream());
//   done();
// };

// function sync(done) {
//     bs.init({
//       server: {
//         baseDir: "./app"
//       },
//       port: 3000
//     });
// };

// function watchSass() {
//   gulp.watch("app/scss/**/*", cssStyle);
//   // gulp.watch("./js/**/*", jsStyle);
// };



// function watchFiles() {
//   gulp.watch("./app/scss/**/*", cssStyle);
//   gulp.watch("./app/index.html", Reload);
//   gulp.watch("./app/**/*.php", Reload);
//   gulp.watch("./app/**/*.js", Reload);
// };

// function Reload(done) {
//   bs.reload();
//   done();
// };



// // gulp.task('default', gulp.series(watch, sync)); series дозволяє почергово запускати команди
// gulp.task('default', gulp.parallel(watchFiles, sync));
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function cssStyle (done) {

  gulp.src('./app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/css/') )
    .pipe(browserSync.stream())
    .pipe(browserSync.reload());
  done();
};

function sync(done) {
    browserSync.init({
      server: {
        baseDir: "./app"
      },
      port: 3000
    });
};

function watchSass() {
  gulp.watch("./app/scss/**/*", cssStyle);
  // gulp.watch("./js/**/*", jsStyle);
};
function watchFiles() {
  gulp.watch("./app/scss/**/*", cssStyle);
  gulp.watch("./app/**/index.html", Reload);
  gulp.watch("./app/**/*.php", Reload);
  gulp.watch("./app/**/*.js", Reload);
};


function Reload(done) {
  browserSync.reload();
  done();
};


// gulp.task('default', gulp.series(watch, sync)); series дозволяє почергово запускати команди
gulp.task('default', gulp.parallel(watchFiles, sync));