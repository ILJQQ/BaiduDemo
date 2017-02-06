var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
gulp.task('default',function(){
	gulp.src('scripts/*.js')
		.pipe(uglify())
		.pipe(concat('custom.min.js'))
		.pipe(gulp.dest('build'));
});