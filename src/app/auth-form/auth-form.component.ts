import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent {

  showMessage: boolean;


  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  title: string = "Login";

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
