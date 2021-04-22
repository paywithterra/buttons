var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(['sass/*.scss', '!sass/pwt-variables.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', function () {
  gulp.watch('sass/*.scss', gulp.parallel('sass'));
});