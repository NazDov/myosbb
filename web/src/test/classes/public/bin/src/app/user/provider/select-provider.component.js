System.register(["@angular/core", "./service/provider-service", "../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate", "ng2-select/ng2-select", "@angular/common", "ng2-bootstrap/ng2-bootstrap"], function(exports_1, context_1) {
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
    var core_1, provider_service_1, capitalize_first_letter_1, ng2_translate_1, ng2_select_1, common_1, ng2_bootstrap_1;
    var SelectProviderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            SelectProviderComponent = (function () {
                function SelectProviderComponent(_providerService) {
                    this._providerService = _providerService;
                    this.selected = { providerId: null, name: 'Choose company', description: '', logoUrl: '', periodicity: '', type: null, email: '', phone: '', address: '', schedule: '', active: false };
                    this.providers = [];
                    this.items = new Array();
                    this.providerChanged = new core_1.EventEmitter();
                }
                SelectProviderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._providerService.getAllProviders()
                        .subscribe(function (data) {
                        _this.providers = data;
                        for (var i = 0; i < _this.providers.length; i++) {
                            _this.items.push({ id: _this.providers[i].providerId, text: _this.providers[i].name,
                                providerId: _this.providers[i].providerId,
                                name: _this.providers[i].name,
                                description: _this.providers[i].description,
                                logoUrl: _this.providers[i].logoUrl,
                                periodicity: _this.providers[i].periodicity,
                                type: _this.providers[i].type,
                                email: _this.providers[i].email,
                                phone: _this.providers[i].phone,
                                address: _this.providers[i].address,
                                schedule: _this.providers[i].schedule,
                                active: _this.providers[i].active
                            });
                        }
                        console.log("items: ", _this.items);
                    });
                };
                SelectProviderComponent.prototype.onSelect = function (value) {
                    // var id : number = value.id;
                    // this._providerService.getProviderById(id)
                    //     .subscribe((provider)=>{
                    //         this.selected = provider;
                    //         console.log("find provider ", provider)
                    //     });
                    this.selected.providerId = value.id;
                    this.selected.name = value.text;
                    this.selected.description = value.description,
                        this.selected.logoUrl = value.logoUrl,
                        this.selected.periodicity = value.periodicity,
                        this.selected.type = value.type,
                        this.selected.email = value.email,
                        this.selected.phone = value.phone,
                        this.selected.address = value.address,
                        this.selected.schedule = value.schedule,
                        this.selected.active = value.active;
                    console.log("selected company: ", this.selected.name);
                    this.providerChanged.emit(this.selected);
                };
                SelectProviderComponent.prototype.onRemove = function (value) {
                    console.log('Removed value is: ', value);
                };
                SelectProviderComponent.prototype.onType = function (value) {
                    console.log('New search input: ', value);
                };
                SelectProviderComponent.prototype.onRefresh = function (value) {
                    this.selected.providerId = value.id;
                    this.selected.name = value.text;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SelectProviderComponent.prototype, "selected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SelectProviderComponent.prototype, "providerChanged", void 0);
                SelectProviderComponent = __decorate([
                    core_1.Component({
                        selector: 'select-provider',
                        template: "<div class=\"form-group\">\n                          <div>\n                             <label> {{ 'company' | translate | capitalize }}</label>\n                                <div *ngIf=\"items.length > 0\">\n                                <div>\n                                      <ng-select [allowClear]=\"true\"\n                                                  [items]=\"items\"\n                                                  (data)=\"onRefresh($event)\"\n                                                  (selected)=\"onSelect($event)\"\n                                                  (removed)=\"onRemove($event)\"\n                                                  (typed)=\"onType($event)\"\n                                                  placeholder=\"{{selected.name}}\">\n                                      </ng-select>\n                               </div>\n                            </div>\n                         </div>\n                     </div> <!-- Company -->",
                        providers: [provider_service_1.ProviderService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        directives: [ng2_select_1.SELECT_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [provider_service_1.ProviderService])
                ], SelectProviderComponent);
                return SelectProviderComponent;
            }());
            exports_1("SelectProviderComponent", SelectProviderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3NlbGVjdC1wcm92aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBTUksaUNBQW9CLGdCQUFnQztvQkFBaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQjtvQkFKM0MsYUFBUSxHQUFlLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDbkwsY0FBUyxHQUFlLEVBQUUsQ0FBQztvQkFDM0IsVUFBSyxHQUE0QixJQUFJLEtBQUssRUFBc0IsQ0FBQztvQkFNL0Qsb0JBQWUsR0FBNkIsSUFBSSxtQkFBWSxFQUFZLENBQUM7Z0JBRm5GLENBQUM7Z0JBUUQsMENBQVEsR0FBUjtvQkFBQSxpQkFxQkM7b0JBcEJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7eUJBQ2xDLFNBQVMsQ0FBQyxVQUFDLElBQUk7d0JBQ1osS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDNUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFB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RSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFTSwyQ0FBUyxHQUFoQixVQUFpQixLQUF3QjtvQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEMsQ0FBQztnQkF0RUQ7b0JBQUMsWUFBSyxFQUFFOzt5RUFBQTtnQkFRUjtvQkFBQyxhQUFNLEVBQUU7O2dGQUFBO2dCQWpDYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxpL0JBZ0IrQjt3QkFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsVUFBVSxFQUFFLENBQUMsOEJBQWlCLEVBQUUsZ0JBQU8sRUFBRSx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsaUNBQWlCLENBQUU7cUJBQ2pHLENBQUM7OzJDQUFBO2dCQTBFRiw4QkFBQztZQUFELENBekVBLEFBeUVDLElBQUE7WUF6RUQsNkRBeUVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb3ZpZGVyL3NlbGVjdC1wcm92aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBbmFzdGFzaWlhIEZlZG9yYWsgIDgvMTEvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9wcm92aWRlci1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3Byb3ZpZGVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7U2VsZWN0SXRlbX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvbmcyLXNlbGVjdC1pdGVtLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1NFTEVDVF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLXNlbGVjdC9uZzItc2VsZWN0XCI7XHJcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBOZ0NsYXNzLCBDT1JFX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtCVVRUT05fRElSRUNUSVZFU30gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1wcm92aWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IHt7ICdjb21wYW55JyB8IHRyYW5zbGF0ZSB8IGNhcGl0YWxpemUgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctc2VsZWN0IFthbGxvd0NsZWFyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtc109XCJpdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEpPVwib25SZWZyZXNoKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZWQpPVwib25UeXBlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tzZWxlY3RlZC5uYW1lfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDwhLS0gQ29tcGFueSAtLT5gLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvdmlkZXJTZXJ2aWNlXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU0VMRUNUX0RJUkVDVElWRVMsIE5nQ2xhc3MsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBCVVRUT05fRElSRUNUSVZFUyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RQcm92aWRlckNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgc2VsZWN0ZWQgOiBQcm92aWRlciA9ICB7cHJvdmlkZXJJZDpudWxsLCBuYW1lOidDaG9vc2UgY29tcGFueScsIGRlc2NyaXB0aW9uOicnLCBsb2dvVXJsOicnLCBwZXJpb2RpY2l0eTonJywgdHlwZTpudWxsLCBlbWFpbDonJyxwaG9uZTonJywgYWRkcmVzczonJywgc2NoZWR1bGU6JycsIGFjdGl2ZTogZmFsc2V9O1xyXG4gICAgcHJpdmF0ZSBwcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PFNlbGVjdFByb3ZpZGVySXRlbT49bmV3IEFycmF5PFNlbGVjdFByb3ZpZGVySXRlbT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm92aWRlclNlcnZpY2U6UHJvdmlkZXJTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIHByb3ZpZGVyQ2hhbmdlZCA6IEV2ZW50RW1pdHRlcjxQcm92aWRlcj4gID0gbmV3IEV2ZW50RW1pdHRlcjxQcm92aWRlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm92aWRlclNlcnZpY2U6UHJvdmlkZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvciBwcm92aWRlciB0eXBlIGNtcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wcm92aWRlclNlcnZpY2UuZ2V0QWxsUHJvdmlkZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtpZDogdGhpcy5wcm92aWRlcnNbaV0ucHJvdmlkZXJJZCwgdGV4dDogdGhpcy5wcm92aWRlcnNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZDp0aGlzLnByb3ZpZGVyc1tpXS5wcm92aWRlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3ZpZGVyc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm92aWRlcnNbaV0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29Vcmw6IHRoaXMucHJvdmlkZXJzW2ldLmxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZGljaXR5OiB0aGlzLnByb3ZpZGVyc1tpXS5wZXJpb2RpY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogIHRoaXMucHJvdmlkZXJzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnByb3ZpZGVyc1tpXS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucHJvdmlkZXJzW2ldLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnByb3ZpZGVyc1tpXS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZTogIHRoaXMucHJvdmlkZXJzW2ldLnNjaGVkdWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6ICB0aGlzLnByb3ZpZGVyc1tpXS5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1zOiBcIiwgdGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KHZhbHVlOlNlbGVjdFByb3ZpZGVySXRlbSk6dm9pZCB7XHJcbiAgICAgICAgLy8gdmFyIGlkIDogbnVtYmVyID0gdmFsdWUuaWQ7XHJcbiAgICAgICAgLy8gdGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmdldFByb3ZpZGVyQnlJZChpZClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZSgocHJvdmlkZXIpPT57XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkID0gcHJvdmlkZXI7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImZpbmQgcHJvdmlkZXIgXCIsIHByb3ZpZGVyKVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wcm92aWRlcklkID0gdmFsdWUuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQubmFtZSA9IHZhbHVlLnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5sb2dvVXJsID0gdmFsdWUubG9nb1VybCxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wZXJpb2RpY2l0eSA9IHZhbHVlLnBlcmlvZGljaXR5LFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnR5cGUgPSB2YWx1ZS50eXBlLFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmVtYWlsID0gdmFsdWUuZW1haWwsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucGhvbmUgPSB2YWx1ZS5waG9uZSxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5hZGRyZXNzID0gdmFsdWUuYWRkcmVzcyxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zY2hlZHVsZSA9IHZhbHVlLnNjaGVkdWxlLFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSAgPSB2YWx1ZS5hY3RpdmVcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIGNvbXBhbnk6IFwiLCB0aGlzLnNlbGVjdGVkLm5hbWUpO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJDaGFuZ2VkLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVtb3ZlKHZhbHVlOlNlbGVjdFByb3ZpZGVySXRlbSk6dm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgdmFsdWUgaXM6ICcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UeXBlKHZhbHVlOlNlbGVjdFByb3ZpZGVySXRlbSk6dm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBzZWFyY2ggaW5wdXQ6ICcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZWZyZXNoKHZhbHVlOlNlbGVjdFByb3ZpZGVySXRlbSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wcm92aWRlcklkID0gdmFsdWUuaWQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5uYW1lID0gdmFsdWUudGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm92aWRlckl0ZW0gZXh0ZW5kcyBQcm92aWRlciwgU2VsZWN0SXRlbXtcclxufSJdfQ==
