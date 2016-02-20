var gulp = require('gulp');
var sass = require('gulp-sass');

//gulp test
gulp.task('hello', function() {
    console.log('Hello Amanda');
});

//compile Sass
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('/sass/**/*.scss',['styles']);
});