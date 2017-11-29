import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chart',
    template: `
        <kendo-chart>
          <kendo-chart-axis-defaults [line]="{ color: 'red' }">
            <kendo-chart-axis-defaults-labels font="12pt sans-serif">
            </kendo-chart-axis-defaults-labels>
          </kendo-chart-axis-defaults>

          <kendo-chart-category-axis>
              <kendo-chart-category-axis-item [categories]="categories">
              </kendo-chart-category-axis-item>
          </kendo-chart-category-axis>

          <kendo-chart-series>
            <kendo-chart-series-item [data]="seriesData" type="line">
            </kendo-chart-series-item>
          </kendo-chart-series>
        </kendo-chart>
    `
})
export class ChartComponent   {

    constructor() { }
    public seriesData: number[] = [20, 40, 45, 30, 50];
    public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    ngOnInit() {

    }

}
