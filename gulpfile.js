/**
 * Created by arun on 14/5/15.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default',function(){

    nodemon({

        script:'server.js',
        ext:'js',
        env:{
            PORT : 7070
        }
    });
}).on('restart',function(){

   console.log("Changes detected : Gulp is restarting my server");

});