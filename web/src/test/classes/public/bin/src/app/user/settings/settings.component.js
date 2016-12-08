System.register(["@angular/router", '@angular/core', '@angular/common', '@angular/router-deprecated', 'ng2-bootstrap/ng2-bootstrap', "ng2-translate", "../../../shared/pipes/capitalize-first-letter", './settings.service', "../../header/header.component", './settings', "./../../../shared/services/current.user.service", 'angular2-toaster/angular2-toaster'], function(exports_1, context_1) {
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
    var router_1, core_1, common_1, router_deprecated_1, ng2_bootstrap_1, ng2_translate_1, capitalize_first_letter_1, settings_service_1, header_component_1, settings_1, current_user_service_1, ng2_bootstrap_2, angular2_toaster_1;
    var SettingsComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (settings_1_1) {
                settings_1 = settings_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(settingsService, currentUserService, toasterService) {
                    this.settingsService = settingsService;
                    this.currentUserService = currentUserService;
                    this.toasterService = toasterService;
                    this._currentUserService = null;
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this._currentUserService.getUser();
                    this.settings = new settings_1.Settings();
                }
                SettingsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.settingsService.getSettingsForUser()
                        .then(function (settings) { return _this.settings = settings; });
                };
                SettingsComponent.prototype.save = function () {
                    this.settingsService.save(this.settings);
                    this.toasterService.pop('success', "Saved!");
                };
                SettingsComponent.prototype.changeAssigned = function () {
                    this.settings.assigned = !this.settings.assigned;
                };
                SettingsComponent.prototype.setAssigned = function () {
                    return this.settings.assigned == true ? 'switch-on' : 'switch-off';
                };
                SettingsComponent.prototype.changeCreator = function () {
                    this.settings.creator = !this.settings.creator;
                };
                SettingsComponent.prototype.setCreator = function () {
                    return this.settings.creator == true ? 'switch-on' : 'switch-off';
                };
                SettingsComponent.prototype.changeComment = function () {
                    this.settings.comment = !this.settings.comment;
                };
                SettingsComponent.prototype.setComment = function () {
                    return this.settings.comment == true ? 'switch-on' : 'switch-off';
                };
                SettingsComponent.prototype.changeAnswer = function () {
                    this.settings.answer = !this.settings.answer;
                };
                SettingsComponent.prototype.setAnswer = function () {
                    return this.settings.answer == true ? 'switch-on' : 'switch-off';
                };
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings',
                        templateUrl: './src/app/user/settings/settings.component.html',
                        providers: [settings_service_1.SettingsService, angular2_toaster_1.ToasterService],
                        directives: [router_1.RouterOutlet, router_deprecated_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_bootstrap_2.ModalDirective, angular2_toaster_1.ToasterContainerComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [settings_service_1.SettingsService, current_user_service_1.CurrentUserService, angular2_toaster_1.ToasterService])
                ], SettingsComponent);
                return SettingsComponent;
            }());
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBTUksMkJBQW9CLGVBQStCLEVBQy9CLGtCQUFxQyxFQUNyQyxjQUE2QjtvQkFGN0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUNyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFMekMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO29CQU8vQixJQUFJLENBQUMsbUJBQW1CLEdBQUMsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRVYsb0NBQVEsR0FBUjtvQkFBQSxpQkFHRTtvQkFGRSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFO3lCQUN4QyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELGdDQUFJLEdBQUo7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQ1QsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsMENBQWMsR0FBZDtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELHVDQUFXLEdBQVg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUMsWUFBWSxDQUFDO2dCQUNuRSxDQUFDO2dCQUVELHlDQUFhLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLEdBQUcsV0FBVyxHQUFDLFlBQVksQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCx5Q0FBYSxHQUFiO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsc0NBQVUsR0FBVjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBQyxZQUFZLENBQUM7Z0JBQ2xFLENBQUM7Z0JBR0Qsd0NBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELHFDQUFTLEdBQVQ7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUMsWUFBWSxDQUFDO2dCQUNqRSxDQUFDO2dCQW5FTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsaURBQWlEO3dCQUM5RCxTQUFTLEVBQUUsQ0FBRSxrQ0FBZSxFQUFDLGlDQUFjLENBQUM7d0JBQzVDLFVBQVUsRUFBRSxDQUFDLHFCQUFZLEVBQUUscUNBQWlCLEVBQUUsd0JBQWUsRUFBQyw4QkFBYyxFQUFDLDRDQUF5QixDQUFDO3dCQUN2RyxhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBQyxtREFBeUIsQ0FBQztxQkFDbkQsQ0FBQzs7cUNBQUE7Z0JBZ0VGLHdCQUFDO1lBQUQsQ0E3REEsQUE2REMsSUFBQTtZQTdERCxpREE2REMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWcsUm91dGVyT3V0bGV0fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7TU9EQUxfRElSRUNUSVZFUywgQlNfVklFV19QUk9WSURFUlN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCJcclxuaW1wb3J0IHtTZXR0aW5nc1NlcnZpY2V9IGZyb20gJy4vc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLy4uL3VzZXInO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7VG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCwgVG9hc3RlclNlcnZpY2UsIFRvYXN0ZXJDb25maWd9IGZyb20gJ2FuZ3VsYXIyLXRvYXN0ZXIvYW5ndWxhcjItdG9hc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvdXNlci9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFsgU2V0dGluZ3NTZXJ2aWNlLFRvYXN0ZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsTW9kYWxEaXJlY3RpdmUsVG9hc3RlckNvbnRhaW5lckNvbXBvbmVudF0sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOlVzZXI7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50VXNlclNlcnZpY2UgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczpTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzU2VydmljZTpTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1cnJlbnRVc2VyU2VydmljZTpDdXJyZW50VXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOlRvYXN0ZXJTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2U9SGVhZGVyQ29tcG9uZW50LmN1cnJlbnRVc2VyU2VydmljZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgdGhpcy5zZXR0aW5nc1NlcnZpY2UuZ2V0U2V0dGluZ3NGb3JVc2VyKClcclxuICAgICAgIC50aGVuKHNldHRpbmdzID0+IHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLnNhdmUodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5wb3AoJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgXCJTYXZlZCFcIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUFzc2lnbmVkKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hc3NpZ25lZCAgPSAhdGhpcy5zZXR0aW5ncy5hc3NpZ25lZDsgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRBc3NpZ25lZCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hc3NpZ25lZCA9PSB0cnVlID8gJ3N3aXRjaC1vbic6J3N3aXRjaC1vZmYnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNyZWF0b3IoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmNyZWF0b3IgID0gIXRoaXMuc2V0dGluZ3MuY3JlYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDcmVhdG9yKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNyZWF0b3IgPT0gdHJ1ZSA/ICdzd2l0Y2gtb24nOidzd2l0Y2gtb2ZmJztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21tZW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jb21tZW50ICA9ICF0aGlzLnNldHRpbmdzLmNvbW1lbnQ7ICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb21tZW50KCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNvbW1lbnQgPT0gdHJ1ZSA/ICdzd2l0Y2gtb24nOidzd2l0Y2gtb2ZmJztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNoYW5nZUFuc3dlcigpe1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYW5zd2VyICA9ICF0aGlzLnNldHRpbmdzLmFuc3dlcjsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5zd2VyKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFuc3dlciA9PSB0cnVlID8gJ3N3aXRjaC1vbic6J3N3aXRjaC1vZmYnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxufSJdfQ==
