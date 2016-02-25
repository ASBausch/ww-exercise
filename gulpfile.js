var gulp = require('gulp');
var sass = require('gulp-sass');


//compile Sass
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default',function() {
    console.log('sassing');
});