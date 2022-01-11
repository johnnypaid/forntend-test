import { Component, OnInit} from '@angular/core';
import { FakeDataService } from 'src/app/service/fake-data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides: any;
  slideArray = [{}];
  finalArray: any;
  slideIndex = 1;

  constructor(private fakeSlideData: FakeDataService) { }

  ngOnInit(): void {
    this.getSlides();

    setTimeout(() => {
      this.currentSlide(1);
    }, 3000);
  }

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

  getSlides() {
    this.fakeSlideData.getSlides()
    .then(data => {
      this.slides = data;
      this.slideArray.push(this.slides);
      this.finalArray = this.slideArray[1]
      console.log(this.finalArray);
    });
  }
}
