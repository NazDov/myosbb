System.register(["@angular/core", "@angular/router", "../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate"], function(exports_1, context_1) {
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
    var SidebarMenuComponent;
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
            SidebarMenuComponent = (function () {
                function SidebarMenuComponent() {
                }
                SidebarMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'app-sidebar-menu',
                        templateUrl: 'src/app/sidebar_menu/sidebar_menu.html',
                        inputs: ['userName'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarMenuComponent);
                return SidebarMenuComponent;
            }());
            exports_1("SidebarMenuComponent", SidebarMenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlYmFyX21lbnUvc2lkZWJhci5tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO2dCQUlBLENBQUM7Z0JBWEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ3BCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3FCQUNwRCxDQUFDOzt3Q0FBQTtnQkFLRiwyQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdURBSUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXJfbWVudS9zaWRlYmFyLm1lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvc2lkZWJhcl9tZW51L3NpZGViYXJfbWVudS5odG1sJyxcclxuICAgIGlucHV0czogWyd1c2VyTmFtZSddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgICB1c2VyTmFtZTpzdHJpbmc7XHJcblxyXG59Il19
