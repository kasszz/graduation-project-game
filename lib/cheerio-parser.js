const cheerio = require('cheerio');

module.exports = html => {
  const $ = cheerio.load(html);

  $('[cheerio-span]').each((i, element) => {
    $(element).removeAttr('cheerio-span');
    $(element).prev('p').addClass('prevParagraph');
    $(element).next('p').addClass('nextParagraph');
  });

  html = $.html();

  $('.nextParagraph.prevParagraph').each((i, element) => {
    const selectedHtml = $(element) + '';
    let newHtml = selectedHtml.slice(0, -4);
    newHtml = newHtml.split('>')[1];

    html = html.replace(selectedHtml, newHtml);
  });

  $('.prevParagraph').each((i, element) => {
    const selectedHtml = $(element) + '';
    const newHtml = selectedHtml.slice(0, -4).replace(' class="prevParagraph"', '');

    html = html.replace(selectedHtml, newHtml);
  });

  $('.nextParagraph').each((i, element) => {
    const selectedHtml = $(element) + '';
    const newHtml = selectedHtml.slice(3, selectedHtml.length).replace('class="nextParagraph">', '');

    html = html.replace(selectedHtml, newHtml);
  });

  return Promise.resolve(html);
}
