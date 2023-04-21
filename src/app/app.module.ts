import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaytraderFormComponent } from './daytrader-form/daytrader-form.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';

@NgModule({
  declarations: [
    AppComponent,
    DaytraderFormComponent,
    JurosCompostoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
