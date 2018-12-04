import { Component, Input, OnInit } from '@angular/core';
import { PostListService} from '../post-list.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  @Input() postId: number;
  @Input() index: number;

  constructor(private postlistService: PostListService) { }

  onIncrease(){
    this.postLoveIts += 1;
  }

  onDecrease(){
    this.postLoveIts -= 1;
  }

  onRemove(index){
    this.postlistService.removePost(index);
  }

  ngOnInit() {
  }

}
