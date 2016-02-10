import {Component} from "angular2/core";
import {MonthSwitcher} from "../month-switcher/app.month-switcher";
import {Router} from "angular2/router";
import {ExpensesService} from "app/Expenses.Service";

@Component({
    selector: "my-dashboard",
    templateUrl: "app/components/dashboard/dashboard.html",
    styleUrls: ["app/components/dashboard/dashboard.css"],
    directives: [MonthSwitcher],
    providers: [ExpensesService]
})
export class DashboardComponent {
    totalExpense: number = 0;

    constructor(private _router: Router, private _expensesService: ExpensesService) {}

    onNewExpClicked() {
        this._router.navigate(["NewExp"]);
    }

    onListExpsesClicked() {
        this._router.navigate(["ListExp"]);
    }
    
    update(data) {
        this.totalExpense = this._expensesService.getTotalExpenses(data);
    }
}