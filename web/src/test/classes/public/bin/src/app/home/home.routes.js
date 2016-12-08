System.register(["./home.component", "../admin/components/osbb/osbb.component", "../user/ticket/ticket.component.admin", "../house/house.table.component", "../house/house.show.component", "../user/ticket/single_ticket/single.ticket.component.admin", "./home_wall/home.wall.component", "../user/provider/provider_home/provider-user-page.component.wrapper", "../event/event.component", "../event/event.show.component", "./calendar/calendar.home.component", "./user/user.profile.component", "../home/components/ApartmentProfile/apartment.profile", "../home/components/apartment/user.apartment.component", "../user/provider/provider-info", "../user/report/user.report.component", "../home/components/apartment/submenu/electricity/electricity.component", "../home/components/apartment/submenu/gas/gas.component", "../home/components/apartment/submenu/water/water.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, osbb_component_1, ticket_component_admin_1, house_table_component_1, house_show_component_1, single_ticket_component_admin_1, home_wall_component_1, provider_user_page_component_wrapper_1, event_component_1, event_show_component_1, calendar_home_component_1, user_profile_component_1, apartment_profile_1, user_apartment_component_1, provider_info_1, user_report_component_1, electricity_component_1, gas_component_1, water_component_1;
    var homeRoutes;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (osbb_component_1_1) {
                osbb_component_1 = osbb_component_1_1;
            },
            function (ticket_component_admin_1_1) {
                ticket_component_admin_1 = ticket_component_admin_1_1;
            },
            function (house_table_component_1_1) {
                house_table_component_1 = house_table_component_1_1;
            },
            function (house_show_component_1_1) {
                house_show_component_1 = house_show_component_1_1;
            },
            function (single_ticket_component_admin_1_1) {
                single_ticket_component_admin_1 = single_ticket_component_admin_1_1;
            },
            function (home_wall_component_1_1) {
                home_wall_component_1 = home_wall_component_1_1;
            },
            function (provider_user_page_component_wrapper_1_1) {
                provider_user_page_component_wrapper_1 = provider_user_page_component_wrapper_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (event_show_component_1_1) {
                event_show_component_1 = event_show_component_1_1;
            },
            function (calendar_home_component_1_1) {
                calendar_home_component_1 = calendar_home_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (apartment_profile_1_1) {
                apartment_profile_1 = apartment_profile_1_1;
            },
            function (user_apartment_component_1_1) {
                user_apartment_component_1 = user_apartment_component_1_1;
            },
            function (provider_info_1_1) {
                provider_info_1 = provider_info_1_1;
            },
            function (user_report_component_1_1) {
                user_report_component_1 = user_report_component_1_1;
            },
            function (electricity_component_1_1) {
                electricity_component_1 = electricity_component_1_1;
            },
            function (gas_component_1_1) {
                gas_component_1 = gas_component_1_1;
            },
            function (water_component_1_1) {
                water_component_1 = water_component_1_1;
            }],
        execute: function() {
            exports_1("homeRoutes", homeRoutes = [
                {
                    path: 'home',
                    component: home_component_1.HomeComponent,
                    children: [
                        { path: 'wall', component: home_wall_component_1.HomeWallComponent },
                        { path: '', redirectTo: 'wall', pathMatch: 'full' },
                        { path: 'events', component: event_component_1.EventComponent },
                        { path: 'event/:id', component: event_show_component_1.EventShowComponent },
                        { path: 'calendar', component: calendar_home_component_1.CalendarHomeComponent },
                        { path: 'osbb', component: osbb_component_1.OsbbComponent },
                        { path: 'provider/info', component: provider_user_page_component_wrapper_1.ProviderUserPageWrapperComponent },
                        { path: 'provider/info/:id', component: provider_info_1.ProviderInfoComponent },
                        { path: 'houses', component: house_table_component_1.HouseTableComponent },
                        { path: 'house/:id', component: house_show_component_1.HouseShowComponent },
                        { path: 'ticket', component: ticket_component_admin_1.TicketAdminComponent },
                        { path: 'ticket/:id', component: single_ticket_component_admin_1.TicketSingleAdminComponent },
                        { path: 'friend/:id', component: user_profile_component_1.UserProfileComponent },
                        { path: 'report', component: user_report_component_1.UserReportComponent },
                        { path: 'apartment', component: user_apartment_component_1.UserApartmentComponent },
                        { path: 'rents/electricity', component: electricity_component_1.ElectricityComponen },
                        { path: 'rents/gas', component: gas_component_1.GasComponen },
                        { path: 'rents/water', component: water_component_1.WaterComponen },
                        { path: 'apartment/apartmentprofile/:id', component: apartment_profile_1.ApartmentProfileComponent }
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFxQmEsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFWLHdCQUFBLFVBQVUsR0FBaUI7Z0JBQ3BDO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSw4QkFBYTtvQkFFeEIsUUFBUSxFQUFFO3dCQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7d0JBQzlDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7d0JBQ25ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDN0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTt3QkFDcEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO3dCQUMxQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVFQUFnQyxFQUFFO3dCQUN0RSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUscUNBQXFCLEVBQUU7d0JBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7d0JBQ2xELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7d0JBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7d0JBQ25ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMERBQTBCLEVBQUU7d0JBQzdELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7d0JBQ3ZELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7d0JBQ2xELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7d0JBQ3hELEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBQzt3QkFDM0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwyQkFBVyxFQUFDO3dCQUMzQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLCtCQUFhLEVBQUM7d0JBQy9DLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLFNBQVMsRUFBRSw2Q0FBeUIsRUFBRTtxQkFDbkY7aUJBQ0o7YUFDSixDQUFBLENBQUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlnIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3NiYkNvbXBvbmVudCB9IGZyb20gXCIuLi9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGlja2V0QWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi4vdXNlci90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5hZG1pblwiO1xyXG5pbXBvcnQgeyBIb3VzZVRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvdXNlL2hvdXNlLnRhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb3VzZVNob3dDb21wb25lbnQgfSBmcm9tIFwiLi4vaG91c2UvaG91c2Uuc2hvdy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGlja2V0U2luZ2xlQWRtaW5Db21wb25lbnQgfSBmcm9tIFwiLi4vdXNlci90aWNrZXQvc2luZ2xlX3RpY2tldC9zaW5nbGUudGlja2V0LmNvbXBvbmVudC5hZG1pblwiO1xyXG5pbXBvcnQgeyBIb21lV2FsbENvbXBvbmVudCB9IGZyb20gXCIuL2hvbWVfd2FsbC9ob21lLndhbGwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyVXNlclBhZ2VXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VzZXIvcHJvdmlkZXIvcHJvdmlkZXJfaG9tZS9wcm92aWRlci11c2VyLXBhZ2UuY29tcG9uZW50LndyYXBwZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vZXZlbnQvZXZlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEV2ZW50U2hvd0NvbXBvbmVudCB9IGZyb20gXCIuLi9ldmVudC9ldmVudC5zaG93LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jYWxlbmRhci9jYWxlbmRhci5ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3VzZXIvdXNlci5wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcGFydG1lbnRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvbWUvY29tcG9uZW50cy9BcGFydG1lbnRQcm9maWxlL2FwYXJ0bWVudC5wcm9maWxlXCI7XHJcbmltcG9ydCB7IFVzZXJBcGFydG1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC91c2VyLmFwYXJ0bWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXJJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VzZXIvcHJvdmlkZXIvcHJvdmlkZXItaW5mb1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3VzZXIvcmVwb3J0L3VzZXIucmVwb3J0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VsZWN0cmljaXR5Q29tcG9uZW59IGZyb20gXCIuLi9ob21lL2NvbXBvbmVudHMvYXBhcnRtZW50L3N1Ym1lbnUvZWxlY3RyaWNpdHkvZWxlY3RyaWNpdHkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R2FzQ29tcG9uZW59IGZyb20gXCIuLi9ob21lL2NvbXBvbmVudHMvYXBhcnRtZW50L3N1Ym1lbnUvZ2FzL2dhcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXYXRlckNvbXBvbmVufSBmcm9tIFwiLi4vaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC9zdWJtZW51L3dhdGVyL3dhdGVyLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVSb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG5cclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICd3YWxsJywgY29tcG9uZW50OiBIb21lV2FsbENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnd2FsbCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2V2ZW50cycsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZXZlbnQvOmlkJywgY29tcG9uZW50OiBFdmVudFNob3dDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsZW5kYXInLCBjb21wb25lbnQ6IENhbGVuZGFySG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdvc2JiJywgY29tcG9uZW50OiBPc2JiQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3Byb3ZpZGVyL2luZm8nLCBjb21wb25lbnQ6IFByb3ZpZGVyVXNlclBhZ2VXcmFwcGVyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3Byb3ZpZGVyL2luZm8vOmlkJywgY29tcG9uZW50OiBQcm92aWRlckluZm9Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG91c2VzJywgY29tcG9uZW50OiBIb3VzZVRhYmxlQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvdXNlLzppZCcsIGNvbXBvbmVudDogSG91c2VTaG93Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3RpY2tldCcsIGNvbXBvbmVudDogVGlja2V0QWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndGlja2V0LzppZCcsIGNvbXBvbmVudDogVGlja2V0U2luZ2xlQWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZnJpZW5kLzppZCcsIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAncmVwb3J0JywgY29tcG9uZW50OiBVc2VyUmVwb3J0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FwYXJ0bWVudCcsIGNvbXBvbmVudDogVXNlckFwYXJ0bWVudENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ3JlbnRzL2VsZWN0cmljaXR5JywgY29tcG9uZW50OiBFbGVjdHJpY2l0eUNvbXBvbmVufSxcclxuICAgICAgICAgICAge3BhdGg6ICdyZW50cy9nYXMnLCBjb21wb25lbnQ6IEdhc0NvbXBvbmVufSxcclxuICAgICAgICAgICAge3BhdGg6ICdyZW50cy93YXRlcicsIGNvbXBvbmVudDogV2F0ZXJDb21wb25lbn0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FwYXJ0bWVudC9hcGFydG1lbnRwcm9maWxlLzppZCcsIGNvbXBvbmVudDogQXBhcnRtZW50UHJvZmlsZUNvbXBvbmVudCB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dOyJdfQ==
