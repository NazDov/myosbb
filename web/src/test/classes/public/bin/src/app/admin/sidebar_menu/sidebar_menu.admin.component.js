System.register(["@angular/core", "@angular/router", "../../../shared/pipes/capitalize-first-letter", "ng2-translate"], function(exports_1, context_1) {
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
    var core_1, router_1, capitalize_first_letter_1, ng2_translate_1;
    var AdminSidebarMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            AdminSidebarMenuComponent = (function () {
                function AdminSidebarMenuComponent() {
                }
                AdminSidebarMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-sidebar-menu',
                        templateUrl: 'src/app/admin/sidebar_menu/sidebar_menu.admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminSidebarMenuComponent);
                return AdminSidebarMenuComponent;
            }());
            exports_1("AdminSidebarMenuComponent", AdminSidebarMenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9zaWRlYmFyX21lbnUvc2lkZWJhcl9tZW51LmFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQUVBLENBQUM7Z0JBUkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUUsb0RBQW9EO3dCQUNqRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQztxQkFDcEQsQ0FBQzs7NkNBQUE7Z0JBR0YsZ0NBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlFQUVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaWRlYmFyX21lbnUvc2lkZWJhcl9tZW51LmFkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkbWluLXNpZGViYXItbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvYWRtaW4vc2lkZWJhcl9tZW51L3NpZGViYXJfbWVudS5hZG1pbi5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pblNpZGViYXJNZW51Q29tcG9uZW50IHtcclxuXHJcbn0iXX0=
