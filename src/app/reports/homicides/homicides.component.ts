import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HomicidesChartComponent } from './components/homicides-chart/homicides-chart.component';
import { HomicidesTableComponent } from './components/homicides-table/homicides-table.component';

@Component({
  selector: 'app-homicides',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    HomicidesTableComponent,
    HomicidesChartComponent,
    MatIconModule,
  ],
  templateUrl: './homicides.component.html',
  styleUrl: './homicides.component.scss'
})
export class HomicidesComponent {

}
