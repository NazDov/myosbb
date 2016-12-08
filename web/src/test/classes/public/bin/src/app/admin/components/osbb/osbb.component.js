System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', '@angular/router', "ng2-translate", 'rxjs/Rx', './osbb.service', "../../../login/login.service", './osbb_form/osbb-modal.component', './osbb_form/osbb-del-form.component', "../../../../shared/services/current.user.service", "../../../../shared/pipes/capitalize-first-letter"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, router_1, ng2_translate_1, osbb_service_1, login_service_1, osbb_modal_component_1, osbb_del_form_component_1, current_user_service_1, capitalize_first_letter_1;
    var OsbbComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (_1) {},
            function (osbb_service_1_1) {
                osbb_service_1 = osbb_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (osbb_modal_component_1_1) {
                osbb_modal_component_1 = osbb_modal_component_1_1;
            },
            function (osbb_del_form_component_1_1) {
                osbb_del_form_component_1 = osbb_del_form_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            }],
        execute: function() {
            OsbbComponent = (function () {
                function OsbbComponent(osbbService, currentUserService, router, loginService) {
                    this.osbbService = osbbService;
                    this.currentUserService = currentUserService;
                    this.router = router;
                    this.loginService = loginService;
                    this.osbbArr = [];
                }
                OsbbComponent.prototype.ngOnInit = function () {
                    this.initOsbbArr("All");
                };
                OsbbComponent.prototype.initUpdatedOsbb = function (osbb) {
                    this.updatedOsbb = osbb;
                };
                OsbbComponent.prototype.initOsbbArr = function (available) {
                    var _this = this;
                    if (available === "All") {
                        this.osbbService.getAllOsbb().then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                    }
                    else if (available === "Available") {
                        this.osbbService.getByAvailable(true).then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                    }
                    else {
                        this.osbbService.getByAvailable(false).then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                    }
                };
                OsbbComponent.prototype.createOsbb = function (osbbDTO) {
                    var _this = this;
                    var osbb = osbbDTO.osbb;
                    osbb.creator = this.currentUserService.getUser();
                    if (osbbDTO.file !== null && osbbDTO.file !== undefined) {
                        this.osbbService.upload(osbbDTO.file)
                            .then(function (attachment) {
                            osbb.logo = attachment;
                            _this.osbbService.addOsbb(osbb).then(function (osbb) { return _this.osbbArr.unshift(osbb); });
                        });
                    }
                    else {
                        this.osbbService.addOsbb(osbb).then(function (osbb) { return _this.osbbArr.unshift(osbb); });
                    }
                };
                OsbbComponent.prototype.addOsbb = function (osbb) {
                    this.osbbArr.unshift(osbb);
                };
                OsbbComponent.prototype.editOsbb = function (osbbDTO) {
                    var _this = this;
                    if (osbbDTO.file !== null && osbbDTO.file !== undefined) {
                        this.osbbService.upload(osbbDTO.file)
                            .then(function (attachment) {
                            var osbb = osbbDTO.osbb;
                            osbb.logo = attachment;
                            _this.osbbService.editOsbb(osbb);
                        });
                    }
                    else {
                        this.osbbService.editOsbb(osbbDTO.osbb);
                    }
                };
                OsbbComponent.prototype.deleteOsbb = function (osbb) {
                    var _this = this;
                    this.osbbService.deleteOsbb(osbb).then(function (osbb) { return _this.deleteOsbbFromArr(osbb); });
                };
                OsbbComponent.prototype.deleteOsbbFromArr = function (osbb) {
                    var index = this.osbbArr.indexOf(osbb);
                    if (index > -1) {
                        this.osbbArr.splice(index, 1);
                    }
                };
                OsbbComponent.prototype.searchByNameOsbb = function (osbbName) {
                    var _this = this;
                    if (osbbName.trim() !== '') {
                        this.osbbService.getAllOsbbByNameContaining(osbbName).then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                    }
                    else {
                        this.osbbService.getAllOsbb().then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                    }
                };
                OsbbComponent.prototype.toggleOrder = function () {
                    if (this.asc === false) {
                        this.asc = true;
                    }
                    else {
                        this.asc = false;
                    }
                };
                OsbbComponent.prototype.sortBy = function (sortedBy) {
                    var _this = this;
                    this.toggleOrder();
                    this.osbbService.getAllOsbbByOrder(sortedBy, this.asc).then(function (osbbArr) { return _this.osbbArr = osbbArr; });
                };
                OsbbComponent.prototype.clearSearch = function (searchInput) {
                    if (searchInput.value === '') {
                        this.initOsbbArr("All");
                    }
                };
                OsbbComponent.prototype.getFormatDate = function (date) {
                    return moment(date).format("DD.MM.YYYY");
                };
                OsbbComponent.prototype.redirectToHouseTable = function (osbbId) {
                    if (this.loginService.checkLogin()) {
                        this.router.navigate(['admin/houses/' + osbbId]);
                    }
                    else {
                        this.router.navigate(['login']);
                    }
                };
                OsbbComponent = __decorate([
                    core_1.Component({
                        selector: 'osbb',
                        templateUrl: './src/app/admin/components/osbb/osbb.component.html',
                        styleUrls: ['./src/app/admin/components/osbb/osbb.component.css', './src/shared/css/general.css'],
                        providers: [osbb_service_1.OsbbService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, osbb_modal_component_1.OsbbModalComponent, osbb_del_form_component_1.OsbbDelFormComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [osbb_service_1.OsbbService, current_user_service_1.CurrentUserService, router_1.Router, login_service_1.LoginService])
                ], OsbbComponent);
                return OsbbComponent;
            }());
            exports_1("OsbbComponent", OsbbComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQU1JLHVCQUFxQixXQUF3QixFQUFVLGtCQUFxQyxFQUFVLE1BQWEsRUFBUyxZQUF5QjtvQkFBaEksZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUNqSixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRU8sdUNBQWUsR0FBdkIsVUFBd0IsSUFBVTtvQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsbUNBQVcsR0FBWCxVQUFZLFNBQWlCO29CQUE3QixpQkFTQztvQkFSRyxFQUFFLENBQUEsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO29CQUMxRSxDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUEsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxP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LENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQztxQkFDcEQsQ0FBQzs7aUNBQUE7Z0JBOEdGLG9CQUFDO1lBQUQsQ0E3R0EsQUE2R0MsSUFBQTtZQTdHRCx5Q0E2R0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvb3NiYi9vc2JiLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IE9zYmJEVE8gfSBmcm9tICcuL29zYmInO1xyXG5pbXBvcnQgeyBPc2JiU2VydmljZSB9IGZyb20gJy4vb3NiYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT3NiYk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9vc2JiX2Zvcm0vb3NiYi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPc2JiRGVsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vb3NiYl9mb3JtL29zYmItZGVsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcbmltcG9ydCB7IElPc2JiLCBPc2JiIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvb3NiYlwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29zYmInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vc2JiL29zYmIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5jb21wb25lbnQuY3NzJywgJy4vc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW09zYmJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtNT0RBTF9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIE9zYmJNb2RhbENvbXBvbmVudCwgT3NiYkRlbEZvcm1Db21wb25lbnRdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9zYmJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuICAgIFxyXG4gICAgb3NiYkFycjpJT3NiYltdO1xyXG4gICAgdXBkYXRlZE9zYmI6SU9zYmI7XHJcbiAgICBhc2M6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIG9zYmJTZXJ2aWNlOiBPc2JiU2VydmljZSwgcHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBsb2dpblNlcnZpY2U6TG9naW5TZXJ2aWNlKSB7IFxyXG4gICAgICAgIHRoaXMub3NiYkFyciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdE9zYmJBcnIoXCJBbGxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VXBkYXRlZE9zYmIob3NiYjpJT3NiYik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlZE9zYmIgPSBvc2JiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRPc2JiQXJyKGF2YWlsYWJsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoYXZhaWxhYmxlID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3NiYlNlcnZpY2UuZ2V0QWxsT3NiYigpLnRoZW4ob3NiYkFyciA9PiB0aGlzLm9zYmJBcnIgPSBvc2JiQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhdmFpbGFibGUgPT09IFwiQXZhaWxhYmxlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLmdldEJ5QXZhaWxhYmxlKHRydWUpLnRoZW4ob3NiYkFyciA9PiB0aGlzLm9zYmJBcnIgPSBvc2JiQXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLmdldEJ5QXZhaWxhYmxlKGZhbHNlKS50aGVuKG9zYmJBcnIgPT4gdGhpcy5vc2JiQXJyID0gb3NiYkFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9zYmIob3NiYkRUTzpPc2JiRFRPKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9zYmIgPSBvc2JiRFRPLm9zYmI7XHJcbiAgICAgICAgb3NiYi5jcmVhdG9yID0gdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgICAgIGlmKG9zYmJEVE8uZmlsZSAhPT0gbnVsbCAmJiBvc2JiRFRPLmZpbGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMub3NiYlNlcnZpY2UudXBsb2FkKG9zYmJEVE8uZmlsZSkgICAgICAgICBcclxuICAgICAgICAgICAgLnRoZW4oKGF0dGFjaG1lbnQpPT4ge1xyXG4gICAgICAgICAgICAgICAgb3NiYi5sb2dvID0gYXR0YWNobWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3NiYlNlcnZpY2UuYWRkT3NiYihvc2JiKS50aGVuKChvc2JiKT0+IHRoaXMub3NiYkFyci51bnNoaWZ0KG9zYmIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vc2JiU2VydmljZS5hZGRPc2JiKG9zYmIpLnRoZW4oKG9zYmIpPT4gdGhpcy5vc2JiQXJyLnVuc2hpZnQob3NiYikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE9zYmIob3NiYjogSU9zYmIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9zYmJBcnIudW5zaGlmdChvc2JiKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0T3NiYihvc2JiRFRPOk9zYmJEVE8pOiB2b2lkIHtcclxuICAgICAgICBpZihvc2JiRFRPLmZpbGUgIT09IG51bGwgJiYgb3NiYkRUTy5maWxlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLnVwbG9hZChvc2JiRFRPLmZpbGUpICAgICAgICAgXHJcbiAgICAgICAgICAgIC50aGVuKChhdHRhY2htZW50KT0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvc2JiID0gb3NiYkRUTy5vc2JiO1xyXG4gICAgICAgICAgICAgICAgb3NiYi5sb2dvID0gYXR0YWNobWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3NiYlNlcnZpY2UuZWRpdE9zYmIob3NiYik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3NiYlNlcnZpY2UuZWRpdE9zYmIob3NiYkRUTy5vc2JiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlT3NiYihvc2JiOklPc2JiKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vc2JiU2VydmljZS5kZWxldGVPc2JiKG9zYmIpLnRoZW4ob3NiYiA9PiB0aGlzLmRlbGV0ZU9zYmJGcm9tQXJyKG9zYmIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZU9zYmJGcm9tQXJyKG9zYmI6IElPc2JiKTogdm9pZCB7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IHRoaXMub3NiYkFyci5pbmRleE9mKG9zYmIpO1xyXG4gICAgICAgICBpZihpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3NiYkFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnlOYW1lT3NiYihvc2JiTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYob3NiYk5hbWUudHJpbSgpIT09JycpIHtcclxuICAgICAgICAgICAgdGhpcy5vc2JiU2VydmljZS5nZXRBbGxPc2JiQnlOYW1lQ29udGFpbmluZyhvc2JiTmFtZSkudGhlbihvc2JiQXJyID0+IHRoaXMub3NiYkFyciA9IG9zYmJBcnIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLmdldEFsbE9zYmIoKS50aGVuKG9zYmJBcnIgPT4gdGhpcy5vc2JiQXJyID0gb3NiYkFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU9yZGVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuYXNjID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFzYyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hc2MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydEJ5KHNvcnRlZEJ5OnN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlT3JkZXIoKTtcclxuICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLmdldEFsbE9zYmJCeU9yZGVyKHNvcnRlZEJ5LCB0aGlzLmFzYykudGhlbihvc2JiQXJyID0+IHRoaXMub3NiYkFyciA9IG9zYmJBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VhcmNoKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgaWYoc2VhcmNoSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE9zYmJBcnIoXCJBbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZvcm1hdERhdGUoZGF0ZTpEYXRlKTpzdHJpbmcge1xyXG4gICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGlyZWN0VG9Ib3VzZVRhYmxlKG9zYmJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5sb2dpblNlcnZpY2UuY2hlY2tMb2dpbigpKXtcclxuICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vaG91c2VzLycgKyBvc2JiSWRdKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
