const marked = require('marked');
const highlight = require('highlight.js');

const languages = ['javascript', 'css'];
let prevLvlHeading = null;

module.exports = (htmlRenderer) => {
  const renderer = new marked.Renderer();
  renderer.code = codeRenderer;
  renderer.heading = codeHeading;
  renderer.blockquote = codeBlockquote;

  marked.setOptions({renderer});

  return marked;
};

function codeRenderer(code, lang) {
  let html = '';

  if(lang === 'nunjucks') {
    return codeInCode(code, lang);
  } else {
    const highlighted = highlight.highlightAuto(code).value;
    html = `<pre><code class="lang-${lang}">${highlighted}\n</code></pre>\n`;
  }

  return html;
}

function codeHeading(text, level, raw) {
  if(text === 'END') {
    return '</section>\n';
  }

  return `<section><h${level}>${text}</h${level}>\n`;
}

function codeBlockquote(quote) {
  quote = quote.replace(new RegExp('(<p>)|(</p>)','g'), '');
  const quoteSplit = quote.split(/--|[()]/);
  const core = quoteSplit[0];
  const cite = quoteSplit[1];
  const link = quoteSplit[2];

  return `<blockquote>${core}<cite><a href="http://${link}" target="blank">${cite}</a></cite></blockquote>`
}

function codeInCode(code, lang) {
  const codeInCode = code.split('``');
  const codeSnippet = codeInCode[1];

  if(codeSnippet) {
    const codeSnippetWithoutLang = removeLanguage(codeSnippet).replace(/^\s+|\s+$/g,'');
    const highlighted = highlight.highlightAuto(codeSnippetWithoutLang).value;
    let htmlString = '';

    codeInCode.forEach((html, i) => {
      if(i === 1) {
        htmlString += `<pre><code class="lang-${lang}">${highlighted}\n</code></pre>\n`;
      } else {
        htmlString += html;
      }
    });

    return htmlString;
  } else {
    return code;
  }
}

function removeLanguage(codeSnippet) {
  languages.forEach(lang => {
    if(codeSnippet.indexOf(lang) > -1) {
      codeSnippet = codeSnippet.replace(lang, '');
    }
  });

  return codeSnippet;
}
