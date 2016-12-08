System.register(['@angular/core', '../../../shared/models/User', '@angular/router', '@angular/forms', "ng2-translate", "../../../shared/pipes/capitalize-first-letter", 'angular2-text-mask', 'node_modules/text-mask-addons/dist/emailMask.js', "../../header/header.component", "../../../shared/services/current.user.service", "./profile.service"], function(exports_1, context_1) {
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
    var core_1, User_1, router_1, forms_1, ng2_translate_1, capitalize_first_letter_1, angular2_text_mask_1, emailMask_js_1, header_component_1, current_user_service_1, profile_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (angular2_text_mask_1_1) {
                angular2_text_mask_1 = angular2_text_mask_1_1;
            },
            function (emailMask_js_1_1) {
                emailMask_js_1 = emailMask_js_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(router, currentUserService, profileService) {
                    this.router = router;
                    this.currentUserService = currentUserService;
                    this.profileService = profileService;
                    this.updateUser = new User_1.User();
                    this.emailMask = emailMask_js_1.default;
                    this.textmask = [/[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/];
                    this.phoneMask = ['(', /[0]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                    this.currentUser = header_component_1.HeaderComponent.currentUserService.currentUser;
                    this.updateUser = Object.assign({}, this.currentUser);
                    console.log('constructore');
                    this.expToken = localStorage.getItem('expires_in');
                    this.expToken = new Date(parseInt(this.expToken)).toLocaleString();
                    console.log(this.currentUser);
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    // this.currentUser.birthDate = new Date(this.currentUser.birthDate).toLocaleDateString();
                };
                ProfileComponent.prototype.getTime = function (time) {
                    return new Date(time).toLocaleDateString();
                };
                ProfileComponent.prototype.changeUser = function () {
                    var _this = this;
                    this.profileService.updateUser(this.updateUser).subscribe(function (data) {
                        _this.currentUserService.setUser(data);
                        _this.currentUser = header_component_1.HeaderComponent.currentUserService.currentUser;
                        _this.updateUser = Object.assign({}, _this.currentUser);
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'my-user-profile',
                        templateUrl: 'src/app/user/profile/profile.html',
                        providers: [profile_service_1.ProfileService],
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, angular2_text_mask_1.default, header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/app/user/profile/profile.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, current_user_service_1.CurrentUserService, profile_service_1.ProfileService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBU0ksMEJBQW9CLE1BQWEsRUFBVSxrQkFBcUMsRUFBVSxjQUE2QjtvQkFBbkcsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQU52SCxlQUFVLEdBQVEsSUFBSSxXQUFJLEVBQUUsQ0FBQztvQkFFdEIsY0FBUyxHQUFHLHNCQUFTLENBQUM7b0JBQ3RCLGFBQVEsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUNuWSxjQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBR2pHLElBQUksQ0FBQyxXQUFXLEdBQUcsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNJLDBGQUEwRjtnQkFDOUYsQ0FBQztnQkFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBUztvQkFDYixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDL0MsQ0FBQztnQkFFQSxxQ0FBVSxHQUFWO29CQUFBLGlCQU1BO29CQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUMzRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0QyxLQUFJLENBQUMsV0FBVyxHQUFDLGtDQUFlLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO3dCQUNoRSxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkF6Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsbUNBQW1DO3dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsRUFBRSw0QkFBVyxFQUFFLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3ZGLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO3dCQUMvQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3FCQUVwRCxDQUFDOztvQ0FBQTtnQkFtQ0YsdUJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELCtDQWtDQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQge1JvdXRlcixST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIlxyXG5pbXBvcnQgTWFza2VkSW5wdXQgZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcclxuaW1wb3J0IGVtYWlsTWFzayBmcm9tICdub2RlX21vZHVsZXMvdGV4dC1tYXNrLWFkZG9ucy9kaXN0L2VtYWlsTWFzay5qcyc7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS11c2VyLXByb2ZpbGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3VzZXIvcHJvZmlsZS9wcm9maWxlLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgTWFza2VkSW5wdXQsIEhlYWRlckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY3NzJ10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjdXJyZW50VXNlcjpVc2VyO1xyXG4gICAgY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZTtcclxuICAgIHVwZGF0ZVVzZXI6VXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICBwcml2YXRlIGV4cFRva2VuOnN0cmluZztcclxuICAgIHB1YmxpYyBlbWFpbE1hc2sgPSBlbWFpbE1hc2s7XHJcbiAgICBwdWJsaWMgdGV4dG1hc2sgPSBbL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS8sIC9bQS160JAt0Y/Qhi3Rll0vLCAvW0EtetCQLdGP0IYt0ZZdLywgL1tBLXrQkC3Rj9CGLdGWXS9dO1xyXG4gICAgcHVibGljIHBob25lTWFzayA9IFsnKCcsIC9bMF0vLCAvXFxkLywgL1xcZC8sICcpJywgJyAnLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAnLScsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSwgcHJpdmF0ZSBwcm9maWxlU2VydmljZTpQcm9maWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3VycmVudFVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcmUnKTtcclxuICAgICAgICB0aGlzLmV4cFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNfaW4nKTtcclxuICAgICAgICB0aGlzLmV4cFRva2VuID0gbmV3IERhdGUocGFyc2VJbnQodGhpcy5leHBUb2tlbikpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50VXNlci5iaXJ0aERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWUodGltZTpEYXRlKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAgY2hhbmdlVXNlcigpIHtcclxuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51cGRhdGVVc2VyKS5zdWJzY3JpYmUoKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXI9SGVhZGVyQ29tcG9uZW50LmN1cnJlbnRVc2VyU2VydmljZS5jdXJyZW50VXNlcjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jdXJyZW50VXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==
