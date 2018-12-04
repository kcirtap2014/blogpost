import { Component,  OnInit, OnDestroy} from '@angular/core';
import { PostListService } from '../post-list.service';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postlistService: PostListService, private router:Router) { }

  ngOnInit() {
    this.postsSubscription = this.postlistService.postsSubject.subscribe(
      (posts: Post[])=>{
        this.posts = posts;
      }
    );
    this.postlistService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
