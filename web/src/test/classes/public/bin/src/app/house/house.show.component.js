System.register(["@angular/core", "./house.service", "./house.page.object", "../header/header.component", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, house_service_1, house_page_object_1, header_component_1, router_1;
    var HouseShowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (house_service_1_1) {
                house_service_1 = house_service_1_1;
            },
            function (house_page_object_1_1) {
                house_page_object_1 = house_page_object_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HouseShowComponent = (function () {
                function HouseShowComponent(_houseService, _routeParams) {
                    this._houseService = _houseService;
                    this._routeParams = _routeParams;
                    this.housePageObject = new house_page_object_1.HousePageObject();
                }
                HouseShowComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._routeParams.params.subscribe(function (params) {
                        _this.houseId = +params['id'];
                        _this._houseService.getHouseById(_this.houseId)
                            .subscribe(function (data) { return _this.housePageObject = data; }, function (error) { return console.error(error); });
                    });
                };
                HouseShowComponent.prototype.ngOnDestroy = function () {
                    if (this.sub)
                        this.sub.unsubscribe();
                };
                HouseShowComponent = __decorate([
                    core_1.Component({
                        selector: 'my-user-house',
                        templateUrl: 'src/app/house/house.html',
                        providers: [house_service_1.HouseService],
                        directives: [header_component_1.HeaderComponent],
                        styleUrls: ['src/app/house/house.css']
                    }), 
                    __metadata('design:paramtypes', [house_service_1.HouseService, router_1.ActivatedRoute])
                ], HouseShowComponent);
                return HouseShowComponent;
            }());
            exports_1("HouseShowComponent", HouseShowComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob3VzZS9ob3VzZS5zaG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQU1JLDRCQUFvQixhQUEyQixFQUFVLFlBQTRCO29CQUFqRSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7b0JBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7Z0JBQ2pELENBQUM7Z0JBR0QscUNBQVEsR0FBUjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07d0JBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7NkJBQ3hDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUEzQixDQUEyQixFQUM1QyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkE5Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQzt3QkFDekIsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDN0IsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3pDLENBQUM7O3NDQUFBO2dCQXlCRix5QkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsbURBd0JDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ob3VzZS9ob3VzZS5zaG93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIb3VzZVNlcnZpY2UgfSBmcm9tIFwiLi9ob3VzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhvdXNlUGFnZU9iamVjdCB9IGZyb20gXCIuL2hvdXNlLnBhZ2Uub2JqZWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktdXNlci1ob3VzZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvaG91c2UvaG91c2UuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtIb3VzZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudF0sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC9ob3VzZS9ob3VzZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG91c2VTaG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgaG91c2VQYWdlT2JqZWN0OiBIb3VzZVBhZ2VPYmplY3Q7XHJcbiAgICBwcml2YXRlIGhvdXNlSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG91c2VTZXJ2aWNlOiBIb3VzZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuaG91c2VQYWdlT2JqZWN0ID0gbmV3IEhvdXNlUGFnZU9iamVjdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGVQYXJhbXMucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5ob3VzZUlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLmdldEhvdXNlQnlJZCh0aGlzLmhvdXNlSWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmhvdXNlUGFnZU9iamVjdCA9IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5zdWIpXHJcbiAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn0iXX0=
