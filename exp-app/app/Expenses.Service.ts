import {Expense} from './expense';
import {Injectable} from 'angular2/core';

@Injectable()
export class ExpensesService {
  expenses:Expense[];

  getExpenses() {
    return this.expenses;
  }

  setExpenses(ex: Expense) {
    this.expenses.push(ex);
  }

  getTotalExpenses() {
      var total:number;
      
      for(var i=0;i<this.expenses.length;i++) {
          total+=this.expenses[i].amount;
      }      
      
      return total;
  }
}
