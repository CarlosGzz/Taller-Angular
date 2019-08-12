import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostService } from '../shared/services/post.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let postServiceMock;
  let snackBar;
  let dialog;


  beforeEach(() => {
    postServiceMock = jasmine.createSpyObj('PostService', ['getPosts', 'getCategories']);
    postServiceMock.getPosts.and.returnValue({subscribe: () => {}});
    postServiceMock.getCategories.and.returnValue({subscribe: () => {}});
    snackBar = {};
    dialog = {};
    component = new PostListComponent(postServiceMock, snackBar, dialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a category', () => {
    component.onSelectCategory('LifeStyle');
    expect(component.selectedCategory).toEqual('LifeStyle');
  });
});
