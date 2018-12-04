import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostListService {
  lastUpdate = new Date();
  postsSubject = new Subject();
  content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.";
  created_at = this.lastUpdate;

  post1 = new Post('Mon premier post', this.content, 1, this.created_at);
  post2 = new Post('Mon deuxième post', this.content, -2, this.created_at);
  post3 = new Post('Encore un post', this.content, 0, this.created_at);
  posts: Post[]=[this.post1, this.post2, this.post3];

  constructor(){}

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  removePost(i:number){
    this.posts.splice(i,1);
    this.emitPosts();
  }

  createNewPost(newPost:Post){
    this.posts.push(newPost);
    this.emitPosts();
  }

}
