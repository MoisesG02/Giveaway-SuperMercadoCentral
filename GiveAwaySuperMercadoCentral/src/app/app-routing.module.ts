import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RifaComponent } from './rifa/rifa.component';
import { SorteoPremiosComponent } from './sorteo-premios/sorteo-premios.component';

const routes: Routes = [
  { path: '', component: SorteoPremiosComponent },
  { path: 'rifa', component: RifaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
