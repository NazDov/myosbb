System.register(["@angular/core", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var RedirectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RedirectComponent = (function () {
                function RedirectComponent(_router) {
                    this._router = _router;
                }
                RedirectComponent.prototype.reroute = function () {
                    this._router.navigate(['home/user/report']);
                };
                RedirectComponent = __decorate([
                    core_1.Component({
                        selector: 'my-redirect',
                        templateUrl: 'src/app/user/report/download/redirect.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RedirectComponent);
                return RedirectComponent;
            }());
            exports_1("RedirectComponent", RedirectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC9kb3dubG9hZC9yZWRpcmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFSSwyQkFBb0IsT0FBYztvQkFBZCxZQUFPLEdBQVAsT0FBTyxDQUFPO2dCQUVsQyxDQUFDO2dCQUVELG1DQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBYkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFFLDRDQUE0Qzt3QkFDekQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O3FDQUFBO2dCQVdGLHdCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxpREFVQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZXBvcnQvZG93bmxvYWQvcmVkaXJlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXJlZGlyZWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL3JlcG9ydC9kb3dubG9hZC9yZWRpcmVjdC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcm91dGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnaG9tZS91c2VyL3JlcG9ydCddKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
