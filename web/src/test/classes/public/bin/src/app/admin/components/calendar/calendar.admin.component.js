System.register(["@angular/core", "../../../user/calendar/user.calendar.component", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, user_calendar_component_1, router_1;
    var CalendarAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_calendar_component_1_1) {
                user_calendar_component_1 = user_calendar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CalendarAdminComponent = (function () {
                function CalendarAdminComponent() {
                }
                CalendarAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-calendar',
                        templateUrl: 'src/app/admin/components/calendar/calendar.admin.html',
                        directives: [user_calendar_component_1.UserCalendarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CalendarAdminComponent);
                return CalendarAdminComponent;
            }());
            exports_1("CalendarAdminComponent", CalendarAdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO2dCQUVBLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FDTjt3QkFDSSxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsdURBQXVEO3dCQUNwRSxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSwwQkFBaUIsQ0FBQztxQkFDekQsQ0FDSjs7MENBQUE7Z0JBSUQsNkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDJEQUVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmFkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi91c2VyL2NhbGVuZGFyL3VzZXIuY2FsZW5kYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudChcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FkbWluLWNhbGVuZGFyJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5hZG1pbi5odG1sJyxcclxuICAgICAgICBkaXJlY3RpdmVzOiBbVXNlckNhbGVuZGFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxuICAgIH1cclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQWRtaW5Db21wb25lbnQge1xyXG5cclxufSJdfQ==
