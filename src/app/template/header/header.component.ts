import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showFormEvent = new EventEmitter<boolean>();

  buttonText = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  showChildForm() {
    if (this.buttonText === 'login') {
      this.buttonText = 'close';
      this.showFormEvent.emit(true);
    } else {
      this.buttonText = 'login';
      this.showFormEvent.emit(false);
    }
  }
}
