import {Expense} from './expense';
import {Injectable} from 'angular2/core';

@Injectable()
export class ExpensesService {
  expenses:Expense[] = [{
    amount: 240,
    category: "amazonde",
    date: new Date("1.12.2015")
  },{
    amount: 260,
    category: "amazoncouk",
    date: new Date("12.12.2015")
  },{
    amount: 320,
    category: "amazonde",
    date: new Date("2.12.2015")
  },{
    amount: 350,
    category: "amazon",
    date: new Date("4.12.2015")
  },{
    amount: 240,
    category: "amazonde",
    date: new Date("7.12.2015")
  }];

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
