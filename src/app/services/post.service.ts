import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // HTTP Requests
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  posts: any;
  constructor(private http: HttpClient) {}
  index() {
    return this.http.get(this.url);
  }
  create(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  update(post) {
    console.log(post);
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }
  destroy(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
