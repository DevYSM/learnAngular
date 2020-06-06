import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent   {
  courseName = "Angular 6";
  imgUrl = "https://via.placeholder.com/300/300";
  colSpan = 3;
}
