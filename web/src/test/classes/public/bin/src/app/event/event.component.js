System.register(["@angular/core", "@angular/common", "./event.interface", "./event.service", "rxjs/Rx", "ng2-bootstrap/ng2-bootstrap", "ng2-translate/ng2-translate", "../../shared/pipes/capitalize-first-letter", "../../shared/models/periodicity.const", "../header/header.component", "ng2-bs-dropdown/dropdown", "ng2-select", "../../shared/pipes/active.filter", "../../shared/services/current.user.service", "@angular/router", 'moment', "ng2-file-upload", "../admin/components/attachment/modals/file-upload-modal", "../admin/components/attachment/attachment.service"], function(exports_1, context_1) {
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
    var core_1, common_1, event_interface_1, event_service_1, ng2_bootstrap_1, ng2_translate_1, capitalize_first_letter_1, periodicity_const_1, header_component_1, dropdown_1, ng2_select_1, active_filter_1, current_user_service_1, router_1, moment_1, ng2_file_upload_1, file_upload_modal_1, attachment_service_1;
    var EventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (event_interface_1_1) {
                event_interface_1 = event_interface_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (_1) {},
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (periodicity_const_1_1) {
                periodicity_const_1 = periodicity_const_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (active_filter_1_1) {
                active_filter_1 = active_filter_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (file_upload_modal_1_1) {
                file_upload_modal_1 = file_upload_modal_1_1;
            },
            function (attachment_service_1_1) {
                attachment_service_1 = attachment_service_1_1;
            }],
        execute: function() {
            EventComponent = (function () {
                function EventComponent(_eventService, _attachmentService, currentUserService, _router) {
                    this._eventService = _eventService;
                    this._attachmentService = _attachmentService;
                    this.currentUserService = currentUserService;
                    this._router = _router;
                    this.active = true;
                    this.pageList = [];
                    this.pageNumber = 1;
                    this.order = true;
                    this.events = [];
                    this.selectedEvent = new event_interface_1.Event;
                    this.newEvent = new event_interface_1.Event;
                    this.showAllEvents = true;
                    this.repeat = [];
                    this.pending = false;
                    this.currentUser = currentUserService.currentUser;
                }
                EventComponent.prototype.ngOnInit = function () {
                    for (var i = 0; i < periodicity_const_1.PeriodicityItems.length; i++) {
                        this.repeat.push(periodicity_const_1.PeriodicityItems[i]);
                    }
                    this.getRepeatTranslation();
                    this.newEvent.attachments = [];
                    this.getEventsByPageNum(this.pageNumber);
                };
                EventComponent.prototype.getEventsByPageNum = function (pageNumber) {
                    var _this = this;
                    this.showAllEvents = true;
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    this.pending = true;
                    return this._eventService.getAllEvents(this.pageNumber)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.pending = false;
                        _this.events = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                ;
                EventComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getEventsByPageNum(this.pageNumber);
                };
                EventComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getEventsByPageNum(this.pageNumber);
                };
                EventComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                EventComponent.prototype.sortBy = function (title) {
                    var _this = this;
                    console.log('sorted by ', title);
                    this.order = !this.order;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this._eventService.getAllEventsSorted(this.pageNumber, title, this.order)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.events = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                EventComponent.prototype.onSearch = function (search) {
                    var _this = this;
                    console.log("inside search: search param" + search);
                    this._eventService.findEventsByNameOrAuthorOrDescription(search)
                        .subscribe(function (events) {
                        console.log("data: " + events);
                        _this.events = events;
                    });
                };
                EventComponent.prototype.filterByStatus = function (status) {
                    var _this = this;
                    console.log("inside search: status is " + status);
                    this._eventService.findEventsByStatus(status)
                        .subscribe(function (events) {
                        console.log("data: " + events);
                        _this.events = events;
                    });
                };
                EventComponent.prototype.filterByAuthor = function () {
                    var _this = this;
                    console.log("inside author filtering");
                    this.showAllEvents = false;
                    this._eventService.findEventsByAuthor()
                        .subscribe(function (events) {
                        _this.events = events;
                    });
                };
                EventComponent.prototype.openCreateModal = function () {
                    this.createModal.show();
                };
                EventComponent.prototype.onCreateEventSubmit = function () {
                    var _this = this;
                    this.active = false;
                    console.log('creating event');
                    this.newEvent.author = this.currentUser;
                    this.newEvent.end = this.newEvent.end
                        ? this.newEvent.end
                        : moment_1.default(this.newEvent.end).hours(12).minute(0);
                    this.newEvent.repeat = this.newEvent.repeat
                        ? this.newEvent.repeat
                        : this.newEvent.repeat = "ONE_TIME";
                    this._eventService.addEvent(this.newEvent).then(function () { return _this.getEventsByPageNum(_this.pageNumber); });
                    this.createModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                    this.newEvent = new event_interface_1.Event();
                };
                EventComponent.prototype.closeCreateModal = function () {
                    console.log('closing create modal');
                    this.createModal.hide();
                };
                EventComponent.prototype.openEditModal = function (event) {
                    this.selectedEvent = event;
                    console.log(this.selectedEvent.start + "\n" + this.selectedEvent.end);
                    this.selectedEvent.start = moment_1.default(this.selectedEvent.start).format("YYYY-MM-DDTHH:mm:ss");
                    this.selectedEvent.end = moment_1.default(this.selectedEvent.end).format("YYYY-MM-DDTHH:mm:ss");
                    console.log(this.selectedEvent.start + "\n" + this.selectedEvent.end);
                    console.log('selected event: ' + this.selectedEvent);
                    this.editModal.show();
                };
                EventComponent.prototype.onEditEventSubmit = function () {
                    var _this = this;
                    this.active = false;
                    console.log('saving event: ' + this.selectedEvent);
                    this._eventService.editAndSave(this.selectedEvent).then(function () { return _this.getEventsByPageNum(_this.pageNumber); });
                    this.editModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                EventComponent.prototype.closeEditModal = function () {
                    console.log('closing edit modal');
                    this.editModal.hide();
                };
                EventComponent.prototype.openDelModal = function (id) {
                    this.id = id;
                    console.log('show', this.id);
                    this.delModal.show();
                };
                EventComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    console.log('delete', this.id);
                    this._eventService.deleteEventById(this.id).then(function () { return _this.getEventsByPageNum(_this.pageNumber); });
                    this.delModal.hide();
                };
                EventComponent.prototype.openDelAllModal = function () {
                    this.delAllModal.show();
                };
                EventComponent.prototype.closeDelAllModal = function () {
                    var _this = this;
                    console.log('delete all');
                    this._eventService.deleteAllEvents().then(function () { return _this.getEventsByPageNum(_this.pageNumber); });
                    this.delAllModal.hide();
                };
                EventComponent.prototype.onUpload = function (attachments) {
                    if (this.createModal.isShown) {
                        this.newEvent.attachments = this.newEvent.attachments.concat(attachments);
                    }
                    if (this.editModal.isShown) {
                        this.selectedEvent.attachments = this.selectedEvent.attachments.concat(attachments);
                    }
                };
                EventComponent.prototype.removeAttachment = function (attachment) {
                    if (this.createModal.isShown) {
                        var index = this.newEvent.attachments.indexOf(attachment);
                        this.newEvent.attachments.splice(index, 1);
                    }
                    if (this.editModal.isShown) {
                        var index = this.selectedEvent.attachments.indexOf(attachment);
                        this.selectedEvent.attachments.splice(index, 1);
                    }
                };
                EventComponent.prototype.getPreview = function (attachment) {
                    return this._attachmentService.getPreview(attachment);
                };
                EventComponent.prototype.onSelectRepeat = function (value) {
                    this.newEvent.repeat = this.backToConst(value);
                    this.selectedEvent.repeat = this.backToConst(value);
                };
                EventComponent.prototype.ngOnDestroy = function () {
                };
                EventComponent.prototype.onNavigate = function (id) {
                    console.log('navigating to event with id ', id);
                    if (this.admin) {
                        this._router.navigate(['admin/event', id]);
                        return;
                    }
                    this._router.navigate(['home/event', id]);
                };
                EventComponent.prototype.toUser = function (id) {
                    console.log("toUser" + id + " " + this.currentUser.userId);
                    if (id == this.currentUser.userId) {
                        this._router.navigate(['home/user/main']);
                    }
                    else if (this.admin) {
                        this._router.navigate(['admin/friend/', id]);
                    }
                    else {
                        this._router.navigate(['home/friend', id]);
                    }
                };
                EventComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                EventComponent.prototype.getRepeatTranslation = function () {
                    var _this = this;
                    console.log("got lang ", header_component_1.HeaderComponent.translateService.currentLang);
                    var _loop_1 = function(i) {
                        header_component_1.HeaderComponent.translateService.get(this_1.repeat[i].text)
                            .subscribe(function (data) {
                            _this.repeat[i].text = data;
                        });
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.repeat.length; i++) {
                        _loop_1(i);
                    }
                };
                EventComponent.prototype.backToConst = function (item) {
                    var items = [{ id: 1, text: 'ONE_TIME' },
                        { id: 2, text: 'PERMANENT_DAYLY' },
                        { id: 3, text: 'PERMANENT_WEEKLY' },
                        { id: 4, text: 'PERMANENT_MONTHLY' },
                        { id: 5, text: 'PERMANENT_YEARLY' }];
                    for (var i = 0; i < items.length; i++) {
                        if (item.id === items[i].id) {
                            return items[i].text;
                        }
                    }
                };
                EventComponent.prototype.isDateValid = function (start, end) {
                    if (end == undefined)
                        return true;
                    return moment_1.default(end).isAfter(moment_1.default(start));
                };
                EventComponent.prototype.formatDate = function (date) {
                    return moment_1.default(date).format("DD.MM.YYYY hh:mm A");
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], EventComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('delAllModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], EventComponent.prototype, "delAllModal", void 0);
                __decorate([
                    core_1.ViewChild('createModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], EventComponent.prototype, "createModal", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], EventComponent.prototype, "editModal", void 0);
                EventComponent = __decorate([
                    core_1.Component({
                        selector: 'my-event',
                        templateUrl: 'src/app/event/event.html',
                        providers: [event_service_1.EventService, attachment_service_1.AttachmentService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, dropdown_1.DROPDOWN_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES,
                            ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, file_upload_modal_1.FileUploadComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe, active_filter_1.ActiveFilter],
                        styleUrls: ['src/shared/css/loader.css', 'src/shared/css/general.css'],
                        inputs: ['admin']
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, attachment_service_1.AttachmentService, current_user_service_1.CurrentUserService, router_1.Router])
                ], EventComponent);
                return EventComponent;
            }());
            exports_1("EventComponent", EventComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ldmVudC9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQXVCSSx3QkFBb0IsYUFBMEIsRUFDMUIsa0JBQXFDLEVBQ3JDLGtCQUFxQyxFQUNyQyxPQUFlO29CQUhmLGtCQUFhLEdBQWIsYUFBYSxDQUFhO29CQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUNyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQW5CM0IsV0FBTSxHQUFXLElBQUksQ0FBQztvQkFDdEIsYUFBUSxHQUFpQixFQUFFLENBQUM7b0JBQzVCLGVBQVUsR0FBVSxDQUFDLENBQUM7b0JBR3RCLFVBQUssR0FBVyxJQUFJLENBQUM7b0JBQ3JCLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3BCLGtCQUFhLEdBQVMsSUFBSSx1QkFBSyxDQUFDO29CQUNoQyxhQUFRLEdBQVMsSUFBSSx1QkFBSyxDQUFDO29CQUUzQixrQkFBYSxHQUFZLElBQUksQ0FBQztvQkFHOUIsV0FBTSxHQUFpQixFQUFFLENBQUM7b0JBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBTTdCLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQ0FBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0NBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztvQkFDRCxJQUFJLENBQUMsb0JBQW9C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cnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vZXZlbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZUNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUywgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7IENhcGl0YWxpemVGaXJzdExldHRlclBpcGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9uZzItc2VsZWN0LWl0ZW0uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFBlcmlvZGljaXR5SXRlbXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9wZXJpb2RpY2l0eS5jb25zdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRFJPUERPV05fRElSRUNUSVZFUyB9IGZyb20gXCJuZzItYnMtZHJvcGRvd24vZHJvcGRvd25cIjtcclxuaW1wb3J0IHsgU0VMRUNUX0RJUkVDVElWRVMgfSBmcm9tIFwibmcyLXNlbGVjdFwiO1xyXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BpcGVzL2FjdGl2ZS5maWx0ZXJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibmcyLWRhdGV0aW1lLXBpY2tlci9kaXN0L2RhdGV0aW1lXCI7XHJcbmltcG9ydCB7IEZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZFwiO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9tb2RhbHMvZmlsZS11cGxvYWQtbW9kYWxcIjtcclxuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gXCIuLi9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvYXR0YWNobWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXR0YWNobWVudFNlcnZpY2UgfSBmcm9tIFwiLi4vYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWV2ZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9ldmVudC9ldmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0V2ZW50U2VydmljZSwgQXR0YWNobWVudFNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRFJPUERPV05fRElSRUNUSVZFUywgU0VMRUNUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSwgQWN0aXZlRmlsdGVyXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ10sXHJcbiAgICBpbnB1dHM6IFsnYWRtaW4nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZGVsTW9kYWwnKSBwdWJsaWMgZGVsTW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdkZWxBbGxNb2RhbCcpIHB1YmxpYyBkZWxBbGxNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2NyZWF0ZU1vZGFsJykgcHVibGljIGNyZWF0ZU1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgnZWRpdE1vZGFsJykgcHVibGljIGVkaXRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6QXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwYWdlTnVtYmVyOm51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHBhZ2VDcmVhdG9yOlBhZ2VDcmVhdG9yPEV2ZW50PjtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczpudW1iZXI7XHJcbiAgICBwcml2YXRlIG9yZGVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBldmVudHM6RXZlbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEV2ZW50OkV2ZW50ID0gbmV3IEV2ZW50O1xyXG4gICAgcHJpdmF0ZSBuZXdFdmVudDpFdmVudCA9IG5ldyBFdmVudDtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6VXNlcjtcclxuICAgIHByaXZhdGUgc2hvd0FsbEV2ZW50czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGFkbWluOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpZDpudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlcGVhdDogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgICBwcml2YXRlIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ldmVudFNlcnZpY2U6RXZlbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXR0YWNobWVudFNlcnZpY2U6IEF0dGFjaG1lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBlcmlvZGljaXR5SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXQucHVzaChQZXJpb2RpY2l0eUl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRSZXBlYXRUcmFuc2xhdGlvbigpO1xyXG4gICAgICAgIHRoaXMubmV3RXZlbnQuYXR0YWNobWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmdldEV2ZW50c0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV2ZW50c0J5UGFnZU51bShwYWdlTnVtYmVyOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2hvd0FsbEV2ZW50cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gK3BhZ2VOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRTZXJ2aWNlLmdldEFsbEV2ZW50cyh0aGlzLnBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcmV2UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgLSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0RXZlbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0RXZlbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlUGFnZUxpc3Qoc3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydEJ5KHRpdGxlOnN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzb3J0ZWQgYnkgJywgdGl0bGUpO1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSAhdGhpcy5vcmRlcjtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JkZXIgYnkgYXNjJywgdGhpcy5vcmRlcik7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmdldEFsbEV2ZW50c1NvcnRlZCh0aGlzLnBhZ2VOdW1iZXIsIHRpdGxlLCB0aGlzLm9yZGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaChzZWFyY2g6c3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBzZWFyY2g6IHNlYXJjaCBwYXJhbVwiICsgc2VhcmNoKTtcclxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UuZmluZEV2ZW50c0J5TmFtZU9yQXV0aG9yT3JEZXNjcmlwdGlvbihzZWFyY2gpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQnlTdGF0dXMoc3RhdHVzOnN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgc2VhcmNoOiBzdGF0dXMgaXMgXCIgKyBzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5maW5kRXZlbnRzQnlTdGF0dXMoc3RhdHVzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckJ5QXV0aG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGF1dGhvciBmaWx0ZXJpbmdcIik7XHJcbiAgICAgICAgdGhpcy5zaG93QWxsRXZlbnRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmZpbmRFdmVudHNCeUF1dGhvcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5DcmVhdGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZUV2ZW50U3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGV2ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5uZXdFdmVudC5hdXRob3IgPSB0aGlzLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMubmV3RXZlbnQuZW5kID0gdGhpcy5uZXdFdmVudC5lbmRcclxuICAgICAgICAgICAgPyB0aGlzLm5ld0V2ZW50LmVuZFxyXG4gICAgICAgICAgICA6IDxEYXRlPm1vbWVudCh0aGlzLm5ld0V2ZW50LmVuZCkuaG91cnMoMTIpLm1pbnV0ZSgwKTtcclxuICAgICAgICB0aGlzLm5ld0V2ZW50LnJlcGVhdCA9IHRoaXMubmV3RXZlbnQucmVwZWF0XHJcbiAgICAgICAgICAgID8gdGhpcy5uZXdFdmVudC5yZXBlYXRcclxuICAgICAgICAgICAgOiB0aGlzLm5ld0V2ZW50LnJlcGVhdCA9IFwiT05FX1RJTUVcIjtcclxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UuYWRkRXZlbnQodGhpcy5uZXdFdmVudCkudGhlbigoKSA9PiB0aGlzLmdldEV2ZW50c0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XHJcbiAgICAgICAgdGhpcy5uZXdFdmVudCA9IG5ldyBFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQ3JlYXRlTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NpbmcgY3JlYXRlIG1vZGFsJyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkVkaXRNb2RhbChldmVudDpFdmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFdmVudCA9IGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRFdmVudC5zdGFydCArIFwiXFxuXCIgKyB0aGlzLnNlbGVjdGVkRXZlbnQuZW5kKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQuc3RhcnQgPSA8RGF0ZT5tb21lbnQodGhpcy5zZWxlY3RlZEV2ZW50LnN0YXJ0KS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tOnNzXCIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFdmVudC5lbmQgPSA8RGF0ZT5tb21lbnQodGhpcy5zZWxlY3RlZEV2ZW50LmVuZCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbTpzc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkRXZlbnQuc3RhcnQgKyBcIlxcblwiICsgdGhpcy5zZWxlY3RlZEV2ZW50LmVuZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGV2ZW50OiAnICsgdGhpcy5zZWxlY3RlZEV2ZW50KTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0RXZlbnRTdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGV2ZW50OiAnICsgdGhpcy5zZWxlY3RlZEV2ZW50KTtcclxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UuZWRpdEFuZFNhdmUodGhpcy5zZWxlY3RlZEV2ZW50KS50aGVuKCgpID0+IHRoaXMuZ2V0RXZlbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcikpO1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGFsLmhpZGUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VFZGl0TW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NpbmcgZWRpdCBtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGVsTW9kYWwoaWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93JywgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5kZWxNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEZWxNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlJywgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmRlbGV0ZUV2ZW50QnlJZCh0aGlzLmlkKS50aGVuKCgpID0+IHRoaXMuZ2V0RXZlbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcikpO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZWxBbGxNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmRlbEFsbE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURlbEFsbE1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYWxsJyk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmRlbGV0ZUFsbEV2ZW50cygpLnRoZW4oKCkgPT4gdGhpcy5nZXRFdmVudHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyKSk7XHJcbiAgICAgICAgdGhpcy5kZWxBbGxNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVXBsb2FkKGF0dGFjaG1lbnRzOkF0dGFjaG1lbnRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZU1vZGFsLmlzU2hvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdFdmVudC5hdHRhY2htZW50cyA9IHRoaXMubmV3RXZlbnQuYXR0YWNobWVudHMuY29uY2F0KGF0dGFjaG1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGFsLmlzU2hvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50LmF0dGFjaG1lbnRzID0gdGhpcy5zZWxlY3RlZEV2ZW50LmF0dGFjaG1lbnRzLmNvbmNhdChhdHRhY2htZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBdHRhY2htZW50KGF0dGFjaG1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVNb2RhbC5pc1Nob3duKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubmV3RXZlbnQuYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXdFdmVudC5hdHRhY2htZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lZGl0TW9kYWwuaXNTaG93bikge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkRXZlbnQuYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50LmF0dGFjaG1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcmV2aWV3KGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNobWVudFNlcnZpY2UuZ2V0UHJldmlldyhhdHRhY2htZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TZWxlY3RSZXBlYXQodmFsdWU6U2VsZWN0SXRlbSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5uZXdFdmVudC5yZXBlYXQgPSB0aGlzLmJhY2tUb0NvbnN0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQucmVwZWF0ID0gdGhpcy5iYWNrVG9Db25zdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTphbnkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2aWdhdGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW5nIHRvIGV2ZW50IHdpdGggaWQgJywgaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkbWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL2V2ZW50JywgaWRdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydob21lL2V2ZW50JywgaWRdKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1VzZXIoaWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b1VzZXJcIiArIGlkICsgXCIgXCIgKyB0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCk7XHJcbiAgICAgICAgaWYgKGlkID09IHRoaXMuY3VycmVudFVzZXIudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUvdXNlci9tYWluJ10pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZG1pbikge1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydhZG1pbi9mcmllbmQvJywgaWRdKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUvZnJpZW5kJywgaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVwZWF0VHJhbnNsYXRpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnb3QgbGFuZyBcIiwgSGVhZGVyQ29tcG9uZW50LnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXBlYXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBIZWFkZXJDb21wb25lbnQudHJhbnNsYXRlU2VydmljZS5nZXQodGhpcy5yZXBlYXRbaV0udGV4dClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdFtpXS50ZXh0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2tUb0NvbnN0KGl0ZW06IFNlbGVjdEl0ZW0pOiBzdHJpbmd7XHJcbiAgICAgICAgdmFyIGl0ZW1zIDogU2VsZWN0SXRlbVtdID1cclxuICAgICAgICAgICAgW3tpZDogMSwgdGV4dDogJ09ORV9USU1FJ30sXHJcbiAgICAgICAgICAgICB7aWQ6IDIsIHRleHQ6ICdQRVJNQU5FTlRfREFZTFknfSxcclxuICAgICAgICAgICAgIHtpZDogMywgdGV4dDogJ1BFUk1BTkVOVF9XRUVLTFknfSxcclxuICAgICAgICAgICAgIHtpZDogNCwgdGV4dDogJ1BFUk1BTkVOVF9NT05USExZJ30sXHJcbiAgICAgICAgICAgICB7aWQ6IDUsIHRleHQ6ICdQRVJNQU5FTlRfWUVBUkxZJ31dO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxpdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpdGVtc1tpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2ldLnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNEYXRlVmFsaWQoc3RhcnQsIGVuZCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGVuZCA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBtb21lbnQoZW5kKS5pc0FmdGVyKG1vbWVudChzdGFydCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoZGF0ZTogRGF0ZVRpbWUpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIkRELk1NLllZWVkgaGg6bW0gQVwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
