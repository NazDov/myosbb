System.register(["./manager.component", "./components/ticket/ticket.component.manager", "./components/ticket/single.ticket.component.manager", "../../shared/guard/manager.login.guard", "./../user/bills/osbb/osbb.bill.component", "../user/provider/provider.component", "./../user/provider/provider-info", "../event/event.component", "../event/event.show.component", "./components/house/house-table.manager.component", "./components/house/house-show.manager.component", "./../home/home_wall/home.wall.component", "./../user/contract/contract.component", "../home/calendar/calendar.home.component", "../home/components/apartment/user.apartment.component", "../home/components/ApartmentProfile/apartment.profile", "./components/user/user.profile.manager.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var manager_component_1, ticket_component_manager_1, single_ticket_component_manager_1, manager_login_guard_1, osbb_bill_component_1, provider_component_1, provider_info_1, event_component_1, event_show_component_1, house_table_manager_component_1, house_show_manager_component_1, home_wall_component_1, contract_component_1, calendar_home_component_1, user_apartment_component_1, apartment_profile_1, user_profile_manager_component_1;
    var managerRoutes;
    return {
        setters:[
            function (manager_component_1_1) {
                manager_component_1 = manager_component_1_1;
            },
            function (ticket_component_manager_1_1) {
                ticket_component_manager_1 = ticket_component_manager_1_1;
            },
            function (single_ticket_component_manager_1_1) {
                single_ticket_component_manager_1 = single_ticket_component_manager_1_1;
            },
            function (manager_login_guard_1_1) {
                manager_login_guard_1 = manager_login_guard_1_1;
            },
            function (osbb_bill_component_1_1) {
                osbb_bill_component_1 = osbb_bill_component_1_1;
            },
            function (provider_component_1_1) {
                provider_component_1 = provider_component_1_1;
            },
            function (provider_info_1_1) {
                provider_info_1 = provider_info_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (event_show_component_1_1) {
                event_show_component_1 = event_show_component_1_1;
            },
            function (house_table_manager_component_1_1) {
                house_table_manager_component_1 = house_table_manager_component_1_1;
            },
            function (house_show_manager_component_1_1) {
                house_show_manager_component_1 = house_show_manager_component_1_1;
            },
            function (home_wall_component_1_1) {
                home_wall_component_1 = home_wall_component_1_1;
            },
            function (contract_component_1_1) {
                contract_component_1 = contract_component_1_1;
            },
            function (calendar_home_component_1_1) {
                calendar_home_component_1 = calendar_home_component_1_1;
            },
            function (user_apartment_component_1_1) {
                user_apartment_component_1 = user_apartment_component_1_1;
            },
            function (apartment_profile_1_1) {
                apartment_profile_1 = apartment_profile_1_1;
            },
            function (user_profile_manager_component_1_1) {
                user_profile_manager_component_1 = user_profile_manager_component_1_1;
            }],
        execute: function() {
            exports_1("managerRoutes", managerRoutes = [
                {
                    path: 'manager',
                    component: manager_component_1.ManagerComponent,
                    canActivate: [manager_login_guard_1.ManagerLoginGuard],
                    children: [
                        { path: 'wall', component: home_wall_component_1.HomeWallComponent },
                        { path: '', redirectTo: 'wall', pathMatch: 'full' },
                        { path: 'apartment', component: user_apartment_component_1.UserApartmentComponent },
                        { path: 'apartment/apartmentprofile/:id', component: apartment_profile_1.ApartmentProfileComponent },
                        { path: 'houses', component: house_table_manager_component_1.HouseTableManagerComponent },
                        { path: 'houses/:id', component: house_table_manager_component_1.HouseTableManagerComponent },
                        { path: 'house/:id', component: house_show_manager_component_1.HouseShowManagerComponent },
                        { path: 'ticket', component: ticket_component_manager_1.TicketManagerComponent },
                        { path: 'ticket/:id', component: single_ticket_component_manager_1.TicketSingleManagerComponent },
                        { path: 'osbb/bill', component: osbb_bill_component_1.OsbbBillComponent },
                        { path: 'provider', component: provider_component_1.ProviderComponent },
                        { path: 'provider/info/:id', component: provider_info_1.ProviderInfoComponent },
                        { path: 'events', component: event_component_1.EventComponent },
                        { path: 'event/:id', component: event_show_component_1.EventShowComponent },
                        { path: 'calendar', component: calendar_home_component_1.CalendarHomeComponent },
                        { path: 'contract', component: contract_component_1.ContractComponent },
                        { path: 'friend/:id', component: user_profile_manager_component_1.UserProfileManagerComponent },
                    ]
                },
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VyL21hbmFnZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFtQmEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFiLDJCQUFBLGFBQWEsR0FBZ0I7Z0JBQ3RDO29CQUNJLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7b0JBQzNCLFdBQVcsRUFBRSxDQUFDLHVDQUFpQixDQUFDO29CQUVoQyxRQUFRLEVBQUU7d0JBQ04sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTt3QkFDOUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTt3QkFDbkQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsU0FBUyxFQUFFLDZDQUF5QixFQUFFO3dCQUNoRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLDBEQUEwQixFQUFFO3dCQUN6RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBEQUEwQixFQUFFO3dCQUM3RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdEQUF5QixFQUFFO3dCQUMzRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3dCQUNyRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDhEQUE0QixFQUFFO3dCQUMvRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUNuRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO3dCQUNsRCxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUscUNBQXFCLEVBQUU7d0JBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDN0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTt3QkFDcEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTt3QkFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSw0REFBMkIsRUFBRTtxQkFJakU7aUJBQ0o7YUFHSixDQUFBLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXIucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFuYWdlckNvbXBvbmVudCB9IGZyb20gXCIuL21hbmFnZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGlja2V0TWFuYWdlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGlja2V0L3RpY2tldC5jb21wb25lbnQubWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUaWNrZXRTaW5nbGVNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90aWNrZXQvc2luZ2xlLnRpY2tldC5jb21wb25lbnQubWFuYWdlclwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyTG9naW5HdWFyZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3VhcmQvbWFuYWdlci5sb2dpbi5ndWFyZFwiO1xyXG5pbXBvcnQgeyBPc2JiQmlsbENvbXBvbmVudCB9IGZyb20gXCIuLy4uL3VzZXIvYmlsbHMvb3NiYi9vc2JiLmJpbGwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VzZXIvcHJvdmlkZXIvcHJvdmlkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVySW5mb0NvbXBvbmVudCB9IGZyb20gXCIuLy4uL3VzZXIvcHJvdmlkZXIvcHJvdmlkZXItaW5mb1wiO1xyXG5pbXBvcnQgeyBFdmVudENvbXBvbmVudCB9IGZyb20gXCIuLi9ldmVudC9ldmVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXZlbnRTaG93Q29tcG9uZW50IH0gZnJvbSBcIi4uL2V2ZW50L2V2ZW50LnNob3cuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvdXNlVGFibGVNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob3VzZS9ob3VzZS10YWJsZS5tYW5hZ2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb3VzZVNob3dNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob3VzZS9ob3VzZS1zaG93Lm1hbmFnZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVXYWxsQ29tcG9uZW50IH0gZnJvbSBcIi4vLi4vaG9tZS9ob21lX3dhbGwvaG9tZS53YWxsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb250cmFjdENvbXBvbmVudCB9IGZyb20gXCIuLy4uL3VzZXIvY29udHJhY3QvY29udHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbGVuZGFySG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2NhbGVuZGFyL2NhbGVuZGFyLmhvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJBcGFydG1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC91c2VyLmFwYXJ0bWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBhcnRtZW50UHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2NvbXBvbmVudHMvQXBhcnRtZW50UHJvZmlsZS9hcGFydG1lbnQucHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1hbmFnZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VzZXIvdXNlci5wcm9maWxlLm1hbmFnZXIuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFuYWdlclJvdXRlczpSb3V0ZXJDb25maWcgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hbmFnZXInLFxyXG4gICAgICAgIGNvbXBvbmVudDogTWFuYWdlckNvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW01hbmFnZXJMb2dpbkd1YXJkXSxcclxuXHJcbiAgICAgICAgY2hpbGRyZW46IFsgXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3dhbGwnLCBjb21wb25lbnQ6IEhvbWVXYWxsQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICd3YWxsJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYXBhcnRtZW50JywgY29tcG9uZW50OiBVc2VyQXBhcnRtZW50Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FwYXJ0bWVudC9hcGFydG1lbnRwcm9maWxlLzppZCcsIGNvbXBvbmVudDogQXBhcnRtZW50UHJvZmlsZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob3VzZXMnLCBjb21wb25lbnQ6IEhvdXNlVGFibGVNYW5hZ2VyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvdXNlcy86aWQnLCBjb21wb25lbnQ6IEhvdXNlVGFibGVNYW5hZ2VyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvdXNlLzppZCcsIGNvbXBvbmVudDogSG91c2VTaG93TWFuYWdlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd0aWNrZXQnLCBjb21wb25lbnQ6IFRpY2tldE1hbmFnZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndGlja2V0LzppZCcsIGNvbXBvbmVudDogVGlja2V0U2luZ2xlTWFuYWdlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdvc2JiL2JpbGwnLCBjb21wb25lbnQ6IE9zYmJCaWxsQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3Byb3ZpZGVyJywgY29tcG9uZW50OiBQcm92aWRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdwcm92aWRlci9pbmZvLzppZCcsIGNvbXBvbmVudDogUHJvdmlkZXJJbmZvQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2V2ZW50cycsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZXZlbnQvOmlkJywgY29tcG9uZW50OiBFdmVudFNob3dDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsZW5kYXInLCBjb21wb25lbnQ6IENhbGVuZGFySG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjb250cmFjdCcsIGNvbXBvbmVudDogQ29udHJhY3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZnJpZW5kLzppZCcsIGNvbXBvbmVudDogVXNlclByb2ZpbGVNYW5hZ2VyQ29tcG9uZW50IH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcblxyXG5dOyJdfQ==
