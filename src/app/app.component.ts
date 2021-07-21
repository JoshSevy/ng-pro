import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry?.createComponent(authFormFactory);
    component.instance.title = 'Create Account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
