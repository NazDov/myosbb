System.register(["@angular/router", "./header/header.component", "./login/login.component", "./home/home.component", "./user/user.component", "./home/home.routes", "./user/user.routes", "./registration/registration_user/registration.component", "../shared/error/error.handler.component", "./admin/admin.routes", "./manager/manager.routes", "./forgot_password/forgot.password.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, header_component_1, login_component_1, home_component_1, user_component_1, home_routes_1, user_routes_1, registration_component_1, error_handler_component_1, admin_routes_1, manager_routes_1, forgot_password_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (home_routes_1_1) {
                home_routes_1 = home_routes_1_1;
            },
            function (user_routes_1_1) {
                user_routes_1 = user_routes_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (error_handler_component_1_1) {
                error_handler_component_1 = error_handler_component_1_1;
            },
            function (admin_routes_1_1) {
                admin_routes_1 = admin_routes_1_1;
            },
            function (manager_routes_1_1) {
                manager_routes_1 = manager_routes_1_1;
            },
            function (forgot_password_component_1_1) {
                forgot_password_component_1 = forgot_password_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'head/:status', component: header_component_1.HeaderComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'registration', component: registration_component_1.RegistrationComponent },
                { path: 'forgotPass', component: forgot_password_component_1.ForgotPasswordComponent },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'home/user', component: user_component_1.UserComponent }
            ].concat(home_routes_1.homeRoutes, user_routes_1.userRoutes, admin_routes_1.adminRoutes, manager_routes_1.managerRoutes, [
                { path: '**', component: error_handler_component_1.ErrorHandlerComponent },
            ]));
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFhYSxNQUFNLEVBZU4sb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZnBCLG9CQUFBLE1BQU0sR0FBaUI7Z0JBQ2hDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO2dCQUM1QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFO2dCQUMxRCxFQUFFLElBQUksRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLG1EQUF1QixFQUFFO2dCQUN2RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2dCQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Z0JBQzFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtxQkFDNUMsd0JBQVUsRUFDVix3QkFBVSxFQUNWLDBCQUFXLEVBQ1gsOEJBQWE7Z0JBQ2hCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7Y0FDbkQsQ0FBQSxDQUFDO1lBRVcsa0NBQUEsb0JBQW9CLEdBQUc7Z0JBQ2hDLHNCQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3hCLENBQUEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tIFwiLi91c2VyL3VzZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGhvbWVSb3V0ZXMgfSBmcm9tIFwiLi9ob21lL2hvbWUucm91dGVzXCI7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXMgfSBmcm9tIFwiLi91c2VyL3VzZXIucm91dGVzXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25fdXNlci9yZWdpc3RyYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlckNvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvZXJyb3IvZXJyb3IuaGFuZGxlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgYWRtaW5Sb3V0ZXMgfSBmcm9tIFwiLi9hZG1pbi9hZG1pbi5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgbWFuYWdlclJvdXRlcyB9IGZyb20gXCIuL21hbmFnZXIvbWFuYWdlci5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9mb3Jnb3RfcGFzc3dvcmQvZm9yZ290LnBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gICAgeyBwYXRoOiAnaGVhZC86c3RhdHVzJywgY29tcG9uZW50OiBIZWFkZXJDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAncmVnaXN0cmF0aW9uJywgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDonZm9yZ290UGFzcycsY29tcG9uZW50OkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IH0sIFxyXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2hvbWUvdXNlcicsIGNvbXBvbmVudDogVXNlckNvbXBvbmVudCB9LFxyXG4gICAgLi4uaG9tZVJvdXRlcyxcclxuICAgIC4uLnVzZXJSb3V0ZXMsXHJcbiAgICAuLi5hZG1pblJvdXRlcyxcclxuICAgIC4uLm1hbmFnZXJSb3V0ZXMsXHJcbiAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogRXJyb3JIYW5kbGVyQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXHJcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcclxuXTsiXX0=
