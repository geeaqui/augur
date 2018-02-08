var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

/****automatically restart the console once changes are saved on the any js file ****/
gulp.task('default', function(){
	nodemon({
		script: 'app.js',
		ext:'js',
		env: {
			PORT:3000
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function(){
		console.log('Restarting');
	});
});
