import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAchievementsComponent } from './last-achievements.component';

describe('LastAchievementsComponent', () => {
  let component: LastAchievementsComponent;
  let fixture: ComponentFixture<LastAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastAchievementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
