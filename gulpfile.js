var gulp = require('gulp'),
	git = require('gulp-git');
	
gulp.task("add",function(){
	return gulp.src(['!node_modules','*.*'])
	.pipe(git.add({args: '-v'}));
	
});

gulp.task('commit', ['add'], function(){
  return gulp.src(['!node_modules','*.*'])
    .pipe(git.commit('initial commit'))
    .on('data',function(data) {
      console.log(data);
    });
});

gulp.task('push', ['commit'], function(){
  git.push('origin', 'master', {args: " -f"}, function (err) {
    if (err) { console.log("HATA:", err); throw err; }
  });
});

gulp.task('deploy',['push'], function(){
	console.log('deploy aşamasında');
});