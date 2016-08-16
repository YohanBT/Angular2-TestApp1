import { Component } from '@angular/core';

import { Post } from './post';

const POSTS: Post[] = [
  { id: 1, title: 'Post 1 title', content:'Blog post 1 content is here!',rating:0 },
  { id: 2, title: 'Post 2 title', content:'Blog post 2 content is here!',rating:0 },
  { id: 3, title: 'Post 3 title', content:'Blog post 3 content is here!',rating:0 },
  { id: 4, title: 'Post 4 title', content:'Blog post 4 content is here!',rating:0 },
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Post List</h2>
    <ul class="posts">
      <li *ngFor="let post of posts"
        [class.selected]="post === selectedPost"
        (click)="onSelect(post)">
        <span class="badge">{{post.id}}</span> {{post.title}}
      </li>
    </ul>
    <post-detail [post]="selectedPost"></post-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .posts {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .posts li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .posts li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .posts li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .posts .text {
      position: relative;
      top: -3px;
    }
    .posts .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'My Blog';
  posts = POSTS;
  selectedPost: Post;

  onSelect(post: Post) { this.selectedPost = post; }
}
