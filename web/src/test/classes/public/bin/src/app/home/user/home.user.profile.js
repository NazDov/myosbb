System.register(["@angular/core", "../../user/profile/profile.component"], function(exports_1, context_1) {
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
    var core_1, profile_component_1;
    var HomeProfileUser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            HomeProfileUser = (function () {
                function HomeProfileUser() {
                }
                HomeProfileUser = __decorate([
                    core_1.Component({
                        selector: 'user-profile',
                        template: "\n    <div class=\"row sb-backdown\">\n                <my-user-profile>\n                </my-user-profile>\n    </div>\n    ",
                        styleUrls: ['src/shared/css/loader.css', 'src/shared/css/general.css'],
                        directives: [profile_component_1.ProfileComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeProfileUser);
                return HomeProfileUser;
            }());
            exports_1("HomeProfileUser", HomeProfileUser);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3VzZXIvaG9tZS51c2VyLnByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnSUFLVDt3QkFDRCxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQzt3QkFDdkUsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQ2pDLENBQUM7O21DQUFBO2dCQUdGLHNCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2Q0FFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS91c2VyL2hvbWUudXNlci5wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VzZXItcHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBzYi1iYWNrZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPG15LXVzZXItcHJvZmlsZT5cclxuICAgICAgICAgICAgICAgIDwvbXktdXNlci1wcm9maWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbICdzcmMvc2hhcmVkL2Nzcy9sb2FkZXIuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2dlbmVyYWwuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbUHJvZmlsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVQcm9maWxlVXNlciB7XHJcblxyXG59XHJcbiJdfQ==
