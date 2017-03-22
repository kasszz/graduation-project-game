import { isAddEventListener, isClassList } from '../enhance/enhance.js';
import { listElement, listElements } from '../dom/dom.js';

let opt = {};
let html = {};

export function stickyNav(element, options) {
  if(isAddEventListener() && isClassList()) {
    opt = options;

    html.article = listElement(document, opt.article);
    html.nav = element;
    enhance();
  }
}

function enhance() {
  setNavState();
  window.addEventListener('scroll', event => {
    setNavState();
  });
}

function setNavState() {
  const articleTop = html.article.getBoundingClientRect().top;

  if( articleTop >= 0 ) {
    //at top
    toggleClass(html.nav, opt.stickyClassname, false);
    html.nav.style.top = 'auto';
  } else if ( articleTop < 0) {
    //next to
    toggleClass(html.nav, opt.stickyClassname, true);
    html.nav.style.top = 0;
  }
}

function toggleClass(element, classname, isSet) {
  element.classList.toggle(classname, isSet);
}
