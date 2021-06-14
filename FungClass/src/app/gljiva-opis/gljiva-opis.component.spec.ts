import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GljivaOPISComponent } from './gljiva-opis.component';

describe('GljivaOPISComponent', () => {
  let component: GljivaOPISComponent;
  let fixture: ComponentFixture<GljivaOPISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GljivaOPISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GljivaOPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
