import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsSofasComponent } from './beds-sofas.component';

describe('BedsSofasComponent', () => {
  let component: BedsSofasComponent;
  let fixture: ComponentFixture<BedsSofasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedsSofasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsSofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
