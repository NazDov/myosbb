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
    var RoleEditFormComponent;
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
            RoleEditFormComponent = (function () {
                function RoleEditFormComponent() {
                    this.update = new core_1.EventEmitter();
                }
                RoleEditFormComponent.prototype.openEditModal = function () {
                    this.editModal.show();
                };
                RoleEditFormComponent.prototype.ngOnInit = function () {
                    if (this.role === undefined) {
                        this.role = new role_1.Role("");
                    }
                };
                RoleEditFormComponent.prototype.editRole = function (name) {
                    if (name) {
                        this.role.name = name;
                        this.update.emit(this.role);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoleEditFormComponent.prototype, "update", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoleEditFormComponent.prototype, "role", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], RoleEditFormComponent.prototype, "editModal", void 0);
                RoleEditFormComponent = __decorate([
                    core_1.Component({
                        selector: 'role-edit-form',
                        templateUrl: './src/app/admin/components/role/role_form/role-edit-form.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoleEditFormComponent);
                return RoleEditFormComponent;
            }());
            exports_1("RoleEditFormComponent", RoleEditFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZV9mb3JtL3JvbGUtZWRpdC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFXSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO2dCQUMzQyxDQUFDO2dCQU5ELDZDQUFhLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFNRCx3Q0FBUSxHQUFSO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFXO29CQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMvQixDQUFDO2dCQUNMLENBQUM7Z0JBekJEO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBQ1Q7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFFUjtvQkFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7d0VBQUE7Z0JBVjNCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLCtEQUErRDt3QkFDNUUsVUFBVSxFQUFDLENBQUMsZ0NBQWdCLEVBQUUsd0JBQWUsQ0FBQzt3QkFDOUMsYUFBYSxFQUFFLENBQUMsaUNBQWlCLENBQUM7cUJBQ3JDLENBQUM7O3lDQUFBO2dCQTRCRiw0QkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQseURBMkJDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZV9mb3JtL3JvbGUtZWRpdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJUm9sZSwgUm9sZSB9IGZyb20gJy4uL3JvbGUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUyB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncm9sZS1lZGl0LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlL3JvbGVfZm9ybS9yb2xlLWVkaXQtZm9ybS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU10sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlRWRpdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8Um9sZT47XHJcbiAgICBASW5wdXQoKSByb2xlOklSb2xlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRNb2RhbCcpXHJcbiAgICBlZGl0TW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgb3BlbkVkaXRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5zaG93KCk7ICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Um9sZT4oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZih0aGlzLnJvbGUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZSA9IG5ldyBSb2xlKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0Um9sZShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgdGhpcy5yb2xlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5yb2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
