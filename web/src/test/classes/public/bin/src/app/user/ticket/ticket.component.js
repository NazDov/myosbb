System.register(["@angular/router", '@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', 'rxjs/Rx', './ticket.service', './ticket_form/ticket-add-form.component', './ticket_form/ticket-edit-form.component', './ticket_form/ticket-del-form.component', "ng2-translate", "../../../shared/pipes/capitalize-first-letter", '@angular/router-deprecated', "./../../../shared/services/current.user.service", '../../../shared/models/page.request', "../../header/header.component", "angular2-toaster/angular2-toaster", "../../../shared/error/error.handler.component", "ng2-file-upload", "../../admin/components/attachment/modals/file-upload-modal", "../../home/voting/vote.component"], function(exports_1, context_1) {
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
    var router_1, core_1, common_1, ng2_bootstrap_1, ticket_service_1, ticket_add_form_component_1, ticket_edit_form_component_1, ticket_del_form_component_1, router_2, ng2_translate_1, capitalize_first_letter_1, router_deprecated_1, current_user_service_1, page_request_1, header_component_1, angular2_toaster_1, error_handler_component_1, ng2_file_upload_1, file_upload_modal_1, vote_component_1;
    var TicketComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (_1) {},
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
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
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (page_request_1_1) {
                page_request_1 = page_request_1_1;
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
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (file_upload_modal_1_1) {
                file_upload_modal_1 = file_upload_modal_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            TicketComponent = (function () {
                function TicketComponent(ticketService, _toasterService, _currentUserService, router) {
                    this.ticketService = ticketService;
                    this._toasterService = _toasterService;
                    this._currentUserService = _currentUserService;
                    this.router = router;
                    this.ticketArr = [];
                    this.dates = [];
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.pending = false;
                    this.selectedRow = 10;
                    this.order = false;
                    this.nameSort = "time";
                    this.status = "";
                    this.email = "";
                    this.emailAssign = "";
                    this._currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this._currentUserService.currentUser;
                    console.log("name" + this.currentUser.role);
                }
                TicketComponent.prototype.ngOnInit = function () {
                    this.getTicketsByPageNum(this.pageNumber, this.selectedRow);
                };
                TicketComponent.prototype.initUpdatedTicket = function (ticket) {
                    this.updatedTicket = ticket;
                };
                TicketComponent.prototype.createTicket = function (ticket) {
                    var _this = this;
                    this.ticketService.addTicket(ticket)
                        .then(function (ticket) { return _this.addTicket(ticket); });
                };
                TicketComponent.prototype.addTicket = function (ticket) {
                    this.ticketArr.unshift(ticket);
                };
                TicketComponent.prototype.editTicket = function (ticket) {
                    this.ticketService.editTicket(ticket);
                    var index = this.ticketArr.indexOf(this.updatedTicket);
                    if (index > -1) {
                        this.ticketArr[index] = ticket;
                    }
                };
                TicketComponent.prototype.setDiscussed = function (ticket) {
                    ticket.discussed = new Date();
                };
                TicketComponent.prototype.deleteTicket = function (ticket) {
                    var _this = this;
                    this.ticketService.deleteTicket(ticket).then(function (ticket) { return _this.deleteTicketFromArr(ticket); });
                };
                TicketComponent.prototype.deleteTicketFromArr = function (ticket) {
                    var index = this.ticketArr.indexOf(ticket);
                    if (index > -1) {
                        this.ticketArr.splice(index, 1);
                    }
                };
                TicketComponent.prototype.getTicketsByPageNum = function (pageNumber, selectedRow) {
                    var _this = this;
                    console.log("getTicketsByPageNum " + this.pageNumber);
                    this.pageNumber = +pageNumber;
                    this.pending = true;
                    this.selectedRow = +selectedRow;
                    this.email = '';
                    this.emailAssign = '';
                    this.status = '';
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.ticketService.getTicketsByPage(this.pageRequest)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        _this.ticketArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                    }, function (error) {
                        _this.handleErrors(error);
                        _this.pending = false;
                        console.error(error);
                    });
                };
                TicketComponent.prototype.findTicketByName = function (name) {
                    var _this = this;
                    console.log("findTicketByName");
                    this.pending = true;
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.ticketService.findByNameDescription(this.pageRequest, this.currentUser.osbbId, name)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        _this.ticketArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                    }, function (error) {
                        _this.pending = false;
                        console.error(error);
                    });
                };
                TicketComponent.prototype.findMyTickets = function () {
                    var _this = this;
                    console.log("findMyTickets");
                    this.pending = true;
                    this.emailAssign = '';
                    this.email = this.currentUser.email;
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.ticketService.findByUser(this.pageRequest, this.email, this.status)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        _this.ticketArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                    }, function (error) {
                        _this.pending = false;
                        console.error(error);
                    });
                };
                TicketComponent.prototype.findMyAssigned = function () {
                    var _this = this;
                    console.log("findMyAssigned");
                    this.pending = true;
                    this.email = '';
                    this.emailAssign = this.currentUser.email;
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.ticketService.findByAssigned(this.pageRequest, this.emailAssign, this.status)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        _this.ticketArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                    }, function (error) {
                        _this.pending = false;
                        console.error(error);
                    });
                };
                TicketComponent.prototype.findTicketByState = function (state) {
                    var _this = this;
                    console.log("findTicketByState");
                    this.pending = true;
                    this.status = state;
                    if (this.email != "") {
                        this.findMyTickets();
                    }
                    else if (this.emailAssign != "") {
                        this.findMyAssigned();
                    }
                    else {
                        this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                        return this.ticketService.findByState(this.pageRequest, state)
                            .subscribe(function (data) {
                            _this.pending = false;
                            _this.pageCreator = data;
                            _this.ticketArr = data.rows;
                            _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                            _this.totalPages = +data.totalPages;
                            _this.dates = data.dates;
                        }, function (error) {
                            _this.pending = false;
                            console.error(error);
                        });
                    }
                };
                TicketComponent.prototype.singleTicket = function (id) {
                    this.router.navigate([this.router.url, id]);
                };
                TicketComponent.prototype.getTime = function (time) {
                    return new Date(time).toLocaleString();
                };
                TicketComponent.prototype.getDiscussed = function (discussed) {
                    return new Date(discussed).toLocaleString();
                };
                TicketComponent.prototype.isCreator = function () {
                    if (this.currentUser.role == 'ROLE_ADMIN' || this.currentUser.role == 'ROLE_MANAGER') {
                        return true;
                    }
                    return false;
                };
                TicketComponent.prototype.selectRowNum = function (row) {
                    console.log("selectRowNum");
                    if (this.status != "") {
                        this.findTicketByState(this.status);
                    }
                    else if (this.email != "") {
                        this.findMyTickets();
                    }
                    else {
                        this.getTicketsByPageNum(this.pageNumber, row);
                    }
                };
                TicketComponent.prototype.prevPage = function () {
                    console.log("prevPage");
                    this.pageNumber = this.pageNumber - 1;
                    if (this.status != "") {
                        this.findTicketByState(this.status);
                    }
                    else if (this.email != "") {
                        this.findMyTickets();
                    }
                    else if (this.emailAssign != "") {
                        this.findMyAssigned();
                    }
                    else {
                        this.getTicketsByPageNum(this.pageNumber, this.selectedRow);
                    }
                };
                TicketComponent.prototype.nextPage = function () {
                    console.log("nextPage");
                    this.pageNumber = this.pageNumber + 1;
                    this.getTicketsByPageNum(this.pageNumber, this.selectedRow);
                };
                TicketComponent.prototype.initPageNum = function (pageNumber, selectedRow) {
                    console.log("initPageNum");
                    this.pageNumber = +pageNumber;
                    this.selectedRow = +selectedRow;
                    if (this.status != "") {
                        this.findTicketByState(this.status);
                    }
                    else if (this.email != "") {
                        this.findMyTickets();
                    }
                    else if (this.emailAssign != "") {
                        this.findMyAssigned();
                    }
                    else {
                        this.getTicketsByPageNum(pageNumber, selectedRow);
                    }
                };
                TicketComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                TicketComponent.prototype.preparePageList = function (start, end) {
                    this.emptyArray();
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                TicketComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log("sortBy");
                    this.emailAssign = '';
                    this.email = '';
                    this.status = '';
                    if (name != '') {
                        this.nameSort = name;
                        this.order = !this.order;
                    }
                    this.pageRequest = new page_request_1.PageRequest(this.pageNumber, this.selectedRow, this.nameSort, this.order);
                    return this.ticketService.getTicketsSorted(this.pageRequest)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.ticketArr = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                TicketComponent.prototype.handleErrors = function (error) {
                    if (error.status === 404 || error.status === 400) {
                        console.log('server error 400');
                        this._toasterService.pop(error_handler_component_1.onErrorResourceNotFoundToastMsg);
                        return;
                    }
                    if (error.status === 500) {
                        console.log('server error 500');
                        this._toasterService.pop(error_handler_component_1.onErrorServerNoResponseToastMsg);
                        return;
                    }
                };
                TicketComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket',
                        templateUrl: './src/app/user/ticket/ticket.component.html',
                        providers: [ticket_service_1.TicketService, angular2_toaster_1.ToasterService],
                        directives: [router_1.RouterOutlet, router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES,
                            ticket_add_form_component_1.TicketAddFormComponent, ticket_edit_form_component_1.TicketEditFormComponent, ticket_del_form_component_1.TicketDelFormComponent,
                            ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, file_upload_modal_1.FileUploadComponent, vote_component_1.VoteComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        styleUrls: ['src/app/user/ticket/ticket.css', 'src/shared/css/loader.css', 'src/shared/css/general.css']
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService, angular2_toaster_1.ToasterService, current_user_service_1.CurrentUserService, router_2.Router])
                ], TicketComponent);
                return TicketComponent;
            }());
            exports_1("TicketComponent", TicketComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBbUJJLHlCQUFvQixhQUEyQixFQUMzQixlQUE4QixFQUM5QixtQkFBc0MsRUFDdEMsTUFBYTtvQkFIYixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWU7b0JBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBQ3RDLFdBQU0sR0FBTixNQUFNLENBQU87b0JBcEJ6QixjQUFTLEdBQWEsRUFBRSxDQUFDO29CQUd6QixVQUFLLEdBQVksRUFBRSxDQUFDO29CQUVwQixlQUFVLEdBQVUsQ0FBQyxDQUFDO29CQUN0QixhQUFRLEdBQWlCLEVBQUUsQ0FBQztvQkFFNUIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7b0JBQ3hCLFVBQUssR0FBVyxLQUFLLENBQUM7b0JBQ3RCLGFBQVEsR0FBVSxNQUFNLENBQUM7b0JBQ3pCLFdBQU0sR0FBVSxFQUFFLENBQUM7b0JBQ25CLFVBQUssR0FBVSxFQUFFLENBQUM7b0JBQ2xCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO29CQU81QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO29CQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU5QyxDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUs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LENBQUMsR0FBRyxDQUFDLHlEQUErQixDQUFDLENBQUM7d0JBQzFELE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyx5REFBK0IsQ0FBQyxDQUFDO3dCQUMxRCxNQUFNLENBQUM7b0JBQ1gsQ0FBQztnQkFDTCxDQUFDO2dCQXhVTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGlDQUFjLENBQUM7d0JBQzFDLFVBQVUsRUFBRSxDQUFDLHFCQUFZLEVBQUUscUNBQWlCLEVBQUUsZ0NBQWdCLEVBQUUsd0JBQWU7NEJBQzNFLGtEQUFzQixFQUFFLG9EQUF1QixFQUFFLGtEQUFzQjs0QkFDdkUscUNBQW1CLEVBQUUsbUNBQWlCLEVBQUUsdUNBQW1CLEVBQUMsOEJBQWEsQ0FBQzt3QkFDOUUsYUFBYSxFQUFFLENBQUMsaUNBQWlCLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDO3FCQUMzRyxDQUFDOzttQ0FBQTtnQkFnVUYsc0JBQUM7WUFBRCxDQTlUQSxBQThUQyxJQUFBO1lBOVRELDZDQThUQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyQ29uZmlnLFJvdXRlck91dGxldH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TU9EQUxfRElSRUNUSVZFUywgQlNfVklFV19QUk9WSURFUlN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TW9kYWxEaXJlY3RpdmV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge1BhZ2VDcmVhdG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtUaWNrZXQsIElUaWNrZXQsVGlja2V0U3RhdGV9IGZyb20gJy4vdGlja2V0JztcclxuaW1wb3J0IHsgVGlja2V0U2VydmljZSB9IGZyb20gJy4vdGlja2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWNrZXRBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi90aWNrZXRfZm9ybS90aWNrZXQtYWRkLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGlja2V0RWRpdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3RpY2tldF9mb3JtL3RpY2tldC1lZGl0LWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGlja2V0RGVsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vdGlja2V0X2Zvcm0vdGlja2V0LWRlbC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7Q3VycmVudFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtOb3RpY2V9IGZyb20gJy4vLi4vLi4vaGVhZGVyL25vdGljZSc7XHJcbmltcG9ydCB7Tm90aWNlU2VydmljZX0gZnJvbSAnLi8uLi8uLi9oZWFkZXIvaGVhZGVyLm5vdGljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtQYWdlUmVxdWVzdH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wYWdlLnJlcXVlc3QnO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCwgVG9hc3RlclNlcnZpY2V9IGZyb20gXCJhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXJcIjtcclxuaW1wb3J0IHtvbkVycm9yUmVzb3VyY2VOb3RGb3VuZFRvYXN0TXNnLCBvbkVycm9yU2VydmVyTm9SZXNwb25zZVRvYXN0TXNnfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2Vycm9yL2Vycm9yLmhhbmRsZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmV9IGZyb20gXCJuZzItZmlsZS11cGxvYWRcIjtcclxuaW1wb3J0IHtGaWxlVXBsb2FkQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L21vZGFscy9maWxlLXVwbG9hZC1tb2RhbFwiO1xyXG5pbXBvcnQge0F0dGFjaG1lbnR9IGZyb20gXCIuLi8uLi9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvYXR0YWNobWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtWb3RlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vaG9tZS92b3Rpbmcvdm90ZS5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RpY2tldCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3JjL2FwcC91c2VyL3RpY2tldC90aWNrZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbVGlja2V0U2VydmljZSwgVG9hc3RlclNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUk9VVEVSX0RJUkVDVElWRVMsIE1PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUyxcclxuICAgICAgICBUaWNrZXRBZGRGb3JtQ29tcG9uZW50LCBUaWNrZXRFZGl0Rm9ybUNvbXBvbmVudCwgVGlja2V0RGVsRm9ybUNvbXBvbmVudCxcclxuICAgICAgICBGaWxlU2VsZWN0RGlyZWN0aXZlLCBGaWxlRHJvcERpcmVjdGl2ZSwgRmlsZVVwbG9hZENvbXBvbmVudCxWb3RlQ29tcG9uZW50XSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9hcHAvdXNlci90aWNrZXQvdGlja2V0LmNzcycsICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWNrZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgdGlja2V0QXJyOklUaWNrZXRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVkVGlja2V0OklUaWNrZXQ7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOlVzZXI7XHJcbiAgICBwcml2YXRlIGRhdGVzOnN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHBhZ2VDcmVhdG9yOlBhZ2VDcmVhdG9yPFRpY2tldD47XHJcbiAgICBwcml2YXRlIHBhZ2VOdW1iZXI6bnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6QXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VzOm51bWJlcjtcclxuICAgIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFJvdzpudW1iZXIgPSAxMDtcclxuICAgIHByaXZhdGUgb3JkZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBuYW1lU29ydDpzdHJpbmcgPSBcInRpbWVcIjtcclxuICAgIHByaXZhdGUgc3RhdHVzOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVtYWlsOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVtYWlsQXNzaWduOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhZ2VSZXF1ZXN0OlBhZ2VSZXF1ZXN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGlja2V0U2VydmljZTpUaWNrZXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6VG9hc3RlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlID0gSGVhZGVyQ29tcG9uZW50LmN1cnJlbnRVc2VyU2VydmljZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZVwiK3RoaXMuY3VycmVudFVzZXIucm9sZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VGlja2V0c0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVcGRhdGVkVGlja2V0KHRpY2tldDpJVGlja2V0KTp2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRUaWNrZXQgPSB0aWNrZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGlja2V0KHRpY2tldDpJVGlja2V0KTp2b2lkIHtcclxuICAgICAgICB0aGlzLnRpY2tldFNlcnZpY2UuYWRkVGlja2V0KHRpY2tldClcclxuICAgICAgICAgICAgLnRoZW4odGlja2V0ID0+IHRoaXMuYWRkVGlja2V0KHRpY2tldCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFkZFRpY2tldCh0aWNrZXQ6SVRpY2tldCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy50aWNrZXRBcnIudW5zaGlmdCh0aWNrZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUaWNrZXQodGlja2V0OklUaWNrZXQpOnZvaWQge1xyXG4gICAgICAgIHRoaXMudGlja2V0U2VydmljZS5lZGl0VGlja2V0KHRpY2tldCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50aWNrZXRBcnIuaW5kZXhPZih0aGlzLnVwZGF0ZWRUaWNrZXQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0QXJyW2luZGV4XSA9IHRpY2tldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzY3Vzc2VkKCB0aWNrZXQ6IElUaWNrZXQpOnZvaWQge1xyXG4gICAgICAgIHRpY2tldC5kaXNjdXNzZWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRpY2tldCh0aWNrZXQ6SVRpY2tldCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLmRlbGV0ZVRpY2tldCh0aWNrZXQpLnRoZW4odGlja2V0ID0+IHRoaXMuZGVsZXRlVGlja2V0RnJvbUFycih0aWNrZXQpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVUaWNrZXRGcm9tQXJyKHRpY2tldDpJVGlja2V0KTp2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRpY2tldEFyci5pbmRleE9mKHRpY2tldCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXRBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlja2V0c0J5UGFnZU51bShwYWdlTnVtYmVyOm51bWJlciwgc2VsZWN0ZWRSb3c6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRUaWNrZXRzQnlQYWdlTnVtIFwiICsgdGhpcy5wYWdlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSArcGFnZU51bWJlcjtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSArc2VsZWN0ZWRSb3c7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1haWxBc3NpZ24gPSAnJztcclxuICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xyXG4gICAgICAgIHRoaXMucGFnZVJlcXVlc3QgPSBuZXcgUGFnZVJlcXVlc3QodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUm93LCB0aGlzLm5hbWVTb3J0LCB0aGlzLm9yZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmdldFRpY2tldHNCeVBhZ2UodGhpcy5wYWdlUmVxdWVzdClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlja2V0QXJyID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzID0gZGF0YS5kYXRlcztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUaWNrZXRCeU5hbWUobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmRUaWNrZXRCeU5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2VSZXF1ZXN0ID0gbmV3IFBhZ2VSZXF1ZXN0KHRoaXMucGFnZU51bWJlciwgdGhpcy5zZWxlY3RlZFJvdywgdGhpcy5uYW1lU29ydCwgdGhpcy5vcmRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0U2VydmljZS5maW5kQnlOYW1lRGVzY3JpcHRpb24odGhpcy5wYWdlUmVxdWVzdCwgdGhpcy5jdXJyZW50VXNlci5vc2JiSWQsIG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpY2tldEFyciA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGEuZGF0ZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRNeVRpY2tldHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5kTXlUaWNrZXRzXCIpO1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbWFpbEFzc2lnbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLmN1cnJlbnRVc2VyLmVtYWlsO1xyXG4gICAgICAgIHRoaXMucGFnZVJlcXVlc3QgPSBuZXcgUGFnZVJlcXVlc3QodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUm93LCB0aGlzLm5hbWVTb3J0LCB0aGlzLm9yZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmZpbmRCeVVzZXIodGhpcy5wYWdlUmVxdWVzdCwgdGhpcy5lbWFpbCwgdGhpcy5zdGF0dXMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpY2tldEFyciA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGEuZGF0ZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kTXlBc3NpZ25lZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmRNeUFzc2lnbmVkXCIpO1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1haWxBc3NpZ24gPSB0aGlzLmN1cnJlbnRVc2VyLmVtYWlsO1xyXG4gICAgICAgIHRoaXMucGFnZVJlcXVlc3QgPSBuZXcgUGFnZVJlcXVlc3QodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUm93LCB0aGlzLm5hbWVTb3J0LCB0aGlzLm9yZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmZpbmRCeUFzc2lnbmVkKHRoaXMucGFnZVJlcXVlc3QsIHRoaXMuZW1haWxBc3NpZ24sIHRoaXMuc3RhdHVzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWNrZXRBcnIgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRhLmRhdGVzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVGlja2V0QnlTdGF0ZShzdGF0ZTpzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmRUaWNrZXRCeVN0YXRlXCIpO1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0ZTtcclxuICAgICAgICBpZiAodGhpcy5lbWFpbCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZE15VGlja2V0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmVtYWlsQXNzaWduICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kTXlBc3NpZ25lZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlUmVxdWVzdCA9IG5ldyBQYWdlUmVxdWVzdCh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRSb3csIHRoaXMubmFtZVNvcnQsIHRoaXMub3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWNrZXRTZXJ2aWNlLmZpbmRCeVN0YXRlKHRoaXMucGFnZVJlcXVlc3QsIHN0YXRlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlja2V0QXJyID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGEuZGF0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNpbmdsZVRpY2tldChpZDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yb3V0ZXIudXJsLCBpZF0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRUaW1lKHRpbWU6RGF0ZSk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNjdXNzZWQoZGlzY3Vzc2VkOkRhdGUpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRpc2N1c3NlZCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NyZWF0b3IoKTpib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIucm9sZSA9PSAnUk9MRV9BRE1JTicgfHwgdGhpcy5jdXJyZW50VXNlci5yb2xlID09ICdST0xFX01BTkFHRVInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFJvd051bShyb3c6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RSb3dOdW1cIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFRpY2tldEJ5U3RhdGUodGhpcy5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmVtYWlsICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kTXlUaWNrZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRpY2tldHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyLCByb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2UGFnZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRUaWNrZXRCeVN0YXRlKHRoaXMuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1haWwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRNeVRpY2tldHMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1haWxBc3NpZ24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRNeUFzc2lnbmVkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlciwgdGhpcy5zZWxlY3RlZFJvdyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHRQYWdlXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlciArIDE7XHJcbiAgICAgICAgdGhpcy5nZXRUaWNrZXRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlciwgdGhpcy5zZWxlY3RlZFJvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRQYWdlTnVtKHBhZ2VOdW1iZXI6bnVtYmVyLCBzZWxlY3RlZFJvdzpudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRQYWdlTnVtXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSArcGFnZU51bWJlcjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUm93ID0gK3NlbGVjdGVkUm93O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRUaWNrZXRCeVN0YXRlKHRoaXMuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1haWwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRNeVRpY2tldHMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1haWxBc3NpZ24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRNeUFzc2lnbmVkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWNrZXRzQnlQYWdlTnVtKHBhZ2VOdW1iZXIsIHNlbGVjdGVkUm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0Om51bWJlciwgZW5kOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNvcnRCeShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic29ydEJ5XCIpO1xyXG4gICAgICAgIHRoaXMuZW1haWxBc3NpZ24gPSAnJztcclxuICAgICAgICB0aGlzLmVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcclxuICAgICAgICBpZiAobmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVTb3J0ID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5vcmRlciA9ICF0aGlzLm9yZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VSZXF1ZXN0ID0gbmV3IFBhZ2VSZXF1ZXN0KHRoaXMucGFnZU51bWJlciwgdGhpcy5zZWxlY3RlZFJvdywgdGhpcy5uYW1lU29ydCwgdGhpcy5vcmRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0U2VydmljZS5nZXRUaWNrZXRzU29ydGVkKHRoaXMucGFnZVJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpY2tldEFyciA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOmFueSkge1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCB8fCBlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyIGVycm9yIDQwMCcpO1xyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3Aob25FcnJvclJlc291cmNlTm90Rm91bmRUb2FzdE1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyIGVycm9yIDUwMCcpO1xyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3Aob25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
