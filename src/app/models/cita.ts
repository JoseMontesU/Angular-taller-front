export class Cita {
  id:           string;
  date:         string;
  hour:         string;
  especialidad: string;
  diagnostico:  string;
  pacienteId:   string;
  medicoId:     string;


  constructor(id: string, date: string, hour: string, especialidad: string, diagnostico: string, pacienteId: string, medicoId: string) {
    this.id = id;
    this.date = date;
    this.hour = hour;
    this.especialidad = especialidad;
    this.diagnostico = diagnostico;
    this.pacienteId = pacienteId;
    this.medicoId = medicoId;
  }
}
