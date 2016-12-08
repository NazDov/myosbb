System.register(["@angular/core", "../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate", "ng2-bs-dropdown/dropdown", "./service/contract-service", 'ng2-bootstrap/ng2-bootstrap', "@angular/common", "@angular/router", "rxjs/Rx", "../provider/select-provider.component", "./currency.component", "../../../shared/services/mail.sender.service", "../../../shared/pipes/active.filter", "../../attachment/attachment.component", "../../../shared/services/file.location.path"], function(exports_1, context_1) {
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
    var core_1, capitalize_first_letter_1, ng2_translate_1, dropdown_1, contract_service_1, ng2_bootstrap_1, ng2_bootstrap_2, common_1, router_1, select_provider_component_1, currency_component_1, mail_sender_service_1, active_filter_1, attachment_component_1, FileLocationPath;
    var fileUploadPath, fileDownloadPath, ContractComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            },
            function (contract_service_1_1) {
                contract_service_1 = contract_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (select_provider_component_1_1) {
                select_provider_component_1 = select_provider_component_1_1;
            },
            function (currency_component_1_1) {
                currency_component_1 = currency_component_1_1;
            },
            function (mail_sender_service_1_1) {
                mail_sender_service_1 = mail_sender_service_1_1;
            },
            function (active_filter_1_1) {
                active_filter_1 = active_filter_1_1;
            },
            function (attachment_component_1_1) {
                attachment_component_1 = attachment_component_1_1;
            },
            function (FileLocationPath_1) {
                FileLocationPath = FileLocationPath_1;
            }],
        execute: function() {
            fileUploadPath = FileLocationPath.fileUploadPath;
            fileDownloadPath = FileLocationPath.fileDownloadPath;
            ContractComponent = (function () {
                function ContractComponent(_contractService, _mailService) {
                    this._contractService = _contractService;
                    this._mailService = _mailService;
                    this.selected = { contractId: null, dateStart: '', dateFinish: '', text: '', price: null, priceCurrency: 'UAH', attachments: null, osbb: null, active: false, provider: { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: null, email: '', phone: '', address: '', schedule: '', active: false, attachments: null } };
                    this.newContract = { contractId: null, dateStart: '', dateFinish: '', text: '', price: null, priceCurrency: 'UAH',
                        attachments: null, osbb: null, active: true, provider: { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: null, email: '', phone: '', address: '', schedule: '', active: true, attachments: null } };
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.active = true;
                    this.order = true;
                    this.validEndDate = true;
                    this.startBeforeBegin = true;
                    this.isSelectedProvider = true;
                    this.onlyActive = true;
                }
                ContractComponent.prototype.ngOnInit = function () {
                    console.log("init contract cmp");
                    this.getContractsByPageNumAndState(this.pageNumber);
                    console.log("on init only active", this.onlyActive);
                };
                ContractComponent.prototype.refresh = function () {
                    this.getContractsByPageNumAndState(this.pageNumber);
                };
                ContractComponent.prototype.isDateValid = function (date) {
                    return /\d{4}-\d{2}-\d{2}/.test(date);
                };
                ContractComponent.prototype.isDateActual = function (dateStart, dateFinish) {
                    var date = new Date();
                    var current = Date.parse(date.toDateString());
                    if (current > Date.parse(dateFinish)) {
                        console.log("validating err: contract has date finish at past, curent: ", current, "end: ", dateFinish);
                        return this.validEndDate = false;
                    }
                    else
                        this.clearDateValid();
                    if (Date.parse(dateStart) > Date.parse(dateFinish)) {
                        console.log("validating err: contract's strat date must be less than end date");
                        console.log("start", Date.parse(dateStart));
                        console.log("end", Date.parse(dateFinish));
                        console.log("diff must be > 0, now is ", dateFinish - current);
                        return this.startBeforeBegin = false;
                    }
                    else
                        this.clearDateValid();
                    return true;
                };
                ContractComponent.prototype.clearDateValid = function () {
                    console.log('clearing');
                    this.startBeforeBegin = true;
                    this.validEndDate = true;
                };
                ContractComponent.prototype.openEditModal = function (contract) {
                    this.selected = contract;
                    console.log('selected contract: ' + this.selected.contractId);
                    this.editModal.show();
                };
                ContractComponent.prototype.closeEditModal = function () {
                    var _this = this;
                    console.log('closing edt modal');
                    this.editModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ContractComponent.prototype.onEditContractSubmit = function () {
                    var _this = this;
                    console.log("submitted");
                    if (this.isDateActual(this.selected.dateStart, this.selected.dateFinish)) {
                        this.active = false;
                        console.log('saving contract: ', this.selected);
                        this._contractService.editAndSave(this.selected).subscribe(function () {
                            console.log("refreshing...");
                            _this.refresh();
                        }, function (err) {
                            console.log(err);
                        });
                        this.editModal.hide();
                        setTimeout(function () { return _this.active = true; }, 0);
                    }
                };
                ContractComponent.prototype.openCreateModal = function () {
                    this.createModal.show();
                };
                ContractComponent.prototype.closeCreateModal = function () {
                    var _this = this;
                    console.log('closing create modal');
                    this.createModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ContractComponent.prototype.onCreateContractSubmit = function () {
                    var _this = this;
                    console.log("submitted");
                    if (this.isDateActual(this.newContract.dateStart, this.newContract.dateFinish)) {
                        this.active = false;
                        console.log("creating ", this.newContract);
                        this._contractService.addContract(this.newContract).subscribe(function () {
                            console.log("refreshing...");
                            _this.refresh();
                        }, function (err) {
                            console.log(err);
                        });
                        console.log("add contract", this.newContract);
                        this.newContract = {
                            contractId: null,
                            dateStart: '',
                            dateFinish: '',
                            text: '',
                            price: null,
                            priceCurrency: 'UAH',
                            attachments: null,
                            osbb: null,
                            active: true,
                            provider: {
                                providerId: null,
                                name: '',
                                description: '',
                                logoUrl: '',
                                periodicity: '',
                                type: null,
                                email: '',
                                phone: '',
                                address: '',
                                schedule: '',
                                active: true,
                                attachments: null
                            }
                        };
                        this.createModal.hide();
                        setTimeout(function () { return _this.active = true; }, 0);
                    }
                };
                ContractComponent.prototype.openDelModal = function (id) {
                    this.contractId = id;
                    console.log('show', this.contractId);
                    this.delModal.show();
                };
                ContractComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    this.active = false;
                    console.log('delete', this.contractId);
                    this._contractService.deleteContractById(this.contractId).subscribe(function () {
                        console.log("refreshing...");
                        _this.refresh();
                    }, function (err) {
                        console.log(err);
                    });
                    this.delModal.hide();
                    setTimeout(function () { _this.active = true; }, 0);
                };
                ContractComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getContractsByPageNumAndState(this.pageNumber);
                };
                ContractComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getContractsByPageNumAndState(this.pageNumber);
                };
                ContractComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                ContractComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                ContractComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.order = !this.order;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this._contractService.getSortedActiveContracts(this.pageNumber, name, this.order, this.onlyActive)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.contracts = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ContractComponent.prototype.onSearch = function (search) {
                    var _this = this;
                    console.log("inside search: search param" + search);
                    this._contractService.findByProviderName(search)
                        .subscribe(function (contracts) {
                        console.log("data: " + contracts);
                        _this.contracts = contracts;
                    });
                };
                ContractComponent.prototype.editCompany = function (provider) {
                    this.selected.provider = provider;
                    console.log("get provider ", provider);
                };
                ContractComponent.prototype.selectCompany = function (provider) {
                    this.newContract.provider = provider;
                    console.log("insert provider ", this.newContract.provider, provider);
                };
                ContractComponent.prototype.selectCurrency = function (currency) {
                    this.selected.priceCurrency = currency;
                    this.newContract.priceCurrency = currency;
                    console.log("select currency: ", this.selected.priceCurrency);
                };
                ContractComponent.prototype.getContractsByPageNumAndState = function (pageNumber) {
                    var _this = this;
                    console.log("getContractsByPageNum " + pageNumber + "; only active=" + this.onlyActive);
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this._contractService.getContractsByState(this.pageNumber, this.onlyActive)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.contracts = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ;
                ContractComponent.prototype.getContractsByPageNum = function (num) {
                    this.getContractsByPageNumAndState(num);
                };
                ContractComponent.prototype.onOnlyActive = function () {
                    this.onlyActive = !this.onlyActive;
                    console.log("change active filter, onlyActive=", this.onlyActive);
                    this.refresh();
                };
                ContractComponent.prototype.setAttachments = function (event) {
                    console.log("set attachments ", event);
                    this.selected.attachments = event;
                };
                ContractComponent.prototype.setNewContractAttachments = function (event) {
                    console.log("set attachments ", event);
                    this.newContract.attachments = event;
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ContractComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ContractComponent.prototype, "editModal", void 0);
                __decorate([
                    core_1.ViewChild('createModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ContractComponent.prototype, "createModal", void 0);
                ContractComponent = __decorate([
                    core_1.Component({
                        selector: 'myosbb-contract',
                        templateUrl: 'src/app/user/contract/contract-table.html',
                        styleUrls: ['src/app/user/contract/contract.css'],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe, active_filter_1.ActiveFilter],
                        directives: [dropdown_1.DROPDOWN_DIRECTIVES],
                        providers: [contract_service_1.ContractService, mail_sender_service_1.MailService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, select_provider_component_1.SelectProviderComponent, currency_component_1.CurrencyComponent, common_1.NgClass, dropdown_1.DROPDOWN_DIRECTIVES, attachment_component_1.AttachmentComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/user/bills/bill.css', 'src/shared/css/loader.css', 'src/shared/css/general.css']
                    }), 
                    __metadata('design:paramtypes', [contract_service_1.ContractService, mail_sender_service_1.MailService])
                ], ContractComponent);
                return ContractComponent;
            }());
            exports_1("ContractComponent", ContractComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NvbnRyYWN0L2NvbnRyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBMEJNLGNBQWMsRUFDZCxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURoQixjQUFjLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1lBQ2pELGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1lBWTNEO2dCQTJCSSwyQkFBb0IsZ0JBQWdDLEVBQVUsWUFBeUI7b0JBQW5FLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0I7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBekIvRSxhQUFRLEdBQWUsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQ2xMLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsRUFBQyxDQUFDO29CQUV6SixnQkFBVyxHQUFlLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVB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RUFBRSxDQUFDLGtDQUFlLEVBQUUsaUNBQVcsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsZ0NBQWdCLEVBQUUsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSxtREFBdUIsRUFBRSxzQ0FBaUIsRUFBRSxnQkFBTyxFQUFFLDhCQUFtQixFQUFFLDBDQUFtQixDQUFDO3dCQUNqSyxhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7cUJBQ3hHLENBQUM7O3FDQUFBO2dCQXdRRix3QkFBQztZQUFELENBdlFBLEFBdVFDLElBQUE7WUF2UUQsaURBdVFDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbnRyYWN0L2NvbnRyYWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7RFJPUERPV05fRElSRUNUSVZFU30gZnJvbSBcIm5nMi1icy1kcm9wZG93bi9kcm9wZG93blwiO1xyXG5pbXBvcnQge0NvbnRyYWN0U2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9jb250cmFjdC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnRyYWN0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1BhZ2VDcmVhdG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBOZ0NsYXNzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge1NlbGVjdFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vcHJvdmlkZXIvc2VsZWN0LXByb3ZpZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtDdXJyZW5jeUNvbXBvbmVudH0gZnJvbSBcIi4vY3VycmVuY3kuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbWFpbC5zZW5kZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge01haWx9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL21haWwuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7QWN0aXZlRmlsdGVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2FjdGl2ZS5maWx0ZXJcIjtcclxuaW1wb3J0IGNsZWFySW1tZWRpYXRlID0gY29yZS5jbGVhckltbWVkaWF0ZTtcclxuaW1wb3J0IHtBdHRhY2htZW50Q29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYXR0YWNobWVudC9hdHRhY2htZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlsZUxvY2F0aW9uUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZmlsZS5sb2NhdGlvbi5wYXRoXCIpO1xyXG5cclxuY29uc3QgZmlsZVVwbG9hZFBhdGggPSBGaWxlTG9jYXRpb25QYXRoLmZpbGVVcGxvYWRQYXRoO1xyXG5jb25zdCBmaWxlRG93bmxvYWRQYXRoID0gRmlsZUxvY2F0aW9uUGF0aC5maWxlRG93bmxvYWRQYXRoO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXlvc2JiLWNvbnRyYWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL2NvbnRyYWN0L2NvbnRyYWN0LXRhYmxlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9hcHAvdXNlci9jb250cmFjdC9jb250cmFjdC5jc3MnXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSwgQWN0aXZlRmlsdGVyXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtEUk9QRE9XTl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0NvbnRyYWN0U2VydmljZSwgTWFpbFNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIFNlbGVjdFByb3ZpZGVyQ29tcG9uZW50LCBDdXJyZW5jeUNvbXBvbmVudCwgTmdDbGFzcywgRFJPUERPV05fRElSRUNUSVZFUywgQXR0YWNobWVudENvbXBvbmVudF0sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9hcHAvdXNlci9iaWxscy9iaWxsLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyYWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBjb250cmFjdHMgOiAgQ29udHJhY3RbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWQgOiBDb250cmFjdCA9ICB7Y29udHJhY3RJZDogbnVsbCwgZGF0ZVN0YXJ0OicnLCBkYXRlRmluaXNoOicnLCB0ZXh0OiAnJywgcHJpY2U6bnVsbCwgcHJpY2VDdXJyZW5jeTogJ1VBSCcsIGF0dGFjaG1lbnRzOiBudWxsLCBvc2JiOiBudWxsLCAgYWN0aXZlOiBmYWxzZSwgcHJvdmlkZXI6XHJcbiAgICB7cHJvdmlkZXJJZDpudWxsLCBuYW1lOicnLCBkZXNjcmlwdGlvbjonJywgbG9nb1VybDonJywgcGVyaW9kaWNpdHk6JycsIHR5cGU6bnVsbCwgZW1haWw6JycscGhvbmU6JycsIGFkZHJlc3M6JycsIHNjaGVkdWxlOicnLCBhY3RpdmU6IGZhbHNlLCBhdHRhY2htZW50czogbnVsbH19O1xyXG5cclxuICAgIHByaXZhdGUgbmV3Q29udHJhY3QgOiBDb250cmFjdCA9ICB7Y29udHJhY3RJZDogbnVsbCwgZGF0ZVN0YXJ0OicnLCBkYXRlRmluaXNoOicnLCB0ZXh0OiAnJywgcHJpY2U6bnVsbCwgcHJpY2VDdXJyZW5jeTogJ1VBSCcsXHJcbiAgICAgICAgYXR0YWNobWVudHM6IG51bGwsIG9zYmI6IG51bGwsICBhY3RpdmU6IHRydWUsIHByb3ZpZGVyOlxyXG4gICAge3Byb3ZpZGVySWQ6bnVsbCwgbmFtZTonJywgZGVzY3JpcHRpb246JycsIGxvZ29Vcmw6JycsIHBlcmlvZGljaXR5OicnLCB0eXBlOm51bGwsIGVtYWlsOicnLHBob25lOicnLCBhZGRyZXNzOicnLCBzY2hlZHVsZTonJywgYWN0aXZlOiB0cnVlLCBhdHRhY2htZW50czogbnVsbH19O1xyXG5cclxuICAgIHByaXZhdGUgcGFnZUNyZWF0b3I6UGFnZUNyZWF0b3I8Q29udHJhY3Q+O1xyXG4gICAgcHJpdmF0ZSBwYWdlTnVtYmVyOm51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHBhZ2VMaXN0OkFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczpudW1iZXI7XHJcbiAgICBAVmlld0NoaWxkKCdkZWxNb2RhbCcpIHB1YmxpYyBkZWxNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRNb2RhbCcpIHB1YmxpYyBlZGl0TW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdjcmVhdGVNb2RhbCcpIHB1YmxpYyBjcmVhdGVNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIGFjdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAgIG9yZGVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdmFsaWRFbmREYXRlIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGFydEJlZm9yZUJlZ2luIDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgaXNTZWxlY3RlZFByb3ZpZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbmx5QWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRyYWN0SWQ6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRyYWN0U2VydmljZTpDb250cmFjdFNlcnZpY2UsIHByaXZhdGUgX21haWxTZXJ2aWNlOiBNYWlsU2VydmljZSl7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBjb250cmFjdCBjbXBcIik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250cmFjdHNCeVBhZ2VOdW1BbmRTdGF0ZSh0aGlzLnBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gaW5pdCBvbmx5IGFjdGl2ZVwiLCB0aGlzLm9ubHlBY3RpdmUpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udHJhY3RzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RhdGVWYWxpZChkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gL1xcZHs0fS1cXGR7Mn0tXFxkezJ9Ly50ZXN0KGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGF0ZUFjdHVhbChkYXRlU3RhcnQgOiBzdHJpbmcsIGRhdGVGaW5pc2ggOiBzdHJpbmcpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGRhdGUgOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IERhdGUucGFyc2UoZGF0ZS50b0RhdGVTdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgIChjdXJyZW50ID4gRGF0ZS5wYXJzZShkYXRlRmluaXNoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhdGluZyBlcnI6IGNvbnRyYWN0IGhhcyBkYXRlIGZpbmlzaCBhdCBwYXN0LCBjdXJlbnQ6IFwiLCBjdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgXCJlbmQ6IFwiLCBkYXRlRmluaXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRFbmREYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHRoaXMuY2xlYXJEYXRlVmFsaWQoKTtcclxuICAgICAgICBpZiAoRGF0ZS5wYXJzZShkYXRlU3RhcnQpID4gIERhdGUucGFyc2UoZGF0ZUZpbmlzaCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZGF0aW5nIGVycjogY29udHJhY3QncyBzdHJhdCBkYXRlIG11c3QgYmUgbGVzcyB0aGFuIGVuZCBkYXRlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIsIERhdGUucGFyc2UoZGF0ZVN0YXJ0KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5kXCIsRGF0ZS5wYXJzZShkYXRlRmluaXNoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlmZiBtdXN0IGJlID4gMCwgbm93IGlzIFwiLCBkYXRlRmluaXNoIC0gY3VycmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QmVmb3JlQmVnaW4gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5jbGVhckRhdGVWYWxpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckRhdGVWYWxpZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmluZycpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCZWZvcmVCZWdpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWxpZEVuZERhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0TW9kYWwoY29udHJhY3Q6Q29udHJhY3QpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gY29udHJhY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGNvbnRyYWN0OiAnICsgdGhpcy5zZWxlY3RlZC5jb250cmFjdElkKTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZUVkaXRNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZyBlZHQgbW9kYWwnKTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZSA9IHRydWUsIDApO1xyXG4gICAgfVxyXG4gICAgb25FZGl0Q29udHJhY3RTdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0ZWRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEYXRlQWN0dWFsKHRoaXMuc2VsZWN0ZWQuZGF0ZVN0YXJ0LCB0aGlzLnNlbGVjdGVkLmRhdGVGaW5pc2gpKXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyBjb250cmFjdDogJywgdGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyYWN0U2VydmljZS5lZGl0QW5kU2F2ZSh0aGlzLnNlbGVjdGVkKS5zdWJzY3JpYmUoKCkgPT4ge2NvbnNvbGUubG9nKFwicmVmcmVzaGluZy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTt9LFxyXG4gICAgICAgICAgICAgICAgKGVycik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmUgPSB0cnVlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkNyZWF0ZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VDcmVhdGVNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZyBjcmVhdGUgbW9kYWwnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XHJcbiAgICB9XHJcbiAgICBvbkNyZWF0ZUNvbnRyYWN0U3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGVkXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGF0ZUFjdHVhbCh0aGlzLm5ld0NvbnRyYWN0LmRhdGVTdGFydCwgdGhpcy5uZXdDb250cmFjdC5kYXRlRmluaXNoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgXCIsIHRoaXMubmV3Q29udHJhY3QpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250cmFjdFNlcnZpY2UuYWRkQ29udHJhY3QodGhpcy5uZXdDb250cmFjdCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hpbmcuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBjb250cmFjdFwiLCB0aGlzLm5ld0NvbnRyYWN0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXdDb250cmFjdCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RhcnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbmlzaDogJycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VDdXJyZW5jeTogJ1VBSCcsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50czogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9zYmI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29Vcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZGljaXR5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50czogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmUgPSB0cnVlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRlbE1vZGFsKGlkOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RJZCA9IGlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93JywgdGhpcy5jb250cmFjdElkKTtcclxuICAgICAgICB0aGlzLmRlbE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuICAgIGNsb3NlRGVsTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlJywgdGhpcy5jb250cmFjdElkKTtcclxuICAgICAgICB0aGlzLl9jb250cmFjdFNlcnZpY2UuZGVsZXRlQ29udHJhY3RCeUlkKHRoaXMuY29udHJhY3RJZCkuc3Vic2NyaWJlKCgpID0+IHtjb25zb2xlLmxvZyhcInJlZnJlc2hpbmcuLi5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTt9LFxyXG4gICAgICAgICAgICAoZXJyKT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kZWxNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7dGhpcy5hY3RpdmUgPSB0cnVlfSwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByZXZQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlciAtIDE7XHJcbiAgICAgICAgdGhpcy5nZXRDb250cmFjdHNCeVBhZ2VOdW1BbmRTdGF0ZSh0aGlzLnBhZ2VOdW1iZXIpXHJcbiAgICB9XHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udHJhY3RzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKVxyXG4gICAgfVxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVwYXJlUGFnZUxpc3Qoc3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydEJ5KG5hbWU6c3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NvcnRlZCBieSAnLCBuYW1lKTtcclxuICAgICAgICB0aGlzLm9yZGVyID0gIXRoaXMub3JkZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29yZGVyIGJ5IGFzYycsIHRoaXMub3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRyYWN0U2VydmljZS5nZXRTb3J0ZWRBY3RpdmVDb250cmFjdHModGhpcy5wYWdlTnVtYmVyLCBuYW1lLCB0aGlzLm9yZGVyLCB0aGlzLm9ubHlBY3RpdmUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2goc2VhcmNoOnN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgc2VhcmNoOiBzZWFyY2ggcGFyYW1cIiArIHNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fY29udHJhY3RTZXJ2aWNlLmZpbmRCeVByb3ZpZGVyTmFtZShzZWFyY2gpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNvbnRyYWN0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGNvbnRyYWN0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IGNvbnRyYWN0cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdENvbXBhbnkocHJvdmlkZXI6IFByb3ZpZGVyKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgcHJvdmlkZXIgXCIsIHByb3ZpZGVyKTtcclxuICAgIH1cclxuICAgIHNlbGVjdENvbXBhbnkocHJvdmlkZXI6IFByb3ZpZGVyKXtcclxuICAgICAgICB0aGlzLm5ld0NvbnRyYWN0LnByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNlcnQgcHJvdmlkZXIgXCIsIHRoaXMubmV3Q29udHJhY3QucHJvdmlkZXIsIHByb3ZpZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RDdXJyZW5jeShjdXJyZW5jeTpzdHJpbmcpe1xyXG4gICAgIHRoaXMuc2VsZWN0ZWQucHJpY2VDdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgICAgIHRoaXMubmV3Q29udHJhY3QucHJpY2VDdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IGN1cnJlbmN5OiBcIiwgdGhpcy5zZWxlY3RlZC5wcmljZUN1cnJlbmN5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250cmFjdHNCeVBhZ2VOdW1BbmRTdGF0ZShwYWdlTnVtYmVyOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRDb250cmFjdHNCeVBhZ2VOdW0gXCIrIHBhZ2VOdW1iZXIgKyBcIjsgb25seSBhY3RpdmU9XCIgKyB0aGlzLm9ubHlBY3RpdmUpO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICtwYWdlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cmFjdFNlcnZpY2UuZ2V0Q29udHJhY3RzQnlTdGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMub25seUFjdGl2ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3RzID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0Q29udHJhY3RzQnlQYWdlTnVtKG51bSl7XHJcbiAgICAgICAgdGhpcy5nZXRDb250cmFjdHNCeVBhZ2VOdW1BbmRTdGF0ZShudW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT25seUFjdGl2ZSgpe1xyXG4gICAgICAgIHRoaXMub25seUFjdGl2ZSA9ICF0aGlzLm9ubHlBY3RpdmU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgYWN0aXZlIGZpbHRlciwgb25seUFjdGl2ZT1cIiwgdGhpcy5vbmx5QWN0aXZlKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIHNldEF0dGFjaG1lbnRzKGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldCBhdHRhY2htZW50cyBcIiwgZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuYXR0YWNobWVudHMgPSBldmVudDtcclxuICAgIH1cclxuICAgIHNldE5ld0NvbnRyYWN0QXR0YWNobWVudHMoZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0IGF0dGFjaG1lbnRzIFwiLCBldmVudCk7XHJcbiAgICAgICAgdGhpcy5uZXdDb250cmFjdC5hdHRhY2htZW50cyA9IGV2ZW50O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
