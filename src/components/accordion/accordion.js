import { isQuerySelector, isAddEventListener, isClassList } from '../enhance/enhance.js';
import { listElement, listElements, getStyle } from '../dom/dom.js';

const selector = '[data-accordion]';
const headerSelector = '[data-accordion-header]';
const panelSelector = '[data-accordion-panel]';
const contentSelector = '[data-accordion-content]';
const openStateClass = 'open';

enhanceWithin(document);

function enhanceWithin(context) {
  if(isQuerySelector() && isAddEventListener() && isClassList()) {
    const accordions = listElements(context, selector);
    accordions.forEach(accordion => {
      enhance(accordion);
    });
  }
}

function enhance(element) {
  const header = listElement(element, headerSelector);
  const panel = listElement(element, panelSelector);
  const content = listElement(element, contentSelector);

  header.addEventListener('click', event => {
    const isSet = element.classList.toggle(openStateClass);

    if(isSet) {
      panel.style.height = `${content.scrollHeight}px`;
    } else {
      panel.style.height = '0px';
    }
  });
}
