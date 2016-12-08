System.register(["@angular/core", "./../../user/calendar/user.calendar.component"], function(exports_1, context_1) {
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
    var core_1, user_calendar_component_1;
    var CalendarHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_calendar_component_1_1) {
                user_calendar_component_1 = user_calendar_component_1_1;
            }],
        execute: function() {
            CalendarHomeComponent = (function () {
                function CalendarHomeComponent() {
                }
                CalendarHomeComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar-home',
                        template: "\n    <div class=\"row sb-backdown\">\n                <my-calendar>\n                </my-calendar>\n    </div>\n    ",
                        styleUrls: ['src/shared/css/loader.css', 'src/shared/css/general.css'],
                        directives: [user_calendar_component_1.UserCalendarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CalendarHomeComponent);
                return CalendarHomeComponent;
            }());
            exports_1("CalendarHomeComponent", CalendarHomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NhbGVuZGFyL2NhbGVuZGFyLmhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsd0hBS1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7d0JBQ3ZFLFVBQVUsRUFBRSxDQUFDLCtDQUFxQixDQUFDO3FCQUN0QyxDQUFDOzt5Q0FBQTtnQkFHRiw0QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseURBRUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsZW5kYXIvY2FsZW5kYXIuaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyQ2FsZW5kYXJDb21wb25lbnR9IGZyb20gXCIuLy4uLy4uL3VzZXIvY2FsZW5kYXIvdXNlci5jYWxlbmRhci5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhci1ob21lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IHNiLWJhY2tkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8bXktY2FsZW5kYXI+XHJcbiAgICAgICAgICAgICAgICA8L215LWNhbGVuZGFyPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbVXNlckNhbGVuZGFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIb21lQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIl19
