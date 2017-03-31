const marked = require('marked');
const highlight = require('highlight.js');

module.exports = (htmlRenderer) => {
  const renderer = new marked.Renderer();
  renderer.code = codeRenderer;

  marked.setOptions({renderer});

  return marked;
};

function codeRenderer(code, lang) {
  let html = '';

  if(lang === 'nunjucks') {
    return code;
  } else {
    const highlighted = highlight.highlightAuto(code).value;
    html = `<pre><code class="lang-${lang}">${highlighted}\n</code></pre>\n`;
  }

  return html;
}
