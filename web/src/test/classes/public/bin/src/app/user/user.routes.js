System.register(["../user/user.component", "../home/components/apartment/user.apartment.component", "./bills/user.bill.component", "./calendar/user.calendar.component", "./profile/profile.component", "./settings/settings.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_component_1, user_apartment_component_1, user_bill_component_1, user_calendar_component_1, profile_component_1, settings_component_1;
    var userRoutes;
    return {
        setters:[
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (user_apartment_component_1_1) {
                user_apartment_component_1 = user_apartment_component_1_1;
            },
            function (user_bill_component_1_1) {
                user_bill_component_1 = user_bill_component_1_1;
            },
            function (user_calendar_component_1_1) {
                user_calendar_component_1 = user_calendar_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            }],
        execute: function() {
            exports_1("userRoutes", userRoutes = [
                {
                    path: 'home/user',
                    children: [
                        { path: 'main', component: profile_component_1.ProfileComponent },
                        { path: '', redirectTo: 'main', pathMatch: 'full' },
                        { path: 'apartment', component: user_apartment_component_1.UserApartmentComponent },
                        { path: 'calendar', component: user_calendar_component_1.UserCalendarComponent },
                        { path: 'bill', component: user_bill_component_1.UserBillComponent },
                        { path: 'profile', component: profile_component_1.ProfileComponent },
                        { path: 'main/settings', component: settings_component_1.SettingsComponent }
                    ],
                    component: user_component_1.UserComponent,
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3VzZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFhYSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVYsd0JBQUEsVUFBVSxHQUFpQjtnQkFDcEM7b0JBQ0ksSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFFBQVEsRUFBRTt3QkFDTixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUM3QyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO3dCQUNuRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3dCQUN4RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO3dCQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUM5QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO3FCQUUxRDtvQkFDRCxTQUFTLEVBQUUsOEJBQWE7aUJBQzNCO2FBQ0osQ0FBQSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gXCIuLi91c2VyL3VzZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJBcGFydG1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC91c2VyLmFwYXJ0bWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlckJpbGxDb21wb25lbnQgfSBmcm9tIFwiLi9iaWxscy91c2VyLmJpbGwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpY2tldENvbXBvbmVudCB9IGZyb20gXCIuL3RpY2tldC90aWNrZXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi90aWNrZXQvc2luZ2xlX3RpY2tldC9zaW5nbGUudGlja2V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jYWxlbmRhci91c2VyLmNhbGVuZGFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb3ZpZGVyL3Byb3ZpZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb250cmFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRyYWN0L2NvbnRyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcGFydG1lbnRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvbWUvY29tcG9uZW50cy9BcGFydG1lbnRQcm9maWxlL2FwYXJ0bWVudC5wcm9maWxlXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50XCI7XHJcbiBcclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnaG9tZS91c2VyJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICdtYWluJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdtYWluJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYXBhcnRtZW50JywgY29tcG9uZW50OiBVc2VyQXBhcnRtZW50Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGVuZGFyJywgY29tcG9uZW50OiBVc2VyQ2FsZW5kYXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYmlsbCcsIGNvbXBvbmVudDogVXNlckJpbGxDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAncHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtYWluL3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9XHJcblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50LFxyXG4gICAgfVxyXG5dOyJdfQ==
