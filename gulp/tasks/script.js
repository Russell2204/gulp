module.exports = () =>
    $.gulp.task('js', () =>
    $.gulp.src($.path.src.js)
        .pipe($.GP.plumber())
        .pipe($.GP.sourcemaps.init())
        .pipe($.GP.include())
        .pipe($.GP.babel({ presets: ['@babel/preset-env', ['minify', {
            "builtIns": false
          }]]}))
        .pipe($.GP.rename('main.min.js'))
        .pipe($.GP.sourcemaps.write())
        .pipe($.gulp.dest($.path.prod.js))
        .on('end', $.bs.reload)
    )