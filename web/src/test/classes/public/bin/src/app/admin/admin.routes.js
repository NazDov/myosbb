System.register(["./admin.component", "./components/osbb/osbb.component", "./components/house/house_table.admin.component", "./components/apartment/apartment.table.admin.component", "./components/users/users.component", "./components/role/role.component", "./components/house/house_show.admin.component", "./components/ticket/ticket.component.admin", "./components/ticket/single.ticket.component.admin", "./components/apartment/apartment.profile.admin.component", "../../shared/guard/admin.login.guard", "./components/event/event.admin.component", "./components/event/event.show.admin.component", "./components/attachment/attachment.component", "./components/user/user.profile.admin.component", "./../home/user/user.profile.component", "./components/calendar/calendar.admin.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var admin_component_1, osbb_component_1, house_table_admin_component_1, apartment_table_admin_component_1, users_component_1, role_component_1, house_show_admin_component_1, ticket_component_admin_1, single_ticket_component_admin_1, apartment_profile_admin_component_1, admin_login_guard_1, event_admin_component_1, event_show_admin_component_1, attachment_component_1, user_profile_admin_component_1, user_profile_component_1, calendar_admin_component_1;
    var adminRoutes;
    return {
        setters:[
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (osbb_component_1_1) {
                osbb_component_1 = osbb_component_1_1;
            },
            function (house_table_admin_component_1_1) {
                house_table_admin_component_1 = house_table_admin_component_1_1;
            },
            function (apartment_table_admin_component_1_1) {
                apartment_table_admin_component_1 = apartment_table_admin_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (role_component_1_1) {
                role_component_1 = role_component_1_1;
            },
            function (house_show_admin_component_1_1) {
                house_show_admin_component_1 = house_show_admin_component_1_1;
            },
            function (ticket_component_admin_1_1) {
                ticket_component_admin_1 = ticket_component_admin_1_1;
            },
            function (single_ticket_component_admin_1_1) {
                single_ticket_component_admin_1 = single_ticket_component_admin_1_1;
            },
            function (apartment_profile_admin_component_1_1) {
                apartment_profile_admin_component_1 = apartment_profile_admin_component_1_1;
            },
            function (admin_login_guard_1_1) {
                admin_login_guard_1 = admin_login_guard_1_1;
            },
            function (event_admin_component_1_1) {
                event_admin_component_1 = event_admin_component_1_1;
            },
            function (event_show_admin_component_1_1) {
                event_show_admin_component_1 = event_show_admin_component_1_1;
            },
            function (attachment_component_1_1) {
                attachment_component_1 = attachment_component_1_1;
            },
            function (user_profile_admin_component_1_1) {
                user_profile_admin_component_1 = user_profile_admin_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (calendar_admin_component_1_1) {
                calendar_admin_component_1 = calendar_admin_component_1_1;
            }],
        execute: function() {
            exports_1("adminRoutes", adminRoutes = [
                {
                    path: 'admin',
                    component: admin_component_1.AdminComponent,
                    canActivate: [admin_login_guard_1.AdminLoginGuard],
                    children: [
                        { path: 'osbb', component: osbb_component_1.OsbbComponent },
                        { path: '', redirectTo: 'osbb', pathMatch: 'full' },
                        { path: 'houses', component: house_table_admin_component_1.HouseTableAdminComponent },
                        { path: 'houses/:id', component: house_table_admin_component_1.HouseTableAdminComponent },
                        { path: 'house/:id', component: house_show_admin_component_1.HouseShowAdminComponent },
                        { path: 'apartments', component: apartment_table_admin_component_1.ApartmentTableAdminComponent },
                        { path: 'events', component: event_admin_component_1.EventAdminComponent },
                        { path: 'event/:id', component: event_show_admin_component_1.EventShowAdminComponent },
                        { path: 'calendar', component: calendar_admin_component_1.CalendarAdminComponent },
                        { path: 'attachments', component: attachment_component_1.AttachmentAdminComponent },
                        { path: 'users', component: users_component_1.UsersComponent },
                        { path: 'ticket', component: ticket_component_admin_1.TicketAdminComponent },
                        { path: 'ticket/:id', component: single_ticket_component_admin_1.TicketSingleAdminComponent },
                        { path: 'role', component: role_component_1.RoleComponent },
                        { path: 'friend/:id', component: user_profile_component_1.UserProfileComponent },
                        { path: 'apartments/apartmentprofile/:id', component: apartment_profile_admin_component_1.ApartmentProfileAdminComponent },
                        { path: 'role', component: role_component_1.RoleComponent },
                        { path: 'friend/:id', component: user_profile_admin_component_1.UserProfileAdminComponent }
                    ]
                },
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQW1CYSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVgseUJBQUEsV0FBVyxHQUFnQjtnQkFDcEM7b0JBQ0ksSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLGdDQUFjO29CQUN6QixXQUFXLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO29CQUU5QixRQUFRLEVBQUU7d0JBQ04sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO3dCQUMxQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO3dCQUNuRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHNEQUF3QixFQUFFO3dCQUN2RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHNEQUF3QixFQUFFO3dCQUMzRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLG9EQUF1QixFQUFFO3dCQUN6RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDhEQUE0QixFQUFFO3dCQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO3dCQUNsRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLG9EQUF1QixFQUFFO3dCQUN6RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3dCQUN2RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLCtDQUF3QixFQUFFO3dCQUM1RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7d0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7d0JBQ25ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMERBQTBCLEVBQUU7d0JBQzdELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTt3QkFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTt3QkFDdkQsRUFBRSxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsU0FBUyxFQUFFLGtFQUE4QixFQUFFO3dCQUN0RixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7d0JBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0RBQXlCLEVBQUU7cUJBRXZFO2lCQUNJO2FBRUosQ0FBQSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4ucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9hZG1pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm91dGVyQ29uZmlnIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPc2JiQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9vc2JiL29zYmIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvdXNlVGFibGVBZG1pbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG91c2UvaG91c2VfdGFibGUuYWRtaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwYXJ0bWVudFRhYmxlQWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwYXJ0bWVudC9hcGFydG1lbnQudGFibGUuYWRtaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm9sZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcm9sZS9yb2xlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb3VzZVNob3dBZG1pbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG91c2UvaG91c2Vfc2hvdy5hZG1pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGlja2V0QWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmFkbWluXCI7XHJcbmltcG9ydCB7IFRpY2tldFNpbmdsZUFkbWluQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90aWNrZXQvc2luZ2xlLnRpY2tldC5jb21wb25lbnQuYWRtaW5cIjtcclxuaW1wb3J0IHsgQXBhcnRtZW50UHJvZmlsZUFkbWluQ29tcG9uZW50IH0gZnJvbSAgXCIuL2NvbXBvbmVudHMvYXBhcnRtZW50L2FwYXJ0bWVudC5wcm9maWxlLmFkbWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZG1pbkxvZ2luR3VhcmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2d1YXJkL2FkbWluLmxvZ2luLmd1YXJkXCI7XHJcbmltcG9ydCB7IEV2ZW50QWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50L2V2ZW50LmFkbWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFdmVudFNob3dBZG1pbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuc2hvdy5hZG1pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXR0YWNobWVudEFkbWluQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hdHRhY2htZW50L2F0dGFjaG1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlQWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VzZXIvdXNlci5wcm9maWxlLmFkbWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuLy4uL2hvbWUvdXNlci91c2VyLnByb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyQWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmFkbWluLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkbWluUm91dGVzOlJvdXRlckNvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnYWRtaW4nLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBZG1pbkxvZ2luR3VhcmRdLFxyXG5cclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICdvc2JiJywgY29tcG9uZW50OiBPc2JiQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdvc2JiJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG91c2VzJywgY29tcG9uZW50OiBIb3VzZVRhYmxlQWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG91c2VzLzppZCcsIGNvbXBvbmVudDogSG91c2VUYWJsZUFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvdXNlLzppZCcsIGNvbXBvbmVudDogSG91c2VTaG93QWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYXBhcnRtZW50cycsIGNvbXBvbmVudDogQXBhcnRtZW50VGFibGVBZG1pbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdldmVudHMnLCBjb21wb25lbnQ6IEV2ZW50QWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZXZlbnQvOmlkJywgY29tcG9uZW50OiBFdmVudFNob3dBZG1pbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjYWxlbmRhcicsIGNvbXBvbmVudDogQ2FsZW5kYXJBZG1pbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhdHRhY2htZW50cycsIGNvbXBvbmVudDogQXR0YWNobWVudEFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3VzZXJzJywgY29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd0aWNrZXQnLCBjb21wb25lbnQ6IFRpY2tldEFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3RpY2tldC86aWQnLCBjb21wb25lbnQ6IFRpY2tldFNpbmdsZUFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3JvbGUnLCBjb21wb25lbnQ6IFJvbGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZnJpZW5kLzppZCcsIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYXBhcnRtZW50cy9hcGFydG1lbnRwcm9maWxlLzppZCcsIGNvbXBvbmVudDogQXBhcnRtZW50UHJvZmlsZUFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3JvbGUnLCBjb21wb25lbnQ6IFJvbGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZnJpZW5kLzppZCcsIGNvbXBvbmVudDogVXNlclByb2ZpbGVBZG1pbkNvbXBvbmVudCB9XHJcblxyXG5dXHJcbiAgICB9LFxyXG5cclxuXTsiXX0=
