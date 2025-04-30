import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomicidesTableComponent } from './homicides-table.component';

describe('HomicidesTableComponent', () => {
  let component: HomicidesTableComponent;
  let fixture: ComponentFixture<HomicidesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomicidesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomicidesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
