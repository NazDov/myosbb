System.register(["@angular/core", "@angular/router", "./service/provider-service", "../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate"], function(exports_1, context_1) {
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
    var core_1, router_1, provider_service_1, capitalize_first_letter_1, ng2_translate_1;
    var ProviderInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            ProviderInfoComponent = (function () {
                function ProviderInfoComponent(route, _providerService) {
                    var _this = this;
                    this.route = route;
                    this._providerService = _providerService;
                    this.provider = { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: { providerTypeId: null, providerTypeName: '' },
                        email: '', phone: '', address: '', schedule: '', active: false };
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this._providerService.getProviderById(id)
                            .subscribe(function (item) { return (_this.provider = item); });
                    });
                }
                ProviderInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-info',
                        templateUrl: 'src/app/user/provider/provider-info.html',
                        providers: [provider_service_1.ProviderService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        styleUrls: ['src/app/user/profile/profile.css',
                            'src/app/house/house.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, provider_service_1.ProviderService])
                ], ProviderInfoComponent);
                return ProviderInfoComponent;
            }());
            exports_1("ProviderInfoComponent", ProviderInfoComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyLWluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBSUksK0JBQW9CLEtBQW9CLEVBQVUsZ0JBQWdDO29CQUp0RixpQkFXQztvQkFQdUIsVUFBSyxHQUFMLEtBQUssQ0FBZTtvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO29CQUYxRSxhQUFRLEdBQWUsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUM7d0JBQ25KLEtBQUssRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUU1RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQ3pDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQzs2QkFDcEMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7d0JBQzVCLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLGtDQUFrQzs0QkFDMUMseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7cUJBRTVGLENBQUM7O3lDQUFBO2dCQVlGLDRCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx5REFXQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm92aWRlci9wcm92aWRlci1pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW5hc3Rhc2lpYSBGZWRvcmFrICA4LzgvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9wcm92aWRlci1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3Byb3ZpZGVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvdmlkZXItaW5mbycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvdXNlci9wcm92aWRlci9wcm92aWRlci1pbmZvLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvdmlkZXJTZXJ2aWNlXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV0sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jc3MnLFxyXG4gICAgICAgICdzcmMvYXBwL2hvdXNlL2hvdXNlLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ10sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJJbmZvQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIHByb3ZpZGVyIDogUHJvdmlkZXIgPSAge3Byb3ZpZGVySWQ6bnVsbCwgbmFtZTonJywgZGVzY3JpcHRpb246JycsIGxvZ29Vcmw6JycsIHBlcmlvZGljaXR5OicnLCB0eXBlOntwcm92aWRlclR5cGVJZDogbnVsbCwgcHJvdmlkZXJUeXBlTmFtZTogJyd9LFxyXG4gICAgICAgIGVtYWlsOicnLHBob25lOicnLCBhZGRyZXNzOicnLCBzY2hlZHVsZTogJycsIGFjdGl2ZTogZmFsc2V9O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfcHJvdmlkZXJTZXJ2aWNlOlByb3ZpZGVyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmdldFByb3ZpZGVyQnlJZChpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbT0+KHRoaXMucHJvdmlkZXI9aXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
