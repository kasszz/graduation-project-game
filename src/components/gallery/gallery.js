import { isQuerySelector, isAddEventListener, isClassList } from '../enhance/enhance.js';
import { listElement, listElements, getStyle } from '../dom/dom.js';
import baguetteBox from 'baguetteBox.js';

const selector = '[data-gallery]';

enhanceWithin(document);

function enhanceWithin(context) {
  if(isQuerySelector()) {
    const galleries = listElements(context, selector);
    galleries.forEach(gallery => {
      enhance(gallery);
    });
  }
}

function enhance(element) {
  baguetteBox.run(selector);
}
