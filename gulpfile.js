/*
|----------------------------------------------------
|GULP PACKAGES
|----------------------------------------------------
*/
var gulp  = require('gulp'),
    gutil = require('gulp-util');
    uglify = require('gulp-uglify');
    path = require('path');
    less = require('gulp-less');
    concat = require('gulp-concat');
    minify = require('gulp-minify-css');
    rev = require('gulp-rev');
    watch = require('gulp-watch');
    htmlmin = require('gulp-htmlmin');

/*
|----------------------------------------------------
|DEFAULT TASK
|----------------------------------------------------
*/
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

/*
|----------------------------------------------------
|MINIFY JS
|----------------------------------------------------
*/
var jsArray=[
    '/js/vendor/jquery.min.js',
    '/js/vendor/jquery.ba-throttle-debounce.min.js',
    '/js/sevenspan.js',
];

gulp.task('js',function(){
    return gulp.src(jsArray)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('js/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('js/'))
});

gulp.task('js-dev',['watch-js']);

gulp.task('watch-js',function(){
    gutil.log('JS GENERATED !');
    return gulp.src(jsArray)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js/'))
});

/*
|----------------------------------------------------
|MINIFY CSS
|----------------------------------------------------
*/
var cssArray = [
    'css/config.less',
    'css/sevenspan.less',
    'css/common.less',
    'css/header.less',
    'css/footer.less',
    'css/sidebar.less',
    'css/page_home.less',
];

gulp.task('css', function(){
    return gulp.src(cssArray)
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(minify())
    .pipe(rev())
    .pipe(gulp.dest('css/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('css/'))
});

gulp.task('css-dev',['watch-css']);

gulp.task('watch-css', function(){
    gutil.log('CSS GENERATED !');
    return gulp.src(cssArray)
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(gulp.dest('css/'))
});


/*
|----------------------------------------------------
|MINIFY HTML
|----------------------------------------------------
*/
gulp.task('html', function() {
    var opts = {
      collapseWhitespace:true,
      removeAttributeQuotes:false,
      minifyJS:true,
      minifyCSS:true,
      removeComments:true,
    };
    return gulp.src('./storage/framework/views/*')
               .pipe(htmlmin(opts))
               .pipe(gulp.dest('./storage/framework/views/'));
});


/*
|----------------------------------------------------
|WATCH CSS
|----------------------------------------------------
*/
gulp.task('watch', function() {
    gulp.watch('css/**/*.less', ['watch-css']);
    gulp.watch('js/**/*.js', ['watch-js']);
});
