const left_btn = document.querySelector('#left-btn');
const right_btn = document.querySelector('#right-btn') 
const random_btn = document.querySelector('#random-bg');
let img_container = ['assets/img-1.jpg', 'assets/img-2.jpg', 'assets/img-3.jpg',
  'assets/img-4.jpg', 'assets/img-5.jpg'];

let i = 0;
left_btn.onclick = () => {
  i++
  if (i >= img_container.length) {
    i = 0;
  }
  document.body.style.backgroundImage = `url(${img_container[i]})`
}
right_btn.onclick = () => {
  if (i == 0) {
    i=5
  }
  i--
  document.body.style.backgroundImage = `url(${img_container[i]})`;
}

