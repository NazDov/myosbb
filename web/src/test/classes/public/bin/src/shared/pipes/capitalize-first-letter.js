/**
 * Created by Anastasiia Fedorak on 8/2/16.
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
    var CapitalizeFirstLetterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CapitalizeFirstLetterPipe = (function () {
                function CapitalizeFirstLetterPipe() {
                }
                CapitalizeFirstLetterPipe.prototype.transform = function (value) {
                    if (value) {
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    return value;
                };
                CapitalizeFirstLetterPipe = __decorate([
                    core_1.Pipe({ name: 'capitalize' }), 
                    __metadata('design:paramtypes', [])
                ], CapitalizeFirstLetterPipe);
                return CapitalizeFirstLetterPipe;
            }());
            exports_1("CapitalizeFirstLetterPipe", CapitalizeFirstLetterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0g7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFQRyw2Q0FBUyxHQUFULFVBQVUsS0FBUztvQkFDZixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFSTDtvQkFBQyxXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUM7OzZDQUFBO2dCQVUzQixnQ0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsaUVBU0MsQ0FBQSIsImZpbGUiOiJzcmMvc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW5hc3Rhc2lpYSBGZWRvcmFrIG9uIDgvMi8xNi5cclxuICovXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemUnfSlcclxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVGaXJzdExldHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6YW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59Il19
