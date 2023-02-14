import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  user?: Person;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(id).subscribe(
      data =>{
        this.user = data;
      },
      err => console.log(err)
    )
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }

}
