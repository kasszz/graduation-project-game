import { listElement, listElements } from '../dom/dom.js';

let opt = {};

export function buildNav(element, options) {
  opt = options;
  const navTree = createNavTree();
  const htmlList = createNavList(document.createElement('ol'), navTree);

  element.appendChild(htmlList);
}

function createNavList(parentList, navTree) {
  //if it isn't an array
  if(!navTree.length) {
    navTree = [navTree];
  }

  navTree.forEach(section => {
    const li = createNavItem(section);

    if(section.children.length > 0) {
      const ol = document.createElement('ol');
      li.appendChild(ol);

      section.children.forEach((child, i) => {
        createNavList(ol, section.children[i]);
      });
    }

    parentList.appendChild(li);
  });

  return parentList;
}

function createNavItem(section) {
  const li = document.createElement('li');
  const link = document.createElement('a');

  link.href = `#${section.id}`;
  link.setAttribute('data-section-link', true);
  link.innerHTML = section.title;
  li.appendChild(link);

  return li;
}

function createNavTree() {
  const navTree = [];
  const rootSections = listElements(document, `${opt.article} > ${opt.childSelector}`);

  rootSections.forEach((section, i) => {
    const index = i + 1;
    const id = `section${index}`;
    const header = listElement(section, `h${opt.rootHeadingNumber}`);
    indexHeader(header, id);

    const title = header.innerHTML;
    const sectionTree = createSectionTree(section, id, title, index);

    section.id = id;
    navTree.push(sectionTree);
    setChildrenSections(sectionTree, 1, index);
  });

  return navTree;
}

function setChildrenSections(parentTree, round, idPrefix) {
    const childSelector = `#${parentTree.element.id} > ${opt.childSelector}`;
    const childSections = listElements(parentTree.element, childSelector);
    const indentAmount = String(idPrefix).split(opt.hashIndentChar).length;

    if(childSections.length > 0) {
      childSections.forEach((childSection, x) => {
        const childIndex = x + 1;
        const id = `section${idPrefix}${opt.hashIndentChar}${childIndex}`;
        const header = listElement(childSection, `h${opt.rootHeadingNumber + indentAmount}`);
        indexHeader(header, id);

        const title = header.innerHTML;
        const childSectionTree = createSectionTree(childSection, id, title, childIndex);

        childSection.id = id;
        parentTree.children.push(childSectionTree);
        setChildrenSections(childSectionTree, round++, `${idPrefix}${opt.hashIndentChar}${childIndex}`);
      });
    }
}

function createSectionTree(element, id, title, index) {
  return {
    element,
    id,
    title,
    position: `${index}`,
    children: []
  }
}

function indexHeader(html, id) {
  let string = id;
  string = string.replace(opt.childSelector, '');
  string = string.split(opt.hashIndentChar).join(opt.textIndentChar);

  html.innerHTML = `${string} ${html.innerHTML}`;
}
