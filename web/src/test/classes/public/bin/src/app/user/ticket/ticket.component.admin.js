System.register(["@angular/core", "./ticket.component"], function(exports_1, context_1) {
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
    var core_1, ticket_component_1;
    var TicketAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_component_1_1) {
                ticket_component_1 = ticket_component_1_1;
            }],
        execute: function() {
            TicketAdminComponent = (function () {
                function TicketAdminComponent() {
                }
                TicketAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-admin',
                        template: "\n    <div class=\"row sb-backdown\">\n                <ticket>\n                </ticket>       \n    </div>\n    ",
                        styleUrls: ['src/shared/css/loader.css', 'src/shared/css/general.css'],
                        directives: [ticket_component_1.TicketComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicketAdminComponent);
                return TicketAdminComponent;
            }());
            exports_1("TicketAdminComponent", TicketAdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmFkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUscUhBS1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7d0JBQ3ZFLFVBQVUsRUFBRSxDQUFDLGtDQUFlLENBQUM7cUJBQ2hDLENBQUM7O3dDQUFBO2dCQUdGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1RpY2tldENvbXBvbmVudH0gZnJvbSBcIi4vdGlja2V0LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RpY2tldC1hZG1pbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBzYi1iYWNrZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHRpY2tldD5cclxuICAgICAgICAgICAgICAgIDwvdGlja2V0PiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczogWyAnc3JjL3NoYXJlZC9jc3MvbG9hZGVyLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9nZW5lcmFsLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1RpY2tldENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpY2tldEFkbWluQ29tcG9uZW50IHtcclxuXHJcbn0iXX0=
