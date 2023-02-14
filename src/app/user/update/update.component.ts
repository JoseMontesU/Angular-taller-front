import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  user!: Person;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(id).subscribe(
      data => {
        this.user = data;
      },
      err => console.log(err)
    );
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.update(id,this.user).subscribe(
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
