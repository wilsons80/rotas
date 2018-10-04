import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialTesteComponent } from './form-material-teste.component';

describe('FormMaterialTesteComponent', () => {
  let component: FormMaterialTesteComponent;
  let fixture: ComponentFixture<FormMaterialTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
