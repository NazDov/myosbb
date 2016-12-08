System.register(["@angular/core", "../../../event/event.component", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, event_component_1, router_1;
    var EventAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EventAdminComponent = (function () {
                function EventAdminComponent() {
                }
                EventAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-event',
                        templateUrl: 'src/app/admin/components/event/event.admin.html',
                        directives: [event_component_1.EventComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventAdminComponent);
                return EventAdminComponent;
            }());
            exports_1("EventAdminComponent", EventAdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL2V2ZW50L2V2ZW50LmFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO2dCQUVBLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FDTjt3QkFDSSxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFFLGlEQUFpRDt3QkFDOUQsVUFBVSxFQUFFLENBQUMsZ0NBQWMsRUFBRSwwQkFBaUIsQ0FBQztxQkFDbEQsQ0FDSjs7dUNBQUE7Z0JBSUQsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2V2ZW50L2V2ZW50LmFkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2V2ZW50L2V2ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhZG1pbi1ldmVudCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuYWRtaW4uaHRtbCcsXHJcbiAgICAgICAgZGlyZWN0aXZlczogW0V2ZW50Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxuICAgIH1cclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWRtaW5Db21wb25lbnQge1xyXG5cclxufSJdfQ==
