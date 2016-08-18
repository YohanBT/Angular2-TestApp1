import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'blog-posts',
  templateUrl: 'app/posts.component.html',
  styleUrls:  ['app/posts.component.css'],
  providers:[PostService],
})
export class PostsComponent implements OnInit{
  posts: Post[];
  selectedPost: Post;

  constructor(
    private router:Router,
    private postService: PostService
  ) { }

  getPosts() {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  getTopPosts(){
    this.postService.getTopPosts().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  onSelect(post: Post) { 
    this.router.navigate(['/detail', post.id]); 
  }
}
