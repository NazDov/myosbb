System.register(["@angular/core", "@angular/router", "./sidebar_menu/sidebar_menu.admin.component"], function(exports_1, context_1) {
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
    var core_1, router_1, sidebar_menu_admin_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sidebar_menu_admin_component_1_1) {
                sidebar_menu_admin_component_1 = sidebar_menu_admin_component_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent() {
                }
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'my-admin',
                        templateUrl: 'src/app/admin/admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES, sidebar_menu_admin_component_1.AdminSidebarMenuComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHdEQUF5QixDQUFDO3FCQUM3RCxDQUFDOztrQ0FBQTtnQkFHRixxQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsMkNBRUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBZG1pblNpZGViYXJNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vc2lkZWJhcl9tZW51L3NpZGViYXJfbWVudS5hZG1pbi5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFkbWluJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9hZG1pbi9hZG1pbi5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQWRtaW5TaWRlYmFyTWVudUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IHtcclxuXHJcbn0iXX0=
