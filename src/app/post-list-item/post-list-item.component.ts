import { Component, Input, OnInit } from '@angular/core';

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

  onIncrease(){
    this.postLoveIts += 1;
  }

  onDecrease(){
    this.postLoveIts -= 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
