import { isQuerySelector } from '../enhance/enhance.js';
import { listElement, listElements } from '../dom/dom.js';
import { buildNav } from './navigation-build.js';
import { stickyNav } from './navigation-sticky.js';
import { scrollingNav } from './navigation-scrolling.js';

const opt = {
  article: '[data-main]',
  selector: '[data-document-nav]',
  childSelector: 'section',
  rootHeadingNumber: 2,
  hashIndentChar: '-',
  textIndentChar: '.',
  stickyClassname: 'sticky',
  bottomClassname: 'bottom'
};

enhanceWithin(document);

function enhanceWithin(context) {
  if(isQuerySelector()) {
    const documentNav = listElement(context, opt.selector);
    enhance(documentNav);
  }
}

function enhance(element) {
  buildNav(element, opt);
  stickyNav(element, opt);
  scrollingNav(opt);
}
