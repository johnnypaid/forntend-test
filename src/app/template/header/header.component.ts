import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showFormEvent = new EventEmitter<boolean>();
  @Input() showAdmin = false;

  buttonText = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  showChildForm() {
    console.log(this.buttonText);

    if (this.buttonText === 'login') {
      this.buttonText = 'close';
      this.showFormEvent.emit(true);
    } else {
      this.buttonText = 'login';
      this.showFormEvent.emit(false);
    }
  }

  logout() {
    this.buttonText = 'login';
    this.showAdmin = false;
    this.showFormEvent.emit(false);
  }
}
