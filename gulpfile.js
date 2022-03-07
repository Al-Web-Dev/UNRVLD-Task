var gulp = require("gulp");
//var sass = require('gulp-sass');
var uglifycss = require("gulp-uglifycss");

// function buildStyles() {
//   return gulp.src('./Sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };

// Minify task
gulp.task("css", function () {
	gulp
		.src("./css/*.css")
		.pipe(
			uglifycss({
				uglyComments: true,
			})
		)
		.pipe(gulp.dest("./dist/"));
});
