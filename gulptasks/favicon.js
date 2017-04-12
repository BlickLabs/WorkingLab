var gulp = require('gulp'),
  config = require('../gulpconfig'),
  argv = require('yargs').argv,
  production = argv.production;

gulp.task('copy:favicon', function () {
  var baseDir = production ? config.paths.dist : config.paths.build;

  gulp.src(config.paths.src.favicon)
    .pipe(gulp.dest(baseDir.root));
});