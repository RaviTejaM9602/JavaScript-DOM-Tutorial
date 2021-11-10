const banner = document.querySelector('#page-banner');
console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNode);

const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);

const bookList = document.querySelector('#book-list');
console.log(bookList.parentNode);
console.log(bookList.parentElement);
console.log(bookList.Children);

console.log(bookList.childNode);

