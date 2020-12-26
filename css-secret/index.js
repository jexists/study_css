
// <div class="item"></div>
// <div class="item"></div>
// <div class="item"></div>
// <div class="item"></div>

// element을 배열로 사용하고 싶을때 사용하는 함수
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
  // return [...elements]; // 상단과 같은 return 값
}
$$(".item");
console.log($$(".item"));
// __proto__: Array(0) 

console.log(document.querySelectorAll(".item"));
// __proto__: NodeList