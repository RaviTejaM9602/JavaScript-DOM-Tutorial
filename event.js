// var h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function(e){
//   console.log(e.target);
//   console.log(e);
// });


let liItem = document.querySelectorAll('#book-list li .delete');  
liItem.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentElement;
    console.log(li.parentNode);
    li.parentNode.removeChild(li);
  });
});

