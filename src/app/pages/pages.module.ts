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
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
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
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class PagesModule { }
