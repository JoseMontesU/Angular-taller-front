import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.list().subscribe(data => this.users=data);
  }

  onDelete(id: number): void {
    this.userService.delete(id).subscribe(
        err => console.log(`error: ${err}`),
        () => {
          this.loadUsers();
          console.log(`item with id "${id} was deleted"`);
        }
      );
  }

}
