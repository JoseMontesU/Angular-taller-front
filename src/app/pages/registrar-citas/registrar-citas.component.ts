import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['./registrar-citas.component.css']
})
export class RegistrarCitasComponent implements OnInit{
  selected: Date | null | undefined;
  fecha?: string;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three','cuatro'];
  filteredOptions?: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getFecha():void{
    let date = this.selected?.getDate();
    let year = this.selected?.getFullYear();
    let month = this.selected?.getMonth()!=null? this.selected?.getMonth()+1 : null;
    this.fecha=`${date}/${month}/${year}`;
    console.log(this.fecha);
  }


}
