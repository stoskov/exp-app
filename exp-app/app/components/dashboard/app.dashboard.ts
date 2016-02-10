import {
    Component
}
from "angular2/core";

import {
    MonthSwitcher
}
from "../month-switcher/app.month-switcher";

@
Component({
    selector: "my-app",
    templateUrl: "app/components/dashboard/dashboard.html",
    styleUrls: ["app/components/dashboard/dashboard.css"],
    directives: [MonthSwitcher]
})
export class Dashboard {
    _router: any;

    constructor() {}

    onNewExpClicked() {
        console.log();
    }

    onListExpsesClicked() {
        console.log();
    }
}