import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInformaComponent } from './log-informa.component';

describe('LogInformaComponent', () => {
  let component: LogInformaComponent;
  let fixture: ComponentFixture<LogInformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
