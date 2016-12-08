System.register(["@angular/core", "../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate", "ng2-bs-dropdown/dropdown", "./service/provider-service", 'ng2-bootstrap/ng2-bootstrap', "@angular/common", "ng2-select/ng2-select", "@angular/router", "./provider_type/provider-type.component", "../../../shared/services/mail.sender.service", "../../header/header.component", "../../../shared/models/periodicity.const", "@angular/forms", 'angular2-text-mask', "ng2-file-upload", "../../../shared/services/api.service", "../../../shared/services/file.location.path", "../../attachment/attachment.component"], function(exports_1, context_1) {
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
    var core_1, capitalize_first_letter_1, ng2_translate_1, dropdown_1, provider_service_1, ng2_bootstrap_1, ng2_bootstrap_2, common_1, ng2_select_1, router_1, provider_type_component_1, mail_sender_service_1, header_component_1, periodicity_const_1, forms_1, angular2_text_mask_1, ng2_file_upload_1, ApiService, FileLocationPath, attachment_component_1;
    var attachmentUploadUrl, fileUploadPath, fileDownloadPath, ProviderComponent;
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
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (provider_type_component_1_1) {
                provider_type_component_1 = provider_type_component_1_1;
            },
            function (mail_sender_service_1_1) {
                mail_sender_service_1 = mail_sender_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (periodicity_const_1_1) {
                periodicity_const_1 = periodicity_const_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (angular2_text_mask_1_1) {
                angular2_text_mask_1 = angular2_text_mask_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            },
            function (FileLocationPath_1) {
                FileLocationPath = FileLocationPath_1;
            },
            function (attachment_component_1_1) {
                attachment_component_1 = attachment_component_1_1;
            }],
        execute: function() {
            attachmentUploadUrl = ApiService.serverUrl + '/restful/attachment/';
            fileUploadPath = FileLocationPath.fileUploadPath;
            fileDownloadPath = FileLocationPath.fileDownloadPath;
            ProviderComponent = (function () {
                function ProviderComponent(_providerService, _mailService) {
                    this._providerService = _providerService;
                    this._mailService = _mailService;
                    this.phoneMask = ['(', /[0]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                    this.textMask = [/[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/];
                    this.selected = { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: { providerTypeId: null, providerTypeName: '' },
                        email: '', phone: '', address: '', schedule: '', active: false, attachments: null };
                    this.newProvider = { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: { providerTypeId: null, providerTypeName: '' },
                        email: '', phone: '', address: '', schedule: '', active: false, attachments: null };
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.active = true;
                    this.order = true;
                    this.onlyActive = true;
                    this.shouldRun = true;
                    this.upload = false;
                    this.periodicities = [];
                    this.mail = { to: '', subject: '', text: '' };
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: attachmentUploadUrl, authToken: 'Bearer ' + localStorage.getItem('access_token') });
                    this.hasDropZoneOver = false;
                }
                ProviderComponent.prototype.fileOverBase = function (e) {
                    this.hasDropZoneOver = e;
                };
                ProviderComponent.prototype.ngOnInit = function () {
                    console.log("init provider cmp");
                    console.log("periodicity items:", periodicity_const_1.PeriodicityItems);
                    for (var i = 0; i < periodicity_const_1.PeriodicityItems.length; i++) {
                        this.periodicities.push(periodicity_const_1.PeriodicityItems[i]);
                    }
                    this.getPeriodicitiesTranslation();
                    console.log('readable periodicities: ', this.periodicities);
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderComponent.prototype.setType = function (event) {
                    console.log("set type" + event);
                    this.selected.type = event;
                    this.newProvider.type = event;
                    console.log("selected.type=" + this.selected.type.providerTypeName + JSON.stringify(this.selected));
                };
                ProviderComponent.prototype.onSelectPeriodicity = function (value) {
                    console.log("value: ", value);
                    this.selected.periodicity = this.backToConst(value);
                    this.newProvider.periodicity = this.backToConst(value);
                    console.log("set periodicity: ", this.selected.periodicity);
                };
                ProviderComponent.prototype.onRemove = function (value) {
                    console.log('Removed value is: ', value);
                };
                ProviderComponent.prototype.onType = function (value) {
                    console.log('New search input: ', value);
                };
                ProviderComponent.prototype.onRefresh = function (value) {
                    if (value.text != null)
                        this.selected.periodicity = value.text;
                };
                ProviderComponent.prototype.openEditModal = function (provider) {
                    this.selected = provider;
                    this.upload = false;
                    console.log('selected provider: ' + this.selected);
                    this.editModal.show();
                };
                ProviderComponent.prototype.closeEditModal = function () {
                    var _this = this;
                    console.log('closing edt modal');
                    this.editModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ProviderComponent.prototype.onEditProviderSubmit = function () {
                    var _this = this;
                    this.active = false;
                    if (this.shouldRun) {
                        this._providerService.editProvider(this.selected).subscribe(function () {
                            console.log("refreshing...");
                            _this.shouldRun = false;
                            _this.refresh();
                        }, function (err) {
                            console.log(err);
                        });
                        console.log("save provider: ", this.selected);
                        this.editModal.hide();
                        setTimeout(function () { return _this.active = true; }, 0);
                    }
                };
                ProviderComponent.prototype.openDelModal = function (id) {
                    this.providerId = id;
                    console.log('show', this.providerId);
                    this.delModal.show();
                };
                ProviderComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    this.active = false;
                    console.log('delete', this.providerId);
                    this._providerService.deleteProviderById(this.providerId).subscribe(function () {
                        console.log("refreshing...");
                        _this.refresh();
                    }, function (err) {
                        console.log(err);
                        _this.refresh();
                    });
                    this.delModal.hide();
                    setTimeout(function () { _this.active = true; }, 0);
                };
                ProviderComponent.prototype.getPeriodicitiesTranslation = function () {
                    var _this = this;
                    console.log("got lang", header_component_1.HeaderComponent.translateService.currentLang);
                    var _loop_1 = function(i) {
                        header_component_1.HeaderComponent.translateService.get(this_1.periodicities[i].text)
                            .subscribe(function (data) {
                            _this.periodicities[i].text = data;
                            console.log("periodicity =", _this.periodicities[i]);
                        });
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.periodicities.length; i++) {
                        _loop_1(i);
                    }
                    console.log("periodicities: ", this.periodicities);
                };
                ProviderComponent.prototype.backToConst = function (item) {
                    var items = [{ id: 1, text: 'ONE_TIME' },
                        { id: 2, text: 'PERMANENT_DAYLY' },
                        { id: 3, text: 'PERMANENT_WEEKLY' },
                        { id: 4, text: 'PERMANENT_MONTHLY' },
                        { id: 5, text: 'PERMANENT_YEARLY' }];
                    for (var i = 0; i < items.length; i++) {
                        if (item.id === items[i].id) {
                            console.log("const: ", items[i].text);
                            return items[i].text;
                        }
                    }
                };
                ProviderComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                ProviderComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                ProviderComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.order = !this.order;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this._providerService.getSortedActiveProviders(this.pageNumber, name, this.order, this.onlyActive)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.providers = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ProviderComponent.prototype.onSearch = function (search) {
                    var _this = this;
                    console.log("inside search: search param" + search);
                    this._providerService.findProviderByNameOrDescription(search)
                        .subscribe(function (providers) {
                        console.log("data: " + providers);
                        _this.providers = providers;
                    });
                };
                ProviderComponent.prototype.onSendMessage = function () {
                    console.log("sending...");
                    this.mail = { to: "aska.fed@gmail.com", subject: "TEST", text: "Success!" };
                    this._mailService.sendMail(this.mail);
                };
                ProviderComponent.prototype.onCreateProviderSubmit = function () {
                    var _this = this;
                    this.active = false;
                    console.log("creating ", this.newProvider);
                    if (this.shouldRun) {
                        this._providerService.addProvider(this.newProvider)
                            .subscribe(function () {
                            console.log("refreshing...");
                            _this.shouldRun = false;
                            _this.refresh();
                            _this.emptyFields();
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    console.log("add provider", this.newProvider);
                    var mail = {
                        to: this.newProvider.email,
                        subject: 'PRIVET',
                        text: 'Welcome on the board'
                    };
                    console.log("sending mail", mail);
                    if (this.newProvider.email !== null) {
                        this._mailService.sendMail(mail);
                    }
                    console.log("DOUBLE FUCK");
                    this.createModal.hide();
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ProviderComponent.prototype.closeCreateModal = function () {
                    console.log('closing create modal');
                    this.createModal.hide();
                };
                ProviderComponent.prototype.openCreateModal = function () {
                    this.upload = false;
                    this.createModal.show();
                };
                ProviderComponent.prototype.getProvidersByPageNumAndState = function (pageNumber) {
                    var _this = this;
                    console.log("getProvidersByPageNum " + pageNumber + "; only active=" + this.onlyActive);
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    this.shouldRun = true;
                    return this._providerService.getProvidersByState(this.pageNumber, this.onlyActive)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.providers = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ;
                ProviderComponent.prototype.onOnlyActive = function () {
                    this.onlyActive = !this.onlyActive;
                    console.log("change active filter, onlyActive=", this.onlyActive);
                    if (this.onlyActive == true) {
                        console.log("listing only active providers");
                    }
                    else {
                        console.log("listing all providers");
                    }
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderComponent.prototype.getProvidersByPageNum = function (num) {
                    this.getProvidersByPageNumAndState(num);
                };
                ProviderComponent.prototype.refresh = function () {
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderComponent.prototype.emptyFields = function () {
                    this.newProvider = { providerId: null, name: '', description: '', logoUrl: '', periodicity: '', type: { providerTypeId: null, providerTypeName: '' },
                        email: '', phone: '', address: '', schedule: '', active: false };
                };
                ProviderComponent.prototype.showUploading = function () {
                    this.upload = !this.upload;
                    console.log("uploading", this.upload);
                };
                ProviderComponent.prototype.transform = function (bytes) {
                    if (bytes == 0)
                        return '0 Bytes';
                    var k = 1000;
                    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
                    var i = Math.floor(Math.log(bytes) / Math.log(k));
                    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
                };
                ProviderComponent.prototype.setAttachments = function (event) {
                    console.log("set attachments ", event);
                    this.selected.attachments = event;
                };
                ProviderComponent.prototype.setNewProviderAttachments = function (event) {
                    console.log("set attachments ", event);
                    this.newProvider.attachments = event;
                };
                ProviderComponent.prototype.setLogo = function (event) {
                    console.log("Setting logo to provider " + this.selected.providerId, event);
                    this.selected.logoUrl = event;
                };
                ProviderComponent.prototype.setNewProviderLogo = function (event) {
                    console.log("Setting logo to new provider", event);
                    this.newProvider.logoUrl = event;
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ProviderComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ProviderComponent.prototype, "editModal", void 0);
                __decorate([
                    core_1.ViewChild('createModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], ProviderComponent.prototype, "createModal", void 0);
                ProviderComponent = __decorate([
                    core_1.Component({
                        selector: 'myosbb-provider',
                        templateUrl: 'src/app/user/provider/provider-table.html',
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        directives: [dropdown_1.DROPDOWN_DIRECTIVES],
                        providers: [provider_service_1.ProviderService, mail_sender_service_1.MailService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, provider_type_component_1.ProviderTypeComponent, attachment_component_1.AttachmentComponent,
                            ng2_select_1.SELECT_DIRECTIVES, common_1.NgClass, forms_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES, angular2_text_mask_1.default, ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, dropdown_1.DROPDOWN_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/user/bills/bill.css', 'src/shared/css/loader.css', 'src/shared/css/general.css']
                    }), 
                    __metadata('design:paramtypes', [provider_service_1.ProviderService, mail_sender_service_1.MailService])
                ], ProviderComponent);
                return ProviderComponent;
            }());
            exports_1("ProviderComponent", ProviderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBZ0NNLG1CQUFtQixFQUVuQixjQUFjLEVBQ2QsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUhoQixtQkFBbUIsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1lBRXBFLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDakQsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7WUFlM0Q7Z0JBa0NJLDJCQUFvQixnQkFBZ0MsRUFBVSxZQUF5QjtvQkFBbkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFqQ2hGLGNBQVMsR0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDNUYsYUFBUSxHQUFDLENBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxDQUFDLENBQUM7b0JBRXhXLGFBQVEsR0FBZSxFQUFDLFVBQVUs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eUIsQ0FBQzt3QkFDakQsVUFBVSxFQUFFLENBQUMsOEJBQW1CLENBQUM7d0JBQ2pDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLEVBQUUsaUNBQVcsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsZ0NBQWdCLEVBQUUsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSwrQ0FBcUIsRUFBRSwwQ0FBbUI7NEJBQ3pHLDhCQUFpQixFQUFFLGdCQUFPLEVBQUUsdUJBQWUsRUFBRSxpQ0FBaUIsRUFBRSw0QkFBVyxFQUFFLHFDQUFtQixFQUFFLG1DQUFpQixFQUFFLDhCQUFtQixDQUFFO3dCQUM5SSxhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7cUJBQ3hHLENBQUM7O3FDQUFBO2dCQTRURix3QkFBQztZQUFELENBM1RBLEFBMlRDLElBQUE7WUEzVEQsaURBMlRDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIm5nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0RST1BET1dOX0RJUkVDVElWRVN9IGZyb20gXCJuZzItYnMtZHJvcGRvd24vZHJvcGRvd25cIjtcclxuaW1wb3J0IHtQcm92aWRlclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvcHJvdmlkZXItc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VDcmVhdG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTLCBCVVRUT05fRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtNb2RhbERpcmVjdGl2ZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgTmdDbGFzc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0JVVFRPTl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1zZWxlY3QvbmcyLXNlbGVjdFwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQcm92aWRlclR5cGVDb21wb25lbnR9IGZyb20gXCIuL3Byb3ZpZGVyX3R5cGUvcHJvdmlkZXItdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm92aWRlclR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3Byb3ZpZGVyLnR5cGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJUeXBlU2VydmljZX0gZnJvbSBcIi4vcHJvdmlkZXJfdHlwZS9zZXJ2aWNlL3Byb3ZpZGVyLXR5cGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtNYWlsfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9tYWlsLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL21haWwuc2VuZGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9uZzItc2VsZWN0LWl0ZW0uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQZXJpb2RpY2l0eUl0ZW1zfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wZXJpb2RpY2l0eS5jb25zdFwiO1xyXG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCBNYXNrZWRJbnB1dCBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRlciwgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmV9IGZyb20gXCJuZzItZmlsZS11cGxvYWRcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuaW1wb3J0IEZpbGVMb2NhdGlvblBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpbGUubG9jYXRpb24ucGF0aFwiKTtcclxuaW1wb3J0IHtBdHRhY2htZW50Q29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYXR0YWNobWVudC9hdHRhY2htZW50LmNvbXBvbmVudFwiO1xyXG5jb25zdCBhdHRhY2htZW50VXBsb2FkVXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvYXR0YWNobWVudC8nO1xyXG5cclxuY29uc3QgZmlsZVVwbG9hZFBhdGggPSBGaWxlTG9jYXRpb25QYXRoLmZpbGVVcGxvYWRQYXRoO1xyXG5jb25zdCBmaWxlRG93bmxvYWRQYXRoID0gRmlsZUxvY2F0aW9uUGF0aC5maWxlRG93bmxvYWRQYXRoO1xyXG5kZWNsYXJlIHZhciBzYXZlQXM6YW55O1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteW9zYmItcHJvdmlkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3VzZXIvcHJvdmlkZXIvcHJvdmlkZXItdGFibGUuaHRtbCcsXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgZGlyZWN0aXZlczogW0RST1BET1dOX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvdmlkZXJTZXJ2aWNlLCBNYWlsU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgUHJvdmlkZXJUeXBlQ29tcG9uZW50LCBBdHRhY2htZW50Q29tcG9uZW50LFxyXG4gICAgICAgIFNFTEVDVF9ESVJFQ1RJVkVTLCBOZ0NsYXNzLCBGT1JNX0RJUkVDVElWRVMsIEJVVFRPTl9ESVJFQ1RJVkVTLCBNYXNrZWRJbnB1dCwgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIERST1BET1dOX0RJUkVDVElWRVMgXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBzdHlsZVVybHM6IFsnc3JjL2FwcC91c2VyL2JpbGxzL2JpbGwuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2xvYWRlci5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIHBob25lTWFzaz1bJygnLCAvWzBdLywgL1xcZC8sIC9cXGQvLCAnKScsICcgJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgJy0nLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAvXFxkL107XHJcbiAgICBwdWJsaWMgdGV4dE1hc2s9Wy9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vLC9bQS160JAt0Y/Qhi3Rll0vXTtcclxuICAgIHByaXZhdGUgcHJvdmlkZXJzIDogIFByb3ZpZGVyW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkIDogUHJvdmlkZXIgPSAge3Byb3ZpZGVySWQ6bnVsbCwgbmFtZTonJywgZGVzY3JpcHRpb246JycsIGxvZ29Vcmw6JycsIHBlcmlvZGljaXR5OicnLCB0eXBlOntwcm92aWRlclR5cGVJZDogbnVsbCwgcHJvdmlkZXJUeXBlTmFtZTogJyd9LFxyXG4gICAgICAgIGVtYWlsOicnLHBob25lOicnLCBhZGRyZXNzOicnLCBzY2hlZHVsZTogJycsIGFjdGl2ZTogZmFsc2UsIGF0dGFjaG1lbnRzOiBudWxsfTtcclxuICAgIHByaXZhdGUgbmV3UHJvdmlkZXIgOiBQcm92aWRlciA9ICB7cHJvdmlkZXJJZDpudWxsLCBuYW1lOicnLCBkZXNjcmlwdGlvbjonJywgbG9nb1VybDonJywgcGVyaW9kaWNpdHk6JycsIHR5cGU6e3Byb3ZpZGVyVHlwZUlkOiBudWxsLCBwcm92aWRlclR5cGVOYW1lOiAnJ30sXHJcbiAgICAgICAgZW1haWw6JycscGhvbmU6JycsIGFkZHJlc3M6JycsIHNjaGVkdWxlOiAnJywgYWN0aXZlOiBmYWxzZSwgYXR0YWNobWVudHM6IG51bGx9O1xyXG4gICAgcHJpdmF0ZSBwYWdlQ3JlYXRvcjpQYWdlQ3JlYXRvcjxQcm92aWRlcj47XHJcbiAgICBwcml2YXRlIHBhZ2VOdW1iZXI6bnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6QXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VzOm51bWJlcjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdkZWxNb2RhbCcpIHB1YmxpYyBkZWxNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRNb2RhbCcpIHB1YmxpYyBlZGl0TW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdjcmVhdGVNb2RhbCcpIHB1YmxpYyBjcmVhdGVNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuICAgIGFjdGl2ZTpib29sZWFuID0gdHJ1ZTtcclxuICAgIG9yZGVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgb25seUFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG91bGRSdW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSB1cGxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHByb3ZpZGVySWQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwZXJpb2RpY2l0aWVzOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIG1haWwgOiBNYWlsID0ge3RvOicnLCBzdWJqZWN0OiAnJywgdGV4dDogJyd9O1xyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRlcjpGaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IGF0dGFjaG1lbnRVcGxvYWRVcmwsIGF1dGhUb2tlbjogJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpfSk7XHJcbiAgICBwdWJsaWMgaGFzRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBmaWxlT3ZlckJhc2UoZTphbnkpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFzRHJvcFpvbmVPdmVyID0gZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm92aWRlclNlcnZpY2U6UHJvdmlkZXJTZXJ2aWNlLCBwcml2YXRlIF9tYWlsU2VydmljZTogTWFpbFNlcnZpY2Upe1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgcHJvdmlkZXIgY21wXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVyaW9kaWNpdHkgaXRlbXM6XCIsIFBlcmlvZGljaXR5SXRlbXMpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxQZXJpb2RpY2l0eUl0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJpb2RpY2l0aWVzLnB1c2goUGVyaW9kaWNpdHlJdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldFBlcmlvZGljaXRpZXNUcmFuc2xhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkYWJsZSBwZXJpb2RpY2l0aWVzOiAnLCB0aGlzLnBlcmlvZGljaXRpZXMpO1xyXG4gICAgICAgICAgdGhpcy5nZXRQcm92aWRlcnNCeVBhZ2VOdW1BbmRTdGF0ZSh0aGlzLnBhZ2VOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgc2V0VHlwZShldmVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgdHlwZVwiICsgZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQudHlwZSA9IGV2ZW50O1xyXG4gICAgICAgIHRoaXMubmV3UHJvdmlkZXIudHlwZSA9IGV2ZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQudHlwZT1cIiArIHRoaXMuc2VsZWN0ZWQudHlwZS5wcm92aWRlclR5cGVOYW1lICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNlbGVjdFBlcmlvZGljaXR5KHZhbHVlOlNlbGVjdEl0ZW0pOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWU6IFwiLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wZXJpb2RpY2l0eSA9IHRoaXMuYmFja1RvQ29uc3QodmFsdWUpO1xyXG4gICAgICAgIHRoaXMubmV3UHJvdmlkZXIucGVyaW9kaWNpdHkgPSB0aGlzLmJhY2tUb0NvbnN0KHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldCBwZXJpb2RpY2l0eTogXCIsIHRoaXMuc2VsZWN0ZWQucGVyaW9kaWNpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlbW92ZSh2YWx1ZTpTZWxlY3RJdGVtKTp2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCB2YWx1ZSBpczogJywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVHlwZSh2YWx1ZTpTZWxlY3RJdGVtKTp2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IHNlYXJjaCBpbnB1dDogJywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVmcmVzaCh2YWx1ZTpTZWxlY3RJdGVtKTp2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUudGV4dCAhPSBudWxsKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucGVyaW9kaWNpdHkgPSB2YWx1ZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0TW9kYWwocHJvdmlkZXI6UHJvdmlkZXIpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gcHJvdmlkZXI7XHJcbiAgICAgICAgdGhpcy51cGxvYWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvdmlkZXI6ICcgKyB0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZUVkaXRNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZyBlZHQgbW9kYWwnKTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZSA9IHRydWUsIDApO1xyXG4gICAgfVxyXG4gICAgb25FZGl0UHJvdmlkZXJTdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zaG91bGRSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmVkaXRQcm92aWRlcih0aGlzLnNlbGVjdGVkKS5zdWJzY3JpYmUoKCkgPT4ge2NvbnNvbGUubG9nKFwicmVmcmVzaGluZy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZFJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgcHJvdmlkZXI6IFwiLCB0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGVsTW9kYWwoaWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcklkID0gaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3cnLCB0aGlzLnByb3ZpZGVySWQpO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VEZWxNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnLCB0aGlzLnByb3ZpZGVySWQpO1xyXG4gICAgICAgIHRoaXMuX3Byb3ZpZGVyU2VydmljZS5kZWxldGVQcm92aWRlckJ5SWQodGhpcy5wcm92aWRlcklkKS5zdWJzY3JpYmUoKCkgPT4ge2NvbnNvbGUubG9nKFwicmVmcmVzaGluZy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTt9ICxcclxuICAgICAgICAgICAgKGVycik9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kZWxNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7dGhpcy5hY3RpdmUgPSB0cnVlfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyaW9kaWNpdGllc1RyYW5zbGF0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnb3QgbGFuZ1wiLCAgSGVhZGVyQ29tcG9uZW50LnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMucGVyaW9kaWNpdGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIEhlYWRlckNvbXBvbmVudC50cmFuc2xhdGVTZXJ2aWNlLmdldCh0aGlzLnBlcmlvZGljaXRpZXNbaV0udGV4dClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlvZGljaXRpZXNbaV0udGV4dCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwZXJpb2RpY2l0eSA9XCIsIHRoaXMucGVyaW9kaWNpdGllc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInBlcmlvZGljaXRpZXM6IFwiLCB0aGlzLnBlcmlvZGljaXRpZXMpO1xyXG4gICAgfVxyXG4gICAgYmFja1RvQ29uc3QoaXRlbTogU2VsZWN0SXRlbSk6IHN0cmluZ3tcclxuICAgICAgICB2YXIgaXRlbXMgOiBTZWxlY3RJdGVtW10gPVxyXG4gICAgICAgICAgICBbe2lkOiAxLCB0ZXh0OiAnT05FX1RJTUUnfSxcclxuICAgICAgICAgICAgICAgIHtpZDogMiwgdGV4dDogJ1BFUk1BTkVOVF9EQVlMWSd9LFxyXG4gICAgICAgICAgICAgICAge2lkOiAzLCB0ZXh0OiAnUEVSTUFORU5UX1dFRUtMWSd9LFxyXG4gICAgICAgICAgICAgICAge2lkOiA0LCB0ZXh0OiAnUEVSTUFORU5UX01PTlRITFknfSxcclxuICAgICAgICAgICAgICAgIHtpZDogNSwgdGV4dDogJ1BFUk1BTkVOVF9ZRUFSTFknfV07XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGl0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW1zW2ldLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0OiBcIiwgaXRlbXNbaV0udGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbaV0udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgLSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvdmlkZXJzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKVxyXG4gICAgfVxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyICsgMTtcclxuICAgICAgICB0aGlzLmdldFByb3ZpZGVyc0J5UGFnZU51bUFuZFN0YXRlKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuICAgIGVtcHR5QXJyYXkoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGFnZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0Om51bWJlciwgZW5kOm51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNvcnRCeShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzb3J0ZWQgYnkgJywgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9ICF0aGlzLm9yZGVyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlciBieSBhc2MnLCB0aGlzLm9yZGVyKTtcclxuICAgICAgICB0aGlzLmVtcHR5QXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9wcm92aWRlclNlcnZpY2UuZ2V0U29ydGVkQWN0aXZlUHJvdmlkZXJzKHRoaXMucGFnZU51bWJlciwgbmFtZSwgdGhpcy5vcmRlciwgdGhpcy5vbmx5QWN0aXZlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ3JlYXRvciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoKHNlYXJjaDpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHNlYXJjaDogc2VhcmNoIHBhcmFtXCIgKyBzZWFyY2gpO1xyXG4gICAgICAgIHRoaXMuX3Byb3ZpZGVyU2VydmljZS5maW5kUHJvdmlkZXJCeU5hbWVPckRlc2NyaXB0aW9uKHNlYXJjaClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocHJvdmlkZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgcHJvdmlkZXJzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzID0gcHJvdmlkZXJzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbmRNZXNzYWdlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbCA9IHt0bzogXCJhc2thLmZlZEBnbWFpbC5jb21cIiwgc3ViamVjdDogXCJURVNUXCIsIHRleHQ6IFwiU3VjY2VzcyFcIn07XHJcbiAgICAgICAgdGhpcy5fbWFpbFNlcnZpY2Uuc2VuZE1haWwodGhpcy5tYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVByb3ZpZGVyU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIFwiLCB0aGlzLm5ld1Byb3ZpZGVyKTtcclxuICAgICAgICBpZiAodGhpcy5zaG91bGRSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmFkZFByb3ZpZGVyKHRoaXMubmV3UHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtjb25zb2xlLmxvZyhcInJlZnJlc2hpbmcuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBwcm92aWRlclwiLCB0aGlzLm5ld1Byb3ZpZGVyKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBtYWlsIDogTWFpbCA9IHtcclxuICAgICAgICAgICAgdG86IHRoaXMubmV3UHJvdmlkZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHN1YmplY3Q6ICdQUklWRVQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnV2VsY29tZSBvbiB0aGUgYm9hcmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgbWFpbFwiLCBtYWlsKTtcclxuICAgICAgICBpZiAodGhpcy5uZXdQcm92aWRlci5lbWFpbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYWlsU2VydmljZS5zZW5kTWFpbChtYWlsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJET1VCTEUgRlVDS1wiKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDcmVhdGVNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZyBjcmVhdGUgbW9kYWwnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcbiAgICBvcGVuQ3JlYXRlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy51cGxvYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm92aWRlcnNCeVBhZ2VOdW1BbmRTdGF0ZShwYWdlTnVtYmVyOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRQcm92aWRlcnNCeVBhZ2VOdW0gXCIrIHBhZ2VOdW1iZXIgKyBcIjsgb25seSBhY3RpdmU9XCIgKyB0aGlzLm9ubHlBY3RpdmUpO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICtwYWdlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc2hvdWxkUnVuID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmdldFByb3ZpZGVyc0J5U3RhdGUodGhpcy5wYWdlTnVtYmVyLCB0aGlzLm9ubHlBY3RpdmUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVycyA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uT25seUFjdGl2ZSgpe1xyXG4gICAgICAgIHRoaXMub25seUFjdGl2ZSA9ICF0aGlzLm9ubHlBY3RpdmU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgYWN0aXZlIGZpbHRlciwgb25seUFjdGl2ZT1cIiwgdGhpcy5vbmx5QWN0aXZlKTtcclxuICAgICAgICBpZiAodGhpcy5vbmx5QWN0aXZlID09IHRydWUpIHtjb25zb2xlLmxvZyhcImxpc3Rpbmcgb25seSBhY3RpdmUgcHJvdmlkZXJzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7Y29uc29sZS5sb2coXCJsaXN0aW5nIGFsbCBwcm92aWRlcnNcIik7fVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvdmlkZXJzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm92aWRlcnNCeVBhZ2VOdW0obnVtKXtcclxuICAgICAgICB0aGlzLmdldFByb3ZpZGVyc0J5UGFnZU51bUFuZFN0YXRlKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb3ZpZGVyc0J5UGFnZU51bUFuZFN0YXRlKHRoaXMucGFnZU51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlGaWVsZHMoKXtcclxuICAgICAgICB0aGlzLm5ld1Byb3ZpZGVyICA9ICB7cHJvdmlkZXJJZDpudWxsLCBuYW1lOicnLCBkZXNjcmlwdGlvbjonJywgbG9nb1VybDonJywgcGVyaW9kaWNpdHk6JycsIHR5cGU6e3Byb3ZpZGVyVHlwZUlkOiBudWxsLCBwcm92aWRlclR5cGVOYW1lOiAnJ30sXHJcbiAgICAgICAgICAgIGVtYWlsOicnLHBob25lOicnLCBhZGRyZXNzOicnLCBzY2hlZHVsZTogJycsIGFjdGl2ZTogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dVcGxvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLnVwbG9hZCA9ICF0aGlzLnVwbG9hZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZGluZ1wiLCB0aGlzLnVwbG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKGJ5dGVzKSB7XHJcbiAgICAgICAgaWYoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGVzJztcclxuICAgICAgICB2YXIgayA9IDEwMDA7XHJcbiAgICAgICAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQiddO1xyXG4gICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XHJcbiAgICAgICAgcmV0dXJuIChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDEpICsgJyAnICsgc2l6ZXNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0YWNobWVudHMoZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0IGF0dGFjaG1lbnRzIFwiLCBldmVudCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5hdHRhY2htZW50cyA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgc2V0TmV3UHJvdmlkZXJBdHRhY2htZW50cyhldmVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgYXR0YWNobWVudHMgXCIsIGV2ZW50KTtcclxuICAgICAgICB0aGlzLm5ld1Byb3ZpZGVyLmF0dGFjaG1lbnRzID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9nbyhldmVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGxvZ28gdG8gcHJvdmlkZXIgXCIgKyB0aGlzLnNlbGVjdGVkLnByb3ZpZGVySWQsIGV2ZW50KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLmxvZ29VcmwgPSBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQcm92aWRlckxvZ28oZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBsb2dvIHRvIG5ldyBwcm92aWRlclwiLCBldmVudCk7XHJcbiAgICAgICAgdGhpcy5uZXdQcm92aWRlci5sb2dvVXJsID0gZXZlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
