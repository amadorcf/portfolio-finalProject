import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBankComponent } from './your-bank.component';

describe('YourBankComponent', () => {
  let component: YourBankComponent;
  let fixture: ComponentFixture<YourBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
