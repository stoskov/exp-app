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
    var MonthSwitcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MonthSwitcher = (function () {
                function MonthSwitcher() {
                    this.update = new core_1.EventEmitter();
                    this.month = 2;
                    this.year = 2016;
                }
                MonthSwitcher.prototype.increaseMonth = function () {
                    this.month++;
                    if (this.month > 12) {
                        this.year++;
                        this.month = 1;
                    }
                    this._onUpdate();
                };
                MonthSwitcher.prototype.decreaseMonth = function () {
                    this.month--;
                    if (this.month < 1) {
                        this.year--;
                        this.month = 12;
                    }
                    this._onUpdate();
                };
                MonthSwitcher.prototype._onUpdate = function () {
                    this.update.emit({
                        month: this.month,
                        year: this.year
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MonthSwitcher.prototype, "update", void 0);
                MonthSwitcher = __decorate([
                    core_1.Component({
                        selector: 'month-switch',
                        templateUrl: "app/components/month-switcher/app.month-switcher.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MonthSwitcher);
                return MonthSwitcher;
            })();
            exports_1("MonthSwitcher", MonthSwitcher);
        }
    }
});
//# sourceMappingURL=app.month-switcher.js.map