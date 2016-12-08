System.register(["@angular/core", "../sidebar_menu/sidebar.menu.component", "./main/user.main.component", "@angular/router", "../header/header.component"], function(exports_1, context_1) {
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
    var core_1, sidebar_menu_component_1, user_main_component_1, router_1, header_component_1, router_2;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_menu_component_1_1) {
                sidebar_menu_component_1 = sidebar_menu_component_1_1;
            },
            function (user_main_component_1_1) {
                user_main_component_1 = user_main_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(router) {
                    this.router = router;
                    this._currentUserService = null;
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                }
                UserComponent.prototype.ngOnInit = function () {
                    this.userName = this._currentUserService.getUser().firstName + " " + this._currentUserService.getUser().lastName;
                    this.router.navigate(['home/user/main']);
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'my-user',
                        templateUrl: 'src/app/user/user.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, sidebar_menu_component_1.SidebarMenuComponent, user_main_component_1.UserMainComponent],
                        outputs: [],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLHVCQUFxQixNQUFhO29CQUFiLFdBQU0sR0FBTixNQUFNLENBQU87b0JBRGxDLHdCQUFtQixHQUFvQixJQUFJLENBQUM7b0JBRXhDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxrQ0FBZSxDQUFDLGtCQUFrQixDQUFDO2dCQUVoRSxDQUFDO2dCQUVELGdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUMzRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFqQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSw2Q0FBb0IsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDekYsT0FBTyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQzs7aUNBQUE7Z0JBY0Ysb0JBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHlDQWFDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NpZGViYXJNZW51Q29tcG9uZW50fSBmcm9tIFwiLi4vc2lkZWJhcl9tZW51L3NpZGViYXIubWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vbWFpbi91c2VyLm1haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0N1cnJlbnRVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXVzZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3VzZXIvdXNlci5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBTaWRlYmFyTWVudUNvbXBvbmVudCwgVXNlck1haW5Db21wb25lbnRdLFxyXG4gICAgb3V0cHV0czogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdXNlck5hbWU6c3RyaW5nO1xyXG4gICAgX2N1cnJlbnRVc2VyU2VydmljZTpDdXJyZW50VXNlclNlcnZpY2U9bnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpe1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZT1IZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lPXRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCkuZmlyc3ROYW1lK1wiIFwiK3RoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCkubGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL3VzZXIvbWFpbiddKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19
