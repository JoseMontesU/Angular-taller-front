import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialCitasComponent } from './historial-citas/historial-citas.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';
import { ProxmimasCitasComponent } from './proxmimas-citas/proxmimas-citas.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { HistorialByPacientesComponent } from './historial-by-pacientes/historial-by-pacientes.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HistorialCitasComponent,
    RegistrarCitasComponent,
    ProxmimasCitasComponent,
    EspecialidadesComponent,
    ListaPacientesComponent,
    HistorialByPacientesComponent,
    ListaMedicosComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
