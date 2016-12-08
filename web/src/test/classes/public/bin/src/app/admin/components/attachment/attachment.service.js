System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, ApiService;
    var AttachmentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            AttachmentService = (function () {
                function AttachmentService(_http) {
                    this._http = _http;
                    this.attachmentUrl = ApiService.serverUrl + '/restful/attachment/';
                    this.getAttachmentPageUrl = ApiService.serverUrl + '/restful/attachment?pageNumber=';
                }
                AttachmentService.prototype.getAllAttachments = function (pageNumber) {
                    return this._http.get(this.getAttachmentPageUrl + pageNumber)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                AttachmentService.prototype.getAllAttachmentsSorted = function (pageNumber, name, order) {
                    return this._http.get(this.getAttachmentPageUrl + pageNumber + '&&sortedBy=' + name + '&&asc=' + order)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                AttachmentService.prototype.deleteAttachmentById = function (attachmentId) {
                    var url = this.attachmentUrl + attachmentId;
                    console.log('delete attachment by id: ' + attachmentId);
                    return this._http.delete(url)
                        .toPromise()
                        .catch(function (error) { return console.error(error); });
                };
                AttachmentService.prototype.deleteAllAttachments = function () {
                    console.log('delete all attachments');
                    return this._http.delete(this.attachmentUrl)
                        .toPromise()
                        .catch(function (error) { return console.error(error); });
                };
                AttachmentService.prototype.editAndSave = function (attachment) {
                    if (attachment.attachmentId) {
                        console.log('updating attachment with id: ' + attachment.attachmentId);
                        this.put(attachment);
                    }
                };
                AttachmentService.prototype.put = function (attachment) {
                    return this._http.put(this.attachmentUrl, JSON.stringify(attachment))
                        .toPromise()
                        .then(function () { return attachment; })
                        .catch(function (error) { return console.error(error); });
                };
                AttachmentService.prototype.uploadAttachment = function (attachment) {
                    return this._http.post(this.attachmentUrl, attachment)
                        .toPromise()
                        .then(function () { return attachment; })
                        .catch(function (error) { return console.error(error); });
                };
                AttachmentService.prototype.findAttachmentByPath = function (search) {
                    console.log("searching attachments");
                    console.log("param is" + search);
                    return this._http.get(this.attachmentUrl + "find?path=" + search)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                AttachmentService.prototype.findLast = function (count) {
                    return this._http.get(this.attachmentUrl + "last/" + count)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                AttachmentService.prototype.getPreview = function (attachment) {
                    switch (attachment.type) {
                        case "DATA": return "assets/img/attachment_type/data.png";
                        case "TEXT": return "assets/img/attachment_type/text.png";
                        case "AUDIO": return "assets/img/attachment_type/audio.png";
                        case "VIDEO": return "assets/img/attachment_type/video.png";
                        default: return attachment.url;
                    }
                };
                AttachmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AttachmentService);
                return AttachmentService;
            }());
            exports_1("AttachmentService", AttachmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL2F0dGFjaG1lbnQvYXR0YWNobWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFLSSwyQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUh0QixrQkFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7b0JBQzlELHlCQUFvQixHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUNBQWlDLENBQUM7Z0JBR3hGLENBQUM7Z0JBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLFVBQWlCO29CQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQzt5QkFDeEQsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxtREFBdUIsR0FBdkIsVUFBd0IsVUFBaUIsRUFBRSxJQUFXLEVBQUUsS0FBYTtvQkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUNsRyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FB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QUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDO3lCQUN2RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxVQUFzQjtvQkFDN0IsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQzt3QkFDMUQsS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLHFDQUFxQyxDQUFDO3dCQUMxRCxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsc0NBQXNDLENBQUM7d0JBQzVELEtBQUssT0FBTyxFQUFFLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQzt3QkFDNUQsU0FBUyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztvQkFDbkMsQ0FBQztnQkFDTCxDQUFDO2dCQS9FTDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkFnRmIsd0JBQUM7WUFBRCxDQS9FQSxBQStFQyxJQUFBO1lBL0VELGlEQStFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tIFwiLi9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYXR0YWNobWVudFVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL2F0dGFjaG1lbnQvJztcclxuICAgIHByaXZhdGUgZ2V0QXR0YWNobWVudFBhZ2VVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9hdHRhY2htZW50P3BhZ2VOdW1iZXI9JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBdHRhY2htZW50cyhwYWdlTnVtYmVyOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5nZXRBdHRhY2htZW50UGFnZVVybCArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBdHRhY2htZW50c1NvcnRlZChwYWdlTnVtYmVyOm51bWJlciwgbmFtZTpzdHJpbmcsIG9yZGVyOmJvb2xlYW4pOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuZ2V0QXR0YWNobWVudFBhZ2VVcmwgKyBwYWdlTnVtYmVyICsgJyYmc29ydGVkQnk9JyArIG5hbWUgKyAnJiZhc2M9JyArIG9yZGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQXR0YWNobWVudEJ5SWQoYXR0YWNobWVudElkOm51bWJlcikge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmF0dGFjaG1lbnRVcmwgKyBhdHRhY2htZW50SWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBhdHRhY2htZW50IGJ5IGlkOiAnICsgYXR0YWNobWVudElkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9PmNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBbGxBdHRhY2htZW50cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGFsbCBhdHRhY2htZW50cycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLmF0dGFjaG1lbnRVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBbmRTYXZlKGF0dGFjaG1lbnQ6QXR0YWNobWVudCkge1xyXG4gICAgICAgIGlmIChhdHRhY2htZW50LmF0dGFjaG1lbnRJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgYXR0YWNobWVudCB3aXRoIGlkOiAnICsgYXR0YWNobWVudC5hdHRhY2htZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dChhdHRhY2htZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGF0dGFjaG1lbnQ6QXR0YWNobWVudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLmF0dGFjaG1lbnRVcmwsIEpTT04uc3RyaW5naWZ5KGF0dGFjaG1lbnQpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCk9PmF0dGFjaG1lbnQpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkQXR0YWNobWVudChhdHRhY2htZW50OkF0dGFjaG1lbnQpOiBQcm9taXNlPEF0dGFjaG1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuYXR0YWNobWVudFVybCwgYXR0YWNobWVudClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpPT5hdHRhY2htZW50KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBdHRhY2htZW50QnlQYXRoKHNlYXJjaDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIGF0dGFjaG1lbnRzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW0gaXNcIiArIHNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLl9odHRwLmdldCh0aGlzLmF0dGFjaG1lbnRVcmwgKyBcImZpbmQ/cGF0aD1cIitzZWFyY2gpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTGFzdChjb3VudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5faHR0cC5nZXQodGhpcy5hdHRhY2htZW50VXJsICsgXCJsYXN0L1wiICsgY291bnQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aWV3KGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAoYXR0YWNobWVudC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEQVRBXCI6IHJldHVybiBcImFzc2V0cy9pbWcvYXR0YWNobWVudF90eXBlL2RhdGEucG5nXCI7IFxyXG4gICAgICAgICAgICBjYXNlIFwiVEVYVFwiOiByZXR1cm4gXCJhc3NldHMvaW1nL2F0dGFjaG1lbnRfdHlwZS90ZXh0LnBuZ1wiOyBcclxuICAgICAgICAgICAgY2FzZSBcIkFVRElPXCI6IHJldHVybiBcImFzc2V0cy9pbWcvYXR0YWNobWVudF90eXBlL2F1ZGlvLnBuZ1wiOyBcclxuICAgICAgICAgICAgY2FzZSBcIlZJREVPXCI6IHJldHVybiBcImFzc2V0cy9pbWcvYXR0YWNobWVudF90eXBlL3ZpZGVvLnBuZ1wiOyBcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGF0dGFjaG1lbnQudXJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
