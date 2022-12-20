import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { ListComponent } from './base/list/list.component';
import { CartComponent } from './base/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
