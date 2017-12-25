var gulp = new require('gulp')
var postcss = new require('gulp-postcss');
var sass = new require('gulp-sass');
var cssmin = new require('gulp-cssmin');
var rename = new require('gulp-rename');
var autoprefixer = new require('gulp-autoprefixer');
var browserSync = new require('browser-sync');
var reload = browserSync.reload;
var precss = new require('precss');
var styleguide = new require('postcss-style-guide');

gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('styleguide', () => {
    return gulp.src('./css/common.css')
        .pipe(postcss([
            precss(),
            styleguide({
                project: 'My Project Generate CSS',
                dest: './styleguide/index.html',
                showCode: true,
                theme: 'default'
            })
        ]))
        .pipe(gulp.dest('./styleguide/css'))
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./sass/**/*.scss', ['sass', 'styleguide']);
    gulp.watch('./*.html').on('change', reload);
})