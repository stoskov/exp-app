import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'month-switch',
    templateUrl: "app/components/month-switcher/app.month-switcher.html"
})
export class MonthSwitcher {
    @Output() update = new EventEmitter();
    month: number = 2;
    year: number = 2016;

    constructor() {}

    increaseMonth() {
        this.month++;

        if (this.month > 12) {
            this.year++;
            this.month = 1;
        }
        
		this._onUpdate();
    }

    decreaseMonth() {
        this.month--;

        if (this.month < 1) {
            this.year--;
            this.month = 12;
        }
        
        this._onUpdate();
    }
     
	private _onUpdate(){
        this.update.emit({
            month: this.month,
            year: this.year
        });
    }
}