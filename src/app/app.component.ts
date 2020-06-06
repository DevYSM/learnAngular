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
  checked =true;
}
