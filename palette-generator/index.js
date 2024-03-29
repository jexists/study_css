console.log('스크립트 연결 완료!')

for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);

  const btn = document.querySelector('.btn');
  const randomColorBlock = document.querySelectorAll('.box')

  function RandomHexColorCode() {
    var chars = '0123456789abcdef';
    var colorLenth = 6;
    var color = '';
    for (let i = 0; i < colorLenth; i++) {
      let randomColor = Math.floor(Math.random() * chars.length)
      color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
  }

  function addColor() {
    randomColorBlock.forEach(e =>{
      var newColor = RandomHexColorCode();
      e.style.backgroundColor = newColor;
    })
  }
}