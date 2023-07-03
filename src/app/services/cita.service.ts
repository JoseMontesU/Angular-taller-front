import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cita} from "../models/cita";
import {MedicosByEspecialidad} from "../models/medicos-by-especialidad";
import {HorariosByMedico} from "../models/horarios-by-medico";

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citaURL = 'http://localhost:8079/api/cita/';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`})};

  constructor(private httpClient: HttpClient,
  ) { }

  public list(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.citaURL, this.httpOptions);
  }
  public create(cita: Cita): Observable<any> {
    return this.httpClient.post<any>(this.citaURL, cita, this.httpOptions);
  }
  public listMedicos(especialidad: string, fecha: string): Observable<MedicosByEspecialidad[]>{
    return this.httpClient.get<MedicosByEspecialidad[]>(this.citaURL+'medicos/'+especialidad+'/'+fecha,this.httpOptions);
  }
  public listHorarios(medico_id: string, disponible: string): Observable<HorariosByMedico[]>{
    return this.httpClient.get<HorariosByMedico[]>(this.citaURL+'horario/',this.httpOptions);
  }
}
