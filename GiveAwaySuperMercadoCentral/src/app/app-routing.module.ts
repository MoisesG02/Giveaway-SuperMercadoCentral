import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteoPremiosComponent } from './sorteo-premios/sorteo-premios.component';

const routes: Routes = [
  { path: '', component: SorteoPremiosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
