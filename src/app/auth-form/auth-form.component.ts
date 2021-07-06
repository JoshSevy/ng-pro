import { Component, Output, EventEmitter, ContentChildren, AfterContentInit, QueryList, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
  }
}

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
