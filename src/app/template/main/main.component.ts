import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'frontend-exam';
  showForm = false;
  showSlider = true;

  constructor() { }

  ngOnInit(): void {
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
}
