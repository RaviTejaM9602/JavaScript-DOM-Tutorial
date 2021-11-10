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

console.log(bookList.nextSibling);
console.log(bookList.nextElementSibling);

const list = document.querySelector('#book-list ul');
const listItems = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);
  }

  });
});



const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});


//forms 

const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
  console.log(form);
});

const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});