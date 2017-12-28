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

gulp.task('sass', function(){
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('build', function(){
    return gulp.src('./dist/css/common.css')
        .pipe(postcss([
            precss(),
            styleguide({
                project: "Project's CSS guideline",
                dest: './dist/index.html',
                showCode: true,
                theme: 'default'
            })
        ]))
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch('./src/sass/**/*.scss', ['sass', 'styleguide']);
    gulp.watch('./src/**/*.html').on('change', reload);
});

gulp.task('default', [ 'sass', 'build']);