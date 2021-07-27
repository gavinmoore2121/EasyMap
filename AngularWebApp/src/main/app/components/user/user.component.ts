import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/main/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User = new User(); // property binding []
  @Output() changeUser: EventEmitter<User> = new EventEmitter<User>(); // event binding ()

  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMap(){
    this.router.navigate(['/map']);
  }
  gotoCreate(){
    this.router.navigate(['/map']);
  }
  gotoEdit(){
    this.router.navigate(['/map']);
  }
}
