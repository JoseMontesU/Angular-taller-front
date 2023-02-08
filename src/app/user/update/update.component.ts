import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  user!: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.detail(id).subscribe(
      data => {
        this.user = data;
      },
      err => console.log(err)
    );
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.update(id,this.user).subscribe(
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
