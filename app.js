var banner = document.getElementById('page-banner');

var bookList = document.getElementById('book-list');




// var titles = document.getElementsByClassName('title');
// console.log(titles);


// var lis = document.getElementsByTagName('li');
// console.log(lis);


// for(i=0;i<titles.length;i++){
//   console.log(titles[i])
// }

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//   console.log(item)
// });


// var books = document.querySelector('#book-list li:nth-child(2)');
// console.log(books);
// var booky = document.querySelector('#book-list li .name');
// console.log(booky);
// booky = document.querySelectorAll('#book-list li .name');
// console.log(booky);


// Array.from(booky).forEach(function(book){
//   console.log(book)
// });


// var books = document.querySelectorAll('#book-list li .name');


// Array.from(books).forEach(function(book){
//   console.log(book.textContent);
// });


var books = document.querySelectorAll('#book-list');
Array.from(books).forEach(function(book){
 book.textContent += '(Book title)';  
});


const bookList1 = document.querySelector('#book-list');
console.log(bookList1.innerHtml = '<h2>Hello Sai</h2>');
bookList1.innerHtml = '<p>Hello Sai</p>';

