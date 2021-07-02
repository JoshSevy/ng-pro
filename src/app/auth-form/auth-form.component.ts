import { Component, Output, EventEmitter, ContentChildren, AfterContentInit, QueryList } from '@angular/core';

import { AuthRememberComponent } from './auth-remember/auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((query) => {
        query.checked.subscribe((checked: boolean) => this.showMessage = checked);
      })
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
