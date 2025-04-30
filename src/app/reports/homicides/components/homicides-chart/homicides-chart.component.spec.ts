import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomicidesChartComponent } from './homicides-chart.component';

describe('HomicidesChartComponent', () => {
  let component: HomicidesChartComponent;
  let fixture: ComponentFixture<HomicidesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomicidesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomicidesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
