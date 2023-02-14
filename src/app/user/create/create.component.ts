import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  
  user!: Person;
  userName!: string;

  constructor(
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.user = new Person(0, this.userName);
    this.personService.create(this.user).subscribe(
      data => {
        console.log(data);
        this.volver();
      },
      err => console.log(err)
    );
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }

}
