import {
    Component
}
from 'angular2/core';

@
Component({
    selector: 'month-switch',
    templateUrl: "app/components/month-switcher/month-switcher.html"
})
export class MonthSwitcher {
    month: number = 2;
    year: number = 2016;

    constructor() {}

    increaseMonth() {
        this.month++;

        if (this.month > 12) {
            this.year++;
            this.month = 1;
        }
    }

    decreaseMonth() {
        this.month--;

        if (this.month < 1) {
            this.year--;
            this.month = 12;
        }
    }
}