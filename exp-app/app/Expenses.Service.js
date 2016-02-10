System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ExpensesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExpensesService = (function () {
                function ExpensesService() {
                    this.expenses = [{
                            amount: 240,
                            category: "amazonde",
                            date: "1.12.2015"
                        }, {
                            amount: 260,
                            category: "amazoncouk",
                            date: "12.12.2015"
                        }, {
                            amount: 320,
                            category: "amazonde",
                            date: "2.12.2015"
                        }, {
                            amount: 350,
                            category: "amazon",
                            date: "4.12.2015"
                        }, {
                            amount: 240,
                            category: "amazonde",
                            date: "7.12.2015"
                        }];
                }
                ExpensesService.prototype.getExpenses = function () {
                    return this.expenses;
                };
                ExpensesService.prototype.setExpenses = function (ex) {
                    this.expenses.push(ex);
                };
                ExpensesService.prototype.getTotalExpenses = function () {
                    var total;
                    for (var i = 0; i < this.expenses.length; i++) {
                        total += this.expenses[i].amount;
                    }
                    return total;
                };
                ExpensesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ExpensesService);
                return ExpensesService;
            })();
            exports_1("ExpensesService", ExpensesService);
        }
    }
});
//# sourceMappingURL=Expenses.Service.js.map