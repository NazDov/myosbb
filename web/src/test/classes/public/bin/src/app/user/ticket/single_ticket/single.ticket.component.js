System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', 'rxjs/Rx', './../ticket.service', '@angular/router', './message', './../ticket', './single.ticket.service', './../ticket_form/ticket-add-form.component', './../ticket_form/ticket-edit-form.component', './../ticket_form/ticket-del-form.component', "./../../../../shared/services/current.user.service", './../../../../shared/models/User', "../../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate", "../../../header/header.component", "angular2-toaster/angular2-toaster", "../../../../shared/error/error.handler.component", '../../../../shared/models/page.request', "../../../admin/components/attachment/attachment.interface"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_bootstrap_2, ticket_service_1, router_1, message_1, ticket_1, single_ticket_service_1, ticket_add_form_component_1, ticket_edit_form_component_1, ticket_del_form_component_1, router_2, router_3, current_user_service_1, User_1, capitalize_first_letter_1, ng2_translate_1, header_component_1, angular2_toaster_1, error_handler_component_1, page_request_1, attachment_interface_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (_1) {},
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            },
            function (single_ticket_service_1_1) {
                single_ticket_service_1 = single_ticket_service_1_1;
            },
            function (ticket_add_form_component_1_1) {
                ticket_add_form_component_1 = ticket_add_form_component_1_1;
            },
            function (ticket_edit_form_component_1_1) {
                ticket_edit_form_component_1 = ticket_edit_form_component_1_1;
            },
            function (ticket_del_form_component_1_1) {
                ticket_del_form_component_1 = ticket_del_form_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (error_handler_component_1_1) {
                error_handler_component_1 = error_handler_component_1_1;
            },
            function (page_request_1_1) {
                page_request_1 = page_request_1_1;
            },
            function (attachment_interface_1_1) {
                attachment_interface_1 = attachment_interface_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(routeParams, ticketService, messageService, currentUserService, router, toasterService) {
                    this.routeParams = routeParams;
                    this.ticketService = ticketService;
                    this.messageService = messageService;
                    this.currentUserService = currentUserService;
                    this.router = router;
                    this.toasterService = toasterService;
                    this.messages = [];
                    this.ticketState = 'new';
                    this.messText = "";
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.pending = false;
                    this.selectedRow = 5;
                    this.order = false;
                    this.answerText = '';
                    this.dates = [];
                    this.nameSort = "time";
                    this.open = false;
                    this.currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this.currentUserService.getUser();
                    this.currentUser.role = this.currentUserService.getRole();
                    this.message = new message_1.Message("");
                    this.message.answers = [];
                    this.ticket = new ticket_1.Ticket("", "", ticket_1.TicketState.NEW);
                    this.ticket.user = new User_1.User();
                    this.ticket.assigned = new User_1.User();
                    this.message = new message_1.Message("");
                    this.currentAttachment = new attachment_interface_1.Attachment();
                }
                MessageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.routeParams.params.subscribe(function (params) {
                        _this.ticketId = +params['id'];
                        _this.messageService.getTicketbyId(_this.ticketId)
                            .subscribe(function (data) {
                            _this.ticket = data,
                                _this.getComments();
                        }, function (error) {
                            _this.handleErrors(error);
                        });
                    });
                };
                MessageComponent.prototype.getComments = function () {
                    var _this = this;
                    this.pending = true;
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.messageService.getMessagesForTicket(this.pageRequest, this.ticketId)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        for (var i = 0; i < data.rows; i++) {
                            _this.messages[i].answers = [];
                        }
                        _this.addMessages(data.rows);
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                        _this.pageNumber++;
                    }, function (error) {
                        _this.pending = false;
                        console.error(error);
                    });
                };
                MessageComponent.prototype.preparePageList = function (start, end) {
                    this.emptyArray();
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                MessageComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                MessageComponent.prototype.handleErrors = function (error) {
                    if (error.status === 400 || error.status === 404) {
                        console.log('server error 400');
                        this.toasterService.pop(error_handler_component_1.onErrorResourceNotFoundToastMsg);
                        return;
                    }
                    if (error.status === 500) {
                        console.log('server error 500');
                        this.toasterService.pop(error_handler_component_1.onErrorServerNoResponseToastMsg);
                        return;
                    }
                };
                MessageComponent.prototype.toTableTicket = function () {
                    this.router.navigate(['home/ticket']);
                };
                MessageComponent.prototype.toUser = function (id) {
                    // if (id == this.currentUser.userId) {
                    //     this.router.navigate(['home/user/main'])
                    // }
                    // else {
                    //     if (this.currentUser.role == "ROLE_ADMIN") {
                    //     }
                    //     if (this.currentUser.role == "ROLE_USER") {
                    //         this.router.navigate(['home/friend', id]);
                    //     }
                    //     if (this.currentUser.role == "ROLE_MANAGER") {
                    //         this.router.navigate(['manager/user', id]);
                    //     }
                    this.currentUserService.toUser(id);
                };
                MessageComponent.prototype.initEditMessage = function (message) {
                    this.message = message;
                    this.messText = this.message.message;
                };
                MessageComponent.prototype.createMessage = function (text) {
                    var _this = this;
                    if (text.length > 0) {
                        if (this.message.messageId == null) {
                            console.log("create");
                            this.message.message = text;
                            this.message.user = this.currentUserService.getUser();
                            this.message.idTicket = this.ticketId;
                            this.messageService.addMessage(this.message, this.ticketId)
                                .then(function (message) { return _this.addMessage(message); })
                                .then(this.message.messageId = null);
                        }
                        else {
                            console.log("update");
                            this.editMessage(text);
                        }
                    }
                };
                MessageComponent.prototype.editMessage = function (text) {
                    for (var i = 0; i < this.messages.length; i++) {
                        if (this.message.message == this.messages[i].message) {
                            this.message.idTicket = this.ticketId;
                            this.messages[i].message = text;
                            this.messageService.editMessage(this.messages[i]);
                            this.message = new message_1.Message("");
                            this.toasterService.pop('success', "Comment updated!");
                        }
                    }
                };
                MessageComponent.prototype.getAnswers = function (index) {
                    return this.messages[index].answers;
                };
                MessageComponent.prototype.addMessage = function (message) {
                    this.messages.unshift(message);
                    this.message.answers = [];
                };
                MessageComponent.prototype.addMessages = function (message) {
                    for (var i = 0; i < message.length; i++) {
                        this.messages.push(message[i]);
                    }
                };
                MessageComponent.prototype.initEditAnswer = function (answer, id) {
                    this.isAnswer(id);
                    this.message = answer;
                    this.answerText = this.message.message;
                    this.open = true;
                };
                MessageComponent.prototype.isMessageCreator = function (message) {
                    return (message.user.firstName == this.currentUser.firstName && message.user.lastName == this.currentUser.lastName
                        || this.currentUser.role == 'ROLE_ADMIN' || this.currentUser.role == 'ROLE_MANAGER');
                };
                MessageComponent.prototype.deleteMessage = function (message) {
                    this.messageService.deleteMessage(message.messageId).then(this.delMessage(message))
                        .then(this.message.messageId = null);
                };
                MessageComponent.prototype.delMessage = function (message) {
                    var index = this.messages.indexOf(message);
                    if (index > -1) {
                        this.messages.splice(index, 1);
                    }
                };
                MessageComponent.prototype.deleteAnswer = function (i, message) {
                    this.messageService.deleteMessage(message.messageId).then(this.delAnswer(i, message));
                };
                MessageComponent.prototype.delAnswer = function (i, message) {
                    var index = this.messages[i].answers.indexOf(message);
                    if (index > -1) {
                        this.messages[i].answers.splice(index, 1);
                    }
                };
                MessageComponent.prototype.editState = function (state) {
                    if (state == 'IN_PROGRESS') {
                        this.ticket.state = ticket_1.TicketState.IN_PROGRESS;
                        this.ticketState = 'IN_PROGRESS';
                    }
                    else if (state == 'DONE') {
                        this.ticket.state = ticket_1.TicketState.DONE;
                        this.ticketState = 'DONE';
                    }
                    this.messageService.editState(this.ticket)
                        .then(this.ngOnInit());
                };
                MessageComponent.prototype.editTicket = function (ticket) {
                    this.ticketService.editTicket(ticket)
                        .then(this.ngOnInit());
                };
                MessageComponent.prototype.deleteTicket = function (ticket) {
                    this.ticketService.deleteTicket(ticket)
                        .then(this.toTableTicket());
                };
                MessageComponent.prototype.getTime = function (time) {
                    return new Date(time).toLocaleString();
                };
                MessageComponent.prototype.getDiscussed = function (discussed) {
                    return new Date(discussed).toLocaleString();
                };
                MessageComponent.prototype.initAddAnswer = function (parentMessage) {
                    this.message = new message_1.Message("");
                    this.message.parentId = parentMessage.messageId;
                    this.message.user = this.currentUser;
                };
                MessageComponent.prototype.createAnswer = function (text) {
                    var _this = this;
                    if (this.message.messageId == null) {
                        this.message.message = text;
                        console.log("create");
                        this.message.user = this.currentUserService.getUser();
                        this.messageService.addAnswer(this.message)
                            .then(function (message) { return _this.addAnswerToMessage(message); });
                    }
                    else {
                        console.log("update");
                        this.editAnswer(text);
                    }
                };
                MessageComponent.prototype.editAnswer = function (text) {
                    for (var i = 0; i < this.messages.length; i++) {
                        if (this.message.parentId == this.messages[i].messageId) {
                            for (var j = 0; j < this.messages.length; j++) {
                                if (this.messages[i].answers[j].message == this.message.message) {
                                    this.messages[i].answers[j].message = text;
                                    this.messageService.editMessage(this.messages[i].answers[j]);
                                    this.message = new message_1.Message("");
                                    this.toasterService.pop('success', "Answer updated!");
                                }
                            }
                        }
                    }
                };
                MessageComponent.prototype.toClose = function () {
                    this.open = !this.open;
                    if (this.open == false) {
                        this.answerText = '';
                    }
                };
                MessageComponent.prototype.addAnswerToMessage = function (message) {
                    for (var i = 0; i < this.messages.length; i++) {
                        if (this.messages[i].messageId == message.parentId) {
                            this.messages[i].answers.unshift(message);
                        }
                    }
                    this.message.parentId = null;
                };
                MessageComponent.prototype.isAnswer = function (id) {
                    return this.message.parentId == id ? true : false;
                };
                MessageComponent.prototype.isAssigned = function () {
                    return (this.ticket.assigned.firstName == this.currentUser.firstName && this.ticket.assigned.lastName == this.currentUser.lastName);
                };
                MessageComponent.prototype.isCreator = function () {
                    return (this.ticket.user.firstName == this.currentUser.firstName && this.ticket.user.lastName == this.currentUser.lastName ||
                        this.currentUser.role == 'ROLE_ADMIN' || this.currentUser.role == 'ROLE_MANAGER');
                };
                // gallery
                MessageComponent.prototype.next = function () {
                    if (this.index == this.ticket.attachments.length) {
                        this.index = 0;
                    }
                    this.currentAttachment = this.ticket.attachments[this.index++];
                };
                MessageComponent.prototype.prev = function () {
                    if (this.index == 0) {
                        this.index = this.ticket.attachments.length - 1;
                    }
                    this.currentAttachment = this.ticket.attachments[this.index--];
                };
                MessageComponent.prototype.showGallery = function (attachment) {
                    this.gallery.show();
                    this.index = this.ticket.attachments.indexOf(attachment);
                    this.currentAttachment = this.ticket.attachments[this.index];
                };
                MessageComponent.prototype.closeGallery = function () {
                    this.gallery.hide();
                };
                __decorate([
                    core_1.ViewChild('gallery'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], MessageComponent.prototype, "gallery", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket',
                        templateUrl: './src/app/user/ticket/single_ticket/single.ticket.component.html',
                        providers: [single_ticket_service_1.MessageService, ticket_service_1.TicketService, angular2_toaster_1.ToasterService],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, angular2_toaster_1.ToasterContainerComponent,
                            common_1.CORE_DIRECTIVES, ticket_add_form_component_1.TicketAddFormComponent, ticket_edit_form_component_1.TicketEditFormComponent, ticket_del_form_component_1.TicketDelFormComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/user/ticket/ticket.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [router_2.ActivatedRoute, ticket_service_1.TicketService, single_ticket_service_1.MessageService, current_user_service_1.CurrentUserService, router_3.Router, angular2_toaster_1.ToasterService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC9zaW5nbGVfdGlja2V0L3NpbmdsZS50aWNrZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkEwQkksMEJBQW9CLFdBQTBCLEVBQzFCLGFBQTJCLEVBQzNCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxNQUFhLEVBQ2IsY0FBNkI7b0JBTDdCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO29CQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBQ3JDLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQ2IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBM0J6QyxhQUFRLEdBQWEsRUFBRSxDQUFDO29CQUt4QixnQkFBVyxHQUFVLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFVLEVBQUUsQ0FBQztvQkFFckIsZUFBVSxHQUFVLENBQUMsQ0FBQztvQkFDdEIsYUFBUSxHQUFpQixFQUFFLENBQUM7b0JBRTVCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO29CQUN2QixVQUFLLEdBQVcsS0FBSyxDQUFDO29CQUN0QixlQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNoQixVQUFLLEdBQVksRUFBRSxDQUFDO29CQUNwQixhQUFRLEdBQVUsTUFBTSxDQUFDO29CQUN6QixTQUFJLEdBQVcsS0FBSyxDQUFDO29CQVd6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3JELElBQUks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LENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFFRCx1Q0FBWSxHQUFaO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBOVZEO29CQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztpRUFBQTtnQkFaekI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLGtFQUFrRTt3QkFDL0UsU0FBUyxFQUFFLENBQUMsc0NBQWMsRUFBRSw4QkFBYSxFQUFFLGlDQUFjLENBQUM7d0JBQzFELFVBQVUsRUFBRSxDQUFDLHFCQUFZLEVBQUUsMEJBQWlCLEVBQUUsZ0NBQWdCLEVBQUUsNENBQXlCOzRCQUNyRix3QkFBZSxFQUFFLGtEQUFzQixFQUFFLG9EQUF1QixFQUFFLGtEQUFzQixDQUFDO3dCQUM3RixhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7d0JBQ3hHLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7cUJBQ3BELENBQUM7O29DQUFBO2dCQWtXRix1QkFBQztZQUFELENBaFdBLEFBZ1dDLElBQUE7WUFoV0QsK0NBZ1dDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RpY2tldC9zaW5nbGVfdGlja2V0L3NpbmdsZS50aWNrZXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWd9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCxBZnRlclZpZXdJbml0LEhvc3RMaXN0ZW5lcixFbGVtZW50UmVmLFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtOZ1N3aXRjaH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgVGlja2V0U2VydmljZSB9IGZyb20gJy4vLi4vdGlja2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlck91dGxldH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtNZXNzYWdlLCBJTWVzc2FnZSx9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7VGlja2V0LCBJVGlja2V0LFRpY2tldFN0YXRlfSBmcm9tICcuLy4uL3RpY2tldCc7XHJcbmltcG9ydCB7VGlja2V0Q29tcG9uZW50fSBmcm9tICcuLy4uL3RpY2tldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vc2luZ2xlLnRpY2tldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGlja2V0QWRkRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vLi4vdGlja2V0X2Zvcm0vdGlja2V0LWFkZC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpY2tldEVkaXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi8uLi90aWNrZXRfZm9ybS90aWNrZXQtZWRpdC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpY2tldERlbEZvcm1Db21wb25lbnQgfSBmcm9tICcuLy4uL3RpY2tldF9mb3JtL3RpY2tldC1kZWwtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7UGFnZUNyZWF0b3J9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcGFnZS5jcmVhdG9yLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RvYXN0ZXJDb250YWluZXJDb21wb25lbnQsIFRvYXN0ZXJTZXJ2aWNlfSBmcm9tIFwiYW5ndWxhcjItdG9hc3Rlci9hbmd1bGFyMi10b2FzdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBvbkVycm9yUmVzb3VyY2VOb3RGb3VuZFRvYXN0TXNnLFxyXG4gICAgb25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZ1xyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvZXJyb3IvZXJyb3IuaGFuZGxlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQYWdlUmVxdWVzdH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wYWdlLnJlcXVlc3QnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvbW9kYWxzL2ZpbGUtdXBsb2FkLW1vZGFsXCI7XHJcbmltcG9ydCB7QXR0YWNobWVudH0gZnJvbSBcIi4uLy4uLy4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aWNrZXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvdXNlci90aWNrZXQvc2luZ2xlX3RpY2tldC9zaW5nbGUudGlja2V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlLCBUaWNrZXRTZXJ2aWNlLCBUb2FzdGVyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBST1VURVJfRElSRUNUSVZFUywgTU9EQUxfRElSRUNUSVZFUywgVG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBDT1JFX0RJUkVDVElWRVMsIFRpY2tldEFkZEZvcm1Db21wb25lbnQsIFRpY2tldEVkaXRGb3JtQ29tcG9uZW50LCBUaWNrZXREZWxGb3JtQ29tcG9uZW50XSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC91c2VyL3RpY2tldC90aWNrZXQuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2xvYWRlci5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2dhbGxlcnknKSBnYWxsZXJ5Ok1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIHByaXZhdGUgbWVzc2FnZTpJTWVzc2FnZTtcclxuICAgIHByaXZhdGUgbWVzc2FnZXM6TWVzc2FnZVtdID0gW107XHJcbiAgICBwcml2YXRlIHRpY2tldDpUaWNrZXQ7XHJcbiAgICBwcml2YXRlIHRpY2tldElkOm51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOlN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6VXNlcjtcclxuICAgIHByaXZhdGUgdGlja2V0U3RhdGU6c3RyaW5nID0gJ25ldyc7XHJcbiAgICBwcml2YXRlIG1lc3NUZXh0OnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhZ2VDcmVhdG9yOlBhZ2VDcmVhdG9yPFRpY2tldD47XHJcbiAgICBwcml2YXRlIHBhZ2VOdW1iZXI6bnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6QXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VzOm51bWJlcjtcclxuICAgIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFJvdzpudW1iZXIgPSA1O1xyXG4gICAgcHJpdmF0ZSBvcmRlcjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFuc3dlclRleHQgPSAnJztcclxuICAgIHByaXZhdGUgZGF0ZXM6c3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgbmFtZVNvcnQ6c3RyaW5nID0gXCJ0aW1lXCI7XHJcbiAgICBwcml2YXRlIG9wZW46Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBwYWdlUmVxdWVzdDpQYWdlUmVxdWVzdDtcclxuICAgIHByaXZhdGUgY3VycmVudEF0dGFjaG1lbnQ6QXR0YWNobWVudDtcclxuICAgIHByaXZhdGUgaW5kZXg6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVQYXJhbXM6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRpY2tldFNlcnZpY2U6VGlja2V0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6TWVzc2FnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1cnJlbnRVc2VyU2VydmljZTpDdXJyZW50VXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOlRvYXN0ZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclNlcnZpY2UgPSBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5yb2xlID0gdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuZ2V0Um9sZSgpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5hbnN3ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy50aWNrZXQgPSBuZXcgVGlja2V0KFwiXCIsIFwiXCIsIFRpY2tldFN0YXRlLk5FVyk7XHJcbiAgICAgICAgdGhpcy50aWNrZXQudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy50aWNrZXQuYXNzaWduZWQgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF0dGFjaG1lbnQgPSBuZXcgQXR0YWNobWVudCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlUGFyYW1zLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0SWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldFRpY2tldGJ5SWQodGhpcy50aWNrZXRJZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWNrZXQgPSBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tZW50cygpIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZVJlcXVlc3QgPSBuZXcgUGFnZVJlcXVlc3QodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUm93LCB0aGlzLm5hbWVTb3J0LCB0aGlzLm9yZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlc0ZvclRpY2tldCh0aGlzLnBhZ2VSZXF1ZXN0LCB0aGlzLnRpY2tldElkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2ldLmFuc3dlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlcyhkYXRhLnJvd3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzID0gZGF0YS5kYXRlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIrKztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0Om51bWJlciwgZW5kOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5QXJyYXkoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGFnZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOmFueSkge1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCB8fCBlcnJvci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyIGVycm9yIDQwMCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnBvcChvbkVycm9yUmVzb3VyY2VOb3RGb3VuZFRvYXN0TXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZlciBlcnJvciA1MDAnKTtcclxuICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5wb3Aob25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b1RhYmxlVGlja2V0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZS90aWNrZXQnXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvVXNlcihpZDpudW1iZXIpIHtcclxuICAgICAgICAvLyBpZiAoaWQgPT0gdGhpcy5jdXJyZW50VXNlci51c2VySWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL3VzZXIvbWFpbiddKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIucm9sZSA9PSBcIlJPTEVfQURNSU5cIikge1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLnJvbGUgPT0gXCJST0xFX1VTRVJcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL2ZyaWVuZCcsIGlkXSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIucm9sZSA9PSBcIlJPTEVfTUFOQUdFUlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ21hbmFnZXIvdXNlcicsIGlkXSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLnRvVXNlcihpZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEVkaXRNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5tZXNzVGV4dCA9IHRoaXMubWVzc2FnZS5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc3NhZ2UodGV4dDpzdHJpbmcpOnZvaWQge1xyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5tZXNzYWdlSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubWVzc2FnZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UudXNlciA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5pZFRpY2tldCA9IHRoaXMudGlja2V0SWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UodGhpcy5tZXNzYWdlLCB0aGlzLnRpY2tldElkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG1lc3NhZ2UgPT4gdGhpcy5hZGRNZXNzYWdlKG1lc3NhZ2UpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHRoaXMubWVzc2FnZS5tZXNzYWdlSWQgPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TWVzc2FnZSh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0TWVzc2FnZSh0ZXh0OnN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlLm1lc3NhZ2UgPT0gdGhpcy5tZXNzYWdlc1tpXS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuaWRUaWNrZXQgPSB0aGlzLnRpY2tldElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tpXS5tZXNzYWdlID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgTWVzc2FnZShcIlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UucG9wKCdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICwgXCJDb21tZW50IHVwZGF0ZWQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbnN3ZXJzKGluZGV4Om51bWJlcik6TWVzc2FnZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1tpbmRleF0uYW5zd2VycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE1lc3NhZ2UobWVzc2FnZTpJTWVzc2FnZSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy51bnNoaWZ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5hbnN3ZXJzID0gW107XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTWVzc2FnZXMobWVzc2FnZTpJTWVzc2FnZVtdKTp2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2VbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0RWRpdEFuc3dlcihhbnN3ZXI6TWVzc2FnZSwgaWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0Fuc3dlcihpZCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYW5zd2VyO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyVGV4dCA9IHRoaXMubWVzc2FnZS5tZXNzYWdlO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZXNzYWdlQ3JlYXRvcihtZXNzYWdlOk1lc3NhZ2UpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAobWVzc2FnZS51c2VyLmZpcnN0TmFtZSA9PSB0aGlzLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSAmJiBtZXNzYWdlLnVzZXIubGFzdE5hbWUgPT0gdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZVxyXG4gICAgICAgIHx8IHRoaXMuY3VycmVudFVzZXIucm9sZSA9PSAnUk9MRV9BRE1JTicgfHwgdGhpcy5jdXJyZW50VXNlci5yb2xlID09ICdST0xFX01BTkFHRVInKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2VJZCkudGhlbih0aGlzLmRlbE1lc3NhZ2UobWVzc2FnZSkpXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMubWVzc2FnZS5tZXNzYWdlSWQgPSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbE1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUFuc3dlcihpOm51bWJlciwgbWVzc2FnZTpNZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKG1lc3NhZ2UubWVzc2FnZUlkKS50aGVuKHRoaXMuZGVsQW5zd2VyKGksIG1lc3NhZ2UpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbEFuc3dlcihpOm51bWJlciwgbWVzc2FnZTpNZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tZXNzYWdlc1tpXS5hbnN3ZXJzLmluZGV4T2YobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tpXS5hbnN3ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZWRpdFN0YXRlKHN0YXRlOnN0cmluZykge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PSAnSU5fUFJPR1JFU1MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0LnN0YXRlID0gVGlja2V0U3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0U3RhdGUgPSAnSU5fUFJPR1JFU1MnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PSAnRE9ORScpIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXQuc3RhdGUgPSBUaWNrZXRTdGF0ZS5ET05FO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tldFN0YXRlID0gJ0RPTkUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVkaXRTdGF0ZSh0aGlzLnRpY2tldClcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5uZ09uSW5pdCgpKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGVkaXRUaWNrZXQodGlja2V0OklUaWNrZXQpOnZvaWQge1xyXG4gICAgICAgIHRoaXMudGlja2V0U2VydmljZS5lZGl0VGlja2V0KHRpY2tldClcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5uZ09uSW5pdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUaWNrZXQodGlja2V0OklUaWNrZXQpOnZvaWQge1xyXG4gICAgICAgIHRoaXMudGlja2V0U2VydmljZS5kZWxldGVUaWNrZXQodGlja2V0KVxyXG4gICAgICAgICAgICAudGhlbih0aGlzLnRvVGFibGVUaWNrZXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZSh0aW1lOkRhdGUpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlzY3Vzc2VkKGRpc2N1c3NlZDpEYXRlKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkaXNjdXNzZWQpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFkZEFuc3dlcihwYXJlbnRNZXNzYWdlOk1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgTWVzc2FnZShcIlwiKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UucGFyZW50SWQgPSBwYXJlbnRNZXNzYWdlLm1lc3NhZ2VJZDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UudXNlciA9IHRoaXMuY3VycmVudFVzZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuc3dlcih0ZXh0OnN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UubWVzc2FnZUlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLm1lc3NhZ2UgPSB0ZXh0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkQW5zd2VyKHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKG1lc3NhZ2UgPT4gdGhpcy5hZGRBbnN3ZXJUb01lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdEFuc3dlcih0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBbnN3ZXIodGV4dDpzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2UucGFyZW50SWQgPT0gdGhpcy5tZXNzYWdlc1tpXS5tZXNzYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tZXNzYWdlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzW2ldLmFuc3dlcnNbal0ubWVzc2FnZSA9PSB0aGlzLm1lc3NhZ2UubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2ldLmFuc3dlcnNbal0ubWVzc2FnZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlc1tpXS5hbnN3ZXJzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IE1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UucG9wKCdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBcIkFuc3dlciB1cGRhdGVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuc3dlclRvTWVzc2FnZShtZXNzYWdlOk1lc3NhZ2UpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZXNbaV0ubWVzc2FnZUlkID09IG1lc3NhZ2UucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbaV0uYW5zd2Vycy51bnNoaWZ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5wYXJlbnRJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBbnN3ZXIoaWQ6bnVtYmVyKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLnBhcmVudElkID09IGlkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXNzaWduZWQoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudGlja2V0LmFzc2lnbmVkLmZpcnN0TmFtZSA9PSB0aGlzLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSAmJiB0aGlzLnRpY2tldC5hc3NpZ25lZC5sYXN0TmFtZSA9PSB0aGlzLmN1cnJlbnRVc2VyLmxhc3ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NyZWF0b3IoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudGlja2V0LnVzZXIuZmlyc3ROYW1lID09IHRoaXMuY3VycmVudFVzZXIuZmlyc3ROYW1lICYmIHRoaXMudGlja2V0LnVzZXIubGFzdE5hbWUgPT0gdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZSB8fFxyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIucm9sZSA9PSAnUk9MRV9BRE1JTicgfHwgdGhpcy5jdXJyZW50VXNlci5yb2xlID09ICdST0xFX01BTkFHRVInKTtcclxuICAgIH1cclxuXHJcblxyXG4vLyBnYWxsZXJ5XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXR0YWNobWVudCA9IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzW3RoaXMuaW5kZXgrK107XHJcbiAgICB9XHJcblxyXG4gICAgcHJldigpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnRpY2tldC5hdHRhY2htZW50cy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXR0YWNobWVudCA9IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzW3RoaXMuaW5kZXgtLV07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dHYWxsZXJ5KGF0dGFjaG1lbnQ6QXR0YWNobWVudCkge1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXR0YWNobWVudCA9IHRoaXMudGlja2V0LmF0dGFjaG1lbnRzW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlR2FsbGVyeSgpIHtcclxuICAgICAgICB0aGlzLmdhbGxlcnkuaGlkZSgpO1xyXG4gICAgfVxyXG59Il19
