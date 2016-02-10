System.register(["angular2/core", "../month-switcher/app.month-switcher", "angular2/router", "app/Expenses.Service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_month_switcher_1, router_1, Expenses_Service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_month_switcher_1_1) {
                app_month_switcher_1 = app_month_switcher_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Expenses_Service_1_1) {
                Expenses_Service_1 = Expenses_Service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _expensesService) {
                    this._router = _router;
                    this._expensesService = _expensesService;
                    this.totalExpense = 0;
                }
                DashboardComponent.prototype.onNewExpClicked = function () {
                    this._router.navigate(["NewExp"]);
                };
                DashboardComponent.prototype.onListExpsesClicked = function () {
                    this._router.navigate(["ListExp"]);
                };
                DashboardComponent.prototype.update = function (data) {
                    this.totalExpense = this._expensesService.getTotalExpenses(data);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: "my-dashboard",
                        templateUrl: "app/components/dashboard/app.dashboard.html",
                        directives: [app_month_switcher_1.MonthSwitcher],
                        providers: [Expenses_Service_1.ExpensesService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, Expenses_Service_1.ExpensesService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=app.dashboard.js.map