System.register(["@angular/core", "ng2-translate", "angular2-toaster/angular2-toaster"], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, angular2_toaster_1;
    var onErrorResourceNotFoundToastMsg, onErrorServerNoResponseToastMsg, onErrorNewUserAlreadyExists, ErrorHandlerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            }],
        execute: function() {
            exports_1("onErrorResourceNotFoundToastMsg", onErrorResourceNotFoundToastMsg = {
                type: 'error',
                title: '',
                body: '<h5>Виникла помилка під час завантаження ресурсу</h5>',
                showCloseButton: true,
                bodyOutputType: angular2_toaster_1.BodyOutputType.TrustedHtml
            });
            exports_1("onErrorServerNoResponseToastMsg", onErrorServerNoResponseToastMsg = {
                type: 'error',
                title: '',
                body: '<h5>Сервер не відповідає</h5>',
                showCloseButton: true,
                bodyOutputType: angular2_toaster_1.BodyOutputType.TrustedHtml
            });
            exports_1("onErrorNewUserAlreadyExists", onErrorNewUserAlreadyExists = {
                type: 'error',
                title: '',
                body: '<h5>Юзер з таким е-мейлом вже зареєстрований в системі</h5>',
                showCloseButton: true,
                bodyOutputType: angular2_toaster_1.BodyOutputType.TrustedHtml
            });
            ErrorHandlerComponent = (function () {
                function ErrorHandlerComponent() {
                }
                ErrorHandlerComponent = __decorate([
                    core_1.Component({
                        selector: 'my-error',
                        templateUrl: 'src/shared/error/404.html',
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ErrorHandlerComponent);
                return ErrorHandlerComponent;
            }());
            exports_1("ErrorHandlerComponent", ErrorHandlerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9lcnJvci9lcnJvci5oYW5kbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBS1csK0JBQStCLEVBTy9CLCtCQUErQixFQVEvQiwyQkFBMkI7Ozs7Ozs7Ozs7Ozs7WUFmM0IsNkNBQUEsK0JBQStCLEdBQVU7Z0JBQ2hELElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSx1REFBdUQ7Z0JBQzdELGVBQWUsRUFBRSxJQUFJO2dCQUNyQixjQUFjLEVBQUUsaUNBQWMsQ0FBQyxXQUFXO2FBQzdDLENBQUEsQ0FBQztZQUNTLDZDQUFBLCtCQUErQixHQUFVO2dCQUNoRCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxlQUFlLEVBQUUsSUFBSTtnQkFDckIsY0FBYyxFQUFFLGlDQUFjLENBQUMsV0FBVzthQUM3QyxDQUFBLENBQUM7WUFFUyx5Q0FBQSwyQkFBMkIsR0FBVTtnQkFDNUMsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLDZEQUE2RDtnQkFDbkUsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGNBQWMsRUFBRSxpQ0FBYyxDQUFDLFdBQVc7YUFDN0MsQ0FBQSxDQUFDO1lBT0Y7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFQRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxDQUFDO3FCQUN6QixDQUFDOzt5Q0FBQTtnQkFHRiw0QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseURBRUMsQ0FBQSIsImZpbGUiOiJzcmMvc2hhcmVkL2Vycm9yL2Vycm9yLmhhbmRsZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtUb2FzdCwgQm9keU91dHB1dFR5cGV9IGZyb20gXCJhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgbGV0IG9uRXJyb3JSZXNvdXJjZU5vdEZvdW5kVG9hc3RNc2c6IFRvYXN0ID0ge1xyXG4gICAgdHlwZTogJ2Vycm9yJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGJvZHk6ICc8aDU+0JLQuNC90LjQutC70LAg0L/QvtC80LjQu9C60LAg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0YDQtdGB0YPRgNGB0YM8L2g1PicsXHJcbiAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICBib2R5T3V0cHV0VHlwZTogQm9keU91dHB1dFR5cGUuVHJ1c3RlZEh0bWxcclxufTtcclxuZXhwb3J0IGxldCBvbkVycm9yU2VydmVyTm9SZXNwb25zZVRvYXN0TXNnOiBUb2FzdCA9IHtcclxuICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBib2R5OiAnPGg1PtCh0LXRgNCy0LXRgCDQvdC1INCy0ZbQtNC/0L7QstGW0LTQsNGUPC9oNT4nLFxyXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgYm9keU91dHB1dFR5cGU6IEJvZHlPdXRwdXRUeXBlLlRydXN0ZWRIdG1sXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IG9uRXJyb3JOZXdVc2VyQWxyZWFkeUV4aXN0czogVG9hc3QgPSB7XHJcbiAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgYm9keTogJzxoNT7QrtC30LXRgCDQtyDRgtCw0LrQuNC8INC1LdC80LXQudC70L7QvCDQstC20LUg0LfQsNGA0LXRlNGB0YLRgNC+0LLQsNC90LjQuSDQsiDRgdC40YHRgtC10LzRljwvaDU+JyxcclxuICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgIGJvZHlPdXRwdXRUeXBlOiBCb2R5T3V0cHV0VHlwZS5UcnVzdGVkSHRtbFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWVycm9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL3NoYXJlZC9lcnJvci80MDQuaHRtbCcsXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJDb21wb25lbnQge1xyXG5cclxufSJdfQ==
