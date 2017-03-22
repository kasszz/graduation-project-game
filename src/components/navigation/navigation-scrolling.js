import { isAddEventListener, isClassList } from '../enhance/enhance.js';
import { listElement, listElements } from '../dom/dom.js';

let opt = {};
let html = {};

const selector = '[data-section-link]';
const body = document.body;
const transition = 'transform 500ms ease-in-out';
const scrollTopOffset = 50;

export function scrollingNav(options) {
  if( isAddEventListener() && isAddEventListener() ) {
    opt = options;

    const links = listElements(document, selector);

    links.forEach(link => {
      enhance(link);
    });
  }
}

function enhance(element) {
  const targetId = element.href.split('#')[1];
  const target = document.getElementById(targetId);

  element.addEventListener('click', event => {
    event.preventDefault();

    startScrolling(element, target);
  }, false);
}

function startScrolling(element, target) {
  const offset = calculateOffset(target);

  element.style.opacity = 0;

  body.addEventListener('transitionend', onTransitionEnd, false);
  body.style.transition = transition;
  body.style.transform = `translateY(${body.scrollTop - offset}px)`;

  function onTransitionEnd(event) {
    if(event.propertyName !== 'transform') {
        return;
    }

    element.style.opacity = 1;

    body.removeEventListener('transitionend', onTransitionEnd, false);
    stopScrolling(offset);
    setHash(target.id);
  }
}

function stopScrolling(offset) {
  body.style.transition = '';
  body.style.transform = '';

  body.scrollTop = offset;
}

function calculateOffset(target) {
  const html = document.documentElement;
  const pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  const currentTop = body.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  const targetOffsetTop = target.offsetTop;
  const viewportHeight = window.innerHeight;

  if(viewportHeight + targetOffsetTop > pageHeight) {
    return pageHeight - viewportHeight;
  }
  return targetTop - currentTop - scrollTopOffset;
}

function setHash(hash) {
  if(history.pushState) {
    history.pushState(null,null, `#${hash}`);
  } else {
    window.location.hash = `#${hash}`;
  }
}
