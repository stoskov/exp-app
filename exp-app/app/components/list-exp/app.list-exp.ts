import {Component} from 'angular2/core';
import {Expense} from 'app/expense';
import {MonthSwitcher} from "../month-switcher/app.month-switcher";
import {ExpensesService} from "app/Expenses.Service";

@Component({
    selector: 'my-expenses-list1',
    templateUrl: "app/components/list-exp/app.list-exp.html",
  	directives: [MonthSwitcher],
    providers: [ExpensesService]
})
export class ListExpComponent {
	expences: any;

	constructor(private _expensesService: ExpensesService) {
        this.update({});
    }
    
    update(data) {
        this.expences = this._expensesService.getExpenses();
    }

	delete(exp: Expense) {
    	console.log(exp);
	}
}