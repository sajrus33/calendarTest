const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");

gulp.task("watch", function() {
  watch("./src/css/*.css", () => {
    return gulp
      .src([
        "./src/css/start.css",
        "./src/css/header.css",
        "./src/css/main.css",
        "./src/css/activities.css"
      ])
      .pipe(concat("style.css"))
      .pipe(cleanCSS())
      .pipe(gulp.dest("./public/css/"));
  });
});
