import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FUNGUSComponent } from './fungus.component';

describe('FUNGUSComponent', () => {
  let component: FUNGUSComponent;
  let fixture: ComponentFixture<FUNGUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FUNGUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FUNGUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
