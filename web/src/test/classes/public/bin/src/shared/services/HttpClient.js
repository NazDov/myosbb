System.register(["@angular/core", '@angular/http', '@angular/router', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, Observable_1;
    var HttpClient;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HttpClient = (function (_super) {
                __extends(HttpClient, _super);
                function HttpClient(backend, defaultOptions, _router) {
                    _super.call(this, backend, defaultOptions);
                    this._router = _router;
                    this.tokenName = "access_token";
                }
                HttpClient.prototype.request = function (url, options) {
                    return this.intercept(_super.prototype.request.call(this, url, options));
                };
                HttpClient.prototype.get = function (url, options) {
                    options = this.getRequestOptionArgs(options);
                    options.method = "GET";
                    return this.intercept(_super.prototype.get.call(this, url, options));
                };
                HttpClient.prototype.post = function (url, body, options) {
                    options = this.getRequestOptionArgs(options, url);
                    options.method = "POST";
                    return this.intercept(_super.prototype.post.call(this, url, body, options));
                };
                HttpClient.prototype.put = function (url, body, options) {
                    options = this.getRequestOptionArgs(options);
                    options.method = "PUT";
                    return this.intercept(_super.prototype.put.call(this, url, body, options));
                };
                HttpClient.prototype.delete = function (url, options) {
                    options = this.getRequestOptionArgs(options);
                    options.method = "DELETE";
                    return this.intercept(_super.prototype.delete.call(this, url, options));
                };
                HttpClient.prototype.getRequestOptionArgs = function (options, url) {
                    if (options == null) {
                        options = new http_1.RequestOptions();
                    }
                    if (options.headers == null) {
                        options.headers = new http_1.Headers();
                    }
                    if ((localStorage.getItem(this.tokenName) != null) && (localStorage.getItem(this.tokenName) != "")) {
                        if (!options.headers.has("Authorization")) {
                            options.headers.delete('Authorization');
                            options.headers.append('Authorization', 'Bearer ' + localStorage.getItem(this.tokenName));
                        }
                        if (!options.headers.has("Content-Type"))
                            options.headers.append('Content-Type', "application/json");
                    }
                    else {
                        options.headers.append('Authorization', "Basic  Y2xpZW50YXBwOjEyMzQ1Ng==");
                        if (!options.headers.has("Content-Type")) {
                            options.headers.append('Content-Type', "application/x-www-form-urlencoded");
                            options.headers.append('Accept', "application/json");
                        }
                    }
                    return options;
                };
                HttpClient.prototype.intercept = function (observable) {
                    var _this = this;
                    return observable.catch(function (err, source) {
                        if (err.status == 401) {
                            _this._router.navigate(['/login']);
                            localStorage.clear();
                            return Observable_1.Observable.empty();
                        }
                        else {
                            return Observable_1.Observable.throw(err);
                        }
                    });
                };
                HttpClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions, router_1.Router])
                ], HttpClient);
                return HttpClient;
            }(http_1.Http));
            exports_1("HttpClient", HttpClient);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9IdHRwQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBZ0MsOEJBQUk7Z0JBSWhDLG9CQUFZLE9BQXlCLEVBQUUsY0FBNkIsRUFBVSxPQUFjO29CQUN4RixrQkFBTSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRDJDLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBRnBGLGNBQVMsR0FBVSxjQUFjLENBQUM7Z0JBSTFDLENBQUM7Z0JBRUQsNEJBQU8sR0FBUCxVQUFRLEdBQW9CLEVBQUUsT0FBMkI7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFLLENBQUMsT0FBTyxZQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUdELHdCQUFHLEdBQUgsVUFBSSxHQUFVLEVBQUUsT0FBMkI7b0JBQ3ZDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBSyxDQUFDLEdBQUcsWUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCx5QkFBSSxHQUFKLFVBQUssR0FBVSxFQUFFLElBQVcsRUFBRSxPQUEyQjtvQkFDckQsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBSyxDQUFDLElBQUksWUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzFELENB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QUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQ2xDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUM7Z0JBeEVMO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQXlFYixpQkFBQztZQUFELENBeEVBLEFBd0VDLENBeEUrQixXQUFJLEdBd0VuQztZQXhFRCxtQ0F3RUMsQ0FBQSIsImZpbGUiOiJzcmMvc2hhcmVkL3NlcnZpY2VzL0h0dHBDbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgQ29ubmVjdGlvbkJhY2tlbmQsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudCBleHRlbmRzIEh0dHAge1xyXG5cclxuICAgIHByaXZhdGUgdG9rZW5OYW1lOnN0cmluZyA9IFwiYWNjZXNzX3Rva2VuXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFja2VuZDpDb25uZWN0aW9uQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6UmVxdWVzdE9wdGlvbnMsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcihiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdCh1cmw6c3RyaW5nIHwgUmVxdWVzdCwgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0KHN1cGVyLnJlcXVlc3QodXJsLCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCh1cmw6c3RyaW5nLCBvcHRpb25zPzpSZXF1ZXN0T3B0aW9uc0FyZ3MpOk9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBvcHRpb25zID0gdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zKTtcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0KHN1cGVyLmdldCh1cmwsIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KHVybDpzdHJpbmcsIGJvZHk6c3RyaW5nLCBvcHRpb25zPzpSZXF1ZXN0T3B0aW9uc0FyZ3MpOk9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBvcHRpb25zID0gdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zLCB1cmwpO1xyXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0KHN1cGVyLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHVybDpzdHJpbmcsIGJvZHk6c3RyaW5nLCBvcHRpb25zPzpSZXF1ZXN0T3B0aW9uc0FyZ3MpOk9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBvcHRpb25zID0gdGhpcy5nZXRSZXF1ZXN0T3B0aW9uQXJncyhvcHRpb25zKTtcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IFwiUFVUXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0KHN1cGVyLnB1dCh1cmwsIGJvZHksIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodXJsOnN0cmluZywgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuZ2V0UmVxdWVzdE9wdGlvbkFyZ3Mob3B0aW9ucyk7XHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyY2VwdChzdXBlci5kZWxldGUodXJsLCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVxdWVzdE9wdGlvbkFyZ3Mob3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzLCB1cmw/OnN0cmluZyk6UmVxdWVzdE9wdGlvbnNBcmdzIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpICE9IG51bGwpICYmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSkgIT0gXCJcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuaGFzKFwiQXV0aG9yaXphdGlvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmRlbGV0ZSgnQXV0aG9yaXphdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKSk7XHJcbiAgICAgICAgICAgIH0gaWYoIW9wdGlvbnMuaGVhZGVycy5oYXMoXCJDb250ZW50LVR5cGVcIikpXHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGBhcHBsaWNhdGlvbi9qc29uYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBCYXNpYyAgWTJ4cFpXNTBZWEJ3T2pFeU16UTFOZz09YCk7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGApO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgYGFwcGxpY2F0aW9uL2pzb25gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmNlcHQob2JzZXJ2YWJsZTpPYnNlcnZhYmxlPFJlc3BvbnNlPik6T2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNhdGNoKChlcnIsIHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iXX0=
