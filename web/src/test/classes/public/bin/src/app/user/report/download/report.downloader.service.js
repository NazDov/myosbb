System.register(["@angular/core", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, ApiService;
    var reportDownloadUrl, PDF_MIME_TYPE, EXCEL_MIME_TYPE, CSV_MIME_TYPE, FileDownloaderService;
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
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            reportDownloadUrl = ApiService.serverUrl + '/restful/report/';
            PDF_MIME_TYPE = 'application/pdf';
            EXCEL_MIME_TYPE = 'text/xls';
            CSV_MIME_TYPE = 'text/csv';
            FileDownloaderService = (function () {
                function FileDownloaderService() {
                }
                FileDownloaderService.prototype.downloadBy = function (id, docType) {
                    var self = this;
                    var xhr = new XMLHttpRequest();
                    var url = reportDownloadUrl + id + '/download';
                    xhr.open('GET', url, true);
                    xhr.responseType = 'blob';
                    console.log('preparing download report by id: ' + id);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState != 4)
                            return;
                        clearTimeout(serverTimeout);
                        if (xhr.status === 200) {
                            var mimeType = setContentType(docType);
                            var blob = new Blob([this.response], { type: mimeType });
                            saveAs(blob, setFileName(docType));
                        }
                        else {
                            console.error('error while loading resources');
                        }
                    };
                    var serverTimeout = setTimeout(function () {
                        console.log('terminating server connection d/t too long connection time');
                        xhr.abort();
                    }, 15000);
                    xhr.send();
                };
                FileDownloaderService.prototype.download = function (docType, pending) {
                    var self = this;
                    pending = true;
                    var xhr = new XMLHttpRequest();
                    var url = reportDownloadUrl + '?type=' + docType;
                    xhr.open('GET', url, true);
                    xhr.responseType = 'blob';
                    console.log('preparing generate...');
                    pending = false;
                    xhr.onreadystatechange = function () {
                        setTimeout(function () {
                            pending = false;
                            console.log('inside service: ' + pending);
                        }, 0);
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var mimeType = setContentType(docType);
                            var blob = new Blob([this.response], { type: mimeType });
                            saveAs(blob, setFileName(docType));
                        }
                        else if (xhr.status === 404) {
                            console.error('could not find resource');
                        }
                    };
                    xhr.send();
                };
                FileDownloaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FileDownloaderService);
                return FileDownloaderService;
            }());
            exports_1("FileDownloaderService", FileDownloaderService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC9kb3dubG9hZC9yZXBvcnQuZG93bmxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFHSSxpQkFBaUIsRUFJZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWE7SUF3RW5CLHFCQUFxQixPQUFPO1FBQ3hCLElBQUksUUFBZ0IsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLEtBQUs7Z0JBQ04sUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztZQUNWLEtBQUssS0FBSztnQkFDTixRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUN4QixLQUFLLENBQUM7WUFDVjtnQkFDSSxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDRCx3QkFBd0IsSUFBSTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBZ0IsQ0FBQztRQUNyQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNOLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNWLEtBQUssS0FBSztnQkFDTixRQUFRLEdBQUcsZUFBZSxDQUFDO2dCQUMzQixLQUFLLENBQUM7WUFDVixLQUFLLEtBQUs7Z0JBQ04sUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7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LENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7NEJBQ3ZELE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUU3QyxDQUFDO29CQUNMLENBQUMsQ0FBQztvQkFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFoRUw7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBbUViLDRCQUFDO1lBQUQsQ0FsRUEsQUFrRUMsSUFBQTtZQWxFRCx5REFrRUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVwb3J0L2Rvd25sb2FkL3JlcG9ydC5kb3dubG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcbmxldCByZXBvcnREb3dubG9hZFVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3JlcG9ydC8nO1xyXG5cclxuZGVjbGFyZSB2YXIgc2F2ZUFzOiBhbnk7XHJcblxyXG5jb25zdCBQREZfTUlNRV9UWVBFID0gJ2FwcGxpY2F0aW9uL3BkZic7XHJcbmNvbnN0IEVYQ0VMX01JTUVfVFlQRSA9ICd0ZXh0L3hscyc7XHJcbmNvbnN0IENTVl9NSU1FX1RZUEUgPSAndGV4dC9jc3YnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVEb3dubG9hZGVyU2VydmljZSB7XHJcblxyXG5cclxuICAgIGRvd25sb2FkQnkoaWQ6IG51bWJlciwgZG9jVHlwZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcG9ydERvd25sb2FkVXJsICsgaWQgKycvZG93bmxvYWQnO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmluZyBkb3dubG9hZCByZXBvcnQgYnkgaWQ6ICcgKyBpZCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VydmVyVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWltZVR5cGUgPSBzZXRDb250ZW50VHlwZShkb2NUeXBlKTtcclxuICAgICAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3RoaXMucmVzcG9uc2VdLCB7dHlwZTogbWltZVR5cGV9KTtcclxuICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBzZXRGaWxlTmFtZShkb2NUeXBlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciB3aGlsZSBsb2FkaW5nIHJlc291cmNlcycpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgc2VydmVyVGltZW91dDogbnVtYmVyID0gc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlcm1pbmF0aW5nIHNlcnZlciBjb25uZWN0aW9uIGQvdCB0b28gbG9uZyBjb25uZWN0aW9uIHRpbWUnKTtcclxuICAgICAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgfSwgMTUwMDApO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWQoZG9jVHlwZTogc3RyaW5nLCBwZW5kaW5nOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgcGVuZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgdXJsID0gcmVwb3J0RG93bmxvYWRVcmwgKyAnP3R5cGU9JyArIGRvY1R5cGU7XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyaW5nIGdlbmVyYXRlLi4uJyk7XHJcbiAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBzZXJ2aWNlOiAnICsgcGVuZGluZyk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbWVUeXBlID0gc2V0Q29udGVudFR5cGUoZG9jVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLnJlc3BvbnNlXSwge3R5cGU6IG1pbWVUeXBlfSk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgc2V0RmlsZU5hbWUoZG9jVHlwZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignY291bGQgbm90IGZpbmQgcmVzb3VyY2UnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZpbGVOYW1lKGRvY1R5cGUpIHtcclxuICAgIGxldCBmaWxlTmFtZTogc3RyaW5nO1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgZmlsZW5hbWU6IHJlcG9ydC4nICsgZG9jVHlwZSk7XHJcbiAgICBzd2l0Y2ggKGRvY1R5cGUpIHtcclxuICAgICAgICBjYXNlICdwZGYnOlxyXG4gICAgICAgICAgICBmaWxlTmFtZSA9ICdyZXBvcnQucGRmJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneGxzJzpcclxuICAgICAgICAgICAgZmlsZU5hbWUgPSAncmVwb3J0Lnhscyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Nzdic6XHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gJ3JlcG9ydC5jc3YnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBmaWxlTmFtZSA9ICdyZXBvcnQudHh0JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsZU5hbWU7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGUodHlwZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgY29udGVudFR5cGU6ICcgKyB0eXBlKTtcclxuICAgIGxldCBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAncGRmJzpcclxuICAgICAgICAgICAgbWltZVR5cGUgPSBQREZfTUlNRV9UWVBFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd4bHMnOlxyXG4gICAgICAgICAgICBtaW1lVHlwZSA9IEVYQ0VMX01JTUVfVFlQRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY3N2JzpcclxuICAgICAgICAgICAgbWltZVR5cGUgPSBDU1ZfTUlNRV9UWVBFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBtaW1lVHlwZTtcclxufVxyXG4iXX0=
