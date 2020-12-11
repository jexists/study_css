console.log('???')


const donut = document.querySelector('.loading_circle');

const degree = 3.6 * (100 - parseInt(donut.getAttribute('data-per')));
const r = parseInt(donut.getAttribute('r'));

// console.log(donut.getAttribute('data-per'));
// console.log(r);


document.documentElement.style.setProperty('--l', r * 3.141592 * 2);
document.documentElement.style.setProperty('--deg', degree.toString() + "deg");
document.documentElement.style.setProperty('--result', 2 * 3.141592 * r * (degree / 360));

// document.documentElement.style.CSSStyleRule({
//   '--l': r * 3.141592 * 2,
//   '--deg': deg.toString() + "deg",
//   '--result': 2 * 3.141592 * r * (degree / 360),
// });

//////////////
// jQuery. //
/*
var donut = $('.loading_circle');

var degree = 3.6 * (100 - parseInt(donut.attr('data-per')));
var r = parseInt(donut.attr('r'));

$(':root').css({
    '--l': r * 3.141592 * 2,
    '--deg': degree.toString() + "deg",
    '--result': 2 * 3.141592 * r * (degree / 360)
});
*/