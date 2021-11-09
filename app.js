var banner = document.getElementById('page-banner');

var bookList = document.getElementById('book-list');




var titles = document.getElementsByClassName('title');
console.log(titles);


var lis = document.getElementsByTagName('li');
console.log(lis);


for(i=0;i<titles.length;i++){
  console.log(titles[i])
}

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
  console.log(item)
});