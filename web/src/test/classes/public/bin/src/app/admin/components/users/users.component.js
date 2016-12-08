System.register(['@angular/core', '../../../../shared/models/role', "../../../../shared/models/osbb", '../../../../shared/models/user_registration', "../../../../shared/models/osbb_registration", "./users.service", "../../../registration/registration_user/register.service", "../../../registration/registration_user/registration.component", "ng2-translate", "../../../../shared/pipes/capitalize-first-letter", '@angular/router', '@angular/forms', "ng2-select"], function(exports_1, context_1) {
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
    var core_1, role_1, osbb_1, user_registration_1, osbb_registration_1, users_service_1, register_service_1, registration_component_1, ng2_translate_1, capitalize_first_letter_1, router_1, forms_1, ng2_select_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (role_1_1) {
                role_1 = role_1_1;
            },
            function (osbb_1_1) {
                osbb_1 = osbb_1_1;
            },
            function (user_registration_1_1) {
                user_registration_1 = user_registration_1_1;
            },
            function (osbb_registration_1_1) {
                osbb_registration_1 = osbb_registration_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService, router, formBuilder, registerService) {
                    this._userService = _userService;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.registerService = registerService;
                    this.roles = [];
                    this.userMy = new user_registration_1.UserRegistration();
                    this.osbbMy = new osbb_registration_1.OsbbRegistration();
                    this.isSelectedOsbb = false;
                    this.isSelectedHouse = false;
                    this.isSelectedApartment = false;
                    this.roleList = [];
                    this.osbbList = [];
                    this.houseList = [];
                    this.apartmentList = [];
                    this.osbb = [];
                    this.houses = [];
                    this.apartment = [];
                    this.genders = [
                        'male',
                        'female'
                    ];
                    console.log('constructore');
                    this.userMy.activated = true;
                    this.IsRegistered = false;
                    this.isJoinedOsbb = true;
                    this.IsRegisteredOsbb = false;
                    this.userList = [];
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('init');
                    this._userService.getAllUsers().subscribe(function (data) { return _this.userList = data; }, function (error) { return console.error(error); });
                    this.listAllOsbb();
                    this.listAllRoles();
                    console.log('get out of service');
                };
                UsersComponent.prototype.updateUser = function (user) {
                    var _this = this;
                    this._userService.updateUser(user).subscribe(function () { return _this.router.navigate(['admin/users']); });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    this._userService.deleteUser(user).subscribe(function () { return _this.userList.splice(_this.userList.indexOf(user, 0), 1); });
                };
                UsersComponent.prototype.saveUser = function (form) {
                    var _this = this;
                    console.log(this.userMy);
                    this._userService.saveUser(this.userMy).subscribe(function (data) { return _this.userList.push(data); });
                };
                UsersComponent.prototype.changeActivation = function (user) {
                    this._userService.changeActivation(user).subscribe(function (data) {
                        user.activated ? user.activated = false : user.activated = true;
                    }, function (error) {
                        console.log(error);
                    });
                };
                UsersComponent.prototype.toUser = function (id) {
                    this.router.navigate(['admin/user', id]);
                };
                UsersComponent.prototype.selectedOsbb = function (value) {
                    this.isSelectedOsbb = true;
                    console.log('select osbb: ', value);
                    var selectedOsbb = this.getOsbbByName(value.text);
                    this.userMy.osbbId = selectedOsbb.osbbId;
                    this.listAllHousesByOsbb(this.userMy.osbbId);
                };
                UsersComponent.prototype.selectedHouse = function (value) {
                    console.log('select house: ' + value);
                    this.isSelectedHouse = true;
                    var houseId = this.getHouseIdByName(value.text);
                    console.log('select houseId: ' + houseId);
                    this.listAllApartmentsByHouse(houseId);
                };
                UsersComponent.prototype.selectedApartment = function (value) {
                    this.isSelectedApartment = true;
                    var selectedApartmentID = this.getApartmentByApartmentNumber(value.text);
                    this.userMy.apartmentId = selectedApartmentID;
                    console.log('select apartment: ' + selectedApartmentID);
                    console.log(JSON.stringify(this.userMy));
                };
                UsersComponent.prototype.selectedRole = function (value) {
                    var selectedRole = this.getRoleByName(value.text);
                    this.userMy.role = selectedRole.roleId;
                };
                UsersComponent.prototype.listAllOsbb = function () {
                    var _this = this;
                    this.registerService.getAllOsbb()
                        .subscribe(function (data) {
                        _this.osbbList = data;
                        _this.osbb = _this.fillOsbb();
                        console.log('all osbb names', _this.osbb);
                    });
                };
                UsersComponent.prototype.listAllRoles = function () {
                    var _this = this;
                    this._userService.listAllRoles()
                        .subscribe(function (data) {
                        _this.roleList = data;
                        _this.roles = _this.fillRoles();
                        console.log('all role names', _this.roles);
                    });
                };
                UsersComponent.prototype.listAllHousesByOsbb = function (id) {
                    var _this = this;
                    this.registerService.getAllHousesByOsbb(id)
                        .subscribe(function (data) {
                        _this.houseList = data;
                        _this.houses = _this.fillHouses();
                        console.log('all houses', _this.houses);
                    });
                };
                UsersComponent.prototype.listAllApartmentsByHouse = function (houseId) {
                    var _this = this;
                    this.registerService.getAllApartmentsByHouse(houseId)
                        .subscribe(function (data) {
                        _this.apartmentList = data;
                        _this.apartment = _this.fillApartment();
                        console.log('all apartment', _this.apartment);
                    });
                };
                UsersComponent.prototype.getOsbbByName = function (name) {
                    var selectedOsbb = new osbb_1.Osbb();
                    for (var _i = 0, _a = this.osbbList; _i < _a.length; _i++) {
                        var osbb = _a[_i];
                        if (osbb.name.match(name)) {
                            selectedOsbb = osbb;
                            break;
                        }
                    }
                    return selectedOsbb;
                };
                UsersComponent.prototype.getRoleByName = function (name) {
                    var selectedRole = new role_1.Role();
                    for (var _i = 0, _a = this.roleList; _i < _a.length; _i++) {
                        var role = _a[_i];
                        if (role.name.match(name)) {
                            selectedRole = role;
                            break;
                        }
                    }
                    return selectedRole;
                };
                UsersComponent.prototype.getHouseIdByName = function (name) {
                    var houseId = 0;
                    for (var _i = 0, _a = this.houseList; _i < _a.length; _i++) {
                        var house = _a[_i];
                        if (house.street.match(name)) {
                            houseId = house.houseId;
                            break;
                        }
                    }
                    return houseId;
                };
                UsersComponent.prototype.getApartmentByApartmentNumber = function (apartmentNumber) {
                    var apartmentID = 0;
                    var apNumber = +apartmentNumber;
                    for (var _i = 0, _a = this.apartmentList; _i < _a.length; _i++) {
                        var ap = _a[_i];
                        if (ap.number === apNumber) {
                            apartmentID = ap.apartmentId;
                            break;
                        }
                    }
                    return apartmentID;
                };
                UsersComponent.prototype.fillOsbb = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.osbbList; _i < _a.length; _i++) {
                        var osbbObject = _a[_i];
                        tempArr.push(osbbObject.name);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                UsersComponent.prototype.fillOsbbById = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.osbbList; _i < _a.length; _i++) {
                        var osbbObject = _a[_i];
                        tempArr.push(osbbObject.osbbId);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                UsersComponent.prototype.fillHouses = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.houseList; _i < _a.length; _i++) {
                        var houseObject = _a[_i];
                        tempArr.push('' + houseObject.street);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                UsersComponent.prototype.fillApartment = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.apartmentList; _i < _a.length; _i++) {
                        var apartmentObject = _a[_i];
                        tempArr.push('' + apartmentObject.number);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                UsersComponent.prototype.fillRoles = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.roleList; _i < _a.length; _i++) {
                        var roleObject = _a[_i];
                        tempArr.push(roleObject.name);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-users',
                        templateUrl: 'src/app/admin/components/users/users.table.html',
                        providers: [users_service_1.UsersService, register_service_1.RegisterService],
                        styleUrls: ['src/app/admin/components/users/users.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, registration_component_1.RegistrationComponent, ng2_select_1.SELECT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router, forms_1.FormBuilder, register_service_1.RegisterService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtnQkF3Qkksd0JBQW9CLFlBQXlCLEVBQVUsTUFBYSxFQUFVLFdBQXVCLEVBQ3pGLGVBQWdDO29CQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN6RixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBdEI1QyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztvQkFDMUIsV0FBTSxHQUFxQixJQUFJLG9DQUFnQixFQUFFLENBQUM7b0JBQ2xELFdBQU0sR0FBcUIsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO29CQUMxQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztvQkFDaEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7b0JBQ2pDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztvQkFJckMsYUFBUSxHQUFXLEVBQUUsQ0FBQztvQkFDdEIsYUFBUSxHQUFZLEVBQUUsQ0FBQztvQkFDdkIsY0FBUyxHQUFhLEVBQUUsQ0FBQztvQkFDekIsa0JBQWEsR0FBaUIsRUFBRSxDQUFDO29CQUNqQyxTQUFJLEdBQWtCLEVBQUUsQ0FBQztvQkFDekIsV0FBTSxHQUFrQixFQUFFLENBQUM7b0JBQzNCLGNBQVMsR0FBa0IsRUFBRSxDQUFDO29CQUN0QyxZQUFPLEdBQUc7d0JBQ04sTUFBTTt3QkFDTixRQUFRO3FCQUNYLENBQUM7b0JBSUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFD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QyxFQUFFLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO3FCQUM1QztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELGtDQUFTLEdBQVQ7b0JBQ0ksSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO29CQUMzQixHQUFHLENBQUMsQ0FBbUIsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxDQUFDO3dCQUFoQyxJQUFJLFVBQVUsU0FBQTt3QkFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDakM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQztnQkF6T0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLGlEQUFpRDt3QkFDOUQsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSxrQ0FBZSxDQUFDO3dCQUMxQyxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzt3QkFDdkQsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLEVBQUUsOENBQXFCLEVBQUcsOEJBQWlCLENBQUM7cUJBQ3BGLENBQUM7O2tDQUFBO2dCQW9PRixxQkFBQztZQUFELENBbk9BLEFBbU9DLElBQUE7WUFuT0QsMkNBbU9DLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcm9sZSc7XHJcbmltcG9ydCB7IE9zYmIsIElPc2JiIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvb3NiYlwiO1xyXG5pbXBvcnQgeyBJSG91c2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Ib3VzZVwiO1xyXG5pbXBvcnQgeyBJQXBhcnRtZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvYXBhcnRtZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBVc2VyUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyX3JlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCB7IE9zYmJSZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9vc2JiX3JlZ2lzdHJhdGlvblwiO1xyXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gXCIuL3VzZXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25fdXNlci9yZWdpc3Rlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uX3VzZXIvcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTRUxFQ1RfRElSRUNUSVZFUyB9IGZyb20gXCJuZzItc2VsZWN0XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdteS11c2VycycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy91c2Vycy50YWJsZS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1VzZXJzU2VydmljZSwgUmVnaXN0ZXJTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY3NzJ10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgUmVnaXN0cmF0aW9uQ29tcG9uZW50LCAgU0VMRUNUX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIHVzZXJMaXN0OlVzZXJbXTtcclxuICAgIHJvbGVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICB1c2VyTXk6IFVzZXJSZWdpc3RyYXRpb24gPSBuZXcgVXNlclJlZ2lzdHJhdGlvbigpO1xyXG4gICAgb3NiYk15OiBPc2JiUmVnaXN0cmF0aW9uID0gbmV3IE9zYmJSZWdpc3RyYXRpb24oKTtcclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZE9zYmI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZEhvdXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzU2VsZWN0ZWRBcGFydG1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgSXNSZWdpc3RlcmVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBJc1JlZ2lzdGVyZWRPc2JiOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpc0pvaW5lZE9zYmI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJvbGVMaXN0OiBSb2xlW10gPSBbXTtcclxuICAgIHByaXZhdGUgb3NiYkxpc3Q6IElPc2JiW10gPSBbXTtcclxuICAgIHByaXZhdGUgaG91c2VMaXN0OiBJSG91c2VbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhcGFydG1lbnRMaXN0OiBJQXBhcnRtZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgb3NiYjogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBob3VzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgYXBhcnRtZW50OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBnZW5kZXJzID0gW1xyXG4gICAgICAgICdtYWxlJyxcclxuICAgICAgICAnZmVtYWxlJ1xyXG4gICAgXTsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlcnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgZm9ybUJ1aWxkZXI6Rm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWdpc3RlclNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcmUnKTtcclxuICAgICAgICB0aGlzLnVzZXJNeS5hY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0pvaW5lZE9zYmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkT3NiYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRBbGxVc2VycygpLnN1YnNjcmliZShkYXRhID0+IHRoaXMudXNlckxpc3QgPSBkYXRhLCBlcnJvcj0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgICAgICB0aGlzLmxpc3RBbGxPc2JiKCk7XHJcbiAgICAgICAgIHRoaXMubGlzdEFsbFJvbGVzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBvdXQgb2Ygc2VydmljZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXIodXNlcjpVc2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudXBkYXRlVXNlcih1c2VyKS5zdWJzY3JpYmUoKCk9PnRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vdXNlcnMnXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzZXIodXNlcjpVc2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZGVsZXRlVXNlcih1c2VyKS5zdWJzY3JpYmUoKCk9PnRoaXMudXNlckxpc3Quc3BsaWNlKHRoaXMudXNlckxpc3QuaW5kZXhPZih1c2VyLCAwKSwgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVVc2VyKGZvcm06IE5nRm9ybSApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJNeSk7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2Uuc2F2ZVVzZXIodGhpcy51c2VyTXkpLnN1YnNjcmliZSgoZGF0YSk9PnRoaXMudXNlckxpc3QucHVzaChkYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUFjdGl2YXRpb24odXNlcjpVc2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY2hhbmdlQWN0aXZhdGlvbih1c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGE9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLmFjdGl2YXRlZD91c2VyLmFjdGl2YXRlZD1mYWxzZTp1c2VyLmFjdGl2YXRlZD10cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHRvVXNlcihpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vdXNlcicsIGlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRPc2JiKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRPc2JiID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0IG9zYmI6ICcsIHZhbHVlKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPc2JiOiBPc2JiID0gdGhpcy5nZXRPc2JiQnlOYW1lKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIHRoaXMudXNlck15Lm9zYmJJZCA9IHNlbGVjdGVkT3NiYi5vc2JiSWQ7XHJcbiAgICAgICAgdGhpcy5saXN0QWxsSG91c2VzQnlPc2JiKHRoaXMudXNlck15Lm9zYmJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRIb3VzZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCBob3VzZTogJyArIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRIb3VzZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGhvdXNlSWQgPSB0aGlzLmdldEhvdXNlSWRCeU5hbWUodmFsdWUudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCBob3VzZUlkOiAnICsgaG91c2VJZCk7XHJcbiAgICAgICAgdGhpcy5saXN0QWxsQXBhcnRtZW50c0J5SG91c2UoaG91c2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRBcGFydG1lbnQodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZEFwYXJ0bWVudCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQXBhcnRtZW50SUQ6IG51bWJlciA9IHRoaXMuZ2V0QXBhcnRtZW50QnlBcGFydG1lbnROdW1iZXIodmFsdWUudGV4dCk7XHJcbiAgICAgICAgdGhpcy51c2VyTXkuYXBhcnRtZW50SWQgPSBzZWxlY3RlZEFwYXJ0bWVudElEO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgYXBhcnRtZW50OiAnICsgc2VsZWN0ZWRBcGFydG1lbnRJRCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyTXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZFJvbGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFJvbGU6IFJvbGUgPSB0aGlzLmdldFJvbGVCeU5hbWUodmFsdWUudGV4dCk7XHJcbiAgICAgICAgdGhpcy51c2VyTXkucm9sZSA9IHNlbGVjdGVkUm9sZS5yb2xlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbE9zYmIoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UuZ2V0QWxsT3NiYigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vc2JiTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9zYmIgPSB0aGlzLmZpbGxPc2JiKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxsIG9zYmIgbmFtZXMnLCB0aGlzLm9zYmIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0QWxsUm9sZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UubGlzdEFsbFJvbGVzKClcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZUxpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gdGhpcy5maWxsUm9sZXMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCByb2xlIG5hbWVzJywgdGhpcy5yb2xlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbEhvdXNlc0J5T3NiYihpZDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlLmdldEFsbEhvdXNlc0J5T3NiYihpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZUxpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VzID0gdGhpcy5maWxsSG91c2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCBob3VzZXMnLCB0aGlzLmhvdXNlcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3RBbGxBcGFydG1lbnRzQnlIb3VzZShob3VzZUlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5nZXRBbGxBcGFydG1lbnRzQnlIb3VzZShob3VzZUlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBhcnRtZW50TGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwYXJ0bWVudCA9IHRoaXMuZmlsbEFwYXJ0bWVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCBhcGFydG1lbnQnLCB0aGlzLmFwYXJ0bWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9zYmJCeU5hbWUobmFtZTogc3RyaW5nKTogT3NiYiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3NiYjogT3NiYiA9IG5ldyBPc2JiKCk7XHJcbiAgICAgICAgZm9yIChsZXQgb3NiYiBvZiB0aGlzLm9zYmJMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChvc2JiLm5hbWUubWF0Y2gobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkT3NiYiA9IG9zYmI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRPc2JiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvbGVCeU5hbWUobmFtZTogc3RyaW5nKTogUm9sZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUm9sZTogUm9sZSA9IG5ldyBSb2xlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgcm9sZSBvZiB0aGlzLnJvbGVMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyb2xlLm5hbWUubWF0Y2gobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9sZSA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRSb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhvdXNlSWRCeU5hbWUobmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaG91c2VJZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaG91c2Ugb2YgdGhpcy5ob3VzZUxpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGhvdXNlLnN0cmVldC5tYXRjaChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaG91c2VJZCA9IGhvdXNlLmhvdXNlSWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaG91c2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcGFydG1lbnRCeUFwYXJ0bWVudE51bWJlcihhcGFydG1lbnROdW1iZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGFwYXJ0bWVudElEOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBhcE51bWJlciA9ICthcGFydG1lbnROdW1iZXI7XHJcbiAgICAgICAgZm9yIChsZXQgYXAgb2YgdGhpcy5hcGFydG1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChhcC5udW1iZXIgPT09IGFwTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBhcGFydG1lbnRJRCA9IGFwLmFwYXJ0bWVudElkXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFwYXJ0bWVudElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxPc2JiKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgdGVtcEFycjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBvc2JiT2JqZWN0IG9mIHRoaXMub3NiYkxpc3QpIHtcclxuICAgICAgICAgICAgdGVtcEFyci5wdXNoKG9zYmJPYmplY3QubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnIpXHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbE9zYmJCeUlkKCk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgdGVtcEFycjogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBvc2JiT2JqZWN0IG9mIHRoaXMub3NiYkxpc3QpIHtcclxuICAgICAgICAgICAgdGVtcEFyci5wdXNoKG9zYmJPYmplY3Qub3NiYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcEFycilcclxuICAgICAgICByZXR1cm4gdGVtcEFycjtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsSG91c2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgdGVtcEFycjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBob3VzZU9iamVjdCBvZiB0aGlzLmhvdXNlTGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goJycgKyBob3VzZU9iamVjdC5zdHJlZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxBcGFydG1lbnQoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGFwYXJ0bWVudE9iamVjdCBvZiB0aGlzLmFwYXJ0bWVudExpc3QpIHtcclxuICAgICAgICAgICAgdGVtcEFyci5wdXNoKCcnICsgYXBhcnRtZW50T2JqZWN0Lm51bWJlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcEFycilcclxuICAgICAgICByZXR1cm4gdGVtcEFycjtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJvbGVPYmplY3Qgb2YgdGhpcy5yb2xlTGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2gocm9sZU9iamVjdC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcEFycilcclxuICAgICAgICByZXR1cm4gdGVtcEFycjtcclxuICAgIH1cclxuXHJcbn0iXX0=
