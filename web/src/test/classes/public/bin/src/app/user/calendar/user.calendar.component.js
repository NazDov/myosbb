System.register(["@angular/core", "primeng/primeng", "../../event/event.interface", "ng2-translate/ng2-translate", "../../../shared/pipes/capitalize-first-letter", "../../event/event.service", "../../../shared/services/current.user.service", 'moment', "@angular/router"], function(exports_1, context_1) {
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
    var core_1, primeng_1, event_interface_1, ng2_translate_1, capitalize_first_letter_1, event_service_1, current_user_service_1, moment_1, router_1;
    var UserCalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (event_interface_1_1) {
                event_interface_1 = event_interface_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserCalendarComponent = (function () {
                function UserCalendarComponent(eventService, cd, translate, currentUserService, router) {
                    this.eventService = eventService;
                    this.cd = cd;
                    this.translate = translate;
                    this.currentUserService = currentUserService;
                    this.router = router;
                    this.event = new event_interface_1.Event;
                    this.dialogVisible = false;
                    this.idGen = 100;
                    this.lang = "uk";
                    this.currentUser = currentUserService.getUser();
                }
                UserCalendarComponent.prototype.getLang = function () {
                    var lang = this.translate.currentLang;
                    if (this.lang != lang)
                        this.ngOnInit();
                    return this[lang];
                };
                UserCalendarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventService.getEvents().then(function (events) {
                        _this.events = events;
                        console.log("component : " + _this.events);
                    });
                    this.lang = this.translate.currentLang;
                    console.log("calendar lang " + this.lang);
                    this.uk = {
                        monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень',
                            'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                        monthNamesShort: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв',
                            'Лип', 'Серп', 'Верес', 'Жовт', 'Лист', 'Груд'],
                        dayNames: ['Неділя', 'Понеділок', 'Вівторорк', 'Середа',
                            'Четвер', 'Пятниця', 'Субота'],
                        dayNamesShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                        buttonText: {
                            today: 'сьогодні',
                            month: 'місяць',
                            week: 'тиждень',
                            day: 'день'
                        },
                        allDayText: 'Весь день'
                    };
                    this.header = {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    };
                };
                UserCalendarComponent.prototype.handleDayClick = function (event) {
                    this.event = new event_interface_1.Event();
                    this.event.start = moment_1.default(event.date).format("YYYY-MM-DDTHH:mm:ss");
                    this.event.end = moment_1.default(event.date).hours(12).minute(0).format("YYYY-MM-DDTHH:mm:ss");
                    console.log(this.event.start);
                    this.dialogVisible = true;
                    this.cd.detectChanges();
                };
                UserCalendarComponent.prototype.handleEventClick = function (e) {
                    this.event = new event_interface_1.Event();
                    this.event.title = e.calEvent.title;
                    var start = e.calEvent.start;
                    var end = e.calEvent.end;
                    if (e.view.title === 'month') {
                        start.stripTime();
                    }
                    if (end) {
                        this.event.end = end.format();
                    }
                    this.event.id = e.calEvent.id;
                    this.event.start = moment_1.default(start).format("YYYY-MM-DDTHH:mm:ss");
                    this.event.end = moment_1.default(end).format("YYYY-MM-DDTHH:mm:ss");
                    this.dialogVisible = true;
                };
                UserCalendarComponent.prototype.saveEvent = function (event) {
                    this.event.author = this.currentUser;
                    //update
                    if (this.event.id) {
                        this.eventService.editAndSave(event);
                        var index = this.findEventIndexById(this.event.id);
                        if (index >= 0) {
                            this.event = event;
                            this.events[index] = this.event;
                            this.eventService.editAndSave(this.event);
                        }
                    }
                    else {
                        this.event.id = this.idGen;
                        this.events.push(this.event);
                        this.eventService.addEvent(this.event);
                        this.event = null;
                    }
                    this.dialogVisible = false;
                };
                UserCalendarComponent.prototype.deleteEvent = function () {
                    var index = this.findEventIndexById(this.event.id);
                    this.eventService.deleteEventById(this.event.id);
                    if (index >= 0) {
                        this.events.splice(index, 1);
                    }
                    this.dialogVisible = false;
                };
                UserCalendarComponent.prototype.findEventIndexById = function (id) {
                    var index = -1;
                    for (var i = 0; i < this.events.length; i++) {
                        if (id == this.events[i].id) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
                UserCalendarComponent.prototype.getHeight = function () {
                    if (this.router.url.includes("calendar")) {
                        return 600;
                    }
                    else {
                        return 300;
                    }
                };
                UserCalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-calendar',
                        templateUrl: 'src/app/user/calendar/calendar.html',
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        providers: [event_service_1.EventService],
                        directives: [primeng_1.Schedule, primeng_1.Dialog, primeng_1.Button, primeng_1.InputText, primeng_1.Calendar, primeng_1.ToggleButton],
                        styleUrls: ['src/shared/css/loader.css', 'src/shared/css/general.css']
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, core_1.ChangeDetectorRef, ng2_translate_1.TranslateService, current_user_service_1.CurrentUserService, router_1.Router])
                ], UserCalendarComponent);
                return UserCalendarComponent;
            }());
            exports_1("UserCalendarComponent", UserCalendarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NhbGVuZGFyL3VzZXIuY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQVdJLCtCQUFvQixZQUEwQixFQUFVLEVBQXFCLEVBQ3pELFNBQTJCLEVBQVUsa0JBQXFDLEVBQzFFLE1BQWM7b0JBRmQsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7b0JBQ3pELGNBQVMsR0FBVCxTQUFTLENBQWtCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBQzFFLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBVGxDLFVBQUssR0FBVSxJQUFJLHVCQUFLLENBQUM7b0JBQ3pCLGtCQUFhLEdBQVksS0FBSyxDQUFDO29CQUMvQixVQUFLLEdBQVcsR0FBRyxDQUFDO29CQUVwQixTQUFJLEdBQVcsSUFBSSxDQUFDO29CQU1oQixJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELHVDQUFPLEdBQVA7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO3dCQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUFBLGlCQStCQztvQkE5QkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO3dCQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFMUMsSUFBSSxDQUFDLEVBQUUsR0FBRzt3QkFDTixVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFROzRCQUNqRixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO3dCQUM1RCxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07NEJBQ3pELEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO3dCQUNuRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFROzRCQUNuRCxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQzt3QkFDbEMsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO3dCQUN6RCxVQUFVLEVBQUU7NEJBQ1IsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLEtBQUssRUFBRSxRQUFROzRCQUNmLElBQUksRUFBRSxTQUFTOzRCQUNmLEdBQUcsRUFBRSxNQUFNO3lCQUNkO3dCQUNELFVBQVUsRUFBRSxXQUFXO3FCQUMxQixDQUFDO29CQUVGLElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ1YsSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsTUFBTSxFQUFFLE9BQU87d0JBQ2YsS0FBSyxFQUFFLDRCQUE0QjtxQkFDdEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDhDQUFjLEdBQWQsVUFBZSxLQUFLO29CQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBUyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQVMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQztvQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFFcEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xDLENBQUM7b0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFTLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFTLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHlDQUFTLEdBQVQsVUFBVSxLQUFZO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxRQUFRO29CQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JDLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMzRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzlDLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsMkNBQVcsR0FBWDtvQkFDSSxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakQsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO29CQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELGtEQUFrQixHQUFsQixVQUFtQixFQUFVO29CQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDZixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQzFCLEtBQUssR0FBRyxDQUFDLENBQUM7NEJBQ1YsS0FBSyxDQUFDO3dCQUNWLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELHlDQUFTLEdBQVQ7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztnQkFDTCxDQUFDO2dCQTdJTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO3dCQUN6QixVQUFVLEVBQUUsQ0FBQyxrQkFBUSxFQUFFLGdCQUFNLEVBQUUsZ0JBQU0sRUFBRSxtQkFBUyxFQUFFLGtCQUFRLEVBQUUsc0JBQVksQ0FBQzt3QkFDekUsU0FBUyxFQUFFLENBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7cUJBQzFFLENBQUM7O3lDQUFBO2dCQXVJRiw0QkFBQztZQUFELENBcklBLEFBcUlDLElBQUE7WUFySUQseURBcUlDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NhbGVuZGFyL3VzZXIuY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0LCBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2NoZWR1bGUsIERpYWxvZywgQnV0dG9uLCBJbnB1dFRleHQsIENhbGVuZGFyLCBUb2dnbGVCdXR0b259IGZyb20gXCJwcmltZW5nL3ByaW1lbmdcIjtcclxuaW1wb3J0IHtFdmVudH0gZnJvbSBcIi4uLy4uL2V2ZW50L2V2ZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVNlcnZpY2V9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7RXZlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZXZlbnQvZXZlbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWNhbGVuZGFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL2NhbGVuZGFyL2NhbGVuZGFyLmh0bWwnLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIHByb3ZpZGVyczogW0V2ZW50U2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU2NoZWR1bGUsIERpYWxvZywgQnV0dG9uLCBJbnB1dFRleHQsIENhbGVuZGFyLCBUb2dnbGVCdXR0b25dLFxyXG4gICAgc3R5bGVVcmxzOiBbICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGV2ZW50czogRXZlbnRbXTtcclxuICAgIGhlYWRlcjogYW55O1xyXG4gICAgZXZlbnQ6IEV2ZW50ID0gbmV3IEV2ZW50O1xyXG4gICAgZGlhbG9nVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaWRHZW46IG51bWJlciA9IDEwMDtcclxuICAgIHVrOiBhbnk7XHJcbiAgICBsYW5nOiBzdHJpbmcgPSBcInVrXCI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOlVzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclNlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhbmcoKSB7XHJcbiAgICAgICAgbGV0IGxhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZztcclxuICAgICAgICBpZiAodGhpcy5sYW5nICE9IGxhbmcpIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpc1tsYW5nXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRFdmVudHMoKS50aGVuKGV2ZW50cyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCA6IFwiICsgdGhpcy5ldmVudHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmcgPSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbGVuZGFyIGxhbmcgXCIgKyB0aGlzLmxhbmcpO1xyXG5cclxuICAgICAgICB0aGlzLnVrID0ge1xyXG4gICAgICAgICAgICBtb250aE5hbWVzOiBbJ9Ch0ZbRh9C10L3RjCcsICfQm9GO0YLQuNC5JywgJ9CR0LXRgNC10LfQtdC90YwnLCAn0JrQstGW0YLQtdC90YwnLCAn0KLRgNCw0LLQtdC90YwnLCAn0KfQtdGA0LLQtdC90YwnLCAn0JvQuNC/0LXQvdGMJyxcclxuICAgICAgICAgICAgICAgICfQodC10YDQv9C10L3RjCcsICfQktC10YDQtdGB0LXQvdGMJywgJ9CW0L7QstGC0LXQvdGMJywgJ9Cb0LjRgdGC0L7Qv9Cw0LQnLCAn0JPRgNGD0LTQtdC90YwnXSxcclxuICAgICAgICAgICAgbW9udGhOYW1lc1Nob3J0OiBbJ9Ch0ZbRhycsICfQm9GO0YInLCAn0JHQtdGAJywgJ9Ca0LLRltGCJywgJ9Ci0YDQsNCyJywgJ9Cn0LXRgNCyJyxcclxuICAgICAgICAgICAgICAgICfQm9C40L8nLCAn0KHQtdGA0L8nLCAn0JLQtdGA0LXRgScsICfQltC+0LLRgicsICfQm9C40YHRgicsICfQk9GA0YPQtCddLFxyXG4gICAgICAgICAgICBkYXlOYW1lczogWyfQndC10LTRltC70Y8nLCAn0J/QvtC90LXQtNGW0LvQvtC6JywgJ9CS0ZbQstGC0L7RgNC+0YDQuicsICfQodC10YDQtdC00LAnLFxyXG4gICAgICAgICAgICAgICAgJ9Cn0LXRgtCy0LXRgCcsICfQn9GP0YLQvdC40YbRjycsICfQodGD0LHQvtGC0LAnXSxcclxuICAgICAgICAgICAgZGF5TmFtZXNTaG9ydDogWyfQndC0JywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAn0YHRjNC+0LPQvtC00L3RlicsXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ9C80ZbRgdGP0YbRjCcsXHJcbiAgICAgICAgICAgICAgICB3ZWVrOiAn0YLQuNC20LTQtdC90YwnLFxyXG4gICAgICAgICAgICAgICAgZGF5OiAn0LTQtdC90YwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFsbERheVRleHQ6ICfQktC10YHRjCDQtNC10L3RjCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IHtcclxuICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICdtb250aCxhZ2VuZGFXZWVrLGFnZW5kYURheSdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURheUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuc3RhcnQgPSA8RGF0ZT5tb21lbnQoZXZlbnQuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbTpzc1wiKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmVuZCA9IDxEYXRlPm1vbWVudChldmVudC5kYXRlKS5ob3VycygxMikubWludXRlKDApLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW06c3NcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVudC5zdGFydCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFdmVudENsaWNrKGUpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC50aXRsZSA9IGUuY2FsRXZlbnQudGl0bGU7XHJcblxyXG4gICAgICAgIGxldCBzdGFydCA9IGUuY2FsRXZlbnQuc3RhcnQ7XHJcbiAgICAgICAgbGV0IGVuZCA9IGUuY2FsRXZlbnQuZW5kO1xyXG4gICAgICAgIGlmIChlLnZpZXcudGl0bGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgICAgc3RhcnQuc3RyaXBUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudC5lbmQgPSBlbmQuZm9ybWF0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50LmlkID0gZS5jYWxFdmVudC5pZDtcclxuICAgICAgICB0aGlzLmV2ZW50LnN0YXJ0ID0gPERhdGU+bW9tZW50KHN0YXJ0KS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tOnNzXCIpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuZW5kID0gPERhdGU+bW9tZW50KGVuZCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbTpzc1wiKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVFdmVudChldmVudDogRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmV2ZW50LmF1dGhvciA9IHRoaXMuY3VycmVudFVzZXI7XHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICBpZiAodGhpcy5ldmVudC5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5lZGl0QW5kU2F2ZShldmVudCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5maW5kRXZlbnRJbmRleEJ5SWQodGhpcy5ldmVudC5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tpbmRleF0gPSB0aGlzLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2UuZWRpdEFuZFNhdmUodGhpcy5ldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudC5pZCA9IHRoaXMuaWRHZW47XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2godGhpcy5ldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmFkZEV2ZW50KHRoaXMuZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRXZlbnQoKSB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmZpbmRFdmVudEluZGV4QnlJZCh0aGlzLmV2ZW50LmlkKTtcclxuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5kZWxldGVFdmVudEJ5SWQodGhpcy5ldmVudC5pZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEV2ZW50SW5kZXhCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLmV2ZW50c1tpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsLmluY2x1ZGVzKFwiY2FsZW5kYXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDYwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
