System.register(["@angular/core", "../../../shared/models/osbb", "./register.service", "@angular/router", "angular2-text-mask", 'node_modules/text-mask-addons/dist/emailMask.js', "./googleplace.directive", "ng2-select", "../../../shared/models/user_registration", "../../../shared/models/street", "../../../shared/models/City", "../../../shared/models/Region", "angular2-toaster/angular2-toaster", "../../../shared/models/osbb_registration", "../../../shared/pipes/capitalize-first-letter", "ng2-translate"], function(exports_1, context_1) {
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
    var core_1, osbb_1, register_service_1, router_1, angular2_text_mask_1, emailMask_js_1, googleplace_directive_1, ng2_select_1, user_registration_1, street_1, City_1, Region_1, angular2_toaster_1, osbb_registration_1, capitalize_first_letter_1, ng2_translate_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (osbb_1_1) {
                osbb_1 = osbb_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_text_mask_1_1) {
                angular2_text_mask_1 = angular2_text_mask_1_1;
            },
            function (emailMask_js_1_1) {
                emailMask_js_1 = emailMask_js_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (user_registration_1_1) {
                user_registration_1 = user_registration_1_1;
            },
            function (street_1_1) {
                street_1 = street_1_1;
            },
            function (City_1_1) {
                City_1 = City_1_1;
            },
            function (Region_1_1) {
                Region_1 = Region_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (osbb_registration_1_1) {
                osbb_registration_1 = osbb_registration_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(registerService, _router, _toasterService) {
                    this.registerService = registerService;
                    this._router = _router;
                    this._toasterService = _toasterService;
                    this.options = ['Приєднатись до існуючого ОСББ', 'Створити нове ОСББ'];
                    this.newUser = new user_registration_1.UserRegistration();
                    this.newOsbb = new osbb_registration_1.OsbbRegistration();
                    this.toasterconfig = new angular2_toaster_1.ToasterConfig({ showCloseButton: true, tapToDismiss: true, timeout: 5000 });
                    this.emailMask = emailMask_js_1.default;
                    this.textmask = [/[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/];
                    this.phoneMask = ['+', '3', '8', '(', /[0]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                    this.confirmPassword = "";
                    this.error = false;
                    this.errorConfirm = false;
                    this.errorMsg = "";
                    this.osbbList = [];
                    this.regionList = [];
                    this.cityList = [];
                    this.streetList = [];
                    this.regions = [];
                    this.cities = [];
                    this.streets = [];
                    this.houseList = [];
                    this.apartmentList = [];
                    this.osbb = [];
                    this.houses = [];
                    this.apartment = [];
                    this.isSelectedOsbb = false;
                    this.isSelectedHouse = false;
                    this.isSelectedApartment = false;
                    this.isSelectedStreet = false;
                    this.newUser.password = "";
                    this.newUser.activated = true;
                    this.newOsbb.creationDate = new Date;
                    this.osbbList = [];
                    this.houseList = [];
                    this.apartmentList = [];
                    this.newUser.status = this.options[0];
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                    this.listAllOsbb();
                    this.ListAllRegion();
                    this.IsRegistered = true;
                };
                RegistrationComponent.prototype.onSubmitUser = function (status) {
                    if (status == this.options[1]) {
                        this.IsRegistered = false;
                        this.IsRegisteredOsbb = true;
                        this.isJoinedOsbb = false;
                    }
                    else if (status == this.options[0]) {
                        this.IsRegistered = false;
                        this.isJoinedOsbb = true;
                        this.IsRegisteredOsbb = false;
                    }
                };
                RegistrationComponent.prototype.onSubmitOsbb = function () {
                    this.SenderOsbbAndUser();
                };
                RegistrationComponent.prototype.onSubmitJoin = function () {
                    this.SenderJoin();
                };
                RegistrationComponent.prototype.SenderJoin = function () {
                    var _this = this;
                    var isSuccessful = false;
                    this.registerService.registerUser(this.newUser)
                        .subscribe(function (data) {
                        isSuccessful = true;
                        _this.newUser = data;
                        console.log(data);
                        _this._toasterService.pop('success', '', 'Дякуємо за реєстрацію!');
                        _this.toLoginPageRedirect();
                    }, function (error) {
                        isSuccessful = false;
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.toLoginPageRedirect = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._router.navigate(['/login']);
                    }, 2000);
                };
                RegistrationComponent.prototype.SenderOsbbAndUser = function () {
                    var _this = this;
                    this.newOsbb.creator = this.newUser;
                    this.registerService.registerOsbb(this.newOsbb)
                        .subscribe(function (data) {
                        console.log(data);
                        _this._toasterService.pop('success', '', "Осбб " + _this.newOsbb.name + " було успішно зареєстроване!");
                        _this.toLoginPageRedirect();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.getAddress = function (place) {
                    this.newOsbb.address = place['formatted_address'];
                    var location = place['geometry']['location'];
                    var lat = location.lat();
                    var lng = location.lng();
                    console.log("Address Object", place);
                };
                RegistrationComponent.prototype.confirmPass = function () {
                    this.error = false;
                    var password = this.confirmPassword;
                    var password2 = this.newUser.password;
                    if (password.length != 0) {
                        if (password != password2) {
                            this.errorMsg = "Passwords don't match. Please try again";
                            this.errorConfirm = true;
                            this.confirmPassword = "";
                            return;
                        }
                    }
                    if (password2.length < 4 || password2.length > 16) {
                        this.errorMsg = "Password cannot be shorter than 4 and longer than 16 characters";
                        this.error = true;
                        this.errorConfirm = false;
                    }
                    else {
                        this.errorConfirm = false;
                    }
                };
                RegistrationComponent.prototype.Back = function () {
                    this.isJoinedOsbb = false;
                    this.IsRegisteredOsbb = false;
                    this.IsRegistered = true;
                };
                RegistrationComponent.prototype.selectedRegion = function (value) {
                    console.log(value.text);
                    var region = this.getRegionByName(value.text);
                    this.listAllCitiesByRegion(region.id);
                    this.isSelectedStreet = false;
                };
                RegistrationComponent.prototype.selectedCity = function (value) {
                    console.log(value.text);
                    var city = this.getCityByName(value.text);
                    this.listAllStreetsByCity(city.id);
                    this.isSelectedStreet = false;
                };
                RegistrationComponent.prototype.selectedOsbb = function (value) {
                    this.isSelectedOsbb = true;
                    var selectedOsbb = this.getOsbbByName(value.text);
                    this.newUser.osbbId = selectedOsbb.osbbId;
                    this.listAllHousesByOsbb(this.newUser.osbbId);
                    this.isSelectedStreet = false;
                };
                RegistrationComponent.prototype.selectedStreet = function (value) {
                    console.log(value.text);
                    var street = this.getStreetByName(value.text);
                    this.newUser.street = street.id;
                    this.isSelectedStreet = true;
                };
                RegistrationComponent.prototype.selectedHouse = function (value) {
                    this.isSelectedHouse = true;
                    var houseId = this.getHouseIdByName(value.text);
                    this.listAllApartmentsByHouse(houseId);
                };
                RegistrationComponent.prototype.selectedApartment = function (value) {
                    this.isSelectedApartment = true;
                    var selectedApartmentID = this.getApartmentByApartmentNumber(value.text);
                    this.newUser.apartmentId = selectedApartmentID;
                };
                RegistrationComponent.prototype.ListAllRegion = function () {
                    var _this = this;
                    this.registerService.getAllRegion()
                        .subscribe(function (data) {
                        _this.regionList = data;
                        _this.regions = _this.fillRegion();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.listAllOsbb = function () {
                    var _this = this;
                    this.registerService.getAllOsbb()
                        .subscribe(function (data) {
                        _this.osbbList = data;
                        _this.osbb = _this.fillOsbb();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.listAllStreetsByCity = function (id) {
                    var _this = this;
                    this.registerService.getAllStreetssByCityId(id)
                        .subscribe(function (data) {
                        _this.streetList = data;
                        _this.streets = _this.fillStreet();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.listAllCitiesByRegion = function (id) {
                    var _this = this;
                    this.registerService.getAllCitiesByRegionId(id)
                        .subscribe(function (data) {
                        _this.cityList = data;
                        _this.cities = _this.fillCities();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.listAllHousesByOsbb = function (id) {
                    var _this = this;
                    this.registerService.getAllHousesByOsbb(id)
                        .subscribe(function (data) {
                        _this.houseList = data;
                        _this.houses = _this.fillHouses();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.listAllApartmentsByHouse = function (houseId) {
                    var _this = this;
                    this.registerService.getAllApartmentsByHouse(houseId)
                        .subscribe(function (data) {
                        _this.apartmentList = data;
                        _this.apartment = _this.fillApartment();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                RegistrationComponent.prototype.getOsbbByName = function (name) {
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
                RegistrationComponent.prototype.getRegionByName = function (name) {
                    var region = new Region_1.Region();
                    for (var _i = 0, _a = this.regionList; _i < _a.length; _i++) {
                        var reg = _a[_i];
                        if (reg.name.match(name)) {
                            region = reg;
                            break;
                        }
                    }
                    return region;
                };
                RegistrationComponent.prototype.getCityByName = function (name) {
                    var city = new City_1.City();
                    for (var _i = 0, _a = this.cityList; _i < _a.length; _i++) {
                        var ci = _a[_i];
                        if (ci.name.match(name)) {
                            city = ci;
                            break;
                        }
                    }
                    return city;
                };
                RegistrationComponent.prototype.getStreetByName = function (name) {
                    var street = new street_1.Street();
                    for (var _i = 0, _a = this.streetList; _i < _a.length; _i++) {
                        var str = _a[_i];
                        if (str.name.match(name)) {
                            street = str;
                            break;
                        }
                    }
                    return street;
                };
                RegistrationComponent.prototype.getHouseIdByName = function (name) {
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
                RegistrationComponent.prototype.getApartmentByApartmentNumber = function (apartmentNumber) {
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
                RegistrationComponent.prototype.fillOsbb = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.osbbList; _i < _a.length; _i++) {
                        var osbbObject = _a[_i];
                        tempArr.push(osbbObject.name);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                RegistrationComponent.prototype.fillRegion = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.regionList; _i < _a.length; _i++) {
                        var reg = _a[_i];
                        tempArr.push(reg.name);
                    }
                    return tempArr;
                };
                RegistrationComponent.prototype.fillCities = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.cityList; _i < _a.length; _i++) {
                        var city = _a[_i];
                        tempArr.push(city.name);
                    }
                    return tempArr;
                };
                RegistrationComponent.prototype.fillStreet = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.streetList; _i < _a.length; _i++) {
                        var street = _a[_i];
                        tempArr.push(street.name);
                    }
                    return tempArr;
                };
                RegistrationComponent.prototype.fillOsbbById = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.osbbList; _i < _a.length; _i++) {
                        var osbbObject = _a[_i];
                        tempArr.push(osbbObject.osbbId);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                RegistrationComponent.prototype.fillHouses = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.houseList; _i < _a.length; _i++) {
                        var houseObject = _a[_i];
                        tempArr.push('' + houseObject.street);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                RegistrationComponent.prototype.fillApartment = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.apartmentList; _i < _a.length; _i++) {
                        var apartmentObject = _a[_i];
                        tempArr.push('' + apartmentObject.number);
                    }
                    console.log(tempArr);
                    return tempArr;
                };
                RegistrationComponent.prototype.handleErrors = function (error) {
                    if (error.status === 403) {
                        this._toasterService.pop('error', "Такий користувач уже зареєстрований в системі");
                    }
                    if (error.status === 500) {
                        this._toasterService.pop('error', "Нажаль, сталася помилка під час реєстрації");
                    }
                    console.log('error msg' + error);
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'app-register',
                        templateUrl: 'src/app/registration/registration_user/registration.html',
                        styleUrls: ['assets/css/registration/registration.css'],
                        providers: [register_service_1.RegisterService, angular2_toaster_1.ToasterService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES, angular2_text_mask_1.default, googleplace_directive_1.GoogleplaceDirective, ng2_select_1.SELECT_DIRECTIVES,
                            angular2_toaster_1.ToasterContainerComponent]
                    }), 
                    __metadata('design:paramtypes', [register_service_1.RegisterService, router_1.Router, angular2_toaster_1.ToasterService])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uX3VzZXIvcmVnaXN0cmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlDQTtnQkFrQ0ksK0JBQW9CLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixlQUErQjtvQkFGL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFuQ25ELFlBQU8sR0FBRyxDQUFDLCtCQUErQixFQUFFLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xFLFlBQU8sR0FBcUIsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO29CQUNuRCxZQUFPLEdBQXFCLElBQUksb0NBQWdCLEVBQUUsQ0FBQztvQkFDNUMsa0JBQWEsR0FBa0IsSUFBSSxnQ0FBYSxDQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUM3RyxjQUFTLEdBQUcsc0JBQVMsQ0FBQztvQkFDdEIsYUFBUSxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ25ZLGNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FB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O3dCQUN2RCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGlDQUFjLENBQUM7d0JBQzVDLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7d0JBQ2pELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDRCQUFXLEVBQUUsNENBQW9CLEVBQUUsOEJBQWlCOzRCQUNoRiw0Q0FBeUIsQ0FBQztxQkFDakMsQ0FBQzs7eUNBQUE7Z0JBbVpGLDRCQUFDO1lBQUQsQ0FsWkEsQUFrWkMsSUFBQTtZQWxaRCx5REFrWkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25fdXNlci9yZWdpc3RyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7T3NiYiwgSU9zYmJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL29zYmJcIjtcclxuaW1wb3J0IHtSZWdpc3RlclNlcnZpY2V9IGZyb20gXCIuL3JlZ2lzdGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBNYXNrZWRJbnB1dCBmcm9tIFwiYW5ndWxhcjItdGV4dC1tYXNrXCI7XHJcbmltcG9ydCBlbWFpbE1hc2sgZnJvbSAnbm9kZV9tb2R1bGVzL3RleHQtbWFzay1hZGRvbnMvZGlzdC9lbWFpbE1hc2suanMnO1xyXG5pbXBvcnQge0dvb2dsZXBsYWNlRGlyZWN0aXZlfSBmcm9tIFwiLi9nb29nbGVwbGFjZS5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1zZWxlY3RcIjtcclxuaW1wb3J0IHtJSG91c2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL0hvdXNlXCI7XHJcbmltcG9ydCB7SUFwYXJ0bWVudH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvYXBhcnRtZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1VzZXJSZWdpc3RyYXRpb259IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXJfcmVnaXN0cmF0aW9uXCI7XHJcbmltcG9ydCB7U3RyZWV0fSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zdHJlZXRcIjtcclxuaW1wb3J0IHtDaXR5fSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9DaXR5XCI7XHJcbmltcG9ydCB7UmVnaW9ufSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9SZWdpb25cIjtcclxuaW1wb3J0IHtUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50LCBUb2FzdGVyU2VydmljZSwgVG9hc3RlckNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyLXRvYXN0ZXIvYW5ndWxhcjItdG9hc3RlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgb25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZyxcclxuICAgIG9uRXJyb3JOZXdVc2VyQWxyZWFkeUV4aXN0c1xyXG59IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZXJyb3IvZXJyb3IuaGFuZGxlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPc2JiUmVnaXN0cmF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9vc2JiX3JlZ2lzdHJhdGlvblwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25fdXNlci9yZWdpc3RyYXRpb24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnYXNzZXRzL2Nzcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVnaXN0ZXJTZXJ2aWNlLCBUb2FzdGVyU2VydmljZV0sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNYXNrZWRJbnB1dCwgR29vZ2xlcGxhY2VEaXJlY3RpdmUsIFNFTEVDVF9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFRvYXN0ZXJDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgb3B0aW9ucyA9IFsn0J/RgNC40ZTQtNC90LDRgtC40YHRjCDQtNC+INGW0YHQvdGD0Y7Rh9C+0LPQviDQntCh0JHQkScsICfQodGC0LLQvtGA0LjRgtC4INC90L7QstC1INCe0KHQkdCRJ107XHJcbiAgICBuZXdVc2VyOiBVc2VyUmVnaXN0cmF0aW9uID0gbmV3IFVzZXJSZWdpc3RyYXRpb24oKTtcclxuICAgIG5ld09zYmI6IE9zYmJSZWdpc3RyYXRpb24gPSBuZXcgT3NiYlJlZ2lzdHJhdGlvbigpO1xyXG4gICAgcHVibGljIHRvYXN0ZXJjb25maWc6IFRvYXN0ZXJDb25maWcgPSBuZXcgVG9hc3RlckNvbmZpZyh7c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLCB0YXBUb0Rpc21pc3M6IHRydWUsIHRpbWVvdXQ6IDUwMDB9KTtcclxuICAgIHB1YmxpYyBlbWFpbE1hc2sgPSBlbWFpbE1hc2s7XHJcbiAgICBwdWJsaWMgdGV4dG1hc2sgPSBbL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS9dO1xyXG4gICAgcHVibGljIHBob25lTWFzayA9IFsnKycsJzMnLCc4JywnKCcsIC9bMF0vLCAvXFxkLywgL1xcZC8sICcpJywvXFxkLywgL1xcZC8sIC9cXGQvLCAnLScsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcclxuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nID0gXCJcIjtcclxuICAgIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBlcnJvckNvbmZpcm06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGVycm9yTXNnID0gXCJcIjtcclxuICAgIHByaXZhdGUgb3NiYkxpc3Q6IElPc2JiW10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVnaW9uTGlzdDogUmVnaW9uW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2l0eUxpc3Q6IENpdHlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdHJlZXRMaXN0OiBTdHJlZXRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWdpb25zOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwcml2YXRlIGNpdGllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdHJlZXRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwcml2YXRlIGhvdXNlTGlzdDogSUhvdXNlW10gPSBbXTtcclxuICAgIHByaXZhdGUgYXBhcnRtZW50TGlzdDogSUFwYXJ0bWVudFtdID0gW107XHJcbiAgICBwcml2YXRlIG9zYmI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgaG91c2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwcml2YXRlIGFwYXJ0bWVudDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkT3NiYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkSG91c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZEFwYXJ0bWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkU3RyZWV0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgSXNSZWdpc3RlcmVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBJc1JlZ2lzdGVyZWRPc2JiOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpc0pvaW5lZE9zYmI6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgYWRkcmVzczogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaXN0ZXJTZXJ2aWNlOiBSZWdpc3RlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubmV3VXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5uZXdVc2VyLmFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uZXdPc2JiLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlO1xyXG4gICAgICAgIHRoaXMub3NiYkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmhvdXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubmV3VXNlci5zdGF0dXMgPSB0aGlzLm9wdGlvbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0QWxsT3NiYigpO1xyXG4gICAgICAgIHRoaXMuTGlzdEFsbFJlZ2lvbigpO1xyXG4gICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgXHJcbiAgICBvblN1Ym1pdFVzZXIoc3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSB0aGlzLm9wdGlvbnNbMV0pIHtcclxuICAgICAgICAgICAgdGhpcy5Jc1JlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5Jc1JlZ2lzdGVyZWRPc2JiID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0pvaW5lZE9zYmIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09IHRoaXMub3B0aW9uc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLklzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzSm9pbmVkT3NiYiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkT3NiYiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdE9zYmIoKSB7XHJcbiAgICAgICAgdGhpcy5TZW5kZXJPc2JiQW5kVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0Sm9pbigpIHtcclxuICAgICAgICB0aGlzLlNlbmRlckpvaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kZXJKb2luKCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGlzU3VjY2Vzc2Z1bDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih0aGlzLm5ld1VzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Y2Nlc3NmdWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCdzdWNjZXNzJywgJycsICfQlNGP0LrRg9GU0LzQviDQt9CwINGA0LXRlNGB0YLRgNCw0YbRltGOIScpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b0xvZ2luUGFnZVJlZGlyZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvTG9naW5QYWdlUmVkaXJlY3QoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kZXJPc2JiQW5kVXNlcigpIHtcclxuICAgICAgICB0aGlzLm5ld09zYmIuY3JlYXRvciA9IHRoaXMubmV3VXNlcjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5yZWdpc3Rlck9zYmIodGhpcy5uZXdPc2JiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCdzdWNjZXNzJywgJycsIFwi0J7RgdCx0LEgXCIgKyB0aGlzLm5ld09zYmIubmFtZSArIFwiINCx0YPQu9C+INGD0YHQv9GW0YjQvdC+INC30LDRgNC10ZTRgdGC0YDQvtCy0LDQvdC1IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvTG9naW5QYWdlUmVkaXJlY3QoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcj0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkcmVzcyhwbGFjZTogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5uZXdPc2JiLmFkZHJlc3MgPSBwbGFjZVsnZm9ybWF0dGVkX2FkZHJlc3MnXTtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBwbGFjZVsnZ2VvbWV0cnknXVsnbG9jYXRpb24nXTtcclxuICAgICAgICB2YXIgbGF0ID0gbG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgdmFyIGxuZyA9IGxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkcmVzcyBPYmplY3RcIiwgcGxhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1QYXNzKCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcGFzc3dvcmQ6IHN0cmluZyA9IHRoaXMuY29uZmlybVBhc3N3b3JkO1xyXG4gICAgICAgIGxldCBwYXNzd29yZDI6IHN0cmluZyA9IHRoaXMubmV3VXNlci5wYXNzd29yZDtcclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9IHBhc3N3b3JkMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoLiBQbGVhc2UgdHJ5IGFnYWluXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ29uZmlybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkMi5sZW5ndGggPCA0IHx8IHBhc3N3b3JkMi5sZW5ndGggPiAxNikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgc2hvcnRlciB0aGFuIDQgYW5kIGxvbmdlciB0aGFuIDE2IGNoYXJhY3RlcnNcIjtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb25maXJtID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckNvbmZpcm0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQmFjaygpIHtcclxuICAgICAgICB0aGlzLmlzSm9pbmVkT3NiYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkT3NiYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VsZWN0ZWRSZWdpb24odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2lvbjogUmVnaW9uID0gdGhpcy5nZXRSZWdpb25CeU5hbWUodmFsdWUudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RBbGxDaXRpZXNCeVJlZ2lvbihyZWdpb24uaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkU3RyZWV0ID0gZmFsc2U7ICBcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZENpdHkodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNpdHk6IENpdHkgPSB0aGlzLmdldENpdHlCeU5hbWUodmFsdWUudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RBbGxTdHJlZXRzQnlDaXR5KGNpdHkuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkU3RyZWV0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRPc2JiKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRPc2JiID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPc2JiOiBPc2JiID0gdGhpcy5nZXRPc2JiQnlOYW1lKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIHRoaXMubmV3VXNlci5vc2JiSWQgPSBzZWxlY3RlZE9zYmIub3NiYklkO1xyXG4gICAgICAgIHRoaXMubGlzdEFsbEhvdXNlc0J5T3NiYih0aGlzLm5ld1VzZXIub3NiYklkKTtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRTdHJlZXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZFN0cmVldCh2YWx1ZTogYW55KSB7XHJcbiAgICBcdGNvbnNvbGUubG9nKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIGxldCBzdHJlZXQ6IFN0cmVldCA9IHRoaXMuZ2V0U3RyZWV0QnlOYW1lKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIHRoaXMubmV3VXNlci5zdHJlZXQgPSBzdHJlZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkU3RyZWV0ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRIb3VzZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkSG91c2UgPSB0cnVlO1xyXG4gICAgICAgIGxldCBob3VzZUlkID0gdGhpcy5nZXRIb3VzZUlkQnlOYW1lKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIHRoaXMubGlzdEFsbEFwYXJ0bWVudHNCeUhvdXNlKGhvdXNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkQXBhcnRtZW50KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRBcGFydG1lbnQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEFwYXJ0bWVudElEOiBudW1iZXIgPSB0aGlzLmdldEFwYXJ0bWVudEJ5QXBhcnRtZW50TnVtYmVyKHZhbHVlLnRleHQpO1xyXG4gICAgICAgIHRoaXMubmV3VXNlci5hcGFydG1lbnRJZCA9IHNlbGVjdGVkQXBhcnRtZW50SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgTGlzdEFsbFJlZ2lvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UuZ2V0QWxsUmVnaW9uKClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25MaXN0PSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbnMgPSAgdGhpcy5maWxsUmVnaW9uKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbE9zYmIoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UuZ2V0QWxsT3NiYigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vc2JiTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9zYmIgPSB0aGlzLmZpbGxPc2JiKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbFN0cmVldHNCeUNpdHkoaWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5nZXRBbGxTdHJlZXRzc0J5Q2l0eUlkKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVldExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWV0cyA9IHRoaXMuZmlsbFN0cmVldCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbENpdGllc0J5UmVnaW9uKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5nZXRBbGxDaXRpZXNCeVJlZ2lvbklkKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpdHlMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpdGllcyA9IHRoaXMuZmlsbENpdGllcygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsaXN0QWxsSG91c2VzQnlPc2JiKGlkOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UuZ2V0QWxsSG91c2VzQnlPc2JiKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZXMgPSB0aGlzLmZpbGxIb3VzZXMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsaXN0QWxsQXBhcnRtZW50c0J5SG91c2UoaG91c2VJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclNlcnZpY2UuZ2V0QWxsQXBhcnRtZW50c0J5SG91c2UoaG91c2VJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwYXJ0bWVudExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGFydG1lbnQgPSB0aGlzLmZpbGxBcGFydG1lbnQoKTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPc2JiQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9zYmIge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9zYmI6IE9zYmIgPSBuZXcgT3NiYigpO1xyXG4gICAgICAgIGZvciAobGV0IG9zYmIgb2YgdGhpcy5vc2JiTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAob3NiYi5uYW1lLm1hdGNoKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9zYmIgPSBvc2JiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkT3NiYjtcclxuICAgIH1cclxuXHJcbiAgICAgZ2V0UmVnaW9uQnlOYW1lKG5hbWU6IHN0cmluZyk6IFJlZ2lvbiB7XHJcbiAgICAgICAgbGV0IHJlZ2lvbjogUmVnaW9uID0gbmV3IFJlZ2lvbigpO1xyXG4gICAgICAgIGZvciAobGV0IHJlZyBvZiB0aGlzLnJlZ2lvbkxpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHJlZy5uYW1lLm1hdGNoKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVnaW9uO1xyXG4gICAgfVxyXG5cclxuICAgICAgZ2V0Q2l0eUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBDaXR5IHtcclxuICAgICAgICBsZXQgY2l0eTogQ2l0eSA9IG5ldyBDaXR5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgb2YgdGhpcy5jaXR5TGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoY2kubmFtZS5tYXRjaChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY2l0eSA9IGNpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RyZWV0QnlOYW1lKG5hbWU6IHN0cmluZyk6IFN0cmVldCB7XHJcbiAgICAgICAgbGV0IHN0cmVldDogU3RyZWV0ID0gbmV3IFN0cmVldCgpO1xyXG4gICAgICAgIGZvciAobGV0IHN0ciBvZiB0aGlzLnN0cmVldExpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0ci5uYW1lLm1hdGNoKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXQgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyZWV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRIb3VzZUlkQnlOYW1lKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGhvdXNlSWQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGhvdXNlIG9mIHRoaXMuaG91c2VMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChob3VzZS5zdHJlZXQubWF0Y2gobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGhvdXNlSWQgPSBob3VzZS5ob3VzZUlkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvdXNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBhcnRtZW50QnlBcGFydG1lbnROdW1iZXIoYXBhcnRtZW50TnVtYmVyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhcGFydG1lbnRJRDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgYXBOdW1iZXIgPSArYXBhcnRtZW50TnVtYmVyO1xyXG4gICAgICAgIGZvciAobGV0IGFwIG9mIHRoaXMuYXBhcnRtZW50TGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoYXAubnVtYmVyID09PSBhcE51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgYXBhcnRtZW50SUQgPSBhcC5hcGFydG1lbnRJZFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcGFydG1lbnRJRDtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsT3NiYigpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgb3NiYk9iamVjdCBvZiB0aGlzLm9zYmJMaXN0KSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnIucHVzaChvc2JiT2JqZWN0Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxSZWdpb24oKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJlZyBvZiB0aGlzLnJlZ2lvbkxpc3QpIHtcclxuICAgICAgICAgICAgdGVtcEFyci5wdXNoKHJlZy5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgIGZpbGxDaXRpZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGNpdHkgb2YgdGhpcy5jaXR5TGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goY2l0eS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFN0cmVldCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgc3RyZWV0IG9mIHRoaXMuc3RyZWV0TGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goc3RyZWV0Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcEFycjtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsT3NiYkJ5SWQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG9zYmJPYmplY3Qgb2YgdGhpcy5vc2JiTGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2gob3NiYk9iamVjdC5vc2JiSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxIb3VzZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGhvdXNlT2JqZWN0IG9mIHRoaXMuaG91c2VMaXN0KSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnIucHVzaCgnJyArIGhvdXNlT2JqZWN0LnN0cmVldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnIpXHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEFwYXJ0bWVudCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYXBhcnRtZW50T2JqZWN0IG9mIHRoaXMuYXBhcnRtZW50TGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goJycgKyBhcGFydG1lbnRPYmplY3QubnVtYmVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3AoJ2Vycm9yJywgXCLQotCw0LrQuNC5INC60L7RgNC40YHRgtGD0LLQsNGHINGD0LbQtSDQt9Cw0YDQtdGU0YHRgtGA0L7QstCw0L3QuNC5INCyINGB0LjRgdGC0LXQvNGWXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCdlcnJvcicsIFwi0J3QsNC20LDQu9GMLCDRgdGC0LDQu9Cw0YHRjyDQv9C+0LzQuNC70LrQsCDQv9GW0LQg0YfQsNGBINGA0LXRlNGB0YLRgNCw0YbRltGXXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbXNnJyArIGVycm9yKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
