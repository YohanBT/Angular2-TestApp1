import { Component, Input } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'post-detail',
  template: `
    <div *ngIf="post">
      <h2>{{post.title}} in details!</h2>
      <div>
        <p>{{post.content}}</p>
        Rating: {{post.rating}} 
      </div>
    </div>
  `
})
export class PostDetailComponent {
  @Input()
  post: Post;
}

