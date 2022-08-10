const slider = document.querySelector('.slider input'),
  dragLine = document.querySelector('.slider .drag-line'),
  img = document.querySelector('.images .img-2');

slider.oninput = () => {
  const sliderValue = slider.value;
  dragLine.style.left = sliderValue + '%';
  img.style.width = sliderValue + '%';
};
