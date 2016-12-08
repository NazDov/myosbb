System.register(['@angular/core', '@angular/common', '../ticket', 'ng2-bootstrap/ng2-bootstrap', './../ticket.service', './../ticket.filter', "ng2-translate/ng2-translate", "ng2-file-upload", "../../../header/header.component", "../../../../shared/pipes/capitalize-first-letter", "../../../admin/components/attachment/modals/file-upload-modal", "../../../home/voting/vote.component"], function(exports_1, context_1) {
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
    var core_1, common_1, ticket_1, ng2_bootstrap_1, ng2_bootstrap_2, ticket_service_1, ticket_filter_1, ng2_translate_1, ng2_file_upload_1, header_component_1, capitalize_first_letter_1, file_upload_modal_1, vote_component_1;
    var TicketAddFormComponent;
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
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            },
            function (ticket_filter_1_1) {
                ticket_filter_1 = ticket_filter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (file_upload_modal_1_1) {
                file_upload_modal_1 = file_upload_modal_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            TicketAddFormComponent = (function () {
                function TicketAddFormComponent(ticketService, builder) {
                    this.ticketService = ticketService;
                    this.builder = builder;
                    this.userAssignArr = [];
                    this.nameTicket = '';
                    this.descriptionTicket = '';
                    this.assignTicket = '';
                    this.attachments = [];
                    this._currentUserService = null;
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this._currentUserService.getUser();
                    this.created = new core_1.EventEmitter();
                    this.ticket = new ticket_1.Ticket("", "", ticket_1.TicketState.NEW);
                    this.submitAttempt = false;
                    this.nameInput = new common_1.Control('', common_1.Validators.required);
                    this.descriptionInput = new common_1.Control('', common_1.Validators.required);
                    this.assignInput = new common_1.Control('', common_1.Validators.required);
                    this.creatingForm = builder.group({
                        nameInput: this.nameInput,
                        descriptionInput: this.descriptionInput,
                        assignInput: this.assignInput
                    });
                }
                TicketAddFormComponent.prototype.ngOnInit = function () {
                };
                TicketAddFormComponent.prototype.openAddModal = function () {
                    this.addModal.show();
                    this.getAllUsers();
                };
                TicketAddFormComponent.prototype.deleteAttachmet = function (attachment) {
                    var index = this.attachments.indexOf(attachment);
                    if (index > -1) {
                        this.attachments.splice(index, 1);
                    }
                };
                TicketAddFormComponent.prototype.isEmptyName = function () {
                    return this.nameTicket.length >= 10 ? false : true;
                };
                TicketAddFormComponent.prototype.isEmptyDescription = function () {
                    return this.descriptionTicket.length >= 20 ? false : true;
                };
                TicketAddFormComponent.prototype.isFindAssign = function () {
                    return this.getAssignedId(this.assignTicket) == null ? false : true;
                };
                TicketAddFormComponent.prototype.getAllUsers = function () {
                    var _this = this;
                    return this.ticketService.getAllUsers(this.currentUser.osbbId)
                        .then(function (userAssignArr) { return _this.userAssignArr = userAssignArr; });
                };
                TicketAddFormComponent.prototype.toggleSubmitAttempt = function () {
                    this.submitAttempt = true;
                };
                TicketAddFormComponent.prototype.closeAddModal = function () {
                    this.submitAttempt = false;
                    this.clearAddModal();
                    this.addModal.hide();
                };
                TicketAddFormComponent.prototype.clearAddModal = function () {
                    this.attachments = [];
                    this.nameTicket = '';
                    this.descriptionTicket = '';
                    this.assignTicket = '';
                    this.endTimeStr = '';
                };
                TicketAddFormComponent.prototype.onCreateTicket = function () {
                    if (this.nameInput.valid && this.descriptionInput.valid && this.assignInput.valid &&
                        !this.isEmptyDescription() && !this.isEmptyName() && this.isFindAssign() && this.isDeadLineCorrect()) {
                        this.created.emit(this.createTicket());
                        this.closeAddModal();
                    }
                };
                TicketAddFormComponent.prototype.createTicket = function () {
                    var ticket = new ticket_1.Ticket(this.nameTicket, this.descriptionTicket, ticket_1.TicketState.NEW);
                    ticket.user = this.currentUser;
                    ticket.attachments = this.attachments;
                    ticket.assigned = this.getAssignedId(this.assignTicket);
                    ticket.deadline = this.castDeadLineStringToDate();
                    return ticket;
                };
                TicketAddFormComponent.prototype.findUsers = function (name) {
                    var _this = this;
                    if (name.trim() != '') {
                        this.ticketService.findAssignUser(name)
                            .then(function (userAssignArr) { return _this.userAssignArr = userAssignArr; });
                    }
                };
                TicketAddFormComponent.prototype.getAssignedId = function (assign) {
                    var str = assign.split(' ');
                    for (var i = 0; i < this.userAssignArr.length; i++) {
                        if (str[0] == this.userAssignArr[i].firstName && str[1] == this.userAssignArr[i].lastName) {
                            return this.userAssignArr[i];
                        }
                    }
                };
                TicketAddFormComponent.prototype.onUpload = function (attachments) {
                    if (this.addModal.isShown) {
                        for (var i = 0; i < attachments.length; i++) {
                            this.attachments.unshift(attachments[i]);
                        }
                    }
                };
                TicketAddFormComponent.prototype.removeAttachment = function (attachments) {
                    if (this.addModal.isShown) {
                        var index = this.ticket.attachments.indexOf(attachments);
                        this.ticket.attachments.splice(index, 1);
                    }
                };
                TicketAddFormComponent.prototype.castDeadLineStringToDate = function () {
                    return moment(this.endTimeStr).toDate();
                };
                TicketAddFormComponent.prototype.isDeadLineCorrect = function () {
                    var startTime = new Date();
                    var res = this.castDeadLineStringToDate().valueOf() - startTime.valueOf();
                    return res > 0 ? true : false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TicketAddFormComponent.prototype, "created", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TicketAddFormComponent.prototype, "ticket", void 0);
                __decorate([
                    core_1.ViewChild('addModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], TicketAddFormComponent.prototype, "addModal", void 0);
                TicketAddFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-add-form',
                        templateUrl: './src/app/user/ticket/ticket_form/ticket-add-form.html',
                        providers: [ticket_service_1.TicketService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES,
                            ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, file_upload_modal_1.FileUploadComponent, vote_component_1.VoteComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ticket_filter_1.TicketFilter, ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        styleUrls: ['src/app/user/ticket/ticket.css']
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService, common_1.FormBuilder])
                ], TicketAddFormComponent);
                return TicketAddFormComponent;
            }());
            exports_1("TicketAddFormComponent", TicketAddFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXRfZm9ybS90aWNrZXQtYWRkLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFtQkksZ0NBQW9CLGFBQTJCLEVBQzNCLE9BQW1CO29CQURuQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFkL0Isa0JBQWEsR0FBVSxFQUFFLENBQUM7b0JBTTFCLGVBQVUsR0FBVSxFQUFFLENBQUM7b0JBQ3ZCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztvQkFDOUIsaUJBQVksR0FBVSxFQUFFLENBQUM7b0JBQ3pCLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztvQkFFdEMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO29CQUlWLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQ0FBZSxDQUFDLGtCQUFrQixDQUFDO29CQUMzRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLG9CQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJ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QUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsa0RBQWlCLEdBQWpCO29CQUNJLElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQzNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDMUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFuSkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFDVDtvQkFBQyxZQUFLLEVBQUU7O3NFQUFBO2dCQUNSO29CQUFDLGdCQUFTLENBQUMsVUFBVSxDQUFDOzt3RUFBQTtnQkFkMUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsd0RBQXdEO3dCQUNyRSxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3dCQUMxQixVQUFVLEVBQUUsQ0FBQyxnQ0FBZ0IsRUFBRSx3QkFBZSxFQUFFLHdCQUFlOzRCQUN2RCxxQ0FBbUIsRUFBRSxtQ0FBaUIsRUFBRSx1Q0FBbUIsRUFBRSw4QkFBYSxDQUFDO3dCQUNuRixhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLENBQUMsNEJBQVksRUFBRSw2QkFBYSxFQUFDLG1EQUF5QixDQUFDO3dCQUM5RCxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztxQkFDaEQsQ0FBQzs7MENBQUE7Z0JBdUpGLDZCQUFDO1lBQUQsQ0FySkEsQUFxSkMsSUFBQTtZQXJKRCwyREFxSkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldF9mb3JtL3RpY2tldC1hZGQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUyxGT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IElUaWNrZXQsIFRpY2tldCxUaWNrZXRTdGF0ZX0gZnJvbSAnLi4vdGlja2V0JztcclxuaW1wb3J0IHtNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtNb2RhbERpcmVjdGl2ZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi8uLi90aWNrZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRpY2tldEZpbHRlciB9IGZyb20gJy4vLi4vdGlja2V0LmZpbHRlcic7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0ZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlfSBmcm9tIFwibmcyLWZpbGUtdXBsb2FkXCI7XHJcbmltcG9ydCB7QXR0YWNobWVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvYXR0YWNobWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXR0YWNobWVudH0gZnJvbSBcIi4uLy4uLy4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvbW9kYWxzL2ZpbGUtdXBsb2FkLW1vZGFsXCI7XHJcbmltcG9ydCB7Vm90ZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uL2hvbWUvdm90aW5nL3ZvdGUuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aWNrZXQtYWRkLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvdXNlci90aWNrZXQvdGlja2V0X2Zvcm0vdGlja2V0LWFkZC1mb3JtLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbVGlja2V0U2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIEZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlLCBGaWxlVXBsb2FkQ29tcG9uZW50LCBWb3RlQ29tcG9uZW50XSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBwaXBlczogW1RpY2tldEZpbHRlciwgVHJhbnNsYXRlUGlwZSxDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpY2tldEFkZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIGNyZWF0ZWQ6RXZlbnRFbWl0dGVyPFRpY2tldD47XHJcbiAgICBASW5wdXQoKSB0aWNrZXQ6SVRpY2tldDtcclxuICAgIEBWaWV3Q2hpbGQoJ2FkZE1vZGFsJylcclxuICAgIGFkZE1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjpVc2VyO1xyXG4gICAgcHJpdmF0ZSB1c2VyQXNzaWduQXJyOlVzZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGluZ0Zvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgcHJpdmF0ZSBuYW1lSW5wdXQ6Q29udHJvbDtcclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb25JbnB1dDpDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBhc3NpZ25JbnB1dDpDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBzdWJtaXRBdHRlbXB0OmJvb2xlYW47XHJcbiAgICBwcml2YXRlIG5hbWVUaWNrZXQ6c3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uVGlja2V0OnN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBhc3NpZ25UaWNrZXQ6c3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzOkF0dGFjaG1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBlbmRUaW1lU3RyOiBzdHJpbmc7XHJcbiAgICBfY3VycmVudFVzZXJTZXJ2aWNlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpY2tldFNlcnZpY2U6VGlja2V0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVpbGRlcjpGb3JtQnVpbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UgPSBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0VXNlcigpOyAgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUaWNrZXQ+KCk7XHJcbiAgICAgICAgdGhpcy50aWNrZXQgPSBuZXcgVGlja2V0KFwiXCIsXCJcIixUaWNrZXRTdGF0ZS5ORVcpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmFtZUlucHV0ID0gbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICB0aGlzLmFzc2lnbklucHV0ID0gbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0aW5nRm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lSW5wdXQ6IHRoaXMubmFtZUlucHV0LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0OiB0aGlzLmRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICAgICAgICAgIGFzc2lnbklucHV0OiB0aGlzLmFzc2lnbklucHV0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5BZGRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmFkZE1vZGFsLnNob3coKTtcclxuICAgICAgICB0aGlzLmdldEFsbFVzZXJzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQXR0YWNobWV0KGF0dGFjaG1lbnQ6QXR0YWNobWVudCl7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2htZW50cy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gfVxyXG5cclxuICAgIGlzRW1wdHlOYW1lKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVRpY2tldC5sZW5ndGggPj0xMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtcHR5RGVzY3JpcHRpb24oKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblRpY2tldC5sZW5ndGggPj0gMjAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaW5kQXNzaWduKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXNzaWduZWRJZCh0aGlzLmFzc2lnblRpY2tldCkgPT0gbnVsbCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmdldEFsbFVzZXJzKHRoaXMuY3VycmVudFVzZXIub3NiYklkKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyQXNzaWduQXJyID0+IHRoaXMudXNlckFzc2lnbkFyciA9IHVzZXJBc3NpZ25BcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Ym1pdEF0dGVtcHQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFkZE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBZGRNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMuYWRkTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubmFtZVRpY2tldCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UaWNrZXQgPSAnJztcclxuICAgICAgICB0aGlzLmFzc2lnblRpY2tldCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZVN0ciA9ICcnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVRpY2tldCgpIHtcclxuICAgICAgICAgaWYgKHRoaXMubmFtZUlucHV0LnZhbGlkICYmIHRoaXMuZGVzY3JpcHRpb25JbnB1dC52YWxpZCAmJiB0aGlzLmFzc2lnbklucHV0LnZhbGlkJiZcclxuICAgICAgICAgICAgICF0aGlzLmlzRW1wdHlEZXNjcmlwdGlvbigpJiYhdGhpcy5pc0VtcHR5TmFtZSgpJiZ0aGlzLmlzRmluZEFzc2lnbigpICYmIHRoaXMuaXNEZWFkTGluZUNvcnJlY3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWQuZW1pdCh0aGlzLmNyZWF0ZVRpY2tldCgpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZE1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRpY2tldCgpOlRpY2tldCB7XHJcbiAgICAgICAgbGV0IHRpY2tldCA9IG5ldyBUaWNrZXQodGhpcy5uYW1lVGlja2V0LCB0aGlzLmRlc2NyaXB0aW9uVGlja2V0LCBUaWNrZXRTdGF0ZS5ORVcpO1xyXG4gICAgICAgIHRpY2tldC51c2VyID0gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgICAgICB0aWNrZXQuYXR0YWNobWVudHMgPSB0aGlzLmF0dGFjaG1lbnRzO1xyXG4gICAgICAgIHRpY2tldC5hc3NpZ25lZCA9IHRoaXMuZ2V0QXNzaWduZWRJZCh0aGlzLmFzc2lnblRpY2tldCk7XHJcbiAgICAgICAgdGlja2V0LmRlYWRsaW5lID0gdGhpcy5jYXN0RGVhZExpbmVTdHJpbmdUb0RhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGlja2V0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kVXNlcnMobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZS50cmltKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLmZpbmRBc3NpZ25Vc2VyKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyQXNzaWduQXJyID0+IHRoaXMudXNlckFzc2lnbkFyciA9IHVzZXJBc3NpZ25BcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFzc2lnbmVkSWQoYXNzaWduOnN0cmluZyk6VXNlciB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGFzc2lnbi5zcGxpdCgnICcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQXNzaWduQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJbMF0gPT0gdGhpcy51c2VyQXNzaWduQXJyW2ldLmZpcnN0TmFtZSAmJiBzdHJbMV0gPT0gdGhpcy51c2VyQXNzaWduQXJyW2ldLmxhc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyQXNzaWduQXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVXBsb2FkKGF0dGFjaG1lbnRzOkF0dGFjaG1lbnRbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZE1vZGFsLmlzU2hvd24pIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxhdHRhY2htZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNobWVudHMudW5zaGlmdChhdHRhY2htZW50c1tpXSk7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICB9ICAgXHJcbiAgfVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBdHRhY2htZW50KGF0dGFjaG1lbnRzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkTW9kYWwuaXNTaG93bikge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRpY2tldC5hdHRhY2htZW50cy5pbmRleE9mKGF0dGFjaG1lbnRzKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXQuYXR0YWNobWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzdERlYWRMaW5lU3RyaW5nVG9EYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQodGhpcy5lbmRUaW1lU3RyKS50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RlYWRMaW5lQ29ycmVjdCgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5jYXN0RGVhZExpbmVTdHJpbmdUb0RhdGUoKS52YWx1ZU9mKCkgLSBzdGFydFRpbWUudmFsdWVPZigpO1xyXG4gICAgICAgIHJldHVybiByZXMgPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG59Il19
