System.register(["@angular/core", "@angular/common", "./attachment.service", "rxjs/Rx", "ng2-bootstrap/ng2-bootstrap", "ng2-file-upload/ng2-file-upload", "ng2-translate/ng2-translate", "../../../../shared/pipes/capitalize-first-letter", "./modals/file-upload-modal"], function(exports_1, context_1) {
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
    var core_1, common_1, attachment_service_1, ng2_bootstrap_1, ng2_file_upload_1, ng2_translate_1, capitalize_first_letter_1, file_upload_modal_1;
    var AttachmentAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (attachment_service_1_1) {
                attachment_service_1 = attachment_service_1_1;
            },
            function (_1) {},
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (file_upload_modal_1_1) {
                file_upload_modal_1 = file_upload_modal_1_1;
            }],
        execute: function() {
            AttachmentAdminComponent = (function () {
                function AttachmentAdminComponent(_attachmentService) {
                    this._attachmentService = _attachmentService;
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.order = true;
                    this.pending = false;
                }
                AttachmentAdminComponent.prototype.ngOnInit = function () {
                    this.getAttachmentsByPageNum(this.pageNumber);
                };
                AttachmentAdminComponent.prototype.getAttachmentsByPageNum = function (pageNumber) {
                    var _this = this;
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this._attachmentService.getAllAttachments(this.pageNumber)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.attachments = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                AttachmentAdminComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getAttachmentsByPageNum(this.pageNumber);
                };
                AttachmentAdminComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getAttachmentsByPageNum(this.pageNumber);
                };
                AttachmentAdminComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                AttachmentAdminComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                AttachmentAdminComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.order = !this.order;
                    console.log('order by asc', this.order);
                    this.emptyArray();
                    this._attachmentService.getAllAttachmentsSorted(this.pageNumber, name, this.order)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.attachments = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                AttachmentAdminComponent.prototype.onSearch = function (search) {
                    var _this = this;
                    console.log("inside search: search param" + search);
                    this._attachmentService.findAttachmentByPath(search)
                        .subscribe(function (attachments) {
                        console.log("data: " + attachments);
                        _this.attachments = attachments;
                    });
                };
                AttachmentAdminComponent.prototype.openDelModal = function (id) {
                    this.attachmentId = id;
                    console.log('show', this.attachmentId);
                    this.delModal.show();
                };
                AttachmentAdminComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    console.log('delete', this.attachmentId);
                    this._attachmentService.deleteAttachmentById(this.attachmentId)
                        .then(function () { return _this.getAttachmentsByPageNum(_this.pageNumber); });
                    this.delModal.hide();
                };
                AttachmentAdminComponent.prototype.openDelAllModal = function () {
                    this.delAllModal.show();
                };
                AttachmentAdminComponent.prototype.closeDelAllModal = function () {
                    var _this = this;
                    console.log('delete all');
                    this._attachmentService.deleteAllAttachments()
                        .then(function () { return _this.getAttachmentsByPageNum(_this.pageNumber); });
                    this.delAllModal.hide();
                };
                AttachmentAdminComponent.prototype.onUploadAttachment = function (attachments) {
                    var _this = this;
                    attachments.forEach(function (a) { return _this.attachments.push(a); });
                };
                AttachmentAdminComponent.prototype.getPreview = function (attachment) {
                    return this._attachmentService.getPreview(attachment);
                };
                AttachmentAdminComponent.prototype.ngOnDestroy = function () {
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], AttachmentAdminComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('delAllModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], AttachmentAdminComponent.prototype, "delAllModal", void 0);
                AttachmentAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'my-attachment',
                        templateUrl: 'src/app/admin/components/attachment/attachment.html',
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        providers: [attachment_service_1.AttachmentService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective, file_upload_modal_1.FileUploadComponent],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [attachment_service_1.AttachmentService])
                ], AttachmentAdminComponent);
                return AttachmentAdminComponent;
            }());
            exports_1("AttachmentAdminComponent", AttachmentAdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvYXR0YWNobWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQWNJLGtDQUFvQixrQkFBcUM7b0JBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBUGpELGVBQVUsR0FBVyxDQUFDLENBQUM7b0JBQ3ZCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO29CQUU3QixVQUFLLEdBQVksSUFBSSxDQUFDO29CQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO2dCQUlqQyxDQUFDO2dCQUVELDJDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCwwREFBdUIsR0FBdkIsVUFBd0IsVUFBa0I7b0JBQTFDLGlCQWNDO29CQWJHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUNSLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDNUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsQ0FBQyxFQUNELFVBQUMsS0FBSzt3QkFDRixPQUFP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QUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsOENBQVcsR0FBWDtnQkFFQSxDQUFDO2dCQXRIRDtvQkFBQyxnQkFBUyxDQUFDLFVBQVUsQ0FBQzs7MEVBQUE7Z0JBQ3RCO29CQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDOzs2RUFBQTtnQkFYN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFEQUFxRDt3QkFDbEUsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7d0JBQzlCLFVBQVUsRUFBRSxDQUFDLGdDQUFnQixFQUFFLHdCQUFlLEVBQUUscUNBQW1CLEVBQUUsbUNBQWlCLEVBQUUsdUNBQW1CLENBQUM7d0JBQzVHLGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3FCQUNyQyxDQUFDOzs0Q0FBQTtnQkEwSEYsK0JBQUM7WUFBRCxDQXpIQSxBQXlIQyxJQUFBO1lBekhELCtEQXlIQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50IH0gZnJvbSBcIi4vYXR0YWNobWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXR0YWNobWVudFNlcnZpY2UgfSBmcm9tIFwiLi9hdHRhY2htZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZUNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUywgTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gXCIuL21vZGFscy9maWxlLXVwbG9hZC1tb2RhbFwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcbmltcG9ydCBGaWxlTG9jYXRpb25QYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maWxlLmxvY2F0aW9uLnBhdGhcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXR0YWNobWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuaHRtbCcsXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXR0YWNobWVudFNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2RlbE1vZGFsJykgcHVibGljIGRlbE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2RlbEFsbE1vZGFsJykgcHVibGljIGRlbEFsbE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzOiBBdHRhY2htZW50W107XHJcbiAgICBwcml2YXRlIHBhZ2VDcmVhdG9yOiBQYWdlQ3JlYXRvcjxBdHRhY2htZW50PjtcclxuICAgIHByaXZhdGUgcGFnZU51bWJlcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvcmRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYXR0YWNobWVudElkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXR0YWNobWVudFNlcnZpY2U6IEF0dGFjaG1lbnRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLmdldEF0dGFjaG1lbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0YWNobWVudHNCeVBhZ2VOdW0ocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gK3BhZ2VOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaG1lbnRTZXJ2aWNlLmdldEFsbEF0dGFjaG1lbnRzKHRoaXMucGFnZU51bWJlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNobWVudHMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgLSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0QXR0YWNobWVudHNCeVBhZ2VOdW0odGhpcy5wYWdlTnVtYmVyKVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlciArIDE7XHJcbiAgICAgICAgdGhpcy5nZXRBdHRhY2htZW50c0J5UGFnZU51bSh0aGlzLnBhZ2VOdW1iZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydEJ5KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzb3J0ZWQgYnkgJywgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9ICF0aGlzLm9yZGVyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlciBieSBhc2MnLCB0aGlzLm9yZGVyKTtcclxuICAgICAgICB0aGlzLmVtcHR5QXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9hdHRhY2htZW50U2VydmljZS5nZXRBbGxBdHRhY2htZW50c1NvcnRlZCh0aGlzLnBhZ2VOdW1iZXIsIG5hbWUsIHRoaXMub3JkZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaG1lbnRzID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2goc2VhcmNoOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBzZWFyY2g6IHNlYXJjaCBwYXJhbVwiICsgc2VhcmNoKTtcclxuICAgICAgICB0aGlzLl9hdHRhY2htZW50U2VydmljZS5maW5kQXR0YWNobWVudEJ5UGF0aChzZWFyY2gpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGF0dGFjaG1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgYXR0YWNobWVudHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGVsTW9kYWwoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudElkID0gaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3cnLCB0aGlzLmF0dGFjaG1lbnRJZCk7XHJcbiAgICAgICAgdGhpcy5kZWxNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEZWxNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlJywgdGhpcy5hdHRhY2htZW50SWQpO1xyXG4gICAgICAgIHRoaXMuX2F0dGFjaG1lbnRTZXJ2aWNlLmRlbGV0ZUF0dGFjaG1lbnRCeUlkKHRoaXMuYXR0YWNobWVudElkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmdldEF0dGFjaG1lbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcikpO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZWxBbGxNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmRlbEFsbE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURlbEFsbE1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYWxsJyk7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNobWVudFNlcnZpY2UuZGVsZXRlQWxsQXR0YWNobWVudHMoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmdldEF0dGFjaG1lbnRzQnlQYWdlTnVtKHRoaXMucGFnZU51bWJlcikpO1xyXG4gICAgICAgIHRoaXMuZGVsQWxsTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwbG9hZEF0dGFjaG1lbnQoYXR0YWNobWVudHM6IEF0dGFjaG1lbnRbXSkge1xyXG4gICAgICAgIGF0dGFjaG1lbnRzLmZvckVhY2goYSA9PiB0aGlzLmF0dGFjaG1lbnRzLnB1c2goYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByZXZpZXcoYXR0YWNobWVudDogQXR0YWNobWVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaG1lbnRTZXJ2aWNlLmdldFByZXZpZXcoYXR0YWNobWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
