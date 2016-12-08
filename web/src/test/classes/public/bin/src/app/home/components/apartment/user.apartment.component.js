System.register(['@angular/core', "@angular/router", './apartment.service', "rxjs/add/operator/toPromise", "ng2-bootstrap/ng2-bootstrap", "ng2-translate/ng2-translate", '@angular/common', "../../../header/header.component", "../../../../shared/services/current.user.service"], function(exports_1, context_1) {
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
    var core_1, router_1, apartment_service_1, ng2_bootstrap_1, ng2_translate_1, common_1, header_component_1, current_user_service_1;
    var UserApartmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (apartment_service_1_1) {
                apartment_service_1 = apartment_service_1_1;
            },
            function (_1) {},
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            UserApartmentComponent = (function () {
                function UserApartmentComponent(apartmentService, currentUserService) {
                    this.apartmentService = apartmentService;
                    this.currentUserService = currentUserService;
                    this.role = "ROLE_USER";
                    this.selectedApartment = { apartmentId: 0, square: 0, number: 0, house: { street: '' } };
                    this.emptyApartment = { square: 0, number: 0, house: { street: '' } };
                    this.active = true;
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.order = true;
                    this.defaultSorter = 'number';
                    this.allHouses = [];
                    this.houseToAdd = { street: '' };
                    this.isNumberValid = false;
                    this.Items = [];
                }
                UserApartmentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this.currentUserService.getUser();
                    this.currentOsbbId = this.currentUser.osbbId;
                    this.role = this.currentUserService.getRole();
                    this.getApartmentsByPageNum(this.pageNumber);
                    this.apartmentService.getAllHouses(this.currentOsbbId).subscribe(function (res) {
                        _this.allHouses = res;
                    });
                };
                UserApartmentComponent.prototype.onDeleteClick = function () {
                    var _this = this;
                    this.Items.splice(this.Items.indexOf(this.apartmentToDelete, 0), 1);
                    this.apartmentService.deleteApartment(this.apartmentToDelete)
                        .subscribe(function (res) { return _this.apartmentToDelete = res; });
                    // .subscribe(res=>this.Items.splice(this.Items.indexOf(res, 0), 1));
                    // this.getApartmentsByPageNum(this.pageNumber);
                    this.active = false;
                    this.deleteModal.hide();
                };
                UserApartmentComponent.prototype.openDeleteModal = function (am) {
                    this.active = true;
                    this.apartmentToDelete = am;
                    this.deleteModal.show();
                };
                UserApartmentComponent.prototype.openEditModal = function (am) {
                    this.selectedApartment = am;
                    this.editModal.show();
                };
                UserApartmentComponent.prototype.onEditApartmentSubmit = function () {
                    var _this = this;
                    this.apartmentService.editAndSave(this.selectedApartment).subscribe(function (res) {
                    });
                    this.active = false;
                    this.editModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                UserApartmentComponent.prototype.onAddApartmentSubmit = function () {
                    if (!this.isNumberValid) {
                        alert("Apartment is busy");
                    }
                    else {
                        this.addModal.hide();
                        this.apartmentService.addApartment(this.emptyApartment, this.houseToAdd.houseId)
                            .subscribe();
                        this.emptyApartment = { number: '', square: '' };
                    }
                };
                UserApartmentComponent.prototype.openAddModal = function () {
                    this.addModal.show();
                };
                UserApartmentComponent.prototype.chooseHouse = function (house, number) {
                    this.houseToAdd = house;
                };
                UserApartmentComponent.prototype.isApartmentNumberValid = function (value) {
                    var _this = this;
                    console.log("value from input" + value);
                    if (value >= 1) {
                        this.apartmentService.isApartmentExist(value, this.houseToAdd.houseId).subscribe(function (res) {
                            _this.isNumberValid = res;
                            console.log("house id is:  " + _this.houseToAdd.houseId + "  valid is : " + _this.isNumberValid);
                        });
                    }
                    else
                        this.isNumberValid = false;
                };
                UserApartmentComponent.prototype.sortBy = function (value) {
                    var _this = this;
                    console.log('sorted by ', value);
                    this.order = !this.order;
                    this.defaultSorter = value;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this.apartmentService.getSortedApartments(this.pageNumber, value, this.order, this.currentOsbbId)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.Items = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                UserApartmentComponent.prototype.getApartmentsByPageNum = function (pageNumber) {
                    var _this = this;
                    console.log("getApartmentssByPageNum" + pageNumber);
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this.apartmentService.getSortedApartments(this.pageNumber, this.defaultSorter, this.order, this.currentOsbbId, this.role)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.Items = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ;
                UserApartmentComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getApartmentsByPageNum(this.pageNumber);
                };
                UserApartmentComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getApartmentsByPageNum(this.pageNumber);
                };
                UserApartmentComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                UserApartmentComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                UserApartmentComponent.prototype.getApartmentsByPageNumWithNumber = function (pageNumber, numberOfApartment) {
                    var _this = this;
                    console.log("getApartmentssByPageNum" + pageNumber + "with apartment number =" + numberOfApartment);
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this.apartmentService.getSortedApartmentsWithNumber(this.pageNumber, this.defaultSorter, this.order, numberOfApartment, this.currentOsbbId, this.role)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.Items = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        // console.log("ITEM 0 =   "+Items[0]);
                    }, function (err) {
                        console.error(err);
                    });
                };
                ;
                UserApartmentComponent.prototype.searchByNumber = function (searchTerm) {
                    this.getApartmentsByPageNumWithNumber(this.pageNumber, searchTerm);
                    console.log("search" + searchTerm);
                };
                UserApartmentComponent.prototype.clearSearchBox = function (searchterm) {
                    if (searchterm.value === '')
                        this.getApartmentsByPageNum(this.pageNumber);
                };
                __decorate([
                    core_1.ViewChild('deleteModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserApartmentComponent.prototype, "deleteModal", void 0);
                __decorate([
                    core_1.ViewChild('addModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserApartmentComponent.prototype, "addModal", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserApartmentComponent.prototype, "editModal", void 0);
                UserApartmentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-user-apartment',
                        templateUrl: 'src/app/home/components/apartment/apartment.html',
                        providers: [apartment_service_1.ApartmentService],
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        styleUrls: ['src/app/home/components/apartment/styles.css'],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [apartment_service_1.ApartmentService, current_user_service_1.CurrentUserService])
                ], UserApartmentComponent);
                return UserApartmentComponent;
            }());
            exports_1("UserApartmentComponent", UserApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NvbXBvbmVudHMvYXBhcnRtZW50L3VzZXIuYXBhcnRtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBMEJJLGdDQUFvQixnQkFBaUMsRUFBVSxrQkFBcUM7b0JBQWhGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkF6QnBHLFNBQUksR0FBVSxXQUFXLENBQUM7b0JBRWxCLHNCQUFpQixHQUFhLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUM7b0JBQzFGLG1CQUFjLEdBQWEsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUM7b0JBTy9FLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBRWQsZUFBVSxHQUFVLENBQUMsQ0FBQztvQkFDdEIsYUFBUSxHQUFpQixFQUFFLENBQUM7b0JBRXBDLFVBQUssR0FBVyxJQUFJLENBQUM7b0JBQ2Isa0JBQWEsR0FBVSxRQUFRLENBQUM7b0JBR2hDLGNBQVMsR0FBcUIsRUFBRSxDQUFDO29CQUNqQyxlQUFVLEdBQW1CLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUMxQyxrQkFBYSxHQUFXLEtBQUssQ0FBQztvQkFLbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBR0QseUNBQVEsR0FBUjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0QsSUFBSSxD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QVU7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVyRCxDQUFDO2dCQXhNRDtvQkFBQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7MkVBQUE7Z0JBRXpCO29CQUFDLGdCQUFTLENBQUMsVUFBVSxDQUFDOzt3RUFBQTtnQkFFdEI7b0JBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3lFQUFBO2dCQWxCM0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsa0RBQWtEO3dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDN0IsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWdCLEVBQUUsd0JBQWUsQ0FBQzt3QkFDbEUsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7d0JBQzNELGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxDQUFDO3FCQUN6QixDQUFDOzswQ0FBQTtnQkFnTkYsNkJBQUM7WUFBRCxDQS9NQSxBQStNQyxJQUFBO1lBL01ELDJEQStNQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC91c2VyLmFwYXJ0bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9zcmMvaHR0cC5kLnRzXCIvPlxyXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBcGFydG1lbnR9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2FwYXJ0bWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gJy4vYXBhcnRtZW50LnNlcnZpY2UnXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTLCBNb2RhbERpcmVjdGl2ZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwicHVibGljL3NyYy9zaGFyZWQvbW9kZWxzL1VzZXIudHNcIjtcclxuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0N1cnJlbnRVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VDcmVhdG9yfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtIb3VzZVBhZ2VPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9ob3VzZS9ob3VzZS5wYWdlLm9iamVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktdXNlci1hcGFydG1lbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9hcGFydG1lbnQvYXBhcnRtZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbQXBhcnRtZW50U2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC9ob21lL2NvbXBvbmVudHMvYXBhcnRtZW50L3N0eWxlcy5jc3MnXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXBhcnRtZW50Q29tcG9uZW50IHtcclxuICAgIHJvbGU6U3RyaW5nID0gXCJST0xFX1VTRVJcIjtcclxuICAgIEl0ZW1zOkFwYXJ0bWVudFtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEFwYXJ0bWVudDpBcGFydG1lbnQgPSB7YXBhcnRtZW50SWQ6IDAsIHNxdWFyZTogMCwgbnVtYmVyOiAwLCBob3VzZToge3N0cmVldDogJyd9fTtcclxuICAgIHByaXZhdGUgZW1wdHlBcGFydG1lbnQ6QXBhcnRtZW50ID0ge3NxdWFyZTogMCwgbnVtYmVyOiAwLCBob3VzZToge3N0cmVldDogJyd9fTtcclxuICAgIEBWaWV3Q2hpbGQoJ2RlbGV0ZU1vZGFsJylcclxuICAgIHB1YmxpYyBkZWxldGVNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2FkZE1vZGFsJylcclxuICAgIHB1YmxpYyBhZGRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRNb2RhbCcpXHJcbiAgICBwdWJsaWMgZWRpdE1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgYWN0aXZlOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBwYWdlQ3JlYXRvcjpQYWdlQ3JlYXRvcjxBcGFydG1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwYWdlTnVtYmVyOm51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHBhZ2VMaXN0OkFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczpudW1iZXI7XHJcbiAgICBvcmRlcjpib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZGVmYXVsdFNvcnRlcjpzdHJpbmcgPSAnbnVtYmVyJztcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6VXNlcjtcclxuICAgIHByaXZhdGUgYXBhcnRtZW50VG9EZWxldGU6QXBydG1lbnQ7XHJcbiAgICBwcml2YXRlIGFsbEhvdXNlczpIb3VzZVBhZ2VPYmplY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBob3VzZVRvQWRkOkhvdXNlUGFnZU9iamVjdCA9IHtzdHJlZXQ6ICcnfTtcclxuICAgIHByaXZhdGUgaXNOdW1iZXJWYWxpZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRPc2JiSWQ6bnVtYmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6QXBhcnRtZW50U2VydmljZSwgcHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5JdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU2VydmljZSA9IEhlYWRlckNvbXBvbmVudC5jdXJyZW50VXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPc2JiSWQgPSB0aGlzLmN1cnJlbnRVc2VyLm9zYmJJZDtcclxuICAgICAgICB0aGlzLnJvbGUgPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRBcGFydG1lbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcik7XHJcblxyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRBbGxIb3VzZXModGhpcy5jdXJyZW50T3NiYklkKS5zdWJzY3JpYmUocmVzPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEhvdXNlcyA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25EZWxldGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLkl0ZW1zLnNwbGljZSh0aGlzLkl0ZW1zLmluZGV4T2YodGhpcy5hcGFydG1lbnRUb0RlbGV0ZSwgMCksIDEpO1xyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5kZWxldGVBcGFydG1lbnQodGhpcy5hcGFydG1lbnRUb0RlbGV0ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9PnRoaXMuYXBhcnRtZW50VG9EZWxldGUgPSByZXMpO1xyXG4gICAgICAgIC8vIC5zdWJzY3JpYmUocmVzPT50aGlzLkl0ZW1zLnNwbGljZSh0aGlzLkl0ZW1zLmluZGV4T2YocmVzLCAwKSwgMSkpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdldEFwYXJ0bWVudHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuaGlkZSgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRlbGV0ZU1vZGFsKGFtKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50VG9EZWxldGUgPSBhbTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvcGVuRWRpdE1vZGFsKGFtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFwYXJ0bWVudCA9IGFtO1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXRBcGFydG1lbnRTdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmVkaXRBbmRTYXZlKHRoaXMuc2VsZWN0ZWRBcGFydG1lbnQpLnN1YnNjcmliZShyZXM9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZSA9IHRydWUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkQXBhcnRtZW50U3VibWl0KCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNOdW1iZXJWYWxpZCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkFwYXJ0bWVudCBpcyBidXN5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuYWRkQXBhcnRtZW50KHRoaXMuZW1wdHlBcGFydG1lbnQsIHRoaXMuaG91c2VUb0FkZC5ob3VzZUlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtcHR5QXBhcnRtZW50ID0ge251bWJlcjogJycsIHNxdWFyZTogJyd9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNob29zZUhvdXNlKGhvdXNlOkhvdXNlUGFnZU9iamVjdCwgbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ob3VzZVRvQWRkID0gaG91c2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzQXBhcnRtZW50TnVtYmVyVmFsaWQodmFsdWUpOmJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgZnJvbSBpbnB1dFwiICsgdmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuaXNBcGFydG1lbnRFeGlzdCh2YWx1ZSwgdGhpcy5ob3VzZVRvQWRkLmhvdXNlSWQpLnN1YnNjcmliZShyZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc051bWJlclZhbGlkID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG91c2UgaWQgaXM6ICBcIiArIHRoaXMuaG91c2VUb0FkZC5ob3VzZUlkICsgXCIgIHZhbGlkIGlzIDogXCIgKyB0aGlzLmlzTnVtYmVyVmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuaXNOdW1iZXJWYWxpZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNvcnRCeSh2YWx1ZTpzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc29ydGVkIGJ5ICcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9yZGVyID0gIXRoaXMub3JkZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U29ydGVyID0gdmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29yZGVyIGJ5IGFzYycsIHRoaXMub3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRTb3J0ZWRBcGFydG1lbnRzKHRoaXMucGFnZU51bWJlciwgdmFsdWUsIHRoaXMub3JkZXIsIHRoaXMuY3VycmVudE9zYmJJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXRlbXMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBcGFydG1lbnRzQnlQYWdlTnVtKHBhZ2VOdW1iZXI6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRBcGFydG1lbnRzc0J5UGFnZU51bVwiICsgcGFnZU51bWJlcik7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICtwYWdlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0U29ydGVkQXBhcnRtZW50cyh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMuZGVmYXVsdFNvcnRlciwgdGhpcy5vcmRlciwgdGhpcy5jdXJyZW50T3NiYklkLCB0aGlzLnJvbGUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkl0ZW1zID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByZXZQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlciAtIDE7XHJcbiAgICAgICAgdGhpcy5nZXRBcGFydG1lbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0QXBhcnRtZW50c0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0Om51bWJlciwgZW5kOm51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFwYXJ0bWVudHNCeVBhZ2VOdW1XaXRoTnVtYmVyKHBhZ2VOdW1iZXI6bnVtYmVyLCBudW1iZXJPZkFwYXJ0bWVudDpudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldEFwYXJ0bWVudHNzQnlQYWdlTnVtXCIgKyBwYWdlTnVtYmVyICsgXCJ3aXRoIGFwYXJ0bWVudCBudW1iZXIgPVwiICsgbnVtYmVyT2ZBcGFydG1lbnQpO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICtwYWdlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0U29ydGVkQXBhcnRtZW50c1dpdGhOdW1iZXIodGhpcy5wYWdlTnVtYmVyLCB0aGlzLmRlZmF1bHRTb3J0ZXIsIHRoaXMub3JkZXIsIG51bWJlck9mQXBhcnRtZW50LCB0aGlzLmN1cnJlbnRPc2JiSWQsIHRoaXMucm9sZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXRlbXMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSVRFTSAwID0gICBcIitJdGVtc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlYXJjaEJ5TnVtYmVyKHNlYXJjaFRlcm06bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBcGFydG1lbnRzQnlQYWdlTnVtV2l0aE51bWJlcih0aGlzLnBhZ2VOdW1iZXIsIHNlYXJjaFRlcm0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIgKyBzZWFyY2hUZXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNlYXJjaEJveChzZWFyY2h0ZXJtKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaHRlcm0udmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICB0aGlzLmdldEFwYXJ0bWVudHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuIl19
