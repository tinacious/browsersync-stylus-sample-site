var gulp        = require('gulp');
var htmlmin     = require('gulp-htmlmin');
var stylus      = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function () {
    return gulp.src('./src/styles/*.styl')
        .pipe(stylus({ compress: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        open: false
    });

    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/styles/*.styl', ['styles']);
});

gulp.task('default', [
    'html',
    'styles',
    'browser-sync'
]);
