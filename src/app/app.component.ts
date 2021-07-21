import { AfterContentInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.cd.detectChanges();
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);
    console.log(this.component.instance);

    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Sevy Joshua',
      location: 'Denver, CO'
    });
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
