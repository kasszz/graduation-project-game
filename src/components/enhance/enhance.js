export function isQuerySelector() {
  return ('querySelector' in document);
}

export function isAddEventListener() {
  return ('addEventListener' in window);
}

export function isClassList() {
  return (document.documentElement.classList);
}
