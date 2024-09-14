import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwtComponent } from './pwt.component';

describe('PwtComponent', () => {
  let component: PwtComponent;
  let fixture: ComponentFixture<PwtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwtComponent]
    });
    fixture = TestBed.createComponent(PwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
