import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './user/lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
