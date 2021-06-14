import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormaComponent } from './edit-forma.component';

describe('EditFormaComponent', () => {
  let component: EditFormaComponent;
  let fixture: ComponentFixture<EditFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
