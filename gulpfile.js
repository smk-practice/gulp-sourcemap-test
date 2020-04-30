const gulp = require('gulp');
const babel = require('gulp-babel')
const ts = require('gulp-typescript');
const serve = require('gulp-serve');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify');
const buffer = require('vinyl-buffer');

gulp.task('build', function() {
    return gulp.src('src/**/*.ts')
        .pipe(buffer())
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sourcemaps.identityMap())
        .pipe(ts())
        .pipe(babel({
            "presets": ['@babel/env']
        }))
        .pipe(browserify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('watch', function() {
    gulp.watch(
        ['src/**/*.ts'],
        gulp.parallel('build')
    );
});

gulp.task('serve', serve({
    root: './app',
    port: 3000
}));

gulp.task('start', gulp.series('build', gulp.parallel('serve', 'watch')));

