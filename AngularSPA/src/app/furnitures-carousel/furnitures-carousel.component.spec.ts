import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituresCarouselComponent } from './furnitures-carousel.component';

describe('FurnituresCarouselComponent', () => {
  let component: FurnituresCarouselComponent;
  let fixture: ComponentFixture<FurnituresCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnituresCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
