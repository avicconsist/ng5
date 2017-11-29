import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ 
        trigger('myitems', [
            transition('* => *', [
                query(':enter', style({ opacity: 0 }), { optional: true }),

                query(':enter', stagger('100ms', [
                    animate('.5s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                    ]))]), { optional: true }),
                query(':leave', stagger('100ms', [
                    animate('.5s ease-out', keyframes([
                        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
                    ]))]), { optional: true })
            ])
        ])

    ]   
})
export class HomeComponent   {

    itemCount: number = 0;
    btnAddText: string = 'הוסף';
    btnClearText: string = 'נקה';
    itemText: string = ''; 
    myitems = [];
    itemPlacenName: string = 'הזן שם פריט';
    constructor(private _data: DataService) { }

    ngOnInit() {
       
        this._data.item.subscribe(res => this.myitems = res);
        this._data.changeMyItems(this.myitems);
        this.itemCount = this.myitems.length;
  }

    addItem() {
        if (this.itemText.trim() != "") { 
        this.myitems.push(this.itemText);
        this.itemText = ''; 
        this._data.changeMyItems(this.myitems);
            this.itemCount = this.myitems.length;
        }  
    }
    clearItems() {
        this.myitems = [];
        this.itemText = '';
        this.itemCount = this.myitems.length;
        this._data.changeMyItems(this.myitems);
    }
    removeItem(i) {
        this.myitems.splice(i,1);  
        this._data.changeMyItems(this.myitems);
        this.itemCount = this.myitems.length;
    }

}
