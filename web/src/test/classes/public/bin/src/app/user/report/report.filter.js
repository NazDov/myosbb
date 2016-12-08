System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var ReportFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportFilter = (function () {
                function ReportFilter() {
                }
                ReportFilter.prototype.transform = function (value, args) {
                    var result = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var val = value_1[_i];
                        if (val.creationDate.match('^.*' + args + '.*?')) {
                            result.push(val);
                        }
                    }
                    return result;
                };
                ReportFilter = __decorate([
                    core_1.Pipe({
                        name: 'reportFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportFilter);
                return ReportFilter;
            }());
            exports_1("ReportFilter", ReportFilter);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC9yZXBvcnQuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBY0EsQ0FBQztnQkFYRyxnQ0FBUyxHQUFULFVBQVUsS0FBZSxFQUFFLElBQVk7b0JBRW5DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsR0FBRyxDQUFDLENBQVksVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzt3QkFBakIsSUFBSSxHQUFHLGNBQUE7d0JBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLENBQUM7cUJBQ0o7b0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFoQkw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxjQUFjO3FCQUN2QixDQUFDOztnQ0FBQTtnQkFlRixtQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVwb3J0L3JlcG9ydC5maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UmVwb3J0fSBmcm9tIFwiLi9yZXBvcnQuaW50ZXJmYWNlXCI7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAncmVwb3J0RmlsdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0RmlsdGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogUmVwb3J0W10sIGFyZ3M6IHN0cmluZyk6IGFueSB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuY3JlYXRpb25EYXRlLm1hdGNoKCdeLionICsgYXJncyArICcuKj8nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19
