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
    var ManagerSidebarMenuComponent;
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
            ManagerSidebarMenuComponent = (function () {
                function ManagerSidebarMenuComponent() {
                }
                ManagerSidebarMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'manager-sidebar-menu',
                        templateUrl: 'src/app/manager/sidebar_menu/sidebar_menu.manager.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManagerSidebarMenuComponent);
                return ManagerSidebarMenuComponent;
            }());
            exports_1("ManagerSidebarMenuComponent", ManagerSidebarMenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VyL3NpZGViYXJfbWVudS9zaWRlYmFyX21lbnUubWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsV0FBVyxFQUFFLHdEQUF3RDt3QkFDckUsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7cUJBQ3BELENBQUM7OytDQUFBO2dCQUdGLGtDQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxRUFFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlci9zaWRlYmFyX21lbnUvc2lkZWJhcl9tZW51Lm1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hbmFnZXItc2lkZWJhci1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9tYW5hZ2VyL3NpZGViYXJfbWVudS9zaWRlYmFyX21lbnUubWFuYWdlci5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyU2lkZWJhck1lbnVDb21wb25lbnQge1xyXG5cclxufSJdfQ==
