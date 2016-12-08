System.register(['@angular/core', '@angular/common', '../ticket', 'ng2-bootstrap/ng2-bootstrap', './../../../../shared/models/User', './../ticket.service', './../ticket.filter', "ng2-translate/ng2-translate", "../../../header/header.component", "ng2-file-upload", "../../../admin/components/attachment/modals/file-upload-modal"], function(exports_1, context_1) {
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
    var core_1, common_1, ticket_1, ng2_bootstrap_1, ng2_bootstrap_2, User_1, ticket_service_1, ticket_filter_1, ng2_translate_1, header_component_1, ng2_file_upload_1, file_upload_modal_1;
    var TicketEditFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            },
            function (ticket_filter_1_1) {
                ticket_filter_1 = ticket_filter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (file_upload_modal_1_1) {
                file_upload_modal_1 = file_upload_modal_1_1;
            }],
        execute: function() {
            TicketEditFormComponent = (function () {
                function TicketEditFormComponent(ticketService, builder) {
                    this.ticketService = ticketService;
                    this.builder = builder;
                    this.stateTicket = "NEW";
                    this.userAssignArr = [];
                    this.submitAttempt = false;
                    this.nameTicket = '';
                    this.descriptionTicket = '';
                    this.assignTicket = '';
                    this._currentUserService = null;
                    this.attachments = [];
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this._currentUserService.getUser();
                    this.ticket = new ticket_1.Ticket("", "", ticket_1.TicketState.NEW);
                    this.ticket.attachments = [];
                    this.attachments = this.ticket.attachments;
                    this.update = new core_1.EventEmitter();
                    this.states = ["NEW", "IN_PROGRESS", "DONE"];
                    this.assign = new User_1.User();
                    this.ticket.assigned = new User_1.User();
                    this.nameInput = new common_1.Control('', common_1.Validators.required);
                    this.descriptionInput = new common_1.Control('', common_1.Validators.required);
                    this.assignInput = new common_1.Control('', common_1.Validators.required);
                    this.creatingForm = builder.group({
                        nameInput: this.nameInput,
                        descriptionInput: this.descriptionInput,
                        assignInput: this.assignInput
                    });
                }
                TicketEditFormComponent.prototype.openEditModal = function () {
                    this.editModal.show();
                    this.attachments = this.ticket.attachments;
                };
                TicketEditFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    return this.ticketService.getAllUsers(this.currentUser.osbbId)
                        .then(function (userAssignArr) { return _this.userAssignArr = userAssignArr; });
                };
                TicketEditFormComponent.prototype.isEmptyName = function () {
                    return this.nameTicket.length >= 10 ? false : true;
                };
                TicketEditFormComponent.prototype.isEmptyDescription = function () {
                    return this.descriptionTicket.length >= 20 ? false : true;
                };
                TicketEditFormComponent.prototype.isFindAssign = function () {
                    if (this.getAssignedId(this.assignTicket) == null) {
                        return false;
                    }
                    return true;
                };
                TicketEditFormComponent.prototype.getAllUsers = function () {
                    var _this = this;
                    return this.ticketService.getAllUsers(this.currentUser.osbbId)
                        .then(function (userAssignArr) { return _this.userAssignArr = userAssignArr; });
                };
                TicketEditFormComponent.prototype.toggleSubmitAttempt = function () {
                    this.submitAttempt = true;
                };
                TicketEditFormComponent.prototype.deleteAttachmet = function (attachment) {
                    var index = this.ticket.attachments.indexOf(attachment);
                    if (index > -1) {
                        this.ticket.attachments.splice(index, 1);
                    }
                };
                TicketEditFormComponent.prototype.onUpload = function (attachments) {
                    if (this.editModal.isShown) {
                        for (var i = 0; i < attachments.length; i++) {
                            this.attachments.unshift(attachments[i]);
                        }
                    }
                };
                TicketEditFormComponent.prototype.closeEditModal = function () {
                    this.submitAttempt = false;
                    this.clearEditModal();
                    this.editModal.hide();
                };
                TicketEditFormComponent.prototype.clearEditModal = function () {
                    this.ticket.attachments = [];
                    this.attachments = [];
                    this.nameTicket = '';
                    this.descriptionTicket = '';
                    this.assignTicket = '';
                };
                TicketEditFormComponent.prototype.onEditTicket = function () {
                    if (this.nameInput.valid && this.descriptionInput.valid && this.assignInput.valid &&
                        !this.isEmptyDescription() && !this.isEmptyName() && this.isFindAssign()) {
                        var ticket = this.editTicket();
                        this.update.emit(ticket);
                        this.closeEditModal();
                    }
                };
                TicketEditFormComponent.prototype.editState = function (state) {
                    if (state == 'NEW') {
                        return ticket_1.TicketState.NEW;
                    }
                    if (state == 'IN_PROGRESS') {
                        return ticket_1.TicketState.IN_PROGRESS;
                    }
                    else if (state == 'DONE') {
                        return ticket_1.TicketState.DONE;
                    }
                };
                TicketEditFormComponent.prototype.initUpdatedTicket = function (ticket) {
                    console.log("is ticketttt" + ticket.ticketId);
                    this.ticket = ticket;
                    this.nameTicket = ticket.name;
                    this.descriptionTicket = ticket.description;
                    this.assignTicket = ticket.assigned.firstName + " " + ticket.assigned.lastName;
                    this.openEditModal();
                };
                TicketEditFormComponent.prototype.editTicket = function () {
                    console.log("edit ticket");
                    var ticket = new ticket_1.Ticket(this.nameTicket, this.descriptionTicket, ticket_1.TicketState.NEW);
                    ticket.ticketId = this.ticket.ticketId;
                    ticket.user = this.currentUser;
                    ticket.assigned = this.getAssignedId(this.assignTicket);
                    ticket.state = this.editState(this.stateTicket);
                    ticket.attachments = this.attachments;
                    console.log("edit state  " + this.stateTicket);
                    return ticket;
                };
                TicketEditFormComponent.prototype.getAttachments = function () {
                    for (var i = 0; i < this.ticket.attachments.length; i++) {
                        this.attachments.push(this.ticket.attachments[i]);
                    }
                    console.log("getAttachments " + JSON.stringify(this.attachments));
                    return this.attachments;
                };
                TicketEditFormComponent.prototype.getAssignedId = function (assign) {
                    var str = assign.split(' ');
                    for (var i = 0; i < this.userAssignArr.length; i++) {
                        if (str[0] == this.userAssignArr[i].firstName && str[1] == this.userAssignArr[i].lastName) {
                            return this.userAssignArr[i];
                        }
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TicketEditFormComponent.prototype, "update", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TicketEditFormComponent.prototype, "ticket", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], TicketEditFormComponent.prototype, "editModal", void 0);
                TicketEditFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-edit-form',
                        templateUrl: './src/app/user/ticket/ticket_form/ticket-edit-form.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES,
                            ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, file_upload_modal_1.FileUploadComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ticket_filter_1.TicketFilter, ng2_translate_1.TranslatePipe],
                        styleUrls: ['src/app/user/ticket/ticket.css']
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService, common_1.FormBuilder])
                ], TicketEditFormComponent);
                return TicketEditFormComponent;
            }());
            exports_1("TicketEditFormComponent", TicketEditFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXRfZm9ybS90aWNrZXQtZWRpdC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBc0JJLGlDQUFvQixhQUEyQixFQUMzQixPQUFtQjtvQkFEbkIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVk7b0JBaEIvQixnQkFBVyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsa0JBQWEsR0FBVSxFQUFFLENBQUM7b0JBTTFCLGtCQUFhLEdBQVcsS0FBSyxDQUFDO29CQUM5QixlQUFVLEdBQVUsRUFBRSxDQUFDO29CQUN2QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7b0JBQzlCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO29CQUV6Qix3QkFBbUIsR0FBRyxJQUFJLENBQUM7b0JBQzNCLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztvQkFJbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtDQUFlLENBQUMsa0JBQWtCLENBQUM7b0JBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsb0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FB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b3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLEZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIENvbnRyb2wsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSVRpY2tldCxUaWNrZXQsVGlja2V0U3RhdGV9IGZyb20gJy4uL3RpY2tldCc7XHJcbmltcG9ydCB7TU9EQUxfRElSRUNUSVZFUywgQlNfVklFV19QUk9WSURFUlN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TW9kYWxEaXJlY3RpdmV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCB7Q3VycmVudFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGlja2V0U2VydmljZSB9IGZyb20gJy4vLi4vdGlja2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWNrZXRGaWx0ZXIgfSBmcm9tICcuLy4uL3RpY2tldC5maWx0ZXInO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0ZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlfSBmcm9tIFwibmcyLWZpbGUtdXBsb2FkXCI7XHJcbmltcG9ydCB7RmlsZVVwbG9hZENvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9tb2RhbHMvZmlsZS11cGxvYWQtbW9kYWxcIjtcclxuaW1wb3J0IHtBdHRhY2htZW50fSBmcm9tIFwiLi4vLi4vLi4vYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuaW50ZXJmYWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aWNrZXQtZWRpdC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldF9mb3JtL3RpY2tldC1lZGl0LWZvcm0uaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsXHJcbiAgICAgICAgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHBpcGVzOiBbVGlja2V0RmlsdGVyLCBUcmFuc2xhdGVQaXBlXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlja2V0RWRpdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHVwZGF0ZTpFdmVudEVtaXR0ZXI8VGlja2V0PjtcclxuICAgIEBJbnB1dCgpIHRpY2tldDpJVGlja2V0O1xyXG4gICAgQFZpZXdDaGlsZCgnZWRpdE1vZGFsJylcclxuICAgIGVkaXRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIHN0YXRlczpzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlVGlja2V0ID0gXCJORVdcIjtcclxuICAgIHByaXZhdGUgdXNlckFzc2lnbkFycjpVc2VyW10gPSBbXTtcclxuICAgIHByaXZhdGUgYXNzaWduOlVzZXI7XHJcbiAgICBwcml2YXRlIGNyZWF0aW5nRm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBwcml2YXRlIG5hbWVJbnB1dDpDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbklucHV0OkNvbnRyb2w7XHJcbiAgICBwcml2YXRlIGFzc2lnbklucHV0OkNvbnRyb2w7XHJcbiAgICBwcml2YXRlIHN1Ym1pdEF0dGVtcHQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBuYW1lVGlja2V0OnN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvblRpY2tldDpzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgYXNzaWduVGlja2V0OnN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjpVc2VyO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFVzZXJTZXJ2aWNlID0gbnVsbDtcclxuICAgIHByaXZhdGUgYXR0YWNobWVudHM6QXR0YWNobWVudFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aWNrZXRTZXJ2aWNlOlRpY2tldFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1aWxkZXI6Rm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UgPSBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0VXNlcigpO1xyXG4gICAgICAgIHRoaXMudGlja2V0ID0gbmV3IFRpY2tldChcIlwiLCBcIlwiLCBUaWNrZXRTdGF0ZS5ORVcpO1xyXG4gICAgICAgIHRoaXMudGlja2V0LmF0dGFjaG1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cyA9IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxUaWNrZXQ+KCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbXCJORVdcIiwgXCJJTl9QUk9HUkVTU1wiLCBcIkRPTkVcIl07XHJcbiAgICAgICAgdGhpcy5hc3NpZ24gPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudGlja2V0LmFzc2lnbmVkID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVJbnB1dCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25JbnB1dCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW5nRm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lSW5wdXQ6IHRoaXMubmFtZUlucHV0LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0OiB0aGlzLmRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICAgICAgICAgIGFzc2lnbklucHV0OiB0aGlzLmFzc2lnbklucHV0XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRWRpdE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGFsLnNob3coKTtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzID0gdGhpcy50aWNrZXQuYXR0YWNobWVudHM7ICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnRpY2tldFNlcnZpY2UuZ2V0QWxsVXNlcnModGhpcy5jdXJyZW50VXNlci5vc2JiSWQpXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXJBc3NpZ25BcnIgPT4gdGhpcy51c2VyQXNzaWduQXJyID0gdXNlckFzc2lnbkFycik7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXNFbXB0eU5hbWUoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lVGlja2V0Lmxlbmd0aCA+PTEwID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1wdHlEZXNjcmlwdGlvbigpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uVGlja2V0Lmxlbmd0aCA+PSAyMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgaXNGaW5kQXNzaWduKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXNzaWduZWRJZCh0aGlzLmFzc2lnblRpY2tldCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBbGxVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmdldEFsbFVzZXJzKHRoaXMuY3VycmVudFVzZXIub3NiYklkKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyQXNzaWduQXJyID0+IHRoaXMudXNlckFzc2lnbkFyciA9IHVzZXJBc3NpZ25BcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Ym1pdEF0dGVtcHQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcclxuICAgIH1cclxuZGVsZXRlQXR0YWNobWV0KGF0dGFjaG1lbnQ6QXR0YWNobWVudCl7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnRpY2tldC5hdHRhY2htZW50cy5pbmRleE9mKGF0dGFjaG1lbnQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0LmF0dGFjaG1lbnRzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiB9XHJcblxyXG4gIHB1YmxpYyBvblVwbG9hZChhdHRhY2htZW50czpBdHRhY2htZW50W10pIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0TW9kYWwuaXNTaG93bikge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGF0dGFjaG1lbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2htZW50cy51bnNoaWZ0KGF0dGFjaG1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gIH19XHJcblxyXG4gICAgY2xvc2VFZGl0TW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGVhckVkaXRNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckVkaXRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnRpY2tldC5hdHRhY2htZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLm5hbWVUaWNrZXQgPSAnJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGlja2V0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25UaWNrZXQgPSAnJztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0VGlja2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVJbnB1dC52YWxpZCAmJiB0aGlzLmRlc2NyaXB0aW9uSW5wdXQudmFsaWQgJiYgdGhpcy5hc3NpZ25JbnB1dC52YWxpZCYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzRW1wdHlEZXNjcmlwdGlvbigpJiYhdGhpcy5pc0VtcHR5TmFtZSgpJiZ0aGlzLmlzRmluZEFzc2lnbigpKSB7XHJcbiAgICAgICAgICAgIGxldCB0aWNrZXQgPSB0aGlzLmVkaXRUaWNrZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aWNrZXQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRTdGF0ZShzdGF0ZTpzdHJpbmcpOlRpY2tldFN0YXRle1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PSAnTkVXJykge1xyXG4gICAgICAgICAgICByZXR1cm4gVGlja2V0U3RhdGUuTkVXO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUgPT0gJ0lOX1BST0dSRVNTJykge1xyXG4gICAgICAgICAgICByZXR1cm4gVGlja2V0U3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09ICdET05FJykge1xyXG4gICAgICAgICAgICByZXR1cm4gVGlja2V0U3RhdGUuRE9ORTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRVcGRhdGVkVGlja2V0KHRpY2tldDpUaWNrZXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIHRpY2tldHR0dFwiK3RpY2tldC50aWNrZXRJZCk7XHJcbiAgICAgICAgdGhpcy50aWNrZXQgPSB0aWNrZXQ7XHJcbiAgICAgICAgdGhpcy5uYW1lVGlja2V0ID0gdGlja2V0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRpY2tldCA9IHRpY2tldC5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmFzc2lnblRpY2tldCA9IHRpY2tldC5hc3NpZ25lZC5maXJzdE5hbWUgKyBcIiBcIiArIHRpY2tldC5hc3NpZ25lZC5sYXN0TmFtZTtcclxudGhpcy5vcGVuRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRpY2tldCgpOlRpY2tldCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IHRpY2tldFwiKTtcclxuICAgICAgICBsZXQgdGlja2V0ID0gbmV3IFRpY2tldCh0aGlzLm5hbWVUaWNrZXQsIHRoaXMuZGVzY3JpcHRpb25UaWNrZXQsIFRpY2tldFN0YXRlLk5FVyk7XHJcbiAgICAgICAgdGlja2V0LnRpY2tldElkID0gdGhpcy50aWNrZXQudGlja2V0SWQ7XHJcbiAgICAgICAgdGlja2V0LnVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRpY2tldC5hc3NpZ25lZCA9IHRoaXMuZ2V0QXNzaWduZWRJZCh0aGlzLmFzc2lnblRpY2tldCk7XHJcbiAgICAgICAgdGlja2V0LnN0YXRlICA9IHRoaXMuZWRpdFN0YXRlKHRoaXMuc3RhdGVUaWNrZXQpO1xyXG4gICAgICAgIHRpY2tldC5hdHRhY2htZW50cyA9IHRoaXMuYXR0YWNobWVudHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0IHN0YXRlICBcIisgdGhpcy5zdGF0ZVRpY2tldCk7XHJcbiAgICAgICAgcmV0dXJuIHRpY2tldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRhY2htZW50cygpOkF0dGFjaG1lbnRbXXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGlja2V0LmF0dGFjaG1lbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMucHVzaCh0aGlzLnRpY2tldC5hdHRhY2htZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QXR0YWNobWVudHMgXCIrSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRhY2htZW50cykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaG1lbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NpZ25lZElkKGFzc2lnbjpzdHJpbmcpOlVzZXIge1xyXG4gICAgICAgIGxldCBzdHIgPSBhc3NpZ24uc3BsaXQoJyAnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckFzc2lnbkFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3RyWzBdID09IHRoaXMudXNlckFzc2lnbkFycltpXS5maXJzdE5hbWUgJiYgc3RyWzFdID09IHRoaXMudXNlckFzc2lnbkFycltpXS5sYXN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckFzc2lnbkFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
