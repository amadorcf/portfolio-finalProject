import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevBootcampComponent } from './web-dev-bootcamp.component';

describe('WebDevBootcampComponent', () => {
  let component: WebDevBootcampComponent;
  let fixture: ComponentFixture<WebDevBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebDevBootcampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDevBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
