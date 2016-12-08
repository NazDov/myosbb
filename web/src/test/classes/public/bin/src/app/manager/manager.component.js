System.register(["@angular/core", "@angular/router", "./sidebar_menu/sidebar_menu.manager.component"], function(exports_1, context_1) {
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
    var core_1, router_1, sidebar_menu_manager_component_1;
    var ManagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sidebar_menu_manager_component_1_1) {
                sidebar_menu_manager_component_1 = sidebar_menu_manager_component_1_1;
            }],
        execute: function() {
            ManagerComponent = (function () {
                function ManagerComponent() {
                }
                ManagerComponent = __decorate([
                    core_1.Component({
                        selector: 'my-manager',
                        templateUrl: 'src/app/manager/manager.html',
                        directives: [router_1.ROUTER_DIRECTIVES, sidebar_menu_manager_component_1.ManagerSidebarMenuComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManagerComponent);
                return ManagerComponent;
            }());
            exports_1("ManagerComponent", ManagerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFQRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsOEJBQThCO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw0REFBMkIsQ0FBQztxQkFDL0QsQ0FBQzs7b0NBQUE7Z0JBR0YsdUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtDQUVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNYW5hZ2VyU2lkZWJhck1lbnVDb21wb25lbnR9IGZyb20gXCIuL3NpZGViYXJfbWVudS9zaWRlYmFyX21lbnUubWFuYWdlci5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LW1hbmFnZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL21hbmFnZXIvbWFuYWdlci5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTWFuYWdlclNpZGViYXJNZW51Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFuYWdlckNvbXBvbmVudCB7XHJcblxyXG59Il19
