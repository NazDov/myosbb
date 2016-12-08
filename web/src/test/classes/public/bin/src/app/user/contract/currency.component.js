System.register(["@angular/core", "ng2-bs-dropdown/dropdown"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dropdown_1;
    var CurrencyComponent, CURRENCIES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            }],
        execute: function() {
            CurrencyComponent = (function () {
                function CurrencyComponent() {
                    this.currentCurrency = '';
                    this.currencies = CURRENCIES;
                    this.currencyChanged = new core_1.EventEmitter();
                }
                CurrencyComponent.prototype.ngOnInit = function () {
                    this.currentCurrency = this.currencies[0];
                };
                CurrencyComponent.prototype.changeCurrency = function (currency) {
                    console.log("clicked: " + currency);
                    this.currentCurrency = currency;
                    this.currencyChanged.emit(currency);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CurrencyComponent.prototype, "currentCurrency", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CurrencyComponent.prototype, "currencyChanged", void 0);
                CurrencyComponent = __decorate([
                    core_1.Component({
                        selector: 'currency',
                        template: "\n        <div class=\"dropdown\">\n            <span class=\" dropdown-toggle\" id=\"dropdownCurrency\"> {{currentCurrency}}\n            </span>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownCurrency\">\n                <a style=\"padding: 5px\" class=\"dropdown-item\" *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\" >{{ cur }} |</a>\n            </div>\n        </div>\n    ",
                        directives: [dropdown_1.DROPDOWN_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CurrencyComponent);
                return CurrencyComponent;
            }());
            exports_1("CurrencyComponent", CurrencyComponent);
            exports_1("CURRENCIES", CURRENCIES = [
                "UAH",
                "USD",
                "EUR"
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NvbnRyYWN0L2N1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzJCQW9DYSxVQUFVOzs7Ozs7Ozs7O1lBakJ2QjtnQkFBQTtvQkFDYSxvQkFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsZUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFFdEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFXM0QsQ0FBQztnQkFURyxvQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCwwQ0FBYyxHQUFkLFVBQWUsUUFBZ0I7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBYkQ7b0JBQUMsWUFBSyxFQUFFOzswRUFBQTtnQkFHUjtvQkFBQyxhQUFNLEVBQUU7OzBFQUFBO2dCQWpCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsbWFBUVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsOEJBQW1CLENBQUM7cUJBQ3BDLENBQUM7O3FDQUFBO2dCQWdCRix3QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsaURBZUMsQ0FBQTtZQUVZLHdCQUFBLFVBQVUsR0FBRztnQkFDdEIsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7YUFDUixDQUFBLENBQUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbnRyYWN0L2N1cnJlbmN5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8xMi8xNi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RFJPUERPV05fRElSRUNUSVZFU30gZnJvbSBcIm5nMi1icy1kcm9wZG93bi9kcm9wZG93blwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2N1cnJlbmN5JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiIGRyb3Bkb3duLXRvZ2dsZVwiIGlkPVwiZHJvcGRvd25DdXJyZW5jeVwiPiB7e2N1cnJlbnRDdXJyZW5jeX19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkN1cnJlbmN5XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT1cInBhZGRpbmc6IDVweFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiICpuZ0Zvcj1cImxldCBjdXIgb2YgY3VycmVuY2llc1wiIChjbGljayk9XCJjaGFuZ2VDdXJyZW5jeShjdXIpXCIgPnt7IGN1ciB9fSB8PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbRFJPUERPV05fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGN1cnJlbnRDdXJyZW5jeSA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW5jaWVzID0gQ1VSUkVOQ0lFUztcclxuXHJcbiAgICBAT3V0cHV0KCkgY3VycmVuY3lDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDdXJyZW5jeSA9IHRoaXMuY3VycmVuY2llc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQ6IFwiICsgY3VycmVuY3kpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEN1cnJlbmN5ID0gY3VycmVuY3k7XHJcbiAgICAgICAgdGhpcy5jdXJyZW5jeUNoYW5nZWQuZW1pdChjdXJyZW5jeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5DSUVTID0gW1xyXG4gICAgXCJVQUhcIixcclxuICAgIFwiVVNEXCIsXHJcbiAgICBcIkVVUlwiXHJcbl07Il19
