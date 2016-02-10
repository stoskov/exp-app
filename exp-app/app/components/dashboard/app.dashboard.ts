import {
    Component
}
from "angular2/core";

import {
    MonthSwitcher
}
from "../month-switcher/app.month-switcher";

import {
    Router
}
from 'angular2/router';

@
Component({
    selector: "my-dashboard",
    templateUrl: "app/components/dashboard/dashboard.html",
    styleUrls: ["app/components/dashboard/dashboard.css"],
    directives: [MonthSwitcher]
})
export class DashboardComponent {
    constructor(private _router: Router) {}

    onNewExpClicked() {
        this._router.navigate(["NewExp"]);
    }

    onListExpsesClicked() {
        this._router.navigate(["ListExp"]);
    }
}