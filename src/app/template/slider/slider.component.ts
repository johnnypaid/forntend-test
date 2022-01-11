import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.currentSlide(1);
  }
slideIndex = 1;

plusSlides(n: any) {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n: any) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n: any) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  (slides[this.slideIndex-1] as HTMLElement).style.display = "block";
  dots[this.slideIndex-1].className += " active";
}
}
