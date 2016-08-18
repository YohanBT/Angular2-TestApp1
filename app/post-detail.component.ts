import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'post-detail',
  templateUrl: 'app/post-detail.component.html',
  styleUrls:['app/post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  
  @Input()
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.postService.getPost(id)
        .then(post => this.post = post);
    });
  }

  goBack() {
    window.history.back();
  }

  
}

