import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
  @Output() delete: EventEmitter<Post>;

  constructor() {
    this.delete = new EventEmitter<Post>();
  }

  onDelete() {
    this.delete.emit(this.post);
  }
}
