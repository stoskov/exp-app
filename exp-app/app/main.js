System.register(['angular2/platform/browser', './components/dashboard/app.dashboard'], function(exports_1) {
    var browser_1, app_dashboard_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_dashboard_1_1) {
                app_dashboard_1 = app_dashboard_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_dashboard_1.Dashboard);
        }
    }
});
//# sourceMappingURL=main.js.map