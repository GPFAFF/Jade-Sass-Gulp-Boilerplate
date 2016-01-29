// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var images = require('imagemin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pngquant = require('imagemin-pngquant');
var gulpJade = require('gulp-jade');
var jade = require('jade');
var changed = require('gulp-changed');
var browserSync  = require('browser-sync');



// Shrink Images
gulp.task('imagemin', function () {
    var img_src = 'src/img/*';
    var img_dest = 'app/img/';

    return gulp.src(img_src)
        .pipe(changed(img_dest))
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 3,
            use: [pngquant()]
          }))
        .pipe(gulp.dest(img_dest))
});

gulp.task('browser-sync', function() {
  browserSync.init(['app/css/*.css', 'app/js/**/*.js', 'app/index.html'], {
    server: {
      baseDir: './app'
    }
  });
});

// Compile Our Sass
gulp.task('sass', function () {
  var css_src = './src/sass/**/*.sass';
  var css_dest = 'app/css/';
    
    return gulp.src(css_src)
        .pipe(sass())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(css_dest))
});

// Concatenate & Minify JS

gulp.task('scripts', function () {
  var js_src = './src/js/**/*.js'; 
  var js_dest = './app/js/';
  // pipe the js through concat, console log stripping, uglification and then store
    return gulp.src(js_src)
        .pipe(concat('app.min.js')) // concat all files in the src
        .pipe(gulp.dest(js_dest))
});

gulp.task('jade', function () {
    var html_src = './src/layouts/**/*.jade';
    var html_dest = "app/";   

    gulp.src(html_src)
        .pipe(gulpJade({
            jade: jade,
            pretty: true
            }))
        .pipe(gulp.dest(html_dest))
});

// Watch Files For Changes
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./src/js/**/*.js", ['scripts']);
    gulp.watch("./src/sass/**/*.sass", ['sass']);
    gulp.watch('./src/layouts/**/*.jade', ['jade']);
    gulp.watch('./src/img/*', ['imagemin']);
    gulp.watch(['app/js/', 'app/css/', 'app/*.html']);
});

// Default Task
gulp.task('build', function () {
    gulp.start('sass', 'scripts', 'watch', 'jade', 'imagemin');
});
