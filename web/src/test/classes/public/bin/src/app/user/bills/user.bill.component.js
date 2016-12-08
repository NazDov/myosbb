System.register(["@angular/core", "../report/download/report.downloader.component", "ng2-bootstrap", "@angular/common", "ng2-translate", "../../../shared/pipes/capitalize-first-letter", "../../../shared/services/current.user.service", "./bill.service", "angular2-toaster/angular2-toaster", "../../../shared/error/error.handler.component", "../../header/header.component", "ng2-select", "../../house/house.service", "../provider/service/provider-service", "./chart/bill.chart.component", "@angular/forms"], function(exports_1, context_1) {
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
    var core_1, report_downloader_component_1, ng2_bootstrap_1, common_1, ng2_translate_1, capitalize_first_letter_1, current_user_service_1, bill_service_1, angular2_toaster_1, error_handler_component_1, header_component_1, ng2_select_1, house_service_1, provider_service_1, bill_chart_component_1, forms_1;
    var UserBillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_downloader_component_1_1) {
                report_downloader_component_1 = report_downloader_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (bill_service_1_1) {
                bill_service_1 = bill_service_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (error_handler_component_1_1) {
                error_handler_component_1 = error_handler_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (house_service_1_1) {
                house_service_1 = house_service_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (bill_chart_component_1_1) {
                bill_chart_component_1 = bill_chart_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            UserBillComponent = (function () {
                function UserBillComponent(_billService, _toasterService, _houseService, _providerService) {
                    this._billService = _billService;
                    this._toasterService = _toasterService;
                    this._houseService = _houseService;
                    this._providerService = _providerService;
                    this.bills = [];
                    this.billCalcVal = 0;
                    this.newBill = {
                        billId: null, date: null, tariff: 0, toPay: 0, paid: 0, description: '',
                        apartmentNumber: null, apartmentId: null, providerId: null, status: null
                    };
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.active = true;
                    this.order = true;
                    this.pending = false;
                    this.onSearch = false;
                    this.rows = [10, 20, 50];
                    this.selectedRow = 10;
                    this.pageParams = { pageNumber: 1, sortedBy: 'date', orderType: false, rowNum: 10 };
                    this.isUserDownload = false;
                    this.options = { ALL: 'ALL', PAID: 'PAID', NOT_PAID: 'NOT_PAID' };
                    this.status = this.options.ALL;
                    this.isSelectedHouse = false;
                    this.isSelectedApartment = false;
                    this.isSelectedProvider = false;
                    this.houseList = [];
                    this.apartmentList = [];
                    this.providerList = [];
                    this.houses = [];
                    this.apartment = [];
                    this.provider = [];
                    this.currentUser = header_component_1.HeaderComponent.currentUserService.currentUser;
                    console.log(JSON.stringify('loading..' + this.currentUser));
                }
                UserBillComponent.prototype.listAllHouses = function () {
                    var _this = this;
                    this._houseService.listAllHouses()
                        .subscribe(function (data) {
                        _this.houseList = data;
                        _this.houses = _this.fillHouses();
                    }, function (error) {
                        return _this.handleErrors(error);
                    });
                };
                UserBillComponent.prototype.listAllProviders = function () {
                    var _this = this;
                    this._providerService.getAllProviders()
                        .subscribe(function (data) {
                        _this.providerList = data;
                        _this.provider = _this.fillProviders();
                    }, function (error) { return _this.handleErrors(error); });
                };
                UserBillComponent.prototype.ngOnInit = function () {
                    if (this.osbbRole != 'HEAD') {
                        this.isUserDownload = true;
                    }
                    console.log('current user: ', this.currentUser.lastName);
                    this.getBillsByPageNum(this.pageNumber, this.selectedRow, this.status);
                    this.listAllHouses();
                    this.listAllProviders();
                };
                UserBillComponent.prototype.emptyHouses = function () {
                    while (this.houses.length) {
                        this.houses.pop();
                    }
                };
                UserBillComponent.prototype.emptyApartments = function () {
                    while (this.apartment.length) {
                        this.apartment.pop();
                    }
                };
                UserBillComponent.prototype.fillApartment = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.apartmentList; _i < _a.length; _i++) {
                        var apartmentObject = _a[_i];
                        tempArr.push('№ ' + apartmentObject.number);
                    }
                    return tempArr;
                };
                UserBillComponent.prototype.fillHouses = function () {
                    var tempArr = [];
                    for (var _i = 0, _a = this.houseList; _i < _a.length; _i++) {
                        var housePageObject = _a[_i];
                        tempArr.push(housePageObject.street);
                    }
                    return tempArr;
                };
                UserBillComponent.prototype.fillProviders = function () {
                    var temp = [];
                    for (var _i = 0, _a = this.providerList; _i < _a.length; _i++) {
                        var providerObject = _a[_i];
                        temp.push(providerObject.name);
                    }
                    return temp;
                };
                UserBillComponent.prototype.refresh = function () {
                    console.log('refreshing...');
                    this.getBillsByPageNum(this.pageNumber, this.pageParams.rowNum, this.status);
                };
                UserBillComponent.prototype.onDelModalOpen = function (billId) {
                    console.log('opening del modal');
                    this.billId = +billId;
                    this.delModal.show();
                };
                UserBillComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    console.log('deleting bill with id', this.billId);
                    setTimeout(function () {
                        _this.delModal.hide();
                    }, 0);
                    this._billService.deleteById(this.billId)
                        .subscribe(function () {
                        _this.refresh();
                    }, function (error) { return _this.handleErrors(error); });
                };
                UserBillComponent.prototype.openCreateBillModal = function () {
                    this.createModal.show();
                };
                UserBillComponent.prototype.cancelCreateModal = function () {
                    var _this = this;
                    this.active = false;
                    this.createModal.hide();
                    setTimeout(function () {
                        _this.active = true;
                    }, 0);
                };
                UserBillComponent.prototype.onSaveNewBill = function () {
                    var _this = this;
                    this.clearSelectedFields();
                    this.cancelCreateModal();
                    console.log('new bill :', JSON.stringify(this.newBill));
                    this._billService.save(this.newBill)
                        .subscribe(function () {
                        _this.refresh();
                    }, function (error) { return _this.handleErrors(error); });
                };
                UserBillComponent.prototype.clearSelectedFields = function () {
                    this.isSelectedApartment = false;
                    this.isSelectedHouse = false;
                    this.isSelectedProvider = false;
                };
                UserBillComponent.prototype.isNotNumber = function (value) {
                    return isNaN(value);
                };
                UserBillComponent.prototype.getBillsByPageNum = function (pageNumber, selectedRow, status) {
                    var _this = this;
                    this.pending = true;
                    this.pageParams.pageNumber = pageNumber;
                    this.pageParams.rowNum = selectedRow;
                    this.status = status;
                    this._billService.getAllByRole(this.osbbRole, this.currentUser.userId, this.pageParams, this.status)
                        .subscribe(function (data) {
                        _this.processBillDTOData(data);
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                ;
                UserBillComponent.prototype.processBillDTOData = function (data) {
                    console.log('processing bill data...');
                    this.pending = false;
                    this.pageCreator = data;
                    this.bills = data.rows;
                    this.preparePageList(+this.pageCreator.beginPage, +this.pageCreator.endPage);
                    this.totalPages = +data.totalPages;
                };
                UserBillComponent.prototype.handleErrors = function (error) {
                    this.pending = false;
                    if (error.status === 404 || error.status === 400) {
                        console.log('server error 400', error);
                        this._toasterService.pop(error_handler_component_1.onErrorResourceNotFoundToastMsg);
                        return;
                    }
                    if (error.status === 500) {
                        console.log('server error 500', error);
                        this._toasterService.pop(error_handler_component_1.onErrorServerNoResponseToastMsg);
                        return;
                    }
                    console.log(error);
                };
                UserBillComponent.prototype.isPaid = function (status) {
                    if (status == 'PAID') {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                UserBillComponent.prototype.isDateValid = function (date) {
                    return /\d{4}-\d{2}-\d{2}/.test(date);
                };
                UserBillComponent.prototype.selectRowNum = function (row) {
                    this.getBillsByPageNum(this.pageParams.pageNumber, row, this.status);
                };
                UserBillComponent.prototype.prevPage = function () {
                    this.pageParams.pageNumber = this.pageParams.pageNumber - 1;
                    this.getBillsByPageNum(this.pageParams.pageNumber, this.pageParams.rowNum, this.status);
                };
                UserBillComponent.prototype.nextPage = function () {
                    this.pageParams.pageNumber = this.pageParams.pageNumber + 1;
                    this.getBillsByPageNum(this.pageParams.pageNumber, this.pageParams.rowNum, this.status);
                };
                UserBillComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                UserBillComponent.prototype.preparePageList = function (start, end) {
                    this.emptyArray();
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                UserBillComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.pageParams.orderType = !this.pageParams.orderType;
                    this.pageParams.sortedBy = name;
                    console.log('order by asc', this.pageParams.orderType);
                    this._billService.getAllByRole(this.osbbRole, this.currentUser.userId, this.pageParams, this.status)
                        .subscribe(function (data) {
                        _this.processBillDTOData(data);
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                UserBillComponent.prototype.confirmBill = function (bill) {
                    var _this = this;
                    console.log('confirming bill', bill.billId);
                    bill.paid = bill.toPay;
                    bill.status = this.options.PAID;
                    this._billService.save(bill).subscribe(function () {
                        _this.refresh();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                UserBillComponent.prototype.onClickSearchByParam = function (value) {
                    if (value.trim().length) {
                        console.log('search by ', value);
                    }
                };
                UserBillComponent.prototype.processOption = function (status) {
                    console.log('status', status);
                    this.status = status;
                    this.getBillsByPageNum(this.pageNumber, this.selectedRow, this.status);
                };
                UserBillComponent.prototype.refreshHouse = function (value) {
                    console.log('refresh house: ', value);
                    this.isSelectedHouse = false;
                };
                UserBillComponent.prototype.selectedHouse = function (value) {
                    var _this = this;
                    this.isSelectedHouse = true;
                    console.log('select house: ', value);
                    var houseId = this.selectHouseIdByHouseValue(value.text);
                    console.log('selected house id: ', houseId);
                    this._houseService.getAllApartmentsByHouseId(houseId)
                        .subscribe(function (data) {
                        _this.apartmentList = data;
                        _this.apartment = _this.fillApartment();
                        console.log('all apartment numbers', _this.apartment);
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                    this.createModal.show();
                };
                UserBillComponent.prototype.refreshApartment = function (value) {
                    console.log('refresh all apartment numbers', this.apartment);
                    console.log('refresh apartment: ', value);
                    this.isSelectedApartment = false;
                };
                UserBillComponent.prototype.selectedApartment = function (value) {
                    this.isSelectedApartment = true;
                    console.log('selected apartment: ', value.text.substring(2));
                    var apartmentNumber = parseInt(value.text.substring(2));
                    this.newBill.apartmentNumber = apartmentNumber;
                    var apartmentId = this.selectApartmentIdByApartmentNumber(apartmentNumber);
                    this.newBill.apartmentId = apartmentId;
                    console.log('bill updated with apartment id: ', this.newBill.apartmentId);
                    this.createModal.show();
                };
                UserBillComponent.prototype.selectApartmentIdByApartmentNumber = function (apartmentNumber) {
                    var apartmentId = 0;
                    for (var _i = 0, _a = this.apartmentList; _i < _a.length; _i++) {
                        var apartment = _a[_i];
                        if (apartmentNumber === apartment.number) {
                            apartmentId = apartment.apartmentId;
                        }
                    }
                    return apartmentId;
                };
                UserBillComponent.prototype.refreshProvider = function (value) {
                    console.log('refresh provider: ', value);
                    this.isSelectedProvider = false;
                };
                UserBillComponent.prototype.selectedProvider = function (value) {
                    this.isSelectedProvider = true;
                    console.log('select provider: ', value.text);
                    var providerId = this.selectProviderIdByProviderName(value.text);
                    this.newBill.providerId = providerId;
                    console.log('bill updated with provider id: ', this.newBill.providerId);
                    this.createModal.show();
                };
                UserBillComponent.prototype.selectProviderIdByProviderName = function (value) {
                    var providerId = 0;
                    for (var _i = 0, _a = this.providerList; _i < _a.length; _i++) {
                        var provider = _a[_i];
                        if (value.match(provider.name)) {
                            providerId = provider.providerId;
                            break;
                        }
                    }
                    return providerId;
                };
                UserBillComponent.prototype.selectHouseIdByHouseValue = function (value) {
                    var houseId = 0;
                    for (var _i = 0, _a = this.houseList; _i < _a.length; _i++) {
                        var houseObject = _a[_i];
                        if (value.match(houseObject.street)) {
                            houseId = houseObject.houseId;
                            break;
                        }
                    }
                    return houseId;
                };
                UserBillComponent.prototype.isSelected = function () {
                    return this.isSelectedHouse && this.isSelectedApartment && this.isSelectedProvider;
                };
                UserBillComponent.prototype.calcToPay = function (value) {
                    console.log('calc', value);
                    if (!isNaN(parseInt('' + this.billCalcVal))) {
                        this.newBill.toPay = this.billCalcVal * this.newBill.tariff;
                        this.newBill.toPay = parseFloat(Math.round(this.newBill.toPay * 100) / 100);
                        console.log('toPay: ', this.newBill.toPay);
                    }
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserBillComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('createModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserBillComponent.prototype, "createModal", void 0);
                UserBillComponent = __decorate([
                    core_1.Component({
                        selector: 'bill-component',
                        templateUrl: 'src/app/user/bills/bill.html',
                        providers: [bill_service_1.BillService, house_service_1.HouseService, provider_service_1.ProviderService, angular2_toaster_1.ToasterService, current_user_service_1.CurrentUserService],
                        inputs: ['osbbRole', 'isUserDownload'],
                        styleUrls: ['src/app/user/bills/bill.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                        directives: [bill_chart_component_1.BillChartComponent, angular2_toaster_1.ToasterContainerComponent, report_downloader_component_1.ReportDownloaderComponent,
                            ng2_bootstrap_1.MODAL_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [bill_service_1.BillService, angular2_toaster_1.ToasterService, house_service_1.HouseService, provider_service_1.ProviderService])
                ], UserBillComponent);
                return UserBillComponent;
            }());
            exports_1("UserBillComponent", UserBillComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2JpbGxzL3VzZXIuYmlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBb0NJLDJCQUFvQixZQUF5QixFQUFVLGVBQStCLEVBQ2xFLGFBQTJCLEVBQzNCLGdCQUFpQztvQkFGakMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUNsRSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFyQzdDLFVBQUssR0FBYyxFQUFFLENBQUM7b0JBQ3RCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO29CQUN4QixZQUFPLEdBQVk7d0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRTt3QkFDdkUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7cUJBQzNFLENBQUM7b0JBRU0sZUFBVSxHQUFXLENBQUMsQ0FBQztvQkFDdkIsYUFBUSxHQUFrQixFQUFFLENBQUM7b0JBRTdCLFdBQU0sR0FBWSxJQUFJLENBQUM7b0JBQ3ZCLFVBQUssR0FBWSxJQUFJLENBQUM7b0JBQ3RCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBRWhCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzFCLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzlCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO29CQUN6QixlQUFVLEdBQWUsRUFBQyxVQUFVLEVBQUUs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LENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0MsQ0FBQztnQkFDTCxDQUFDO2dCQWpXRDtvQkFBQyxnQkFBUyxDQUFDLFVBQVUsQ0FBQzs7bUVBQUE7Z0JBQ3RCO29CQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDOztzRUFBQTtnQkFwQzdCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw0QkFBWSxFQUFFLGtDQUFlLEVBQUUsaUNBQWMsRUFBRSx5Q0FBa0IsQ0FBQzt3QkFDM0YsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQzt3QkFDckcsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsNENBQXlCLEVBQUUsdURBQXlCOzRCQUNqRixnQ0FBZ0IsRUFBRSw4QkFBaUIsRUFBRSx3QkFBZSxFQUFFLHVCQUFlLEVBQUUsaUNBQWlCLENBQUM7d0JBQzdGLGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3FCQUNwRCxDQUFDOztxQ0FBQTtnQkEyWEYsd0JBQUM7WUFBRCxDQTFYQSxBQTBYQyxJQUFBO1lBMVhELGlEQTBYQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9iaWxscy91c2VyLmJpbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlcG9ydERvd25sb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVwb3J0L2Rvd25sb2FkL3JlcG9ydC5kb3dubG9hZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCU19WSUVXX1BST1ZJREVSUywgTU9EQUxfRElSRUNUSVZFUywgQlVUVE9OX0RJUkVDVElWRVMsIE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZUNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCaWxsU2VydmljZSB9IGZyb20gXCIuL2JpbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50LCBUb2FzdGVyU2VydmljZX0gZnJvbSBcImFuZ3VsYXIyLXRvYXN0ZXIvYW5ndWxhcjItdG9hc3RlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgb25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZyxcclxuICAgIG9uRXJyb3JSZXNvdXJjZU5vdEZvdW5kVG9hc3RNc2dcclxufSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2Vycm9yL2Vycm9yLmhhbmRsZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBhZ2VQYXJhbXMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zZWFyY2gubW9kZWxcIjtcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNFTEVDVF9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nMi1zZWxlY3RcIjtcclxuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2hvdXNlL2hvdXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSG91c2VQYWdlT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2hvdXNlL2hvdXNlLnBhZ2Uub2JqZWN0XCI7XHJcbmltcG9ydCB7IElBcGFydG1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9hcGFydG1lbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyU2VydmljZSB9IGZyb20gXCIuLi9wcm92aWRlci9zZXJ2aWNlL3Byb3ZpZGVyLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQmlsbERUTyB9IGZyb20gXCIuL3Nob3dfYmlsbF9kdG8uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJpbGxDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0L2JpbGwuY2hhcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2JpbGwtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL2JpbGxzL2JpbGwuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtCaWxsU2VydmljZSwgSG91c2VTZXJ2aWNlLCBQcm92aWRlclNlcnZpY2UsIFRvYXN0ZXJTZXJ2aWNlLCBDdXJyZW50VXNlclNlcnZpY2VdLFxyXG4gICAgaW5wdXRzOiBbJ29zYmJSb2xlJywgJ2lzVXNlckRvd25sb2FkJ10sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC91c2VyL2JpbGxzL2JpbGwuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2xvYWRlci5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtCaWxsQ2hhcnRDb21wb25lbnQsIFRvYXN0ZXJDb250YWluZXJDb21wb25lbnQsIFJlcG9ydERvd25sb2FkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTU9EQUxfRElSRUNUSVZFUywgU0VMRUNUX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBCVVRUT05fRElSRUNUSVZFU10sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckJpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBiaWxsczogQmlsbERUT1tdID0gW107XHJcbiAgICBwcml2YXRlIGJpbGxDYWxjVmFsOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBuZXdCaWxsOiBCaWxsRFRPID0ge1xyXG4gICAgICAgIGJpbGxJZDogbnVsbCwgZGF0ZTogbnVsbCwgdGFyaWZmOiAwLCB0b1BheTogMCwgcGFpZDogMCwgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGFwYXJ0bWVudE51bWJlcjogbnVsbCwgYXBhcnRtZW50SWQ6IG51bGwsIHByb3ZpZGVySWQ6IG51bGwsIHN0YXR1czogbnVsbFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcGFnZUNyZWF0b3I6IFBhZ2VDcmVhdG9yPEJpbGxEVE8+O1xyXG4gICAgcHJpdmF0ZSBwYWdlTnVtYmVyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBwYWdlTGlzdDogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIG9yZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBiaWxsSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb25TZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcm93czogbnVtYmVyW10gPSBbMTAsIDIwLCA1MF07XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkUm93OiBudW1iZXIgPSAxMDtcclxuICAgIHByaXZhdGUgcGFnZVBhcmFtczogUGFnZVBhcmFtcyA9IHtwYWdlTnVtYmVyOiAxLCBzb3J0ZWRCeTogJ2RhdGUnLCBvcmRlclR5cGU6IGZhbHNlLCByb3dOdW06IDEwfTtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXI7XHJcbiAgICBwcml2YXRlIGlzVXNlckRvd25sb2FkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9zYmJSb2xlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9wdGlvbnMgPSB7QUxMOiAnQUxMJywgUEFJRDogJ1BBSUQnLCBOT1RfUEFJRDogJ05PVF9QQUlEJ307XHJcbiAgICBwcml2YXRlIHN0YXR1czogc3RyaW5nID0gdGhpcy5vcHRpb25zLkFMTDtcclxuICAgIEBWaWV3Q2hpbGQoJ2RlbE1vZGFsJykgcHJpdmF0ZSBkZWxNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdjcmVhdGVNb2RhbCcpIHByaXZhdGUgY3JlYXRlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkSG91c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZEFwYXJ0bWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkUHJvdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaG91c2VMaXN0OiBIb3VzZVBhZ2VPYmplY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhcGFydG1lbnRMaXN0OiBJQXBhcnRtZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgcHJvdmlkZXJMaXN0OiBQcm92aWRlcltdID0gW107XHJcbiAgICBwcml2YXRlIGhvdXNlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhcGFydG1lbnQ6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgcHJvdmlkZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9iaWxsU2VydmljZTogQmlsbFNlcnZpY2UsIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2hvdXNlU2VydmljZTogSG91c2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcHJvdmlkZXJTZXJ2aWNlOiBQcm92aWRlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSGVhZGVyQ29tcG9uZW50LmN1cnJlbnRVc2VyU2VydmljZS5jdXJyZW50VXNlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSgnbG9hZGluZy4uJyArIHRoaXMuY3VycmVudFVzZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0QWxsSG91c2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5saXN0QWxsSG91c2VzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlcyA9IHRoaXMuZmlsbEhvdXNlcygpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEFsbFByb3ZpZGVycygpIHtcclxuICAgICAgICB0aGlzLl9wcm92aWRlclNlcnZpY2UuZ2V0QWxsUHJvdmlkZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyID0gdGhpcy5maWxsUHJvdmlkZXJzKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcik9PnRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm9zYmJSb2xlICE9ICdIRUFEJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzVXNlckRvd25sb2FkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdXNlcjogJywgdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5nZXRCaWxsc0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRSb3csIHRoaXMuc3RhdHVzKTtcclxuICAgICAgICB0aGlzLmxpc3RBbGxIb3VzZXMoKTtcclxuICAgICAgICB0aGlzLmxpc3RBbGxQcm92aWRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUhvdXNlcygpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5ob3VzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG91c2VzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUFwYXJ0bWVudHMoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBhcnRtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwYXJ0bWVudC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEFwYXJ0bWVudCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYXBhcnRtZW50T2JqZWN0IG9mIHRoaXMuYXBhcnRtZW50TGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goJ+KEliAnICsgYXBhcnRtZW50T2JqZWN0Lm51bWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxIb3VzZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGhvdXNlUGFnZU9iamVjdCBvZiB0aGlzLmhvdXNlTGlzdCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyLnB1c2goaG91c2VQYWdlT2JqZWN0LnN0cmVldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxQcm92aWRlcnMoKSB7XHJcbiAgICAgICAgbGV0IHRlbXA6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvdmlkZXJPYmplY3Qgb2YgdGhpcy5wcm92aWRlckxpc3QpIHtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKHByb3ZpZGVyT2JqZWN0Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoaW5nLi4uJyk7XHJcbiAgICAgICAgdGhpcy5nZXRCaWxsc0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVBhcmFtcy5yb3dOdW0sIHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbE1vZGFsT3BlbihiaWxsSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuaW5nIGRlbCBtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMuYmlsbElkID0gK2JpbGxJZDtcclxuICAgICAgICB0aGlzLmRlbE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURlbE1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGluZyBiaWxsIHdpdGggaWQnLCB0aGlzLmJpbGxJZCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy5fYmlsbFNlcnZpY2UuZGVsZXRlQnlJZCh0aGlzLmJpbGxJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpPT4gdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuQ3JlYXRlQmlsbE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbENyZWF0ZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZU5ld0JpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkRmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxDcmVhdGVNb2RhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgYmlsbCA6JywgSlNPTi5zdHJpbmdpZnkodGhpcy5uZXdCaWxsKSk7XHJcbiAgICAgICAgdGhpcy5fYmlsbFNlcnZpY2Uuc2F2ZSh0aGlzLm5ld0JpbGwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKT0+IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0ZWRGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkQXBhcnRtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkSG91c2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRQcm92aWRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTm90TnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJpbGxzQnlQYWdlTnVtKHBhZ2VOdW1iZXI6IG51bWJlciwgc2VsZWN0ZWRSb3c6IG51bWJlciwgc3RhdHVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcclxuICAgICAgICB0aGlzLnBhZ2VQYXJhbXMucm93TnVtID0gc2VsZWN0ZWRSb3c7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5fYmlsbFNlcnZpY2UuZ2V0QWxsQnlSb2xlKHRoaXMub3NiYlJvbGUsIHRoaXMuY3VycmVudFVzZXIudXNlcklkLCB0aGlzLnBhZ2VQYXJhbXMsIHRoaXMuc3RhdHVzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmlsbERUT0RhdGEoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NCaWxsRFRPRGF0YShkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2Nlc3NpbmcgYmlsbCBkYXRhLi4uJyk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5iaWxscyA9IGRhdGEucm93cztcclxuICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCB8fCBlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyIGVycm9yIDQwMCcsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKG9uRXJyb3JSZXNvdXJjZU5vdEZvdW5kVG9hc3RNc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZlciBlcnJvciA1MDAnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcChvbkVycm9yU2VydmVyTm9SZXNwb25zZVRvYXN0TXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUGFpZChzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT0gJ1BBSUQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNEYXRlVmFsaWQoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIC9cXGR7NH0tXFxkezJ9LVxcZHsyfS8udGVzdChkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSb3dOdW0ocm93OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdldEJpbGxzQnlQYWdlTnVtKHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyLCByb3csIHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUGFyYW1zLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlciAtIDE7XHJcbiAgICAgICAgdGhpcy5nZXRCaWxsc0J5UGFnZU51bSh0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlciwgdGhpcy5wYWdlUGFyYW1zLnJvd051bSwgdGhpcy5zdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlUGFyYW1zLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0QmlsbHNCeVBhZ2VOdW0odGhpcy5wYWdlUGFyYW1zLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVBhcmFtcy5yb3dOdW0sIHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUFycmF5KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBhZ2VMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlUGFnZUxpc3Qoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVtcHR5QXJyYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0QnkobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NvcnRlZCBieSAnLCBuYW1lKTtcclxuICAgICAgICB0aGlzLnBhZ2VQYXJhbXMub3JkZXJUeXBlID0gIXRoaXMucGFnZVBhcmFtcy5vcmRlclR5cGU7XHJcbiAgICAgICAgdGhpcy5wYWdlUGFyYW1zLnNvcnRlZEJ5ID0gbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JkZXIgYnkgYXNjJywgdGhpcy5wYWdlUGFyYW1zLm9yZGVyVHlwZSk7XHJcbiAgICAgICAgdGhpcy5fYmlsbFNlcnZpY2UuZ2V0QWxsQnlSb2xlKHRoaXMub3NiYlJvbGUsIHRoaXMuY3VycmVudFVzZXIudXNlcklkLCB0aGlzLnBhZ2VQYXJhbXMsIHRoaXMuc3RhdHVzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmlsbERUT0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybUJpbGwoYmlsbDogQmlsbERUTykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtaW5nIGJpbGwnLCBiaWxsLmJpbGxJZCk7XHJcbiAgICAgICAgYmlsbC5wYWlkID0gYmlsbC50b1BheTtcclxuICAgICAgICBiaWxsLnN0YXR1cyA9IHRoaXMub3B0aW9ucy5QQUlEO1xyXG4gICAgICAgIHRoaXMuX2JpbGxTZXJ2aWNlLnNhdmUoYmlsbCkuc3Vic2NyaWJlKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTZWFyY2hCeVBhcmFtKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoIGJ5ICcsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc09wdGlvbihzdGF0dXM6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMuZ2V0QmlsbHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUm93LCB0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaEhvdXNlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBob3VzZTogJywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZEhvdXNlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRIb3VzZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkSG91c2UgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgaG91c2U6ICcsIHZhbHVlKTtcclxuICAgICAgICBsZXQgaG91c2VJZCA9IHRoaXMuc2VsZWN0SG91c2VJZEJ5SG91c2VWYWx1ZSh2YWx1ZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgaG91c2UgaWQ6ICcsIGhvdXNlSWQpO1xyXG4gICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5nZXRBbGxBcGFydG1lbnRzQnlIb3VzZUlkKGhvdXNlSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGFydG1lbnRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBhcnRtZW50ID0gdGhpcy5maWxsQXBhcnRtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxsIGFwYXJ0bWVudCBudW1iZXJzJywgdGhpcy5hcGFydG1lbnQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hBcGFydG1lbnQodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIGFsbCBhcGFydG1lbnQgbnVtYmVycycsIHRoaXMuYXBhcnRtZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBhcGFydG1lbnQ6ICcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRBcGFydG1lbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZEFwYXJ0bWVudCh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkQXBhcnRtZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgYXBhcnRtZW50OiAnLCB2YWx1ZS50ZXh0LnN1YnN0cmluZygyKSk7XHJcbiAgICAgICAgbGV0IGFwYXJ0bWVudE51bWJlciA9IHBhcnNlSW50KHZhbHVlLnRleHQuc3Vic3RyaW5nKDIpKTtcclxuICAgICAgICB0aGlzLm5ld0JpbGwuYXBhcnRtZW50TnVtYmVyID0gYXBhcnRtZW50TnVtYmVyO1xyXG4gICAgICAgIGxldCBhcGFydG1lbnRJZCA9IHRoaXMuc2VsZWN0QXBhcnRtZW50SWRCeUFwYXJ0bWVudE51bWJlcihhcGFydG1lbnROdW1iZXIpO1xyXG4gICAgICAgIHRoaXMubmV3QmlsbC5hcGFydG1lbnRJZCA9IGFwYXJ0bWVudElkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdiaWxsIHVwZGF0ZWQgd2l0aCBhcGFydG1lbnQgaWQ6ICcsIHRoaXMubmV3QmlsbC5hcGFydG1lbnRJZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0QXBhcnRtZW50SWRCeUFwYXJ0bWVudE51bWJlcihhcGFydG1lbnROdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGFwYXJ0bWVudElkID0gMDtcclxuICAgICAgICBmb3IgKGxldCBhcGFydG1lbnQgb2YgdGhpcy5hcGFydG1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChhcGFydG1lbnROdW1iZXIgPT09IGFwYXJ0bWVudC5udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGFwYXJ0bWVudElkID0gYXBhcnRtZW50LmFwYXJ0bWVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcGFydG1lbnRJZDtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUHJvdmlkZXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIHByb3ZpZGVyOiAnLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkUHJvdmlkZXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZFByb3ZpZGVyKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRQcm92aWRlciA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCBwcm92aWRlcjogJywgdmFsdWUudGV4dCk7XHJcbiAgICAgICAgbGV0IHByb3ZpZGVySWQgPSB0aGlzLnNlbGVjdFByb3ZpZGVySWRCeVByb3ZpZGVyTmFtZSh2YWx1ZS50ZXh0KTtcclxuICAgICAgICB0aGlzLm5ld0JpbGwucHJvdmlkZXJJZCA9IHByb3ZpZGVySWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2JpbGwgdXBkYXRlZCB3aXRoIHByb3ZpZGVyIGlkOiAnLCB0aGlzLm5ld0JpbGwucHJvdmlkZXJJZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0UHJvdmlkZXJJZEJ5UHJvdmlkZXJOYW1lKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBwcm92aWRlcklkID0gMDtcclxuICAgICAgICBmb3IgKGxldCBwcm92aWRlciBvZiB0aGlzLnByb3ZpZGVyTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubWF0Y2gocHJvdmlkZXIubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVySWQgPSBwcm92aWRlci5wcm92aWRlcklkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0SG91c2VJZEJ5SG91c2VWYWx1ZSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaG91c2VJZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaG91c2VPYmplY3Qgb2YgdGhpcy5ob3VzZUxpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLm1hdGNoKGhvdXNlT2JqZWN0LnN0cmVldCkpIHtcclxuICAgICAgICAgICAgICAgIGhvdXNlSWQgPSBob3VzZU9iamVjdC5ob3VzZUlkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvdXNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkSG91c2UgJiYgdGhpcy5pc1NlbGVjdGVkQXBhcnRtZW50ICYmIHRoaXMuaXNTZWxlY3RlZFByb3ZpZGVyXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1RvUGF5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FsYycsIHZhbHVlKTtcclxuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KCcnICsgdGhpcy5iaWxsQ2FsY1ZhbCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3QmlsbC50b1BheSA9IHRoaXMuYmlsbENhbGNWYWwgKiB0aGlzLm5ld0JpbGwudGFyaWZmO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0JpbGwudG9QYXkgPSBwYXJzZUZsb2F0KE1hdGgucm91bmQodGhpcy5uZXdCaWxsLnRvUGF5ICogMTAwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b1BheTogJywgdGhpcy5uZXdCaWxsLnRvUGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
