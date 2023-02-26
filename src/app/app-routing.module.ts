import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { PogodaComponent } from './pogoda/pogoda.component';

const routes: Routes = [
  { path: 'pogoda', component: PogodaComponent},
  { path: 'formularz', component: FormularzComponent},
  { path: '', pathMatch: 'full', redirectTo: '/pogoda'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
