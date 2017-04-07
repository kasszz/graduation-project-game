const cheerio = require('cheerio');

module.exports = html => {
  const $ = cheerio.load(html);

  $('[cheerio-span]').each((i, element) => {
    $(element).removeAttr('cheerio-span');
    const prevParagraph = $(element).prev('p');
    const nextParagraph = $(element).next('p');
    html = html.replace(`${prevParagraph.html()}</p>`, prevParagraph.html());
    html = html.replace(`<p>${nextParagraph.html()}`, nextParagraph.html());
  });

  return Promise.resolve(html);
}
