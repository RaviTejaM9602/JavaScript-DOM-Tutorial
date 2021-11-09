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


var books = document.querySelector('#book-list li:nth-child(2)');
console.log(books);
var booky = document.querySelector('#book-list li .name');
console.log(booky);
booky = document.querySelectorAll('#book-list li .name');
console.log(booky);


Array.from(booky).forEach(function(book){
  console.log(book)
});