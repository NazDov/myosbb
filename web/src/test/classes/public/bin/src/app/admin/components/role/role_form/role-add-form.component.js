System.register(['@angular/core', '@angular/common', '../role', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, common_1, role_1, ng2_bootstrap_1, ng2_bootstrap_2;
    var RoleAddFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (role_1_1) {
                role_1 = role_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            RoleAddFormComponent = (function () {
                function RoleAddFormComponent() {
                    this.created = new core_1.EventEmitter();
                }
                RoleAddFormComponent.prototype.openAddModal = function () {
                    this.addModal.show();
                };
                RoleAddFormComponent.prototype.ngOnInit = function () {
                    if (this.role === undefined) {
                        this.role = new role_1.Role("");
                    }
                };
                RoleAddFormComponent.prototype.createRole = function (name) {
                    if (name) {
                        var role = new role_1.Role(name);
                        this.created.emit(role);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoleAddFormComponent.prototype, "created", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoleAddFormComponent.prototype, "role", void 0);
                __decorate([
                    core_1.ViewChild('addModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], RoleAddFormComponent.prototype, "addModal", void 0);
                RoleAddFormComponent = __decorate([
                    core_1.Component({
                        selector: 'role-add-form',
                        templateUrl: './src/app/admin/components/role/role_form/role-add-form.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoleAddFormComponent);
                return RoleAddFormComponent;
            }());
            exports_1("RoleAddFormComponent", RoleAddFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZV9mb3JtL3JvbGUtYWRkLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQVdJO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7Z0JBQzVDLENBQUM7Z0JBTkQsMkNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQU1ELHVDQUFRLEdBQVI7b0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO3dCQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQseUNBQVUsR0FBVixVQUFXLElBQVc7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNMLENBQUM7Z0JBekJEO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBQ1Q7b0JBQUMsWUFBSyxFQUFFOztrRUFBQTtnQkFFUjtvQkFBQyxnQkFBUyxDQUFDLFVBQVUsQ0FBQzs7c0VBQUE7Z0JBVjFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSw4REFBOEQ7d0JBQzNFLFVBQVUsRUFBQyxDQUFDLGdDQUFnQixFQUFFLHdCQUFlLENBQUM7d0JBQzlDLGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3FCQUNyQyxDQUFDOzt3Q0FBQTtnQkE0QkYsMkJBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELHVEQTJCQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlL3JvbGVfZm9ybS9yb2xlLWFkZC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJUm9sZSwgUm9sZSB9IGZyb20gJy4uL3JvbGUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUyB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncm9sZS1hZGQtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZV9mb3JtL3JvbGUtYWRkLWZvcm0uaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVNdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZUFkZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBAT3V0cHV0KCkgY3JlYXRlZDogRXZlbnRFbWl0dGVyPFJvbGU+O1xyXG4gICAgQElucHV0KCkgcm9sZTpJUm9sZTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdhZGRNb2RhbCcpXHJcbiAgICBhZGRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBvcGVuQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRNb2RhbC5zaG93KCk7ICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJvbGU+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5yb2xlID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUgPSBuZXcgUm9sZShcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUm9sZShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gbmV3IFJvbGUobmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZC5lbWl0KHJvbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
