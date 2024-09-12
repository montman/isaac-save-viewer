import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementStatusComponent } from './achievement-status.component';

describe('AchievementStatusComponent', () => {
  let component: AchievementStatusComponent;
  let fixture: ComponentFixture<AchievementStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
