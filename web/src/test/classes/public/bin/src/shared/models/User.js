System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this.userId = new Number();
                    this.firstName = new String();
                    this.lastName = new String();
                    this.birthDate = new String();
                    this.email = new String();
                    this.phoneNumber = new String();
                    this.gender = new String();
                    this.activated = new Boolean();
                    this.role = new String();
                    this.osbbId = new Number();
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Z0JBY0k7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRSxJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHVCQTBCQyxDQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kZWxzL1VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzaWduID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpO1xyXG5pbXBvcnQge0FwYXJ0bWVudH0gZnJvbSBcIi4vYXBhcnRtZW50LmludGVyZmFjZS50c1wiO1xyXG5pbXBvcnQge1N0cmVldH0gZnJvbSBcIi4vc3RyZWV0LnRzXCI7XHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIHVzZXJJZDpudW1iZXI7XHJcbiAgICBmaXJzdE5hbWU6c3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6c3RyaW5nO1xyXG4gICAgYmlydGhEYXRlOnN0cmluZztcclxuICAgIGVtYWlsOnN0cmluZztcclxuICAgIHBob25lTnVtYmVyOnN0cmluZztcclxuICAgIG9zYmJJZDpudW1iZXI7XHJcbiAgICBnZW5kZXI6c3RyaW5nO1xyXG4gICAgcm9sZTpzdHJpbmc7XHJcbiAgICBhY3RpdmF0ZWQ6Ym9vbGVhbjtcclxuICAgIGFwYXJ0bWVudDpBcGFydG1lbnQ7XHJcbiAgICBzdHJlZXQ6U3RyZWV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gbmV3IE51bWJlcigpO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gbmV3IFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBuZXcgU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5iaXJ0aERhdGUgPSBuZXcgU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IG5ldyBTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gbmV3IFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZ2VuZGVyID0gbmV3IFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gbmV3IEJvb2xlYW4oKTtcclxuICAgICAgICB0aGlzLnJvbGUgPSBuZXcgU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5vc2JiSWQ9IG5ldyBOdW1iZXIoKTtcclxuICAgIH1cclxufSJdfQ==
