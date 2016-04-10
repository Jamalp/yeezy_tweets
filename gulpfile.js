var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require("gulp-order");
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var notify = require('gulp-notify');


gulp.task('styles', function(){
  gulp.src(['build/scss/style.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifycss())
    .pipe(gulp.dest('html/css/'))
    .pipe(notify('css task finished'));
});

gulp.task('scripts', function(){
  return gulp.src('build/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
      .pipe(order([
      'build/scripts/lib/jquery.js',
      'build/scripts/lib/tabletop.js',
      'build/scripts/main.js'
    ], { base: './' }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('html/js/'))
    .pipe(notify('js task finished'));
});

gulp.task('default', function(){
  gulp.watch("build/scss/**/*.scss", ['styles']);
  gulp.watch("build/scripts/**/*.js", ['scripts']);
});