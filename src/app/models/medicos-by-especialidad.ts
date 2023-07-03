export class MedicosByEspecialidad {
  user_id:    string;
  last_NAME:  string;
  first_NAME: string;

  constructor(user_id: string, last_NAME: string, first_NAME: string) {
    this.user_id = user_id;
    this.last_NAME = last_NAME;
    this.first_NAME = first_NAME;
  }
}
