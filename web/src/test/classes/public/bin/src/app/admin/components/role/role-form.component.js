System.register(["@angular/core", "ng2-bs3-modal/ng2-bs3-modal", "./role"], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1, role_1;
    var RoleFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (role_1_1) {
                role_1 = role_1_1;
            }],
        execute: function() {
            RoleFormComponent = (function () {
                function RoleFormComponent() {
                    this.created = new core_1.EventEmitter();
                    this.updated = new core_1.EventEmitter();
                }
                RoleFormComponent.prototype.openUpdateModal = function () {
                    this.updateModal.open();
                };
                RoleFormComponent.prototype.closeUpdateModal = function () {
                    this.updateModal.close();
                };
                RoleFormComponent.prototype.ngOnInit = function () {
                    if (this.role === undefined) {
                        this.role = new role_1.Role("");
                    }
                };
                RoleFormComponent.prototype.createRole = function (name) {
                    if (name) {
                        var role = new role_1.Role(name);
                        this.created.emit(role);
                    }
                };
                RoleFormComponent.prototype.editRole = function (name) {
                    if (name) {
                        this.role.name = name;
                        this.updated.emit(this.role);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoleFormComponent.prototype, "created", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoleFormComponent.prototype, "updated", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoleFormComponent.prototype, "role", void 0);
                __decorate([
                    core_1.ViewChild('updateModal'), 
                    __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
                ], RoleFormComponent.prototype, "updateModal", void 0);
                RoleFormComponent = __decorate([
                    core_1.Component({
                        selector: 'role-form',
                        templateUrl: './src/app/admin/components/role/role-form.component.html',
                        directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoleFormComponent);
                return RoleFormComponent;
            }());
            exports_1("RoleFormComponent", RoleFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQWdCSTtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO29CQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO2dCQUM1QyxDQUFDO2dCQVhELDJDQUFlLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw0Q0FBZ0IsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFPRCxvQ0FBUSxHQUFSO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFXO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNQLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG9DQUFRLEdBQVIsVUFBUyxJQUFXO29CQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2dCQUNMLENBQUM7Z0JBdENEO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFDVDtvQkFBQyxZQUFLLEVBQUU7OytEQUFBO2dCQUVSO29CQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDOztzRUFBQTtnQkFWN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLDBEQUEwRDt3QkFDdkUsVUFBVSxFQUFDLENBQUMsZ0NBQWdCLENBQUM7cUJBQ2hDLENBQUM7O3FDQUFBO2dCQXlDRix3QkFBQztZQUFELENBeENBLEFBd0NDLElBQUE7WUF4Q0QsaURBd0NDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIm5nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbFwiO1xyXG5pbXBvcnQgeyBJUm9sZSwgUm9sZSB9IGZyb20gXCIuL3JvbGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyb2xlLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlL3JvbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBAT3V0cHV0KCkgY3JlYXRlZDogRXZlbnRFbWl0dGVyPFJvbGU+O1xyXG4gICAgQE91dHB1dCgpIHVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxSb2xlPjtcclxuICAgIEBJbnB1dCgpIHJvbGU6SVJvbGU7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndXBkYXRlTW9kYWwnKVxyXG4gICAgdXBkYXRlTW9kYWw6TW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgb3BlblVwZGF0ZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kYWwub3BlbigpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVcGRhdGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSb2xlPigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Um9sZT4oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZih0aGlzLnJvbGUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZSA9IG5ldyBSb2xlKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSb2xlKG5hbWU6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSBuZXcgUm9sZShuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVkLmVtaXQocm9sZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRSb2xlKG5hbWU6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICB0aGlzLnJvbGUubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgdGhpcy51cGRhdGVkLmVtaXQodGhpcy5yb2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
