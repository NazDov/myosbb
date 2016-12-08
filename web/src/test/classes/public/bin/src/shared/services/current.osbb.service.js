System.register(["@angular/core", '@angular/http', "./current.user.service", "../../app/header/header.component"], function(exports_1, context_1) {
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
    var core_1, http_1, current_user_service_1, header_component_1;
    var CurrentOsbbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            CurrentOsbbService = (function () {
                function CurrentOsbbService(http, currentUserService) {
                    this.http = http;
                    this.currentUserService = currentUserService;
                    this.currentOsbbId = 0;
                    this.currentUserService = header_component_1.HeaderComponent.currentUserService;
                    this.currentUser = this.currentUserService.getUser();
                    // console.log("osbb id ffrom service="+JSON.stringify(this.currentUser.osbbId));
                    this.setOsbbId(this.currentUser.osbbId);
                }
                CurrentOsbbService.prototype.setOsbbId = function (id) {
                    this.currentOsbbId = id;
                };
                CurrentOsbbService.prototype.getCurrentOsbbId = function () {
                    return this.currentOsbbId;
                    //return this.currentUser.osbb.osbbId;
                };
                CurrentOsbbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, current_user_service_1.CurrentUserService])
                ], CurrentOsbbService);
                return CurrentOsbbService;
            }());
            exports_1("CurrentOsbbService", CurrentOsbbService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9jdXJyZW50Lm9zYmIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlJLDRCQUFvQixJQUFTLEVBQVMsa0JBQXFDO29CQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBRG5FLGtCQUFhLEdBQVEsQ0FBQyxDQUFDO29CQUczQixJQUFJLENBQUMsa0JBQWtCLEdBQUMsa0NBQWUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBSXhELGlGQUFpRjtvQkFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVQLHNDQUFTLEdBQVQsVUFBVSxFQUFTO29CQUNmLElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQUVBLDZDQUFnQixHQUFoQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDM0Isc0NBQXNDO2dCQUMxQyxDQUFDO2dCQXZCTDtvQkFBQyxpQkFBVSxFQUFFOztzQ0FBQTtnQkE0QmIseUJBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELG1EQTJCQyxDQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvc2VydmljZXMvY3VycmVudC5vc2JiLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBPbGVnIG9uIDE5LjA5LjIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuL2FwaS5zZXJ2aWNlXCIpO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCxSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL1VzZXIudHNcIlxyXG5pbXBvcnQge0N1cnJlbnRVc2VyU2VydmljZX0gZnJvbSBcIi4vY3VycmVudC51c2VyLnNlcnZpY2VcIlxyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3VycmVudE9zYmJTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6VXNlcjtcclxuICAgIHByaXZhdGUgY3VycmVudE9zYmJJZDpudW1iZXI9MDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSl7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlPUhlYWRlckNvbXBvbmVudC5jdXJyZW50VXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuXHJcblxyXG5cclxuICAgICAvLyBjb25zb2xlLmxvZyhcIm9zYmIgaWQgZmZyb20gc2VydmljZT1cIitKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyLm9zYmJJZCkpO1xyXG4gICAgICAgIHRoaXMuc2V0T3NiYklkKHRoaXMuY3VycmVudFVzZXIub3NiYklkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBzZXRPc2JiSWQoaWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPc2JiSWQ9aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgIGdldEN1cnJlbnRPc2JiSWQoKTpudW1iZXJ7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRPc2JiSWQ7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5jdXJyZW50VXNlci5vc2JiLm9zYmJJZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==
