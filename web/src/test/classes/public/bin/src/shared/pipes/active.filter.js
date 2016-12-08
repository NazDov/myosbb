/**
 * Created by Anastasiia Fedorak on 8/16/16.
 */
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
    var ActiveFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActiveFilter = (function () {
                function ActiveFilter() {
                }
                ActiveFilter.prototype.transform = function (value, args) {
                    var result = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var val = value_1[_i];
                        if (val.active === true) {
                            result.push(val);
                        }
                    }
                    return result;
                };
                ActiveFilter = __decorate([
                    core_1.Pipe({
                        name: 'active'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActiveFilter);
                return ActiveFilter;
            }());
            exports_1("ActiveFilter", ActiveFilter);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9hY3RpdmUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRSDtnQkFBQTtnQkFjQSxDQUFDO2dCQVpHLGdDQUFTLEdBQVQsVUFBVSxLQUFpQixFQUFFLElBQVk7b0JBRXJDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsR0FBRyxDQUFDLENBQVksVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzt3QkFBakIsSUFBSSxHQUFHLGNBQUE7d0JBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3FCQUNKO29CQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBRWxCLENBQUM7Z0JBaEJMO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUUsUUFBUTtxQkFDakIsQ0FBQzs7Z0NBQUE7Z0JBZUYsbUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHVDQWNDLENBQUEiLCJmaWxlIjoic3JjL3NoYXJlZC9waXBlcy9hY3RpdmUuZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW5hc3Rhc2lpYSBGZWRvcmFrIG9uIDgvMTYvMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyYWN0fSBmcm9tIFwiLi4vbW9kZWxzL2NvbnRyYWN0LmludGVyZmFjZVwiO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2FjdGl2ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogQ29udHJhY3RbXSwgYXJnczogc3RyaW5nKTogYW55IHtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbC5hY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbn0iXX0=
