import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CitaService} from "../../services/cita.service";
import {Cita} from "../../models/cita";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-proxmimas-citas',
  templateUrl: './proxmimas-citas.component.html',
  styleUrls: ['./proxmimas-citas.component.css']
})
export class ProxmimasCitasComponent implements  OnInit {

  displayedColumns: string[] = ['id', 'especialidad', 'medicoId', 'date', 'hour','diagnostico'];
  dataSource!: MatTableDataSource<Cita>;
  citas: Cita[] = [
    {id:"1",especialidad:"Traumatología", medicoId:"Juan Perez Ramos",date:"03-03-2023",hour:"9:00 AM",pacienteId:"1", diagnostico:"Escoliosis o columna desviada"},
    {id:"2",especialidad:"Medicina General", medicoId:"Raul Matos Rios",date:"15-03-2023",hour:"10:00 AM",pacienteId:"1", diagnostico:"Bronquitis"},
    {id:"3",especialidad:"Cardiología", medicoId:"Ana Rodriguez Perales",date:"15-04-2023",hour:"9:30 AM",pacienteId:"1", diagnostico:"Presión arterial alta"},
    {id:"4",especialidad:"Traumatología", medicoId:"Juan Perez Ramos",date:"02-05-2023",hour:"10:00 AM",pacienteId:"1", diagnostico:"Lumbalgia"},
    {id:"5",especialidad:"Medicina General", medicoId:"Raul Matos Rios",date:"15-05-2023",hour:"9:00 AM",pacienteId:"1", diagnostico:"Influenza"},
    {id:"6",especialidad:"Medicina General", medicoId:"Raul Matos Rios",date:"05-06-2023",hour:"9:30 AM",pacienteId:"1", diagnostico:"Infeccion de la piel"},
    {id:"7",especialidad:"Cardiología", medicoId:"Ana Rodriguez Perales",date:"18-06-2023",hour:"10:00 AM",pacienteId:"1", diagnostico:"Insuficiencia cardiaca"},
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private citaService: CitaService) {
  }

  ngOnInit() {
    // this.citaService.list().subscribe(data => {
    //   this.citas = data;
    //   console.log(this.citas);
    //   this.dataSource = new MatTableDataSource(this.citas);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
      this.dataSource = new MatTableDataSource(this.citas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
