import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoaltComponent } from './leilaoalt.component';

describe('LeilaoaltComponent', () => {
  let component: LeilaoaltComponent;
  let fixture: ComponentFixture<LeilaoaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
