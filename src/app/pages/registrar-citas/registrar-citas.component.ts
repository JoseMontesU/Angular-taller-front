import {Component, OnInit} from '@angular/core';
import {CitaService} from "../../services/cita.service";
import {MedicosByEspecialidad} from "../../models/medicos-by-especialidad";

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['./registrar-citas.component.css']
})
export class RegistrarCitasComponent implements OnInit{
  selected: Date | null | undefined;
  fecha: string='';
  option:string = '';
  medicos: MedicosByEspecialidad[] = [
    {user_id: "1", first_NAME:"Juan", last_NAME:"Perez Ramos"},
    {user_id: "2", first_NAME:"Raul", last_NAME:"Matos Rios"},
    {user_id: "3", first_NAME:"Sergio", last_NAME:"Valdiviezo Tisnado"},
  ];

  constructor(
    private citaService: CitaService,
  ) {
  }

  ngOnInit(): void {
  }

  getEspecialidad():string{
    console.log(this.option);
    return this.option;
  }

  getFecha():string{
    let date = this.selected?.getDate();
    let year = this.selected?.getFullYear();
    let month:number | null = this.selected?.getMonth()!=null? this.selected?.getMonth()+1 : null;
    // @ts-ignore
    if(month < 10){
      this.fecha=`${year}-0${month}-${date}`;
    }else {
    this.fecha=`${year}-${month}-${date}`;
    }
    console.log(this.fecha);
    this.getMedicos();
    return this.fecha;
  }

  getMedicos(): void{
    if(this.option!='' && this.fecha!=''){
      this.citaService.listMedicos(this.option,this.fecha).
      subscribe({
        next: data =>{
          console.log(data);
          this.medicos=data;
        }
      })
    }
  }


}
