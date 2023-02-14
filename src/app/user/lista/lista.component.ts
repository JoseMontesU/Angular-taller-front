import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  users: Person[] = [];

  constructor(private personService: PersonService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.personService.list().subscribe(data => this.users=data);
    this.userService.list().subscribe(x=>{
      console.log(x);
    })
  }

  onDelete(id: number): void {
    this.personService.delete(id).subscribe(
        err => console.log(`error: ${err}`),
        () => {
          this.loadUsers();
          console.log(`item with id "${id} was deleted"`);
        }
      );
  }

}
