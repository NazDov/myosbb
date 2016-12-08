System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ticket, TicketState;
    return {
        setters:[],
        execute: function() {
            Ticket = (function () {
                function Ticket(name, description, state) {
                    this.name = name;
                    this.description = description;
                    this.state = state;
                }
                return Ticket;
            }());
            exports_1("Ticket", Ticket);
            (function (TicketState) {
                TicketState[TicketState["NEW"] = 0] = "NEW";
                TicketState[TicketState["IN_PROGRESS"] = 1] = "IN_PROGRESS";
                TicketState[TicketState["DONE"] = 2] = "DONE";
            })(TicketState || (TicketState = {}));
            exports_1("TicketState", TicketState);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQXFCQTtnQkFlSSxnQkFBWSxJQUFXLEVBQUUsV0FBa0IsRUFBRSxLQUFpQjtvQkFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsQ0FBQztnQkFDTCxhQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyQkFvQkMsQ0FBQTtZQUVELFdBQVksV0FBVztnQkFDbkIsMkNBQUcsQ0FBQTtnQkFDSCwyREFBVyxDQUFBO2dCQUNYLDZDQUFJLENBQUE7WUFDUixDQUFDLEVBSlcsV0FBVyxLQUFYLFdBQVcsUUFJdEI7a0RBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RpY2tldC90aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nIDtcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL3NpbmdsZV90aWNrZXQvbWVzc2FnZScgO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vLi4vdXNlcic7XHJcbmltcG9ydCB7QXR0YWNobWVudH0gZnJvbSBcIi4uLy4uL2FkbWluL2NvbXBvbmVudHMvYXR0YWNobWVudC9hdHRhY2htZW50LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGlja2V0IHtcclxuICAgIHRpY2tldElkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc3RhdGU6IFRpY2tldFN0YXRlO1xyXG4gICAgc3RhdGV0aW1lOkRhdGU7XHJcbiAgICBkaXNjdXNzZWQ6RGF0ZTtcclxuICAgIGRlYWRsaW5lOkRhdGU7XHJcbiAgICB0aW1lOkRhdGU7XHJcbiAgICB1c2VyOlVzZXI7XHJcbiAgICBhc3NpZ25lZDpVc2VyO1xyXG4gICAgYXR0YWNobWVudHM6QXR0YWNobWVudFtdO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlja2V0IGltcGxlbWVudHMgSVRpY2tldCB7XHJcbiAgICB0aWNrZXRJZDpudW1iZXI7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIHN0YXRlOlRpY2tldFN0YXRlO1xyXG4gICAgc3RhdGV0aW1lOkRhdGU7XHJcbiAgICBkaXNjdXNzZWQ6RGF0ZTtcclxuICAgIGRlYWRsaW5lOkRhdGU7XHJcbiAgICB0aW1lOkRhdGU7XHJcbiAgICB1c2VyOlVzZXI7XHJcbiAgICBhc3NpZ25lZDpVc2VyO1xyXG4gICAgICAgIGF0dGFjaG1lbnRzOkF0dGFjaG1lbnRbXTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nLCBkZXNjcmlwdGlvbjpzdHJpbmcsIHN0YXRlOlRpY2tldFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaWNrZXRTdGF0ZXtcclxuICAgIE5FVyxcclxuICAgIElOX1BST0dSRVNTLFxyXG4gICAgRE9ORVxyXG59Il19
