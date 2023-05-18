import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './user/lista/lista.component';
import { DetailComponent } from './user/detail/detail.component';
import { UpdateComponent } from './user/update/update.component';
import { CreateComponent } from './user/create/create.component';
import {HistorialCitasComponent} from "./pages/historial-citas/historial-citas.component";
import {RegistrarCitasComponent} from "./pages/registrar-citas/registrar-citas.component";
import {ProxmimasCitasComponent} from "./pages/proxmimas-citas/proxmimas-citas.component";
import {EspecialidadesComponent} from "./pages/especialidades/especialidades.component";
import {ListaPacientesComponent} from "./pages/lista-pacientes/lista-pacientes.component";
import {HistorialByPacientesComponent} from "./pages/historial-by-pacientes/historial-by-pacientes.component";
import {ListaMedicosComponent} from "./pages/lista-medicos/lista-medicos.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'create', component: CreateComponent},
  {path: 'proxima-cita', component: ProxmimasCitasComponent},
  {path: 'registrar', component: RegistrarCitasComponent},
  {path: 'historial', component: HistorialCitasComponent},
  {path: 'especialidades', component: EspecialidadesComponent},
  {path: 'lista-pacientes', component: ListaPacientesComponent},
  {path: 'historial-pacientes', component: HistorialByPacientesComponent},
  {path: 'lista-medicos', component: ListaMedicosComponent},
  {path: 'about', component: AboutComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
