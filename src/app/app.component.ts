import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ITShare';
  isActive = true;
  username ='YSM';
  firstname = '';

  divClicked($event) {
    $event.stopPropagation();
    return console.log(`You Clicked On Div `);
  }
  btnClicked($event) {
    $event.stopPropagation();
    return console.log(`You Clicked On Button `);
  }
  onKeyUp(firstname) {
    // this.username = name;
    return console.log(firstname);
  }
  
  // PIPE
  employees = {
    fullname: 'Yassen Sayed',
    postion: 'Fullstack Developer',
    rating:9.98,
    salary: 5000,
    hiringDate: new Date(2020, 5, 1),
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  }

}
