System.register(["@angular/core", "@angular/router", "./header/header.component", "../shared/services/login.stats"], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, login_stats_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (login_stats_1_1) {
                login_stats_1 = login_stats_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_loginStat, viewContainerRef) {
                    this._loginStat = _loginStat;
                    this.viewContainerRef = viewContainerRef;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'src/app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        providers: [login_stats_1.LoginStat],
                    }), 
                    __metadata('design:paramtypes', [login_stats_1.LoginStat, core_1.ViewContainerRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBSUksc0JBQW9CLFVBQXFCLEVBQVUsZ0JBQWtDO29CQUFqRSxlQUFVLEdBQVYsVUFBVSxDQUFXO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7Z0JBQ3JGLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxrQkFBa0I7d0JBQy9CLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7d0JBQ2hELFNBQVMsRUFBRSxDQUFDLHVCQUFTLENBQUM7cUJBQ3pCLENBQUM7O2dDQUFBO2dCQVdGLG1CQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCx1Q0FVQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9naW5TdGF0fSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnN0YXRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9hcHAuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtMb2dpblN0YXRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2luU3RhdDogTG9naW5TdGF0LCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG5cclxuICAgIH1cclxufSJdfQ==
