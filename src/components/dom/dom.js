export function listElement(context, selector) {
  return context.querySelector(selector);
}

export function listElements(context, selector) {
  return [].slice.call(context.querySelectorAll(selector));
}

export function getStyle(element, style) {
  return window.getComputedStyle(element, null).getPropertyValue(style);
}
