System.register(["@angular/core", "@angular/router", "../user/user.component", "../home/sidebar_menu/sidebar_menu.component", "./voting/vote.component", "../../shared/services/login.stats"], function(exports_1, context_1) {
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
    var core_1, router_1, user_component_1, sidebar_menu_component_1, vote_component_1, login_stats_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (sidebar_menu_component_1_1) {
                sidebar_menu_component_1 = sidebar_menu_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (login_stats_1_1) {
                login_stats_1 = login_stats_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_loginStat) {
                    this._loginStat = _loginStat;
                    this.isLoggedIn = true;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._loginStat.loggedInObserver$
                        .subscribe(function (stat) {
                        _this.isLoggedIn = stat;
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'app-home',
                        templateUrl: './src/app/home/home.html',
                        styleUrls: ['./src/app/home/home.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, user_component_1.UserComponent, sidebar_menu_component_1.SideBarMenuComponent, vote_component_1.VoteComponent],
                        inputs: ['isLoggedIn'],
                        outputs: ['isLoggedIn'],
                        providers: [login_stats_1.LoginStat]
                    }), 
                    __metadata('design:paramtypes', [login_stats_1.LoginStat])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLHVCQUFvQixVQUFvQjtvQkFBcEIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtvQkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsZ0NBQVEsR0FBUjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQjt5QkFDNUIsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDWCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkF2Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDhCQUFhLEVBQUUsNkNBQW9CLEVBQUUsOEJBQWEsQ0FBQzt3QkFDbkYsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN0QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLHVCQUFTLENBQUM7cUJBQ3pCLENBQUM7O2lDQUFBO2dCQWdCRixvQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQseUNBY0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gXCIuLi91c2VyL3VzZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQge1NpZGVCYXJNZW51Q29tcG9uZW50fSBmcm9tIFwiLi4vaG9tZS9zaWRlYmFyX21lbnUvc2lkZWJhcl9tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1ZvdGVDb21wb25lbnR9IGZyb20gXCIuL3ZvdGluZy92b3RlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2luU3RhdH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zdGF0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL2hvbWUvaG9tZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NyYy9hcHAvaG9tZS9ob21lLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBVc2VyQ29tcG9uZW50LCBTaWRlQmFyTWVudUNvbXBvbmVudCwgVm90ZUNvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsnaXNMb2dnZWRJbiddLFxyXG4gICAgb3V0cHV0czogWydpc0xvZ2dlZEluJ10sXHJcbiAgICBwcm92aWRlcnM6IFtMb2dpblN0YXRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgICBpc0xvZ2dlZEluOmJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9naW5TdGF0OkxvZ2luU3RhdCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2luU3RhdC5sb2dnZWRJbk9ic2VydmVyJFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN0YXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gc3RhdDtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
