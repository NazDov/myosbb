System.register(["@angular/core", "@angular/router", "../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate"], function(exports_1, context_1) {
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
    var SideBarMenuComponent;
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
            SideBarMenuComponent = (function () {
                function SideBarMenuComponent() {
                }
                SideBarMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'osbb-sidebar-menu',
                        templateUrl: './src/app/home/sidebar_menu/sidebar_menu.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBarMenuComponent);
                return SideBarMenuComponent;
            }());
            exports_1("SideBarMenuComponent", SideBarMenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NpZGViYXJfbWVudS9zaWRlYmFyX21lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFWRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSwrQ0FBK0M7d0JBQzVELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3FCQUNwRCxDQUFDOzt3Q0FBQTtnQkFLRiwyQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdURBSUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lkZWJhcl9tZW51L3NpZGViYXJfbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb3NiYi1zaWRlYmFyLW1lbnUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvaG9tZS9zaWRlYmFyX21lbnUvc2lkZWJhcl9tZW51Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVCYXJNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgICB1c2VyTmFtZTpzdHJpbmc7XHJcblxyXG59Il19
