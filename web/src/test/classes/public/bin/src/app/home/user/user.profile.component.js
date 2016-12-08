System.register(['@angular/core', '../../../shared/models/User', '@angular/router', '@angular/forms', "ng2-translate", "../../../shared/pipes/capitalize-first-letter", 'angular2-text-mask', "../../header/header.component", "../../../shared/services/current.user.service"], function(exports_1, context_1) {
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
    var core_1, User_1, router_1, forms_1, ng2_translate_1, capitalize_first_letter_1, angular2_text_mask_1, header_component_1, current_user_service_1, router_2;
    var UserProfileComponent;
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
                router_2 = router_1_1;
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
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent(router, routeParams, userService) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.userService = userService;
                    this.user = new User_1.User();
                    this._currentUserService = null;
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this._currentUserService.getUser();
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.routeParams.params.subscribe(function (params) {
                        _this.userId = +params['id'];
                        _this.userService.getUserById(_this.userId)
                            .subscribe(function (data) {
                            _this.user = data;
                        }, function (error) {
                            console.error(error);
                        });
                    });
                };
                UserProfileComponent.prototype.getTime = function (time) {
                    return new Date(time).toLocaleDateString();
                };
                UserProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'friend',
                        templateUrl: 'src/app/home/user/user.profile.html',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, angular2_text_mask_1.default, header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/app/home/user/profile.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.ActivatedRoute, current_user_service_1.CurrentUserService])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3VzZXIvdXNlci5wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBT0ksOEJBQW9CLE1BQWEsRUFDYixXQUEwQixFQUMxQixXQUE4QjtvQkFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtvQkFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO29CQVIxQyxTQUFJLEdBQVEsSUFBSSxXQUFJLEVBQUUsQ0FBQztvQkFJL0Isd0JBQW1CLEdBQUcsSUFBSSxDQUFDO29CQUt2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFBQSxpQkFhQztvQkFaRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07d0JBQ2hELEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUM7NkJBQ3BDLFNBQVMsQ0FBQyxVQUFDLElBQUk7NEJBQ1IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7d0JBQ3BCLENBQUMsRUFDRCxVQUFDLEtBQUs7NEJBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDeEIsQ0FBQyxDQUNKLENBQUE7b0JBQ1QsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQztnQkFFRCxzQ0FBTyxHQUFQLFVBQVEsSUFBUztvQkFDYixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDL0MsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLEVBQUUsNEJBQVcsRUFBRSxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO3dCQUN2RixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQzt3QkFDdkcsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQztxQkFFcEQsQ0FBQzs7d0NBQUE7Z0JBa0NGLDJCQUFDO1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCx1REFpQ0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlci91c2VyLnByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQge1JvdXRlcixST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIlxyXG5pbXBvcnQgTWFza2VkSW5wdXQgZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZyaWVuZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvaG9tZS91c2VyL3VzZXIucHJvZmlsZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIE1hc2tlZElucHV0LCBIZWFkZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL2hvbWUvdXNlci9wcm9maWxlLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSB1c2VyOlVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgcHJpdmF0ZSBzdWI6U3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSB1c2VySWQ6bnVtYmVyO1xyXG4gICAgY3VycmVudFVzZXI6VXNlcjtcclxuICAgIF9jdXJyZW50VXNlclNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVQYXJhbXM6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZSA9IEhlYWRlckNvbXBvbmVudC5jdXJyZW50VXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVBhcmFtcy5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQodGhpcy51c2VySWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKHRpbWU6RGF0ZSk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG59Il19
