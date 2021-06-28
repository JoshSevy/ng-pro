import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember/auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
    console.log()
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
