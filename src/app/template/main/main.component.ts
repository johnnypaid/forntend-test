import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'frontend-exam';
  showForm = false;
  showSlider = true;
  showAdmin = false;

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('isLogin'));

    if (!localStorage.getItem('isLogin')) {
      this.showSlider = true;
    } else {
      this.showSlider = false;
    }
  }

  showFormEv(value: boolean) {
    console.log(value);
    switch(value) {
      case true: {
        this.showForm = true;
        this.showSlider = false;
      break;
      }
      case false: {
        this.showForm = false;
        this.showSlider = true;
      }
    }
  }

  showAdminEvent(value: boolean) {
    console.log(value)
    this.showAdmin = value;
    location.reload();
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
