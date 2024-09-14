import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNamesComponent } from './form-names.component';

describe('FormNamesComponent', () => {
  let component: FormNamesComponent;
  let fixture: ComponentFixture<FormNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNamesComponent]
    });
    fixture = TestBed.createComponent(FormNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
