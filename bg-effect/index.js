console.log('스크립트 연결 완료!')

const section = document.querySelector('.section')
// console.error(section);

for (let i = 0; i < 400; i++) {
  const box = document.createElement('i')
  // <i style="--i:11;"></i>
  // console.error(Math.floor(Math.random() * 20));
  box.style.cssText = `--i:${Math.floor(Math.random() * 20)}`;
  section.append(box);
}