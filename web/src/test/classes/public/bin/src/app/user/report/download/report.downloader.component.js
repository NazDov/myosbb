System.register(["@angular/core", "./report.downloader.service", "angular2-toaster/angular2-toaster", "./redirect.component", "../../../../shared/services/current.user.service", "../../../../shared/error/error.handler.component", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, report_downloader_service_1, angular2_toaster_1, redirect_component_1, current_user_service_1, error_handler_component_1, ApiService;
    var userReportUrl, reportUrl, PDF_MIME_TYPE, EXCEL_MIME_TYPE, CSV_MIME_TYPE, ReportDownloaderComponent, onFileDownloadSuccessToastMsg;
    function setFileName(docType) {
        var fileName;
        console.log('setting filename: report.' + docType);
        switch (docType) {
            case 'pdf':
                fileName = 'report.pdf';
                break;
            case 'xls':
                fileName = 'report.xls';
                break;
            case 'csv':
                fileName = 'report.csv';
                break;
            default:
                fileName = 'report.txt';
        }
        return fileName;
    }
    function setContentType(type) {
        console.log('setting contentType: ' + type);
        var mimeType;
        switch (type) {
            case 'pdf':
                mimeType = PDF_MIME_TYPE;
                break;
            case 'xls':
                mimeType = EXCEL_MIME_TYPE;
                break;
            case 'csv':
                mimeType = CSV_MIME_TYPE;
                break;
        }
        return mimeType;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_downloader_service_1_1) {
                report_downloader_service_1 = report_downloader_service_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (redirect_component_1_1) {
                redirect_component_1 = redirect_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (error_handler_component_1_1) {
                error_handler_component_1 = error_handler_component_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            userReportUrl = ApiService.serverUrl + '/restful/report/user/';
            reportUrl = ApiService.serverUrl + '/restful/report';
            PDF_MIME_TYPE = 'application/pdf';
            EXCEL_MIME_TYPE = 'text/xls';
            CSV_MIME_TYPE = 'text/csv';
            ReportDownloaderComponent = (function () {
                function ReportDownloaderComponent(_toasterService, _currentUserService) {
                    this._toasterService = _toasterService;
                    this._currentUserService = _currentUserService;
                    this.pending = false;
                    this.hasError = false;
                    this.toasterconfig = new angular2_toaster_1.ToasterConfig({ timeout: 20000 });
                }
                ReportDownloaderComponent.prototype.download = function (docType) {
                    var _this = this;
                    this.currentUser = this._currentUserService.getUser();
                    console.log('current user: ', this.currentUser.lastName);
                    var self = this;
                    this.pending = true;
                    var xhr = new XMLHttpRequest();
                    var url = this.selectDownloadURL(docType);
                    xhr.open('GET', url, true);
                    xhr.withCredentials = false;
                    xhr.responseType = 'blob';
                    console.log('preparing download...');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState != 4)
                            return;
                        clearTimeout(serverTimeout);
                        if (xhr.status === 200) {
                            var mimeType = setContentType(docType);
                            var blob = new Blob([this.response], { type: mimeType });
                            saveAs(blob, setFileName(docType));
                            self.pending = false;
                            self.hasError = false;
                            self.handleResponse();
                        }
                        else {
                            console.error('error while loading resources');
                            self.pending = false;
                            self.hasError = true;
                            self.handleResponse();
                        }
                    };
                    var serverTimeout = setTimeout(function () {
                        console.log('terminating server connection d/t too long connection time');
                        xhr.abort();
                        _this._toasterService.pop(error_handler_component_1.onErrorServerNoResponseToastMsg);
                    }, 15000);
                    xhr.send();
                };
                ReportDownloaderComponent.prototype.selectDownloadURL = function (docType) {
                    var url = '';
                    if (this.isUserDownload) {
                        url = userReportUrl + this.currentUser.userId + '/download?type=' + docType;
                    }
                    else {
                        url = reportUrl + '/download?type=' + docType;
                    }
                    console.log('', url);
                    return url;
                };
                ReportDownloaderComponent.prototype.handleResponse = function () {
                    if (!this.pending && !this.hasError) {
                        this._toasterService.pop(onFileDownloadSuccessToastMsg);
                    }
                    else {
                        this._toasterService.pop(error_handler_component_1.onErrorResourceNotFoundToastMsg);
                    }
                };
                ReportDownloaderComponent = __decorate([
                    core_1.Component({
                        selector: 'file-downloader',
                        templateUrl: 'src/app/user/report/download/report.downloader.html',
                        providers: [report_downloader_service_1.FileDownloaderService, angular2_toaster_1.ToasterService],
                        inputs: ['isUserDownload'],
                        directives: [angular2_toaster_1.ToasterContainerComponent],
                        styleUrls: ['src/shared/css/loader.css']
                    }), 
                    __metadata('design:paramtypes', [angular2_toaster_1.ToasterService, current_user_service_1.CurrentUserService])
                ], ReportDownloaderComponent);
                return ReportDownloaderComponent;
            }());
            exports_1("ReportDownloaderComponent", ReportDownloaderComponent);
            exports_1("onFileDownloadSuccessToastMsg", onFileDownloadSuccessToastMsg = {
                type: 'success',
                title: '',
                body: redirect_component_1.RedirectComponent,
                showCloseButton: true,
                bodyOutputType: angular2_toaster_1.BodyOutputType.Component
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC9kb3dubG9hZC9yZXBvcnQuZG93bmxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQWtCSSxhQUFhLEVBQ2IsU0FBUyxFQUlQLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSw2QkF5RlIsNkJBQTZCO0lBU3hDLHFCQUFxQixPQUFPO1FBQ3hCLElBQUksUUFBZ0IsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLEtBQUs7Z0JBQ04sUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztZQUNWLEtBQUssS0FBSztnQkFDTixRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUN4QixLQUFLLENBQUM7WUFDVjtnQkFDSSxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDRCx3QkFBd0IsSUFBSTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBZ0IsQ0FBQztRQUNyQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNOLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNWLEtBQUssS0FBSztnQkFDTixRQUFRLEdBQUcsZUFBZSxDQUFDO2dCQUMzQixLQUFLLENBQUM7WUFDVixLQUFLLEtBQUs7Z0JBQ04sUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sQ0FB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QUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDMUIsVUFBVSxFQUFFLENBQUMsNENBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3FCQUMzQyxDQUFDOzs2Q0FBQTtnQkE2RUYsZ0NBQUM7WUFBRCxDQTVFQSxBQTRFQyxJQUFBO1lBNUVELGlFQTRFQyxDQUFBO1lBRVUsMkNBQUEsNkJBQTZCLEdBQVU7Z0JBQzlDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxzQ0FBaUI7Z0JBQ3ZCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixjQUFjLEVBQUUsaUNBQWMsQ0FBQyxTQUFTO2FBQzNDLENBQUEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVwb3J0L2Rvd25sb2FkL3JlcG9ydC5kb3dubG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0ZpbGVEb3dubG9hZGVyU2VydmljZX0gZnJvbSBcIi4vcmVwb3J0LmRvd25sb2FkZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgVG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFRvYXN0LFxyXG4gICAgVG9hc3RlclNlcnZpY2UsXHJcbiAgICBUb2FzdGVyQ29uZmlnLFxyXG4gICAgQm9keU91dHB1dFR5cGVcclxufSBmcm9tIFwiYW5ndWxhcjItdG9hc3Rlci9hbmd1bGFyMi10b2FzdGVyXCI7XHJcbmltcG9ydCB7UmVkaXJlY3RDb21wb25lbnR9IGZyb20gXCIuL3JlZGlyZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0N1cnJlbnRVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIG9uRXJyb3JTZXJ2ZXJOb1Jlc3BvbnNlVG9hc3RNc2csXHJcbiAgICBvbkVycm9yUmVzb3VyY2VOb3RGb3VuZFRvYXN0TXNnXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9lcnJvci9lcnJvci5oYW5kbGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcblxyXG5sZXQgdXNlclJlcG9ydFVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3JlcG9ydC91c2VyLyc7XHJcbmxldCByZXBvcnRVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9yZXBvcnQnO1xyXG5cclxuZGVjbGFyZSB2YXIgc2F2ZUFzOiBhbnk7XHJcblxyXG5jb25zdCBQREZfTUlNRV9UWVBFID0gJ2FwcGxpY2F0aW9uL3BkZic7XHJcbmNvbnN0IEVYQ0VMX01JTUVfVFlQRSA9ICd0ZXh0L3hscyc7XHJcbmNvbnN0IENTVl9NSU1FX1RZUEUgPSAndGV4dC9jc3YnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWxlLWRvd25sb2FkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3VzZXIvcmVwb3J0L2Rvd25sb2FkL3JlcG9ydC5kb3dubG9hZGVyLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbRmlsZURvd25sb2FkZXJTZXJ2aWNlLCBUb2FzdGVyU2VydmljZV0sXHJcbiAgICBpbnB1dHM6IFsnaXNVc2VyRG93bmxvYWQnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydERvd25sb2FkZXJDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgcGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBoYXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHRvYXN0ZXJjb25maWc6IFRvYXN0ZXJDb25maWcgPVxyXG4gICAgICAgIG5ldyBUb2FzdGVyQ29uZmlnKHt0aW1lb3V0OiAyMDAwMH0pO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlcjtcclxuICAgIHByaXZhdGUgaXNVc2VyRG93bmxvYWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLCBwcml2YXRlIF9jdXJyZW50VXNlclNlcnZpY2U6IEN1cnJlbnRVc2VyU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZG93bmxvYWQoZG9jVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdXNlcjogJywgdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZSk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNlbGVjdERvd25sb2FkVVJMKGRvY1R5cGUpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHM9ZmFsc2U7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyaW5nIGRvd25sb2FkLi4uJyk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlcnZlclRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbWVUeXBlID0gc2V0Q29udGVudFR5cGUoZG9jVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLnJlc3BvbnNlXSwge3R5cGU6IG1pbWVUeXBlfSk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgc2V0RmlsZU5hbWUoZG9jVHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZVJlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciB3aGlsZSBsb2FkaW5nIHJlc291cmNlcycpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaGFuZGxlUmVzcG9uc2UoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHNlcnZlclRpbWVvdXQ6IG51bWJlciA9IHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXJtaW5hdGluZyBzZXJ2ZXIgY29ubmVjdGlvbiBkL3QgdG9vIGxvbmcgY29ubmVjdGlvbiB0aW1lJyk7XHJcbiAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3Aob25FcnJvclNlcnZlck5vUmVzcG9uc2VUb2FzdE1zZyk7XHJcbiAgICAgICAgfSwgMTUwMDApO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdERvd25sb2FkVVJMKGRvY1R5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVXNlckRvd25sb2FkKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVzZXJSZXBvcnRVcmwgKyB0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCArICcvZG93bmxvYWQ/dHlwZT0nICsgZG9jVHlwZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSByZXBvcnRVcmwgKyAnL2Rvd25sb2FkP3R5cGU9JyArIGRvY1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcnLCB1cmwpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGVuZGluZyAmJiAhdGhpcy5oYXNFcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3Aob25GaWxlRG93bmxvYWRTdWNjZXNzVG9hc3RNc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcChvbkVycm9yUmVzb3VyY2VOb3RGb3VuZFRvYXN0TXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgb25GaWxlRG93bmxvYWRTdWNjZXNzVG9hc3RNc2c6IFRvYXN0ID0ge1xyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgYm9keTogUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICBib2R5T3V0cHV0VHlwZTogQm9keU91dHB1dFR5cGUuQ29tcG9uZW50XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0RmlsZU5hbWUoZG9jVHlwZSkge1xyXG4gICAgbGV0IGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBmaWxlbmFtZTogcmVwb3J0LicgKyBkb2NUeXBlKTtcclxuICAgIHN3aXRjaCAoZG9jVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3BkZic6XHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gJ3JlcG9ydC5wZGYnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd4bHMnOlxyXG4gICAgICAgICAgICBmaWxlTmFtZSA9ICdyZXBvcnQueGxzJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY3N2JzpcclxuICAgICAgICAgICAgZmlsZU5hbWUgPSAncmVwb3J0LmNzdic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gJ3JlcG9ydC50eHQnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWxlTmFtZTtcclxufVxyXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZSh0eXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBjb250ZW50VHlwZTogJyArIHR5cGUpO1xyXG4gICAgbGV0IG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdwZGYnOlxyXG4gICAgICAgICAgICBtaW1lVHlwZSA9IFBERl9NSU1FX1RZUEU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3hscyc6XHJcbiAgICAgICAgICAgIG1pbWVUeXBlID0gRVhDRUxfTUlNRV9UWVBFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjc3YnOlxyXG4gICAgICAgICAgICBtaW1lVHlwZSA9IENTVl9NSU1FX1RZUEU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbWVUeXBlO1xyXG59Il19
