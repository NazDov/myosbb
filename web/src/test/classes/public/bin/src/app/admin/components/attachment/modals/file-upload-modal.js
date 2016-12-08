/**
 * Created by nataliia on 20.09.16.
 */
System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "ng2-translate", "../../../../../shared/pipes/capitalize-first-letter", "ng2-file-upload", "../../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_bootstrap_2, ng2_translate_1, capitalize_first_letter_1, ng2_file_upload_1, ApiService;
    var attachmentUploadUrl, FileUploadComponent;
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
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            attachmentUploadUrl = ApiService.serverUrl + '/restful/attachment/';
            FileUploadComponent = (function () {
                function FileUploadComponent() {
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: attachmentUploadUrl, authToken: 'Bearer '
                            + localStorage.getItem('access_token') });
                    this.hasDropZoneOver = false;
                    this.upload = new core_1.EventEmitter();
                    this.uploader.toReturn = [];
                    this.uploader.onCompleteItem = function (item, response) {
                        this.toReturn.push(JSON.parse(response));
                    };
                }
                FileUploadComponent.prototype.fileOverBase = function (e) {
                    this.hasDropZoneOver = e;
                };
                FileUploadComponent.prototype.openUploadModal = function (attachmentId) {
                    this.uploadModal.show();
                };
                FileUploadComponent.prototype.closeUploadModal = function () {
                    console.log('closing upload modal');
                    this.upload.emit(this.uploader.toReturn);
                    this.uploader.toReturn = [];
                    this.uploader.clearQueue();
                    this.uploadModal.hide();
                };
                FileUploadComponent.prototype.transform = function (bytes) {
                    if (bytes == 0)
                        return '0 Bytes';
                    var k = 1000;
                    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
                    var i = Math.floor(Math.log(bytes) / Math.log(k));
                    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FileUploadComponent.prototype, "upload", void 0);
                __decorate([
                    core_1.ViewChild('uploadModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], FileUploadComponent.prototype, "uploadModal", void 0);
                FileUploadComponent = __decorate([
                    core_1.Component({
                        selector: 'file-upload-modal',
                        templateUrl: 'src/app/admin/components/attachment/modals/file-upload-modal.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_file_upload_1.FileSelectDirective, ng2_file_upload_1.FileDropDirective],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileUploadComponent);
                return FileUploadComponent;
            }());
            exports_1("FileUploadComponent", FileUploadComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvbW9kYWxzL2ZpbGUtdXBsb2FkLW1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7OztRQVlHLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBbkIsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztZQVUxRTtnQkFjSTtvQkFaTyxhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsU0FBUzs4QkFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ2xFLG9CQUFlLEdBQVcsS0FBSyxDQUFDO29CQVduQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO29CQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLFVBQVMsSUFBSSxFQUFFLFFBQVE7d0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFBO2dCQUNMLENBQUM7Z0JBZk0sMENBQVksR0FBbkIsVUFBb0IsQ0FBSztvQkFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBZUQsNkNBQWUsR0FBZixVQUFnQixZQUF1QjtvQkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw4Q0FBZ0IsR0FBaEI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsdUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ1gsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzt3QkFBQyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBL0JEO29CQUFDLGFBQU0sRUFBRTs7bUVBQUE7Z0JBRVQ7b0JBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7O3dFQUFBO2dCQW5CN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsbUVBQW1FO3dCQUNoRixVQUFVLEVBQUUsQ0FBQyxnQ0FBZ0IsRUFBRSx3QkFBZSxFQUFFLHFDQUFtQixFQUFFLG1DQUFpQixDQUFDO3dCQUN2RixhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQztxQkFDcEQsQ0FBQzs7dUNBQUE7Z0JBMkNGLDBCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCxxREF5Q0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9tb2RhbHMvZmlsZS11cGxvYWQtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBuYXRhbGlpYSBvbiAyMC4wOS4xNi5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gXCIuLi9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBCU19WSUVXX1BST1ZJREVSUyB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHsgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVVcGxvYWRlciwgRmlsZUl0ZW0gfSBmcm9tIFwibmcyLWZpbGUtdXBsb2FkXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcbmNvbnN0IGF0dGFjaG1lbnRVcGxvYWRVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9hdHRhY2htZW50Lyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsZS11cGxvYWQtbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9tb2RhbHMvZmlsZS11cGxvYWQtbW9kYWwuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGaWxlU2VsZWN0RGlyZWN0aXZlLCBGaWxlRHJvcERpcmVjdGl2ZV0sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRlcjpGaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IGF0dGFjaG1lbnRVcGxvYWRVcmwsIGF1dGhUb2tlbjogJ0JlYXJlciAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpfSk7XHJcbiAgICBwdWJsaWMgaGFzRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBmaWxlT3ZlckJhc2UoZTphbnkpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFzRHJvcFpvbmVPdmVyID0gZTtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIHByaXZhdGUgYXR0YWNobWVudHM6IEF0dGFjaG1lbnRbXTtcclxuICAgIEBWaWV3Q2hpbGQoJ3VwbG9hZE1vZGFsJylcclxuICAgIHVwbG9hZE1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci50b1JldHVybiA9IFtdO1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSBmdW5jdGlvbihpdGVtLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvUmV0dXJuLnB1c2goSlNPTi5wYXJzZShyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuVXBsb2FkTW9kYWwoYXR0YWNobWVudElkOkF0dGFjaG1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwbG9hZE1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVVwbG9hZE1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zaW5nIHVwbG9hZCBtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMudXBsb2FkLmVtaXQodGhpcy51cGxvYWRlci50b1JldHVybik7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci50b1JldHVybiA9IFtdO1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIuY2xlYXJRdWV1ZSgpO1xyXG4gICAgICAgIHRoaXMudXBsb2FkTW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShieXRlcykge1xyXG4gICAgICAgIGlmKGJ5dGVzID09IDApIHJldHVybiAnMCBCeXRlcyc7XHJcbiAgICAgICAgdmFyIGsgPSAxMDAwO1xyXG4gICAgICAgIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InXTtcclxuICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xyXG4gICAgICAgIHJldHVybiAoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZCgxKSArICcgJyArIHNpemVzW2ldO1xyXG4gICAgfVxyXG59Il19
