System.register(["@angular/core", "@angular/router", 'moment', "../voting/vote.component", '../../admin/components/osbb/osbb.service', '../../user/calendar/user.calendar.component', "ng2-translate", "../../../shared/pipes/capitalize-first-letter", "../../../shared/services/current.user.service"], function(exports_1, context_1) {
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
    var core_1, router_1, moment_1, vote_component_1, osbb_service_1, user_calendar_component_1, ng2_translate_1, capitalize_first_letter_1, current_user_service_1;
    var HomeWallComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (osbb_service_1_1) {
                osbb_service_1 = osbb_service_1_1;
            },
            function (user_calendar_component_1_1) {
                user_calendar_component_1 = user_calendar_component_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            HomeWallComponent = (function () {
                function HomeWallComponent(osbbService, currentUserService) {
                    this.osbbService = osbbService;
                    this.currentUserService = currentUserService;
                    this.currentOsbb = null;
                }
                HomeWallComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.osbbService.getDTOOsbbById(this.currentUserService.getUser().osbbId).then(function (osbb) { return _this.currentOsbb = osbb; });
                };
                HomeWallComponent.prototype.getFormatDate = function () {
                    return moment_1.default(this.currentOsbb.creationDate).format("DD.MM.YYYY");
                };
                HomeWallComponent.prototype.getLogoUrl = function () {
                    if (this.currentOsbb.logo != null) {
                        return this.currentOsbb.logo.url;
                    }
                    return '';
                };
                HomeWallComponent.prototype.getCreatorInfo = function () {
                    if (this.currentOsbb.creator !== null) {
                        return this.currentOsbb.creator.firstName + " " + this.currentOsbb.creator.lastName + " " + this.currentOsbb.creator.email;
                    }
                    else {
                        return '';
                    }
                };
                HomeWallComponent = __decorate([
                    core_1.Component({
                        selector: 'home-wall',
                        templateUrl: './src/app/home/home_wall/home.wall.html',
                        styleUrls: ['./src/app/home/home_wall/home.wall.css'],
                        providers: [osbb_service_1.OsbbService],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_component_1.VoteComponent, user_calendar_component_1.UserCalendarComponent],
                        pipes: [capitalize_first_letter_1.CapitalizeFirstLetterPipe, ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [osbb_service_1.OsbbService, current_user_service_1.CurrentUserService])
                ], HomeWallComponent);
                return HomeWallComponent;
            }());
            exports_1("HomeWallComponent", HomeWallComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWVfd2FsbC9ob21lLndhbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUtJLDJCQUFvQixXQUF3QixFQUFVLGtCQUFxQztvQkFBdkUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsb0NBQVEsR0FBUjtvQkFBQSxpQkFFQztvQkFERyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUEsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQXZCLENBQXVCLENBQUUsQ0FBQztnQkFDdkgsQ0FBQztnQkFFQSx5Q0FBYSxHQUFiO29CQUNDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUVELHNDQUFVLEdBQVY7b0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDOUIsTUFBTSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDdEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsMENBQWMsR0FBZDtvQkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDL0gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsRUFBRSxDQUFDO29CQUNkLENBQUM7Z0JBQ0wsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLHlDQUF5Qzt3QkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7d0JBQ3JELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDhCQUFhLEVBQUUsK0NBQXFCLENBQUM7d0JBQ3JFLEtBQUssRUFBQyxDQUFDLG1EQUF5QixFQUFFLDZCQUFhLENBQUM7cUJBQ25ELENBQUM7O3FDQUFBO2dCQWdDRix3QkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQsaURBK0JDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWVfd2FsbC9ob21lLndhbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQge1ZvdGVDb21wb25lbnR9IGZyb20gXCIuLi92b3Rpbmcvdm90ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJT3NiYiwgT3NiYn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvb3NiYlwiO1xyXG5pbXBvcnQge09zYmJEVE99IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL29zYmJEVE9cIjtcclxuaW1wb3J0IHsgT3NiYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXNlci9jYWxlbmRhci91c2VyLmNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7Q3VycmVudFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQudXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZS13YWxsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL2hvbWUvaG9tZV93YWxsL2hvbWUud2FsbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NyYy9hcHAvaG9tZS9ob21lX3dhbGwvaG9tZS53YWxsLmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbT3NiYlNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBWb3RlQ29tcG9uZW50LCBVc2VyQ2FsZW5kYXJDb21wb25lbnRdLFxyXG4gICAgcGlwZXM6W0NhcGl0YWxpemVGaXJzdExldHRlclBpcGUsIFRyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lV2FsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXNMb2dnZWRJbjpib29sZWFuO1xyXG4gICAgY3VycmVudE9zYmI6IE9zYmJEVE87XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvc2JiU2VydmljZTogT3NiYlNlcnZpY2UsIHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9zYmIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLm9zYmJTZXJ2aWNlLmdldERUT09zYmJCeUlkKHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKS5vc2JiSWQpLnRoZW4oIG9zYmIgPT4gIHRoaXMuY3VycmVudE9zYmIgPSBvc2JiICk7XHJcbiAgICB9XHJcblxyXG4gICAgIGdldEZvcm1hdERhdGUoKTpzdHJpbmcge1xyXG4gICAgICByZXR1cm4gbW9tZW50KHRoaXMuY3VycmVudE9zYmIuY3JlYXRpb25EYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ29VcmwoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRPc2JiLmxvZ28gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiAgdGhpcy5jdXJyZW50T3NiYi5sb2dvLnVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRDcmVhdG9ySW5mbygpOnN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50T3NiYi5jcmVhdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRPc2JiLmNyZWF0b3IuZmlyc3ROYW1lICsgXCIgXCIgKyB0aGlzLmN1cnJlbnRPc2JiLmNyZWF0b3IubGFzdE5hbWUgKyBcIiBcIiArIHRoaXMuY3VycmVudE9zYmIuY3JlYXRvci5lbWFpbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
