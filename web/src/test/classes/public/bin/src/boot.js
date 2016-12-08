System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/router', "./app/app.routes", "./app/app.component", '@angular/forms', "ng2-translate/ng2-translate", "./shared/services/current.user.service", "@angular/core", "./app/login/login.service", "./shared/services/HttpClient", "./shared/guard/admin.login.guard", "./shared/guard/manager.login.guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, router_1, app_routes_1, app_component_1, forms_1, ng2_translate_1, current_user_service_1, core_1, login_service_1, HttpClient_1, admin_login_guard_1, manager_login_guard_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (HttpClient_1_1) {
                HttpClient_1 = HttpClient_1_1;
            },
            function (admin_login_guard_1_1) {
                admin_login_guard_1 = admin_login_guard_1_1;
            },
            function (manager_login_guard_1_1) {
                manager_login_guard_1 = manager_login_guard_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES, current_user_service_1.CurrentUserService, login_service_1.LoginService, HttpClient_1.HttpClient,
                admin_login_guard_1.AdminLoginGuard,
                manager_login_guard_1.ManagerLoginGuard,
                ng2_translate_1.TranslateService,
                {
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'assets/i18n', '.json'); },
                    deps: [http_1.Http]
                },
                { provide: http_1.Http,
                    useFactory: function (xhrBackend, requestOptions, router) {
                        return new HttpClient_1.HttpClient(xhrBackend, requestOptions, router);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router]
                },
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms()])
                .catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNDLHFCQUFjLEVBQUUsQ0FBQztZQUNsQixvQ0FBUyxDQUFDLDRCQUFZLEVBQ2xCLENBQUMscUJBQWMsRUFBRSxpQ0FBb0I7Z0JBQ2pDLDBCQUFpQixFQUFFLHlDQUFrQixFQUFFLDRCQUFZLEVBQUMsdUJBQVU7Z0JBQzlELG1DQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIsZ0NBQWdCO2dCQUNoQjtvQkFDSSxPQUFPLEVBQUUsK0JBQWU7b0JBQ3hCLFVBQVUsRUFBRSxVQUFDLElBQVUsSUFBSyxPQUFBLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBdkQsQ0FBdUQ7b0JBQ25GLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztpQkFDZjtnQkFDRixFQUFFLE9BQU8sRUFBQyxXQUFJO29CQUNiLFVBQVUsRUFBRSxVQUFDLFVBQXNCLEVBQUUsY0FDdkIsRUFBRSxNQUFjO3dCQUN2QixPQUFBLElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQztvQkFBbEQsQ0FBa0Q7b0JBQ3pELElBQUksRUFBRSxDQUFDLGlCQUFVLEVBQUUscUJBQWMsRUFBRSxlQUFNLENBQUM7aUJBQzdDO2dCQUNLLDhCQUFzQixFQUFFO2dCQUMxQixvQkFBWSxFQUFFLENBQUMsQ0FBQztpQkFDbkIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9ib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsICBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyx9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBUFBfUk9VVEVSX1BST1ZJREVSU30gZnJvbSBcIi4vYXBwL2FwcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7ZGlzYWJsZURlcHJlY2F0ZWRGb3JtcywgcHJvdmlkZUZvcm1zfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVTdGF0aWNMb2FkZXJ9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG4gaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9ZnJvbSBcIi4vYXBwL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvSHR0cENsaWVudFwiO1xyXG5pbXBvcnQge0FkbWluTG9naW5HdWFyZH0gZnJvbSBcIi4vc2hhcmVkL2d1YXJkL2FkbWluLmxvZ2luLmd1YXJkXCI7XHJcbmltcG9ydCB7TWFuYWdlckxvZ2luR3VhcmR9IGZyb20gXCIuL3NoYXJlZC9ndWFyZC9tYW5hZ2VyLmxvZ2luLmd1YXJkXCI7XHJcblxyXG4gZW5hYmxlUHJvZE1vZGUoKTtcclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCxcclxuICAgIFtIVFRQX1BST1ZJREVSUywgQVBQX1JPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsIEN1cnJlbnRVc2VyU2VydmljZSwgTG9naW5TZXJ2aWNlLEh0dHBDbGllbnQsXHJcbiAgICAgICAgQWRtaW5Mb2dpbkd1YXJkLFxyXG4gICAgICAgIE1hbmFnZXJMb2dpbkd1YXJkLFxyXG4gICAgICAgIFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChodHRwOiBIdHRwKSA9PiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHAsICdhc3NldHMvaTE4bicsICcuanNvbicpLFxyXG4gICAgICAgICAgICBkZXBzOiBbSHR0cF1cclxuICAgICAgICB9LFxyXG4gICAgICAgeyBwcm92aWRlOkh0dHAsIFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6ICh4aHJCYWNrZW5kOiBYSFJCYWNrZW5kLCByZXF1ZXN0T3B0aW9uczogXHJcbiAgICAgICAgUmVxdWVzdE9wdGlvbnMsIHJvdXRlcjogUm91dGVyKSA9PiBcclxuICAgICAgICAgICAgICAgbmV3IEh0dHBDbGllbnQoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMsIHJvdXRlciksXHJcbiAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBSb3V0ZXJdXHJcbiAgICB9XHJcbiAgICAgICAgLCBkaXNhYmxlRGVwcmVjYXRlZEZvcm1zKCksXHJcbiAgICAgICAgcHJvdmlkZUZvcm1zKCldKVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyJdfQ==
