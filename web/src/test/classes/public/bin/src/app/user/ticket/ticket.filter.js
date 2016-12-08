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
    var TicketFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TicketFilter = (function () {
                function TicketFilter() {
                }
                TicketFilter.prototype.transform = function (value, args) {
                    var result = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var val = value_1[_i];
                        if (val.firstName.match('^.*' + args + '.*?')) {
                            result.push(val);
                        }
                    }
                    return result;
                };
                TicketFilter = __decorate([
                    core_1.Pipe({
                        name: 'ticketFilter',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicketFilter);
                return TicketFilter;
            }());
            exports_1("TicketFilter", TicketFilter);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXQuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBZUEsQ0FBQztnQkFaRyxnQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLElBQVc7b0JBRS9CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsR0FBRyxDQUFDLENBQVksVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzt3QkFBakIsSUFBSSxHQUFHLGNBQUE7d0JBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLENBQUM7cUJBRUo7b0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFqQkw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxjQUFjO3FCQUN2QixDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHVDQWVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RpY2tldC90aWNrZXQuZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLy4uL3VzZXJcIjtcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd0aWNrZXRGaWx0ZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlja2V0RmlsdGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTpVc2VyW10sIGFyZ3M6c3RyaW5nKTphbnkge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsLmZpcnN0TmFtZS5tYXRjaCgnXi4qJyArIGFyZ3MgKyAnLio/JykpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iXX0=
