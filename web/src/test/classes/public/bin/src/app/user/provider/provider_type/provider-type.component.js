System.register(["@angular/core", "@angular/common", "./service/provider-type.service", "ng2-bootstrap/ng2-bootstrap", "ng2-translate/ng2-translate", "../../../../shared/pipes/capitalize-first-letter", "ng2-select/ng2-select"], function(exports_1, context_1) {
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
    var core_1, common_1, provider_type_service_1, ng2_bootstrap_1, ng2_translate_1, capitalize_first_letter_1, ng2_select_1;
    var ProviderTypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (provider_type_service_1_1) {
                provider_type_service_1 = provider_type_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            }],
        execute: function() {
            ProviderTypeComponent = (function () {
                function ProviderTypeComponent(_providerTypeService) {
                    this._providerTypeService = _providerTypeService;
                    this.types = new Array();
                    this.items = new Array();
                    this.selected = { providerTypeId: null, providerTypeName: '' };
                    console.log("constructor provider type cmp");
                    this.typeChanged = new core_1.EventEmitter();
                    console.log("create event emitter");
                }
                ProviderTypeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("init method");
                    this._providerTypeService.getProviderTypes()
                        .subscribe(function (data) {
                        console.log("DATA: ", data);
                        _this.types = data;
                        for (var i = 0; i < _this.types.length; i++) {
                            _this.items.push({ id: _this.types[i].providerTypeId, text: _this.types[i].providerTypeName });
                        }
                        console.log("items: ", _this.items);
                    });
                };
                ProviderTypeComponent.prototype.onSelect = function (value) {
                    this.selected = { providerTypeId: value.id, providerTypeName: value.text };
                    console.log("select type " + this.selected.providerTypeName);
                    this.typeChanged.emit(this.selected);
                    console.log('Selected value is: ', this.selected);
                };
                ProviderTypeComponent.prototype.onRemove = function (value) {
                    console.log('Removed value is: ', value);
                };
                ProviderTypeComponent.prototype.onType = function (value) {
                    console.log('New search input: ', value);
                };
                ProviderTypeComponent.prototype.onRefresh = function (value) {
                    this.selected = { providerTypeId: value.id, providerTypeName: value.text };
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProviderTypeComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ProviderTypeComponent.prototype, "typeChanged", void 0);
                ProviderTypeComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-type',
                        template: "\n        <div>            \n         <label> {{ 'type' | translate:{value:param} | capitalize }}</label>\n            <div *ngIf=\"items.length > 0\">\n                            <div style=\"width: 400px; margin-bottom: 20px;\">\n                  <ng-select [allowClear]=\"true\"\n                              [items]=\"items\"\n                              (data)=\"onRefresh($event)\"\n                              (selected)=\"onSelect($event)\"\n                              (removed)=\"onRemove($event)\"\n                              (typed)=\"onType($event)\"\n                              placeholder=\"{{type.providerTypeName}}\">\n                  </ng-select>\n                  <p></p>\n                  </div>\n                </div>\n        </div> <!-- Type -->\n    ",
                        providers: [provider_type_service_1.ProviderTypeService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        directives: [ng2_select_1.SELECT_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [provider_type_service_1.ProviderTypeService])
                ], ProviderTypeComponent);
                return ProviderTypeComponent;
            }());
            exports_1("ProviderTypeComponent", ProviderTypeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyX3R5cGUvcHJvdmlkZXItdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBT0ksK0JBQW9CLG9CQUF3QztvQkFBeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFOcEQsVUFBSyxHQUF5QixJQUFJLEtBQUssRUFBZ0IsQ0FBQztvQkFDekQsVUFBSyxHQUFzQixJQUFJLEtBQUssRUFBYyxDQUFDO29CQUNsRCxhQUFRLEdBQWtCLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFLM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBZ0IsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQUEsaUJBV0M7b0JBVkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO3lCQUN2QyxTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDbEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUN4QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7d0JBQzlGLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUNNLHdDQUFRLEdBQWYsVUFBZ0IsS0FBZ0I7b0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUM7b0JBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFTSx3Q0FBUSxHQUFmLFVBQWdCLEtBQWdCO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVNLHNDQUFNLEdBQWIsVUFBYyxLQUFnQjtvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFTSx5Q0FBUyxHQUFoQixVQUFpQixLQUFnQjtvQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkF0Q0Q7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7OzBFQUFBO2dCQTlCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsNHhCQWlCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQzt3QkFDaEMsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsVUFBVSxFQUFFLENBQUMsOEJBQWlCLEVBQUUsZ0JBQU8sRUFBRSx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsaUNBQWlCLENBQUU7cUJBRWpHLENBQUM7O3lDQUFBO2dCQTRDRiw0QkFBQztZQUFELENBM0NBLEFBMkNDLElBQUE7WUEzQ0QseURBMkNDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyX3R5cGUvcHJvdmlkZXItdHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBbmFzdGFzaWlhIEZlZG9yYWsgIDgvNC8xNi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIE5nQ2xhc3MsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyVHlwZVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvcHJvdmlkZXItdHlwZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJUeXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci50eXBlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge0RST1BET1dOX0RJUkVDVElWRVMsIEJVVFRPTl9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1zZWxlY3QvbmcyLXNlbGVjdFwiO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0JVVFRPTl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9uZzItc2VsZWN0LWl0ZW0uaW50ZXJmYWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvdmlkZXItdHlwZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgIDxsYWJlbD4ge3sgJ3R5cGUnIHwgdHJhbnNsYXRlOnt2YWx1ZTpwYXJhbX0gfCBjYXBpdGFsaXplIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNDAwcHg7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1zZWxlY3QgW2FsbG93Q2xlYXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtc109XCJpdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKT1cIm9uUmVmcmVzaCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVkKT1cIm9uVHlwZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3R5cGUucHJvdmlkZXJUeXBlTmFtZX19XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDwhLS0gVHlwZSAtLT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtQcm92aWRlclR5cGVTZXJ2aWNlXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU0VMRUNUX0RJUkVDVElWRVMsIE5nQ2xhc3MsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBCVVRUT05fRElSRUNUSVZFUyBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJUeXBlQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgdHlwZXMgOiBBcnJheTxQcm92aWRlclR5cGU+ID0gbmV3IEFycmF5PFByb3ZpZGVyVHlwZT4oKTtcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8U2VsZWN0SXRlbT4gPSBuZXcgQXJyYXk8U2VsZWN0SXRlbT4oKTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWQgOiBQcm92aWRlclR5cGUgPSB7cHJvdmlkZXJUeXBlSWQ6IG51bGwsIHByb3ZpZGVyVHlwZU5hbWU6ICcnfTtcclxuICAgIEBJbnB1dCgpIHR5cGUgOiBQcm92aWRlclR5cGU7XHJcbiAgICBAT3V0cHV0KCkgdHlwZUNoYW5nZWQgOiBFdmVudEVtaXR0ZXI8UHJvdmlkZXJUeXBlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm92aWRlclR5cGVTZXJ2aWNlOlByb3ZpZGVyVHlwZVNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yIHByb3ZpZGVyIHR5cGUgY21wXCIpO1xyXG4gICAgICAgIHRoaXMudHlwZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFByb3ZpZGVyVHlwZT4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBldmVudCBlbWl0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBtZXRob2RcIik7XHJcbiAgICAgICAgdGhpcy5fcHJvdmlkZXJUeXBlU2VydmljZS5nZXRQcm92aWRlclR5cGVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtpZDogdGhpcy50eXBlc1tpXS5wcm92aWRlclR5cGVJZCwgdGV4dDogdGhpcy50eXBlc1tpXS5wcm92aWRlclR5cGVOYW1lfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1zOiBcIiwgdGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uU2VsZWN0KHZhbHVlOlNlbGVjdEl0ZW0pOnZvaWQge1xyXG4gICAgICAgdGhpcy5zZWxlY3RlZCA9IHtwcm92aWRlclR5cGVJZDogdmFsdWUuaWQsIHByb3ZpZGVyVHlwZU5hbWU6IHZhbHVlLnRleHR9O1xyXG4gICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdHlwZSBcIiArIHRoaXMuc2VsZWN0ZWQucHJvdmlkZXJUeXBlTmFtZSk7XHJcbiAgICAgICB0aGlzLnR5cGVDaGFuZ2VkLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHZhbHVlIGlzOiAnLCB0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZW1vdmUodmFsdWU6U2VsZWN0SXRlbSk6dm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgdmFsdWUgaXM6ICcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UeXBlKHZhbHVlOlNlbGVjdEl0ZW0pOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXcgc2VhcmNoIGlucHV0OiAnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVmcmVzaCh2YWx1ZTpTZWxlY3RJdGVtKTp2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0ge3Byb3ZpZGVyVHlwZUlkOiB2YWx1ZS5pZCwgcHJvdmlkZXJUeXBlTmFtZTogdmFsdWUudGV4dH07XHJcbiAgICB9XHJcbn0iXX0=
