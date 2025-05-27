const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const btnHtml = document.getElementById('btn_html');
const btnCss = document.getElementById('btn_css');
const btnJs = document.getElementById('btn_js');

function showHtml() {
    html.style.display = 'block';
    css.style.display = 'none';
    js.style.display = 'none';
}
function showCss() {
    html.style.display = 'none';
    css.style.display = 'block';
    js.style.display = 'none';
}
function showJs() {
    html.style.display = 'none';
    css.style.display = 'none';
    js.style.display = 'block';
}
btnHtml.onclick = showHtml;
btnCss.onclick = showCss;
btnJs.onclick = showJs;
