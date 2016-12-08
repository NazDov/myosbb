System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, ApiService;
    var attachmentUploadUrl, OsbbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            attachmentUploadUrl = ApiService.serverUrl + '/restful/attachment';
            OsbbService = (function () {
                function OsbbService(http) {
                    this.http = http;
                    this.url = ApiService.serverUrl + '/restful/osbb';
                }
                OsbbService.prototype.getAllOsbb = function () {
                    return this.http.get(this.url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.upload = function (file) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData(), xhr = new XMLHttpRequest();
                        formData.append("file", file, file.name);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open('POST', attachmentUploadUrl + '/logo', true);
                        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
                        xhr.send(formData);
                    });
                };
                OsbbService.prototype.getByAvailable = function (available) {
                    return this.http.get(this.url + '/status/' + available)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.getAllOsbbByNameContaining = function (osbbName) {
                    var url = this.url + '/search/' + osbbName;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.getAllOsbbByOrder = function (sortedBy, asc) {
                    var url = this.url + '?sortedBy=' + sortedBy + '&&asc=' + asc;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.getDTOOsbbById = function (osbbId) {
                    var url = this.url + "/dto/" + osbbId;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.getOsbbById = function (osbbId) {
                    var url = this.url + "/" + osbbId;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.addOsbb = function (osbb) {
                    return this.http.post(this.url, JSON.stringify(osbb))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.editOsbb = function (osbb) {
                    return this.http.put(this.url, JSON.stringify(osbb))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                OsbbService.prototype.deleteOsbb = function (osbb) {
                    return this.http.delete(this.url + '/' + osbb.osbbId)
                        .toPromise()
                        .then(function (res) { return osbb; })
                        .catch(this.handleError);
                };
                OsbbService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                OsbbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OsbbService);
                return OsbbService;
            }());
            exports_1("OsbbService", OsbbService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFVTSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztZQUFuQixtQkFBbUIsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1lBR3pFO2dCQUlJLHFCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRnRCLFFBQUcsR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztnQkFHNUQsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3lCQUNwQixTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFTSw0QkFBTSxHQUFiLFVBQWMsSUFBVTtvQkFDcEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQy9CLElBQUksUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLEVBQ3ZDLEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekMsR0FBRyxDQUFDLGtCQUFrQixHQUFHOzRCQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQ0FDckIs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QyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBbEdMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQW1HYixrQkFBQztZQUFELENBbEdBLEFBa0dDLElBQUE7WUFsR0QscUNBa0dDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5cclxuaW1wb3J0IHsgSU9zYmIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9vc2JiXCI7XHJcbmltcG9ydCB7IE9zYmJEVE8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9vc2JiRFRPXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcbmNvbnN0IGF0dGFjaG1lbnRVcGxvYWRVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9hdHRhY2htZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9zYmJTZXJ2aWNlIHsgXHJcblxyXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvb3NiYic7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IFxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbE9zYmIoKTogUHJvbWlzZTxJT3NiYltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpXHJcbiAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWQoZmlsZTogRmlsZSk6IFByb21pc2U8QXR0YWNobWVudD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcclxuICAgICAgICAgICAgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUsIGZpbGUubmFtZSk7ICBcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBhdHRhY2htZW50VXBsb2FkVXJsICsgJy9sb2dvJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnlBdmFpbGFibGUoYXZhaWxhYmxlOmJvb2xlYW4pOiBQcm9taXNlPElPc2JiW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArICcvc3RhdHVzLycgKyBhdmFpbGFibGUpXHJcbiAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRBbGxPc2JiQnlOYW1lQ29udGFpbmluZyhvc2JiTmFtZTogc3RyaW5nICk6UHJvbWlzZTxJT3NiYltdPiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsICsgJy9zZWFyY2gvJyArIG9zYmJOYW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgZ2V0QWxsT3NiYkJ5T3JkZXIoc29ydGVkQnk6IHN0cmluZywgYXNjOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsICsgJz9zb3J0ZWRCeT0nICsgc29ydGVkQnkgKyAnJiZhc2M9JyArIGFzYztcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERUT09zYmJCeUlkKG9zYmJJZDogbnVtYmVyKTogUHJvbWlzZTxPc2JiRFRPPiB7XHJcbiAgICAgICAgIGxldCB1cmwgPSB0aGlzLnVybCArIFwiL2R0by9cIiArIG9zYmJJZDtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPc2JiQnlJZChvc2JiSWQ6IG51bWJlcik6IFByb21pc2U8SU9zYmI+IHtcclxuICAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsICsgXCIvXCIgKyBvc2JiSWQ7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3NiYihvc2JiOklPc2JiKTogUHJvbWlzZTxJT3NiYj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgSlNPTi5zdHJpbmdpZnkob3NiYikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRPc2JiKG9zYmI6SU9zYmIpOlByb21pc2U8SU9zYmI+ICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KG9zYmIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVPc2JiKG9zYmI6SU9zYmIpOiBQcm9taXNlPElPc2JiPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy51cmwgKyAnLycgKyBvc2JiLm9zYmJJZClcclxuICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gb3NiYilcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=
