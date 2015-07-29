var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var sass= require('gulp-sass');

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             "localhost",
      port:             9001,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('css',function(){
  return gulp.src('./*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'));
});

gulp.task('default',function() {
    gulp.watch('./*.scss',['css']);
});
