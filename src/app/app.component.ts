import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'ITShare';
  isActive = true;
  username = 'YSM';
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
    rating: 9.98,
    salary: 5000,
    hiringDate: new Date(2020, 5, 1),
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  };

  favState = true;
  faveChanged() {
    console.log(this.favState);
  }
  persons: string[] = ['Yassen', 'Hasnaa', 'Omar', 'Youssef'];
  peopleByCountery: any[] = [
    {
      countery: 'Egypt',
      names: [
        {
          name: 'YSM',
        },
        {
          name: 'Hasnaa',
        },
      ],
    },
    {
      countery: 'Turkey',
      names: [
        {
          name: 'Omar',
        },
        {
          name: 'Atsh',
        },
        {
          name: 'Nor',
        },
      ],
    },
  ];

  courses: any[] = [
    { id: 1, courseName: 'PHP' },
    { id: 2, courseName: 'Python' },
    { id: 3, courseName: 'Java' },
    { id: 4, courseName: 'C#' },
    { id: 5, courseName: 'C++' },
    { id: 6, courseName: 'VueJs' },
  ];

  TrackByCourse(index, course) {
    return course ? course.id : undefined;
  }

  AddInArray() {
    this.courses.push({ id: 7, courseName: 'Angular' });
  }
  RemoveFromArray(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  // Start Switch case

  defaultView = 'courses';

  SetView(view) {
    this.defaultView = view;
  }

  // ng style
  color = false;
  changeColor() {
    this.color = !this.color;
  }

  // Observable

  // obs = Observable.interval

  // HTTP Requests
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  posts: any;
  constructor(private postServices: PostService) {}

  ngOnInit(): void {
    this.postServices.index().subscribe((response) => {
      return (this.posts = response);
    });
  }
  CreatePost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' };
    this.postServices.create(post).subscribe((r) => {
      this.posts.splice(0, 0, post);
    });
  }
  UpdatePost(post, title: HTMLInputElement) {
    let updatePost = { title: title.value, id: post.id };
     this.postServices.update(updatePost).subscribe( response => {
      let index = this.posts.indexOf(post);
      this.posts[index] = updatePost;
    });
  }
  DeletePost(post) {
    let index = this.posts.indexOf(post);
    this.postServices.destroy(post).subscribe((response) => {
      this.posts.splice(index, 1);
    });
  }
}
