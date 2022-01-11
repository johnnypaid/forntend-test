import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showFormEvent = new EventEmitter<boolean>();
  @Input() showAdmin = false;

  showLogout = false;
  buttonText = 'login';

  constructor() { }

  ngOnInit(): void {
    (!localStorage.getItem('isLogin')) ? this.showLogout = false : this.showLogout = true;
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
    this.showLogout = false;
    localStorage.removeItem('isLogin');
    this.showFormEvent.emit(false);
  }
}
