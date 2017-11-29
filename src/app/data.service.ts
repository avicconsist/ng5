import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

    private myitems = new BehaviorSubject<any>([]);
    item = this.myitems.asObservable();

    constructor() { }

    changeMyItems(item) {
        this.myitems.next(item)
    }
}
