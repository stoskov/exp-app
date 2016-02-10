System.register(['angular2/platform/browser', 'angular2/router', './app.router'], function(exports_1) {
    var browser_1, router_1, app_router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_router_1_1) {
                app_router_1 = app_router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_router_1.AppRouter, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map