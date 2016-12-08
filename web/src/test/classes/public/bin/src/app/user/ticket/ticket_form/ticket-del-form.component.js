System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "../../../../shared/pipes/capitalize-first-letter", "ng2-translate/ng2-translate"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_bootstrap_2, capitalize_first_letter_1, ng2_translate_1;
    var TicketDelFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            TicketDelFormComponent = (function () {
                function TicketDelFormComponent() {
                    this.delete = new core_1.EventEmitter();
                }
                TicketDelFormComponent.prototype.openDelModal = function (ticket) {
                    this.ticket = ticket;
                    this.delModal.show();
                };
                TicketDelFormComponent.prototype.delTicket = function () {
                    this.delete.emit(this.ticket);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TicketDelFormComponent.prototype, "delete", void 0);
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], TicketDelFormComponent.prototype, "delModal", void 0);
                TicketDelFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-del-form',
                        templateUrl: './src/app/user/ticket/ticket_form/ticket-del-form.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicketDelFormComponent);
                return TicketDelFormComponent;
            }());
            exports_1("TicketDelFormComponent", TicketDelFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXRfZm9ybS90aWNrZXQtZGVsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQVVJO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7Z0JBQzlDLENBQUM7Z0JBUEQsNkNBQVksR0FBWixVQUFhLE1BQWM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQU1ELDBDQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQWZEO29CQUFDLGFBQU0sRUFBRTs7c0VBQUE7Z0JBQ1Q7b0JBQUMsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7O3dFQUFBO2dCQVQxQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBRSx3REFBd0Q7d0JBQ3JFLFVBQVUsRUFBRSxDQUFDLGdDQUFnQixFQUFFLHdCQUFlLENBQUM7d0JBQy9DLGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFDLG1EQUF5QixDQUFDO3FCQUNuRCxDQUFDOzswQ0FBQTtnQkFrQkYsNkJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELDJEQWlCQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90aWNrZXQvdGlja2V0X2Zvcm0vdGlja2V0LWRlbC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSVRpY2tldCwgVGlja2V0fSBmcm9tICcuLi90aWNrZXQnO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RpY2tldC1kZWwtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3JjL2FwcC91c2VyL3RpY2tldC90aWNrZXRfZm9ybS90aWNrZXQtZGVsLWZvcm0uaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpY2tldERlbEZvcm1Db21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGRlbGV0ZTpFdmVudEVtaXR0ZXI8SVRpY2tldD47XHJcbiAgICBAVmlld0NoaWxkKCdkZWxNb2RhbCcpIGRlbE1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgcHJpdmF0ZSB0aWNrZXQ6SVRpY2tldDtcclxuXHJcbiAgICBvcGVuRGVsTW9kYWwodGlja2V0OklUaWNrZXQpOnZvaWQge1xyXG4gICAgICAgIHRoaXMudGlja2V0ID0gdGlja2V0O1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxJVGlja2V0PigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbFRpY2tldCgpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlLmVtaXQodGhpcy50aWNrZXQpO1xyXG4gICAgfVxyXG59Il19
