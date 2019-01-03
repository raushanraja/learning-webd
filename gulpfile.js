var gulp        = require('gulp');
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');

/**
 * Compile pug files into HTML
 */

gulp.task('pug', function() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Compile scss files into css
 */
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'));
});

// /**
//  * Serve and watch the scss/pug files for changes
//  */
gulp.task('default',  function () {

    gulp.watch('./sass/*.scss',gulp.series('sass'));
    gulp.watch('./pug/*.pug',  gulp.series('pug'));
});