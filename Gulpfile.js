var gulp = require('gulp'),
    ESLint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['./app/**/*.jsx'])
        .pipe(ESLint())
        .pipe(ESLint.format())
        .pipe(ESLint.failOnError());
});

gulp.task('default', ['lint'], function () {
    console.log('Everything went OK!');
});
