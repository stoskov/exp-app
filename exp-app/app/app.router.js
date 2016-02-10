System.register(['angular2/core', 'angular2/router', './components/dashboard/app.dashboard', './components/list-exp/app.list-exp', './components/new-exp/app.new-exp'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_2, router_2, app_dashboard_1, app_list_exp_1, app_new_exp_1;
    var AppRouter;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (app_dashboard_1_1) {
                app_dashboard_1 = app_dashboard_1_1;
            },
            function (app_list_exp_1_1) {
                app_list_exp_1 = app_list_exp_1_1;
            },
            function (app_new_exp_1_1) {
                app_new_exp_1 = app_new_exp_1_1;
            }],
        execute: function() {
            AppRouter = (function () {
                function AppRouter() {
                }
                AppRouter = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        templateUrl: 'app/router.component.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Dashboard', component: app_dashboard_1.DashboardComponent },
                        { path: '/list-exp', name: 'ListExp', component: app_list_exp_1.ListExpComponent },
                        { path: '/new-exp', name: 'NewExp', component: app_new_exp_1.NewExpComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppRouter);
                return AppRouter;
            })();
            exports_1("AppRouter", AppRouter);
        }
    }
});
//# sourceMappingURL=app.router.js.map