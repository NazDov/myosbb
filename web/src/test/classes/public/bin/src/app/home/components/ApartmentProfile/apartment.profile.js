System.register(["@angular/core", "@angular/router", "ng2-bootstrap/ng2-bootstrap", './apartment.profile.service', "../../../../shared/services/current.user.service", "ng2-translate/ng2-translate"], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_bootstrap_1, apartment_profile_service_1, current_user_service_1, ng2_translate_1;
    var ApartmentProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (apartment_profile_service_1_1) {
                apartment_profile_service_1 = apartment_profile_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            ApartmentProfileComponent = (function () {
                function ApartmentProfileComponent(activatedRoute, apartmentService, currentUserService) {
                    var _this = this;
                    this.activatedRoute = activatedRoute;
                    this.apartmentService = apartmentService;
                    this.currentUserService = currentUserService;
                    this.isUser = false;
                    this.currentApartment = { apartmentId: 0, square: 0, number: 0, owner: 0, house: 0, bills: [] };
                    this.countOfUsers = 2;
                    this.owner = { userId: 0, phoneNumber: 'відсутній', email: '' };
                    this.active = true;
                    this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = parseInt(params['id'], 10); });
                    console.log("constructor");
                }
                ApartmentProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUser = this.currentUserService.getUser();
                    this.apartmentService.getCurrentApartment(this.id)
                        .subscribe(function (res) { _this.currentApartment = res; });
                    this.apartmentService.getUsersInApartment(this.id)
                        .subscribe(function (res) {
                        _this.usersInApartment = res;
                        _this.countOfUsers = _this.usersInApartment.length;
                    });
                    this.apartmentService.getOwnerInApartment(this.id)
                        .subscribe(function (res) { _this.owner = res; console.log("user OWNER: " + res); });
                    this.usersInApartment = [];
                    this.apartmentService.getAllBillsByApartment(this.id)
                        .subscribe(function (res) { _this.billsOfApartment = res.rows; });
                };
                ApartmentProfileComponent.prototype.openUserListModal = function () {
                    this.userListModal.show();
                };
                ApartmentProfileComponent.prototype.onModalSubmit = function () {
                    this.active = false;
                    this.userListModal.hide();
                };
                ApartmentProfileComponent.prototype.ngOnDestroy = function () {
                    this.paramsSub.unsubscribe();
                };
                __decorate([
                    core_1.ViewChild('userListModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], ApartmentProfileComponent.prototype, "userListModal", void 0);
                ApartmentProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'apartment-profile',
                        templateUrl: 'src/app/home/components/ApartmentProfile/apartment.profile.html',
                        providers: [apartment_profile_service_1.apartmentProfileService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/home/components/ApartmentProfile/apartmentStyle.css'],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, apartment_profile_service_1.apartmentProfileService, current_user_service_1.CurrentUserService])
                ], ApartmentProfileComponent);
                return ApartmentProfileComponent;
            }());
            exports_1("ApartmentProfileComponent", ApartmentProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NvbXBvbmVudHMvQXBhcnRtZW50UHJvZmlsZS9hcGFydG1lbnQucHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFjSSxtQ0FBb0IsY0FBNkIsRUFBVSxnQkFBd0MsRUFBVSxrQkFBcUM7b0JBZHRKLGlCQTREQztvQkE5Q3VCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFUbEosV0FBTSxHQUFXLEtBQUssQ0FBQztvQkFFZixxQkFBZ0IsR0FBVyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBRXRGLGlCQUFZLEdBQVEsQ0FBQyxDQUFDO29CQUN0QixVQUFLLEdBQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUMvRCxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUlsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO29CQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUkvQixDQUFDO2dCQUdELDRDQUFRLEdBQVI7b0JBQUEsaUJBaUJDO29CQWhCRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7eUJBQzdDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBRyxLQUFJLENBQUMsZ0JBQWdCLEdBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUM3QyxTQUFTLENBQUMsVUFBQSxHQUFHO3dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsR0FBQyxHQUFHLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxZQUFZLEdBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLENBQUM7b0JBRVgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7eUJBQzdDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBRyxLQUFJLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7b0JBRXpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUcsS0FBSSxDQUFDLGdCQUFnQixHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztnQkFFMUQsQ0FBQztnQkFHRCxxREFBaUIsR0FBakI7b0JBRUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFOUIsQ0FBQztnQkFDRCxpREFBYSxHQUFiO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO29CQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUU5QixDQUFDO2dCQUdELCtDQUFXLEdBQVg7b0JBQ1EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkF4REw7b0JBQUMsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7O2dGQUFBO2dCQWIvQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxtQkFBbUI7d0JBQzVCLFdBQVcsRUFBQyxpRUFBaUU7d0JBQzdFLFNBQVMsRUFBRSxDQUFFLG1EQUF1QixDQUFDO3dCQUNyQyxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsQ0FBQzt3QkFDN0IsYUFBYSxFQUFFLENBQUMsaUNBQWlCLENBQUM7d0JBQ2xDLFNBQVMsRUFBRSxDQUFDLDZEQUE2RCxDQUFDO3dCQUMxRSxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxDQUFDO3FCQUN6QixDQUFDOzs2Q0FBQTtnQkFnRUYsZ0NBQUM7WUFBRCxDQTVEQSxBQTREQyxJQUFBO1lBNURELGlFQTREQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL0FwYXJ0bWVudFByb2ZpbGUvYXBhcnRtZW50LnByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSUyxIdHRwLEhlYWRlcnMsUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnR7dG9Qcm9taXNlfSBmcm9tIFwicnhqcy9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuaW1wb3J0IHtNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUywgTW9kYWxEaXJlY3RpdmV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHthcGFydG1lbnRQcm9maWxlU2VydmljZX0gZnJvbSAnLi9hcGFydG1lbnQucHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0e0FwYXJ0bWVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvYXBhcnRtZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2FwYXJ0bWVudC1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlVXJsOidzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9BcGFydG1lbnRQcm9maWxlL2FwYXJ0bWVudC5wcm9maWxlLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbIGFwYXJ0bWVudFByb2ZpbGVTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVNdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9BcGFydG1lbnRQcm9maWxlL2FwYXJ0bWVudFN0eWxlLmNzcyddLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50UHJvZmlsZUNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCd1c2VyTGlzdE1vZGFsJylcclxuICAgIHB1YmxpYyB1c2VyTGlzdE1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgaWQ6YW55O1xyXG4gICAgcGFyYW1zU3ViOmFueTtcclxuICAgIGlzVXNlcjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOlVzZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBcGFydG1lbnQ6QXBhcnRtZW50PXthcGFydG1lbnRJZDowLHNxdWFyZTowLG51bWJlcjowLG93bmVyOjAsaG91c2U6MCxiaWxsczpbXX07XHJcbiAgIHByaXZhdGUgdXNlcnNJbkFwYXJ0bWVudDpVc2VyW107XHJcbiAgICBwcml2YXRlIGNvdW50T2ZVc2VyczpudW1iZXI9MjtcclxuICAgIHByaXZhdGUgb3duZXI6VXNlcj17dXNlcklkOjAscGhvbmVOdW1iZXI6J9Cy0ZbQtNGB0YPRgtC90ZbQuScsZW1haWw6Jyd9O1xyXG4gICAgYWN0aXZlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6YXBhcnRtZW50UHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zU3ViID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmlkID0gcGFyc2VJbnQocGFyYW1zWydpZCddLCAxMCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldEN1cnJlbnRBcGFydG1lbnQodGhpcy5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9Pnt0aGlzLmN1cnJlbnRBcGFydG1lbnQ9cmVzfSk7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldFVzZXJzSW5BcGFydG1lbnQodGhpcy5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnNJbkFwYXJ0bWVudD1yZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50T2ZVc2Vycz10aGlzLnVzZXJzSW5BcGFydG1lbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRPd25lckluQXBhcnRtZW50KHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT57dGhpcy5vd25lcj1yZXM7Y29uc29sZS5sb2coXCJ1c2VyIE9XTkVSOiBcIityZXMpfSk7XHJcbiAgICAgICAgdGhpcy51c2Vyc0luQXBhcnRtZW50PVtdO1xyXG5cclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0QWxsQmlsbHNCeUFwYXJ0bWVudCh0aGlzLmlkKVxyXG4gICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT57dGhpcy5iaWxsc09mQXBhcnRtZW50PXJlcy5yb3dzO30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgb3BlblVzZXJMaXN0TW9kYWwoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMudXNlckxpc3RNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvbk1vZGFsU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyTGlzdE1vZGFsLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIG5nT25EZXN0cm95KCl7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbn1cclxuIl19
