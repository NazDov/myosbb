System.register(["@angular/core", "./event.service", "./event.interface", "../header/header.component", "@angular/router", "../../shared/pipes/capitalize-first-letter", "ng2-translate", '@angular/common', 'moment', "../../shared/models/User", "../admin/components/attachment/attachment.service", "ng2-bootstrap/ng2-bootstrap"], function(exports_1, context_1) {
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
    var core_1, event_service_1, event_interface_1, header_component_1, router_1, capitalize_first_letter_1, ng2_translate_1, common_1, moment_1, User_1, attachment_service_1, ng2_bootstrap_1;
    var EventShowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (event_interface_1_1) {
                event_interface_1 = event_interface_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (attachment_service_1_1) {
                attachment_service_1 = attachment_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            EventShowComponent = (function () {
                function EventShowComponent(_eventService, _routeParams, _location, _attachmentService) {
                    this._eventService = _eventService;
                    this._routeParams = _routeParams;
                    this._location = _location;
                    this._attachmentService = _attachmentService;
                    this.attachment = { fileName: "", url: "" };
                    this.event = new event_interface_1.Event();
                    this.event.author = new User_1.User();
                }
                EventShowComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._routeParams.params.subscribe(function (params) {
                        _this.eventId = +params['id'];
                        _this._eventService.getEvent(_this.eventId)
                            .subscribe(function (data) {
                            _this.event = data;
                        }, function (error) {
                            console.error(error);
                        });
                    });
                };
                EventShowComponent.prototype.ngOnDestroy = function () {
                    if (this.sub)
                        this.sub.unsubscribe();
                };
                EventShowComponent.prototype.backClicked = function () {
                    this._location.back();
                };
                EventShowComponent.prototype.openPreviewModal = function (attachment) {
                    this.attachment = attachment;
                    this.previewModal.show();
                };
                EventShowComponent.prototype.getPreview = function (attachment) {
                    return this._attachmentService.getPreview(attachment);
                };
                EventShowComponent.prototype.formatDate = function (date) {
                    return moment_1.default(date).format("DD.MM.YYYY hh:mm A");
                };
                EventShowComponent.prototype.getStatus = function (status) {
                    switch (status) {
                        case "FUTURE": return "future";
                        case "IN_PROCESS": return "in_process";
                        case "FINISHED": return "finished";
                    }
                };
                __decorate([
                    core_1.ViewChild('previewModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], EventShowComponent.prototype, "previewModal", void 0);
                EventShowComponent = __decorate([
                    core_1.Component({
                        selector: 'my-user-event',
                        templateUrl: 'src/app/event/event.show.html',
                        directives: [header_component_1.HeaderComponent, ng2_bootstrap_1.MODAL_DIRECTIVES, router_1.RouterOutlet, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        providers: [event_service_1.EventService, attachment_service_1.AttachmentService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute, common_1.Location, attachment_service_1.AttachmentService])
                ], EventShowComponent);
                return EventShowComponent;
            }());
            exports_1("EventShowComponent", EventShowComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ldmVudC9ldmVudC5zaG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFTSSw0QkFBb0IsYUFBMkIsRUFBVSxZQUE0QixFQUNqRSxTQUFtQixFQUFVLGtCQUFxQztvQkFEbEUsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWdCO29CQUNqRSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBSDlFLGVBQVUsR0FBMkIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFJakUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUFBLGlCQVdDO29CQVZHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTt3QkFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQzs2QkFDcEMsU0FBUyxDQUFDLFVBQUMsSUFBSTs0QkFDWixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsQ0FBQyxFQUNELFVBQUMsS0FBSzs0QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUN4QixDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBc0I7b0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELHVDQUFVLEdBQVYsVUFBVyxVQUFzQjtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsdUNBQVUsR0FBVixVQUFXLElBQWM7b0JBQ3JCLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNDQUFTLEdBQVQsVUFBVSxNQUFjO29CQUNwQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNiLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQy9CLEtBQUssWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQ3ZDLEtBQUssVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQztnQkF0REQ7b0JBQUMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7O3dFQUFBO2dCQVY5QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUsK0JBQStCO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGdDQUFnQixFQUFFLHFCQUFZLEVBQUUsbUJBQVUsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDNUYsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSxzQ0FBaUIsQ0FBQzt3QkFDNUMsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsYUFBYSxFQUFFLENBQUMsaUNBQWlCLEVBQUUsd0JBQWUsQ0FBQztxQkFDdEQsQ0FBQzs7c0NBQUE7Z0JBMERGLHlCQUFDO1lBQUQsQ0F6REEsQUF5REMsSUFBQTtZQXpERCxtREF5REMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LnNob3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL2V2ZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24sIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibmcyLWRhdGV0aW1lLXBpY2tlci9kaXN0L2RhdGV0aW1lXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9hdHRhY2htZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTU9EQUxfRElSRUNUSVZFUywgQlNfVklFV19QUk9WSURFUlMsIE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50IH0gZnJvbSBcIi4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXVzZXItZXZlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL2V2ZW50L2V2ZW50LnNob3cuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG9uZW50LCBNT0RBTF9ESVJFQ1RJVkVTLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0V2ZW50U2VydmljZSwgQXR0YWNobWVudFNlcnZpY2VdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSUywgQ09SRV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRTaG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3ByZXZpZXdNb2RhbCcpXHJcbiAgICBwdWJsaWMgcHJldmlld01vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG4gICAgcHJpdmF0ZSBldmVudDogRXZlbnQ7XHJcbiAgICBwcml2YXRlIGV2ZW50SWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnQgPSA8QXR0YWNobWVudD57ZmlsZU5hbWU6IFwiXCIsIHVybDogXCJcIn07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBfYXR0YWNobWVudFNlcnZpY2U6IEF0dGFjaG1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYXV0aG9yID0gbmV3IFVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGVQYXJhbXMucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudElkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmdldEV2ZW50KHRoaXMuZXZlbnRJZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnN1YilcclxuICAgICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrQ2xpY2tlZCgpIHtcclxuICAgICAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblByZXZpZXdNb2RhbChhdHRhY2htZW50OiBBdHRhY2htZW50KSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50ID0gYXR0YWNobWVudDtcclxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJldmlldyhhdHRhY2htZW50OiBBdHRhY2htZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaG1lbnRTZXJ2aWNlLmdldFByZXZpZXcoYXR0YWNobWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkYXRlOiBEYXRlVGltZSkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KFwiREQuTU0uWVlZWSBoaDptbSBBXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJGVVRVUkVcIjogcmV0dXJuIFwiZnV0dXJlXCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJJTl9QUk9DRVNTXCI6IHJldHVybiBcImluX3Byb2Nlc3NcIjtcclxuICAgICAgICAgICAgY2FzZSBcIkZJTklTSEVEXCI6IHJldHVybiBcImZpbmlzaGVkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
