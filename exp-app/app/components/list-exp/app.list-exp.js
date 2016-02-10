System.register(['angular2/core', "../month-switcher/app.month-switcher", "app/Expenses.Service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_month_switcher_1, Expenses_Service_1;
    var ListExpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_month_switcher_1_1) {
                app_month_switcher_1 = app_month_switcher_1_1;
            },
            function (Expenses_Service_1_1) {
                Expenses_Service_1 = Expenses_Service_1_1;
            }],
        execute: function() {
            ListExpComponent = (function () {
                function ListExpComponent(_expensesService) {
                    this._expensesService = _expensesService;
                    this.update({});
                }
                ListExpComponent.prototype.update = function (data) {
                    this.expences = this._expensesService.getExpenses();
                };
                ListExpComponent.prototype.delete = function (exp) {
                    console.log(exp);
                };
                ListExpComponent = __decorate([
                    core_1.Component({
                        selector: 'my-expenses-list1',
                        templateUrl: "app/components/list-exp/app.list-exp.html",
                        directives: [app_month_switcher_1.MonthSwitcher],
                        providers: [Expenses_Service_1.ExpensesService]
                    }), 
                    __metadata('design:paramtypes', [Expenses_Service_1.ExpensesService])
                ], ListExpComponent);
                return ListExpComponent;
            })();
            exports_1("ListExpComponent", ListExpComponent);
        }
    }
});
//# sourceMappingURL=app.list-exp.js.map