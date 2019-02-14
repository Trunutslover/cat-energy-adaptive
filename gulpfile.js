"use strict";

const gulp = require("gulp");
const del = require("del");
const newer = require("gulp-newer");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();

gulp.task("clean", function () {
    return del("build");
});

gulp.task("html-copy", function () {
    return gulp.src("*.html", {since: gulp.lastRun("html-copy")})
        .pipe(gulp.dest("build/"));
});

gulp.task("styles", function () {
    return gulp.src("sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css/"));
});

gulp.task("imagemin", function () {
    return gulp.src("img/*.{jpg,png}")
        .pipe(newer("build/img/"))
        .pipe(imagemin([
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }), {
            verbose: true
            }
        ]))
        .pipe(gulp.dest("build/img/"));
});

gulp.task("build", gulp.series("clean",
    gulp.parallel("styles", "html-copy", "imagemin")));

gulp.task("watch", function () {
    gulp.watch("sass/**/*.*", gulp.series("styles"));
    gulp.watch("*.html", gulp.series("html-copy"));
    gulp.watch("img/**/*.*", gulp.series("imagemin"));
});

gulp.task("serve", function () {
    browserSync.init({
        server: "build"
    });
    browserSync.watch("build/**/*.*").on("change", browserSync.reload);
});

gulp.task("dev", gulp.series("build", gulp.parallel("watch", "serve")));