
import { AddEditModalComponent } from './add-edit-modal.component';
import { of } from 'rxjs';
import { Post } from 'src/app/shared/models/post';

describe('AddEditPostComponent', () => {
  let component: AddEditModalComponent;
  let dialogRef;
  let postServiceMock;
  let post: Post;

  beforeEach(() => {
    postServiceMock = jasmine.createSpyObj('PostService', ['getCategories']);
    postServiceMock.getCategories.and.returnValue(of({}));
    dialogRef = {};
    post = new Post();
    component = new AddEditModalComponent(dialogRef, postServiceMock, post);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
