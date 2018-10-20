let clicks = 0;
document.querySelector('#clickNumber').textContent = clicks;
$('.cat1').append('Cat1<br> <img src="img/cat.jpg">');
$('.cat2').append('Cat2<br> <img src="img/cat.jpg">');
let clickHandler = function(e){
  clicks += 1;
  document.querySelector('#clickNumber').textContent = clicks;
};
document.querySelector('img').addEventListener('click', clickHandler, false);
document.querySelector('.cat2').addEventListener('click', clickHandler, false);
