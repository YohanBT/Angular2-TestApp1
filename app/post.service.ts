import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
    
    getPosts(){
        return Promise.resolve(POSTS);
    }

    getTopPosts(){
        var posts: Post[]=POSTS;
        posts.sort(function(a, b){return b.rating-a.rating});   
        return Promise.resolve(posts.slice(0,4));
    }

    getPost(id: number) {
    return this.getPosts()
                .then(heroes => heroes.find(hero => hero.id === id));
    }
}