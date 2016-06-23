var gulp = require('gulp');
var rename = require('gulp-rename');
var rev = require('gulp-rev');


gulp.task('rev', function () {
  return gulp
    .src('jweixin-1.0.0.js')
    .pipe(rename('jweixin.js'))
    .pipe(rev())
    .pipe(gulp.dest('./'));
});

