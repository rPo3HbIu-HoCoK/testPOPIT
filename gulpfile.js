const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");

// создаем задачу для стилей

const styles = () => {
    return src("src/style/**/*.css") // любой файл с любым именем с расширением CSS в любой подпапке папки STYLE
        .pipe(concat("style.css")) // пропускаем через трубу - объедняем все CSS-файлы в один
        .pipe(dest("dist")); // помещаем в папку dist
};
// создаем задачу для HTML
const htmlMinify = () => {
    return src("src/**/*.html")
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest("dist"));
};

// экспорт задач
// exports.styles = styles;
// exports.html = htmlMinify;

exports.default = series(styles, htmlMinify);
