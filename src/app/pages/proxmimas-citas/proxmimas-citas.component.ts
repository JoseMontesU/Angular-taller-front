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

  displayedColumns: string[] = ['id', 'especialidad', 'medicoId', 'date', 'hour'];
  dataSource!: MatTableDataSource<Cita>;
  citas: Cita[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private citaService: CitaService) {
  }

  ngOnInit() {
    this.citaService.list().subscribe(data => {
      this.citas = data;
      console.log(this.citas);
      this.dataSource = new MatTableDataSource(this.citas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
