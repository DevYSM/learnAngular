import { Component } from '@angular/core';
import { DBServices } from '../db.services';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css'],
})
export class MyFirstComponent {
  courses;
  // Dependency Injection
  constructor(dbservice: DBServices) {
     this.courses = dbservice.getAll();
  }
}
