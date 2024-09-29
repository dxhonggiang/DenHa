
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function chooseSlide (n, no) {
  slideIndex[no] = n;
  showSlides(n, no)
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no] - 1].className += " active";
}

function autoChangeSlide () {
  let i;
  for (i=0;i<numOfSlide;i++) {
    plusSlides(1,i);
  }
  setTimeout(autoChangeSlide, 5000);
}
