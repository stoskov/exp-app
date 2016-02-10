System.register(["angular2/core", "../month-switcher/app.month-switcher"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_month_switcher_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_month_switcher_1_1) {
                app_month_switcher_1 = app_month_switcher_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard() {
                }
                Dashboard.prototype.onNewExpClicked = function () {
                    console.log();
                };
                Dashboard.prototype.onListExpsesClicked = function () {
                    console.log();
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/components/dashboard/dashboard.html",
                        styleUrls: ["app/components/dashboard/dashboard.css"],
                        directives: [app_month_switcher_1.MonthSwitcher]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard);
                return Dashboard;
            })();
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=app.dashboard.js.map