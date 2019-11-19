import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedblackDirective } from './redblack.directive';
import { ChecknumDirective } from './checknum.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedblackDirective,
    ChecknumDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
