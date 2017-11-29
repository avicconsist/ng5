import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'app-grid',
    styleUrls: ['./grid.component.scss'],
    templateUrl: './grid.component.html' 
})
export class GridComponent {
    public gridData: any[] = products;
}
