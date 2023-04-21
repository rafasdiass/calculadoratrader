import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DaytraderFormComponent } from './daytrader-form/daytrader-form.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';

const routes: Routes = [
  { path: '', component: DaytraderFormComponent },
  { path: 'juros-composto', component: JurosCompostoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }