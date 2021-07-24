import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
