import { Component, AfterViewInit } from '@angular/core';
import { chartBuilder } from 'scichart/Builder/chartBuilder';
import { ESeriesType } from 'scichart/types/SeriesType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-scichart-demo';

  ngAfterViewInit(): void {
    console.log('Init SciChart in ngAfterViewInit');
    initSciChart();
  }
}

async function initSciChart(): Promise<void> {
  // LICENSING //
  // Set your license code here
  // You can get a trial license key from https://www.scichart.com/licensing-scichart-js/
  // Purchased license keys can be viewed at https://www.scichart.com/profile
  //
  // e.g.
  //
  // SciChartSurface.setRuntimeLicenseKey("V0ZqHzgKtDj18P6KcQO4Z0ca5VfQutqokAWfcWpUiKw4sVnP+TjldZsk4OGPV4E1LX1C0R4cbfUzLwj6Dbt+CCor/79wVv7GmoE28stCHrfziW+wt1BmXldLFO3t7FaaK0xIzozTlWpNr842nA6bgz4ANr+9bYO4ZFn73rjfjztCnpetO2P5MdE0NRPtyrD7cReBzL/eMWzSGjD4XKli2+I2hneI6ldal4qb2Veuy5/uz1yXV+DdJ27M7faIUmlfd9ERKYoOMiJjH4w4ux3hffDqidvXOD3KazRatoYpGlK/SU3a6us0dwyJLsWpbLl7/+6s4xMs1Mmsv7IHwGBGRspR1jpp7Y79GfVZOTB9OCkcMAF5R9yI1TpgJek5SUfvoZLhTt2u19Qk0W43LkLmm8tnmNUZWxw2AHk4fqrR7/3EGV/nwR7/1yf9RrSzWt+Ca0/lNwaRpEdCGayiVKMa75NDqxvyoOisYwd4BIfBCz8lElmvJhgZbYIS+o3WOo7vj1IJqingPupOdaUhyo7qm+j8RwcG0IlgvhvUoJJr0nkEwHNgNVyQj/7++BOq+Bt9bQYgTSXAIoFrq9w=");
   
  //
  // Also, once activated (trial or paid license) having the licensing wizard open on your machine
  // will mean any or all applications you run locally will be fully licensed.

  // Create the SciChartSurface in the div 'scichart-root'
  // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
  // instance must be passed to other types that exist on the same surface.
  const { sciChartSurface, wasmContext } = await chartBuilder.build2DChart(
    'scichart-root-id',
    {
      series: {
        type: ESeriesType.LineSeries,
        xyData: { xValues: [1, 2, 3, 4, 5], yValues: [1, 4, 8, 2, 6] },
      },
    }
  );

  // That's it! You just created your first SciChartSurface!
}