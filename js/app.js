let click1 = 0;
let click2 = 0;
document.querySelector('.c1').textContent = click1;
document.querySelector('.c2').textContent = click2;
$('.cat1').append('Cat1<br> <img src="img/cat.jpg">');
$('.cat2').append('Cat2<br> <img src="img/cat1.jpg">');
let clickHandler1 = function(e){
  click1 += 1;
  document.querySelector('.c1').textContent = click1;
};
let clickHandler2 = function(e){
  click2 += 1;
  document.querySelector('.c2').textContent = click2;
};
document.querySelector('img').addEventListener('click', clickHandler1, false);
document.querySelector('.cat2').addEventListener('click', clickHandler2, false);
