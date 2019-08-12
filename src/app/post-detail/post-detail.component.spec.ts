import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../shared/services/post.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    const fakePostService = jasmine.createSpyObj('PostService', ['getPost']);
    fakePostService.getPost.and.returnValue({subscribe: () => {}});

    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent, MatIcon ],
      imports: [ReactiveFormsModule, MatFormFieldModule, RouterTestingModule],
      providers: [
        {provide: PostService, useValue: fakePostService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
