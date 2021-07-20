import { Component, Output, EventEmitter, ContentChildren, AfterContentInit, QueryList, ViewChild, ViewChildren, AfterViewInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
    ) {}

  ngAfterViewInit() {
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
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
