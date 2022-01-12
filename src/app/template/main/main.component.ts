import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  showCreateNews = false;

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('isLogin')) {
      this.showSlider = true;
      this.router.navigate(['/']);
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
