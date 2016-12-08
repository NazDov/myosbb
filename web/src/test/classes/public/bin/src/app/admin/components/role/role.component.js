System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "rxjs/add/operator/map", "rxjs/add/operator/toPromise", './role.service', './role_form/role-add-form.component', './role_form/role-edit-form.component', './role_form/role-del-form.component'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, role_service_1, role_add_form_component_1, role_edit_form_component_1, role_del_form_component_1;
    var RoleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (role_service_1_1) {
                role_service_1 = role_service_1_1;
            },
            function (role_add_form_component_1_1) {
                role_add_form_component_1 = role_add_form_component_1_1;
            },
            function (role_edit_form_component_1_1) {
                role_edit_form_component_1 = role_edit_form_component_1_1;
            },
            function (role_del_form_component_1_1) {
                role_del_form_component_1 = role_del_form_component_1_1;
            }],
        execute: function() {
            RoleComponent = (function () {
                function RoleComponent(roleService) {
                    this.roleService = roleService;
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.order = true;
                    this.roleArr = [];
                }
                RoleComponent.prototype.ngOnInit = function () {
                    this.getRolesByPageNum(this.pageNumber);
                };
                RoleComponent.prototype.initUpdatedRole = function (role) {
                    this.updatedRole = role;
                };
                RoleComponent.prototype.createRole = function (role) {
                    var _this = this;
                    this.roleService.addRole(role).then(function (role) { return _this.addRole(role); });
                };
                RoleComponent.prototype.editRole = function (role) {
                    this.roleService.editRole(role);
                };
                RoleComponent.prototype.deleteRole = function (role) {
                    var _this = this;
                    console.log('roleTs');
                    this.roleService.deleteRole(role).then(function (role) { return _this.deleteRoleFromArr(role); });
                };
                RoleComponent.prototype.addRole = function (role) {
                    this.roleArr.push(role);
                };
                RoleComponent.prototype.deleteRoleFromArr = function (role) {
                    var index = this.roleArr.indexOf(role);
                    if (index > -1) {
                        this.roleArr.splice(index, 1);
                    }
                };
                RoleComponent.prototype.getRolesByPageNum = function (pageNumber) {
                    var _this = this;
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this.roleService.getAllRole(this.pageNumber)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.roleArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                ;
                RoleComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getRolesByPageNum(this.pageNumber);
                };
                RoleComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getRolesByPageNum(this.pageNumber);
                };
                RoleComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                RoleComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                RoleComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.order = !this.order;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this.roleService.getAllRolesSorted(this.pageNumber, name, this.order)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.roleArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                RoleComponent = __decorate([
                    core_1.Component({
                        selector: 'role',
                        templateUrl: './src/app/admin/components/role/role.component.html',
                        providers: [role_service_1.RoleService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, role_add_form_component_1.RoleAddFormComponent, role_edit_form_component_1.RoleEditFormComponent, role_del_form_component_1.RoleDelFormComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [role_service_1.RoleService])
                ], RoleComponent);
                return RoleComponent;
            }());
            exports_1("RoleComponent", RoleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFVSSx1QkFBcUIsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUxyQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO29CQUN2QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztvQkFFckMsVUFBSyxHQUFZLElBQUksQ0FBQztvQkFHbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVPLHVDQUFlLEdBQXZCLFVBQXdCLElBQVU7b0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFVO29CQUFyQixpQkFFQztvQkFERyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBRUQsZ0NBQVEsR0FBUixVQUFTLElBQVU7b0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsa0NBQVUsR0FBVixVQUFXLElBQVU7b0JBQXJCLGlCQUdDO29CQUZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFB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RSxDQUFDO29CQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ2hFLFNBQVMsQ0FBQyxVQUFDLElBQUk7d0JBQ1IsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUM1QyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUN2QyxDQUFDLEVBQ0QsVUFBQyxLQUFLO3dCQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBMUdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSxxREFBcUQ7d0JBQ2xFLFNBQVMsRUFBRSxDQUFFLDBCQUFXLENBQUM7d0JBQ3pCLFVBQVUsRUFBRSxDQUFDLGdDQUFnQixFQUFFLHdCQUFlLEVBQUUsOENBQW9CLEVBQUUsZ0RBQXFCLEVBQUUsOENBQW9CLENBQUM7d0JBQ2xILGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3FCQUNyQyxDQUFDOztpQ0FBQTtnQkFzR0Ysb0JBQUM7WUFBRCxDQXJHQSxBQXFHQyxJQUFBO1lBckdELHlDQXFHQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlL3JvbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5pbXBvcnQgeyBJUm9sZX0gZnJvbSAnLi9yb2xlJztcclxuaW1wb3J0IHsgUm9sZVNlcnZpY2UgfSBmcm9tICcuL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvbGVBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9yb2xlX2Zvcm0vcm9sZS1hZGQtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlRWRpdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3JvbGVfZm9ybS9yb2xlLWVkaXQtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlRGVsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcm9sZV9mb3JtL3JvbGUtZGVsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyb2xlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcm9sZS9yb2xlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogWyBSb2xlU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBSb2xlQWRkRm9ybUNvbXBvbmVudCwgUm9sZUVkaXRGb3JtQ29tcG9uZW50LCBSb2xlRGVsRm9ybUNvbXBvbmVudF0sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByb2xlQXJyOklSb2xlW107XHJcbiAgICB1cGRhdGVkUm9sZTpJUm9sZTtcclxuICAgIHByaXZhdGUgcGFnZUNyZWF0b3I6IFBhZ2VDcmVhdG9yPElSb2xlPjtcclxuICAgIHByaXZhdGUgcGFnZU51bWJlcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczogbnVtYmVyO1xyXG4gICAgb3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvbGVTZXJ2aWNlOiBSb2xlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucm9sZUFyciA9IFtdO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLmdldFJvbGVzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VXBkYXRlZFJvbGUocm9sZTpJUm9sZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlZFJvbGUgPSByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJvbGUocm9sZTpJUm9sZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm9sZVNlcnZpY2UuYWRkUm9sZShyb2xlKS50aGVuKHJvbGUgPT4gdGhpcy5hZGRSb2xlKHJvbGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0Um9sZShyb2xlOklSb2xlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb2xlU2VydmljZS5lZGl0Um9sZShyb2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVSb2xlKHJvbGU6SVJvbGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncm9sZVRzJyk7XHJcbiAgICAgICAgdGhpcy5yb2xlU2VydmljZS5kZWxldGVSb2xlKHJvbGUpLnRoZW4ocm9sZSA9PiB0aGlzLmRlbGV0ZVJvbGVGcm9tQXJyKHJvbGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJvbGUocm9sZTogSVJvbGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvbGVBcnIucHVzaChyb2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZVJvbGVGcm9tQXJyKHJvbGU6IElSb2xlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5yb2xlQXJyLmluZGV4T2Yocm9sZSk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9sZXNCeVBhZ2VOdW0ocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gK3BhZ2VOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sZVNlcnZpY2UuZ2V0QWxsUm9sZSh0aGlzLnBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVBcnIgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyIC0gMTtcclxuICAgICAgICB0aGlzLmdldFJvbGVzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0Um9sZXNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5QXJyYXkoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGFnZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVQYWdlTGlzdChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNvcnRCeShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc29ydGVkIGJ5ICcsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSAhdGhpcy5vcmRlcjtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JkZXIgYnkgYXNjJywgdGhpcy5vcmRlcik7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5yb2xlU2VydmljZS5nZXRBbGxSb2xlc1NvcnRlZCh0aGlzLnBhZ2VOdW1iZXIsIG5hbWUsIHRoaXMub3JkZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVBcnIgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=
