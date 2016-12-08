System.register(["@angular/core", "./house.service", "@angular/router", "ng2-translate", "../../shared/pipes/capitalize-first-letter", "angular2-toaster/angular2-toaster", "../../shared/error/error.handler.component", "ng2-bootstrap", "@angular/forms", "@angular/common", '../../shared/services/regex.all.text'], function(exports_1, context_1) {
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
    var core_1, house_service_1, router_1, ng2_translate_1, capitalize_first_letter_1, angular2_toaster_1, error_handler_component_1, ng2_bootstrap_1, forms_1, common_1, Regex;
    var HouseTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (house_service_1_1) {
                house_service_1 = house_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (error_handler_component_1_1) {
                error_handler_component_1 = error_handler_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Regex_1) {
                Regex = Regex_1;
            }],
        execute: function() {
            HouseTableComponent = (function () {
                function HouseTableComponent(_houseService, _router, _toasterService, _routeParams) {
                    this._houseService = _houseService;
                    this._router = _router;
                    this._toasterService = _toasterService;
                    this._routeParams = _routeParams;
                    this.houses = [];
                    this.pageParams = { pageNumber: 1, sortedBy: null, orderType: false, rowNum: 10 };
                    this.pageList = [];
                    this.pending = false;
                    this.rows = [10, 20, 50];
                    this.onSearch = false;
                    this.admin = false;
                    this.manager = false;
                    this.selectedHouse = {
                        houseId: null, city: '', street: '', zipCode: '', description: '',
                        osbbName: '', apartmentCount: null, numberOfInhabitants: null
                    };
                    this.active = false;
                }
                HouseTableComponent.prototype.ngOnInit = function () {
                    this.initHousesArr();
                };
                HouseTableComponent.prototype.refresh = function () {
                    this.initHousesArr();
                };
                HouseTableComponent.prototype.openDelModal = function (houseId) {
                    this.houseId = houseId;
                    this.delModal.show();
                };
                HouseTableComponent.prototype.initHousesArr = function () {
                    if (this.admin) {
                        this.findAllHousesByPage();
                    }
                    else {
                        this.findAllHousesByOsbb();
                    }
                };
                HouseTableComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    console.log("delete: " + this.houseId);
                    this._houseService.deleteHouseById(this.houseId)
                        .subscribe(function () {
                        console.log("refreshing...");
                        _this.refresh();
                        _this.delModal.hide();
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                HouseTableComponent.prototype.showAddHouseModal = function () {
                    console.log('opening addModal');
                    this.active = true;
                    this.addModal.show();
                };
                HouseTableComponent.prototype.cancelAddModal = function () {
                    var _this = this;
                    this.active = false;
                    this.addModal.hide();
                    setTimeout(function () {
                        _this.active = true;
                    }, 0);
                };
                HouseTableComponent.prototype.onAddHouseSubmit = function () {
                    var _this = this;
                    this.cancelAddModal();
                    console.log('saving ', JSON.stringify(this.selectedHouse));
                    this._houseService.saveHouse(this.selectedHouse)
                        .subscribe(function () {
                        console.log("refreshing...");
                        _this.refresh();
                    }, function (error) { return _this.handleErrors(error); });
                };
                HouseTableComponent.prototype.matches = function (value) {
                    /* text matching cyrillic alphabet also */
                    if (Regex.TEXT.test(value)) {
                        return true;
                    }
                    return false;
                };
                HouseTableComponent.prototype.selectByPageNumber = function (num) {
                    this.pageParams.pageNumber = +num;
                    this.findAllHousesByPage();
                };
                HouseTableComponent.prototype.findAllHousesByPage = function () {
                    var _this = this;
                    this.emptyPageList();
                    this.pending = true;
                    this._houseService.admin_getAllHouses(this.pageParams)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.houses = data.rows;
                        _this.totalPages = data.totalPages;
                        _this.fillPageList(+data.beginPage, +data.endPage);
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                HouseTableComponent.prototype.findAllHousesByOsbb = function () {
                    var _this = this;
                    console.log("find All houses by osbb: " + this.osbbId);
                    this.emptyPageList();
                    this.pending = true;
                    this._houseService.currentUser_getAllHousesByOsbb(this.pageParams, this.osbbId)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.houses = data.rows;
                        _this.totalPages = data.totalPages;
                        _this.fillPageList(+data.beginPage, +data.endPage);
                    }, function (error) {
                        _this.handleErrors(error);
                    });
                };
                HouseTableComponent.prototype.fillPageList = function (beginIndex, endIndex) {
                    for (var pageNum = beginIndex; pageNum <= endIndex; pageNum++) {
                        this.pageList.push(pageNum);
                    }
                };
                HouseTableComponent.prototype.emptyPageList = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                HouseTableComponent.prototype.prevPage = function () {
                    this.pageParams.pageNumber -= 1;
                    console.log("load by page :", this.pageParams.pageNumber);
                    this.findAllHousesByPage();
                };
                HouseTableComponent.prototype.nextPage = function () {
                    this.pageParams.pageNumber += 1;
                    console.log("load by page :", this.pageParams.pageNumber);
                    this.findAllHousesByPage();
                };
                HouseTableComponent.prototype.selectRowNum = function (row) {
                    console.log('load by row number', row);
                    this.pageParams.rowNum = +row;
                    this.findAllHousesByPage();
                };
                HouseTableComponent.prototype.onClickSearchByParam = function (value) {
                    var _this = this;
                    if (value.trim().length && Regex.TEXT.test(value)) {
                        this.emptyPageList();
                        this.pending = true;
                        console.log('search by ', value);
                        this._houseService.searchByInputParam(value)
                            .subscribe(function (data) {
                            _this.pending = false;
                            _this.onSearch = true;
                            _this.houses = data;
                            _this.fillPageList(_this.pageParams.pageNumber, _this.pageParams.pageNumber);
                        }, function (error) {
                            _this.handleErrors(error);
                        });
                    }
                };
                HouseTableComponent.prototype.handleErrors = function (error) {
                    if (error.status === 404 || error.status === 400) {
                        console.log('server error 400');
                        this._toasterService.pop(error_handler_component_1.onErrorResourceNotFoundToastMsg);
                        return;
                    }
                    if (error.status === 500) {
                        console.log('server error 500');
                        this._toasterService.pop(error_handler_component_1.onErrorServerNoResponseToastMsg);
                        return;
                    }
                };
                HouseTableComponent.prototype.onNavigate = function (id) {
                    console.log('navigating to house with id ', id);
                    if (this.admin) {
                        this._router.navigate(['admin/house', id]);
                        return;
                    }
                    this._router.navigate(['home/house', id]);
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], HouseTableComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('addModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], HouseTableComponent.prototype, "addModal", void 0);
                HouseTableComponent = __decorate([
                    core_1.Component({
                        selector: 'house-table',
                        templateUrl: 'src/app/house/house_table.html',
                        providers: [house_service_1.HouseService, angular2_toaster_1.ToasterService],
                        directives: [angular2_toaster_1.ToasterContainerComponent, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/house/house.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        inputs: ['admin', 'manager']
                    }), 
                    __metadata('design:paramtypes', [house_service_1.HouseService, router_1.Router, angular2_toaster_1.ToasterService, router_1.ActivatedRoute])
                ], HouseTableComponent);
                return HouseTableComponent;
            }());
            exports_1("HouseTableComponent", HouseTableComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob3VzZS9ob3VzZS50YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBc0JJLDZCQUFvQixhQUEyQixFQUMzQixPQUFlLEVBQ2YsZUFBK0IsRUFDL0IsWUFBNEI7b0JBSDVCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsaUJBQVksR0FBWixZQUFZLENBQWdCO29CQXJCeEMsV0FBTSxHQUFzQixFQUFFLENBQUM7b0JBRS9CLGVBQVUsR0FBZSxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFFdkYsYUFBUSxHQUFrQixFQUFFLENBQUM7b0JBQzdCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzlCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzFCLFVBQUssR0FBWSxLQUFLLENBQUM7b0JBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGtCQUFhLEdBQW9CO3dCQUNyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFO3dCQUNqRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsSUFBSTtxQkFDaEUsQ0FBQztvQkFDTSxXQUFNLEdBQVksS0FBSyxDQUFDO2dCQVFoQyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxD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LENBQUMsNEJBQVksRUFBRSxpQ0FBYyxDQUFDO3dCQUN6QyxVQUFVLEVBQUUsQ0FBQyw0Q0FBeUIsRUFBRSxnQ0FBZ0IsRUFBRSx3QkFBZSxFQUFFLHVCQUFlLENBQUM7d0JBQzNGLGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQzt3QkFDakcsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztxQkFDL0IsQ0FBQzs7dUNBQUE7Z0JBNk1GLDBCQUFDO1lBQUQsQ0E1TUEsQUE0TUMsSUFBQTtZQTVNRCxxREE0TUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL2hvdXNlLnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIb3VzZVBhZ2VPYmplY3QgfSBmcm9tIFwiLi9ob3VzZS5wYWdlLm9iamVjdFwiO1xyXG5pbXBvcnQgeyBIb3VzZVNlcnZpY2UgfSBmcm9tIFwiLi9ob3VzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50LCBUb2FzdGVyU2VydmljZSB9IGZyb20gXCJhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIG9uRXJyb3JSZXNvdXJjZU5vdEZvdW5kVG9hc3RNc2csXHJcbiAgICBvbkVycm9yU2VydmVyTm9SZXNwb25zZVRvYXN0TXNnXHJcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lcnJvci9lcnJvci5oYW5kbGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUywgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBQYWdlUGFyYW1zIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvc2VhcmNoLm1vZGVsXCI7XHJcbmltcG9ydCBSZWdleCA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9yZWdleC5hbGwudGV4dCcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvdXNlLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9ob3VzZS9ob3VzZV90YWJsZS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0hvdXNlU2VydmljZSwgVG9hc3RlclNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1RvYXN0ZXJDb250YWluZXJDb21wb25lbnQsIE1PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC9ob3VzZS9ob3VzZS5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvbG9hZGVyLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9nZW5lcmFsLmNzcyddLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIGlucHV0czogWydhZG1pbicsICdtYW5hZ2VyJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdXNlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIG9zYmJJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBob3VzZXM6IEhvdXNlUGFnZU9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGhvdXNlSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcGFnZVBhcmFtczogUGFnZVBhcmFtcyA9IHtwYWdlTnVtYmVyOiAxLCBzb3J0ZWRCeTogbnVsbCwgb3JkZXJUeXBlOiBmYWxzZSwgcm93TnVtOiAxMH07XHJcbiAgICBwcml2YXRlIHRvdGFsUGFnZXM6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgcGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByb3dzOiBudW1iZXJbXSA9IFsxMCwgMjAsIDUwXTtcclxuICAgIHByaXZhdGUgb25TZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYWRtaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEhvdXNlOiBIb3VzZVBhZ2VPYmplY3QgPSB7XHJcbiAgICAgICAgaG91c2VJZDogbnVsbCwgY2l0eTogJycsIHN0cmVldDogJycsIHppcENvZGU6ICcnLCBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgb3NiYk5hbWU6ICcnLCBhcGFydG1lbnRDb3VudDogbnVsbCwgbnVtYmVyT2ZJbmhhYml0YW50czogbnVsbFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdkZWxNb2RhbCcpIHByaXZhdGUgZGVsTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgnYWRkTW9kYWwnKSBwcml2YXRlIGFkZE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3VzZVNlcnZpY2U6IEhvdXNlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLmluaXRIb3VzZXNBcnIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEhvdXNlc0FycigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZWxNb2RhbChob3VzZUlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhvdXNlSWQgPSBob3VzZUlkO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRIb3VzZXNBcnIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRtaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kQWxsSG91c2VzQnlQYWdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kQWxsSG91c2VzQnlPc2JiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGVsTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGU6IFwiICsgdGhpcy5ob3VzZUlkKTtcclxuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuZGVsZXRlSG91c2VCeUlkKHRoaXMuaG91c2VJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWZyZXNoaW5nLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FkZEhvdXNlTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29wZW5pbmcgYWRkTW9kYWwnKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZE1vZGFsLmhpZGUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkSG91c2VTdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxBZGRNb2RhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZEhvdXNlKSk7XHJcbiAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLnNhdmVIb3VzZSh0aGlzLnNlbGVjdGVkSG91c2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWZyZXNoaW5nLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcik9PiB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcikpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoZXModmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8qIHRleHQgbWF0Y2hpbmcgY3lyaWxsaWMgYWxwaGFiZXQgYWxzbyAqL1xyXG4gICAgICAgIGlmIChSZWdleC5URVhULnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0QnlQYWdlTnVtYmVyKG51bSkge1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyID0gK251bTtcclxuICAgICAgICB0aGlzLmZpbmRBbGxIb3VzZXNCeVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRBbGxIb3VzZXNCeVBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbXB0eVBhZ2VMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuYWRtaW5fZ2V0QWxsSG91c2VzKHRoaXMucGFnZVBhcmFtcylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZXMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2VMaXN0KCtkYXRhLmJlZ2luUGFnZSwgK2RhdGEuZW5kUGFnZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbGxIb3VzZXNCeU9zYmIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5kIEFsbCBob3VzZXMgYnkgb3NiYjogXCIgKyB0aGlzLm9zYmJJZCk7XHJcbiAgICAgICAgdGhpcy5lbXB0eVBhZ2VMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuY3VycmVudFVzZXJfZ2V0QWxsSG91c2VzQnlPc2JiKHRoaXMucGFnZVBhcmFtcywgdGhpcy5vc2JiSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VzID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9IGRhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxQYWdlTGlzdCgrZGF0YS5iZWdpblBhZ2UsICtkYXRhLmVuZFBhZ2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsUGFnZUxpc3QoYmVnaW5JbmRleCwgZW5kSW5kZXgpIHtcclxuICAgICAgICBmb3IgKGxldCBwYWdlTnVtID0gYmVnaW5JbmRleDsgcGFnZU51bSA8PSBlbmRJbmRleDsgcGFnZU51bSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucHVzaChwYWdlTnVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlQYWdlTGlzdCgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUGFyYW1zLnBhZ2VOdW1iZXIgLT0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgYnkgcGFnZSA6XCIsIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLmZpbmRBbGxIb3VzZXNCeVBhZ2UoKVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIGJ5IHBhZ2UgOlwiLCB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5maW5kQWxsSG91c2VzQnlQYWdlKClcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSb3dOdW0ocm93OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZCBieSByb3cgbnVtYmVyJywgcm93KTtcclxuICAgICAgICB0aGlzLnBhZ2VQYXJhbXMucm93TnVtID0gK3JvdztcclxuICAgICAgICB0aGlzLmZpbmRBbGxIb3VzZXNCeVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU2VhcmNoQnlQYXJhbSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggJiYgUmVnZXguVEVYVC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtcHR5UGFnZUxpc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaCBieSAnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5zZWFyY2hCeUlucHV0UGFyYW0odmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2VMaXN0KHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQgfHwgZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZlciBlcnJvciA0MDAnKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKG9uRXJyb3JSZXNvdXJjZU5vdEZvdW5kVG9hc3RNc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZlciBlcnJvciA1MDAnKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKG9uRXJyb3JTZXJ2ZXJOb1Jlc3BvbnNlVG9hc3RNc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2aWdhdGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW5nIHRvIGhvdXNlIHdpdGggaWQgJywgaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkbWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL2hvdXNlJywgaWRdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydob21lL2hvdXNlJywgaWRdKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
