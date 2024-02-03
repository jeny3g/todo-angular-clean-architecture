import { TestBed } from '@angular/core/testing';

import { TaskUsecaseService } from './task-usecase.service';

describe('TaskUsecaseService', () => {
  let service: TaskUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
