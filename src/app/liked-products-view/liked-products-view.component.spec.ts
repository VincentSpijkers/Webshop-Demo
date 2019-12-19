import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedProductsViewComponent } from './liked-products-view.component';

describe('LikedProductsViewComponent', () => {
  let component: LikedProductsViewComponent;
  let fixture: ComponentFixture<LikedProductsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedProductsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedProductsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
