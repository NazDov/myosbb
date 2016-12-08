System.register(["@angular/core", "ng2-translate/ng2-translate", "../../../../shared/pipes/capitalize-first-letter", "../service/provider-service", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, capitalize_first_letter_1, provider_service_1, router_1;
    var ProviderUserPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProviderUserPageComponent = (function () {
                function ProviderUserPageComponent(_providerService) {
                    this._providerService = _providerService;
                    this.pageNumber = 1;
                    this.pageList = [];
                    this.onlyActive = true;
                    this.periodicities = [];
                }
                ProviderUserPageComponent.prototype.ngOnInit = function () {
                    // console.log("init provider home cmp");
                    // console.log("periodicity items:", PeriodicityItems);
                    // for (let i=0; i<PeriodicityItems.length; i++){
                    //     this.periodicities.push(PeriodicityItems[i]);
                    // }
                    // this.getPeriodicitiesTranslation();
                    // console.log('readable periodicities: ', this.periodicities);
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                //
                // getPeriodicitiesTranslation(){
                //     console.log("got lang",  HeaderComponent.translateService.currentLang);
                //     for (let i=0; i < this.periodicities.length; i++){
                //         HeaderComponent.translateService.get(this.periodicities[i].text)
                //             .subscribe((data : string) => {
                //                 this.periodicities[i].text = data;
                //                 console.log("periodicity =", this.periodicities[i]);
                //             })
                //     }
                //     console.log("periodicities: ", this.periodicities);
                // }
                ProviderUserPageComponent.prototype.prevPage = function () {
                    this.pageNumber = this.pageNumber - 1;
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderUserPageComponent.prototype.nextPage = function () {
                    this.pageNumber = this.pageNumber + 1;
                    this.getProvidersByPageNumAndState(this.pageNumber);
                };
                ProviderUserPageComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                ProviderUserPageComponent.prototype.preparePageList = function (start, end) {
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                ProviderUserPageComponent.prototype.getProvidersByPageNumAndState = function (pageNumber) {
                    var _this = this;
                    console.log("getProvidersByPageNum " + pageNumber + "; only active=" + this.onlyActive);
                    this.pageNumber = +pageNumber;
                    this.emptyArray();
                    return this._providerService.getProvidersByState(this.pageNumber, this.onlyActive)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.providers = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (err) {
                        console.error(err);
                    });
                };
                ;
                ProviderUserPageComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-home',
                        templateUrl: 'src/app/user/provider/provider_home/provider-user-page.html',
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        providers: [provider_service_1.ProviderService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/app/house/house.css', 'src/shared/css/loader.css', 'src/shared/css/general.css']
                    }), 
                    __metadata('design:paramtypes', [provider_service_1.ProviderService])
                ], ProviderUserPageComponent);
                return ProviderUserPageComponent;
            }());
            exports_1("ProviderUserPageComponent", ProviderUserPageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyX2hvbWUvcHJvdmlkZXItdXNlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFVSSxtQ0FBb0IsZ0JBQWdDO29CQUFoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO29CQVA1QyxlQUFVLEdBQVUsQ0FBQyxDQUFDO29CQUN0QixhQUFRLEdBQWlCLEVBQUUsQ0FBQztvQkFFcEMsZUFBVSxHQUFZLElBQUksQ0FBQztvQkFFbkIsa0JBQWEsR0FBaUIsRUFBRSxDQUFDO2dCQUd6QyxDQUFDO2dCQUVELDRDQUFRLEdBQVI7b0JBQ0kseUNBQXlDO29CQUN6Qyx1REFBdUQ7b0JBQ3ZELGlEQUFpRDtvQkFDakQsb0RBQW9EO29CQUNwRCxJQUFJO29CQUNKLHNDQUFzQztvQkFDdEMsK0RBQStEO29CQUMvRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUNELEVBQUU7Z0JBQ0YsaUNBQWlDO2dCQUNqQyw4RUFBOEU7Z0JBQzlFLHlEQUF5RDtnQkFDekQsMkVBQTJFO2dCQUMzRSw4Q0FBOEM7Z0JBQzlDLHFEQUFxRDtnQkFDckQsdUVBQXVFO2dCQUN2RSxpQkFBaUI7Z0JBQ2pCLFFBQVE7Z0JBQ1IsMERBQTBEO2dCQUMxRCxJQUFJO2dCQUVKLDRDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDdkQsQ0FBQztnQkFFRCw0Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ3ZELENBQUM7Z0JBRUQsOENBQVUsR0FBVjtvQkFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxtREFBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxHQUFVO29CQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlFQUE2QixHQUE3QixVQUE4QixVQUFpQjtvQkFBL0MsaUJBZUM7b0JBZEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRSxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2RixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUM3RSxTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUNSLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDNUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsQ0FBQyxFQUNELFVBQUMsR0FBRzt3QkFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDOztnQkFqRkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLDZEQUE2RDt3QkFDMUUsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDO3FCQUNwRyxDQUFDOzs2Q0FBQTtnQkE0RUYsZ0NBQUM7WUFBRCxDQTNFQSxBQTJFQyxJQUFBO1lBM0VELGlFQTJFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm92aWRlci9wcm92aWRlcl9ob21lL3Byb3ZpZGVyLXVzZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBbmFzdGFzaWlhIEZlZG9yYWsgIDgvMTcvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtQYWdlQ3JlYXRvcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wYWdlLmNyZWF0b3IuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7U2VsZWN0SXRlbX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvbmcyLXNlbGVjdC1pdGVtLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvcHJvdmlkZXItc2VydmljZVwiO1xyXG5pbXBvcnQge1BlcmlvZGljaXR5SXRlbXN9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3BlcmlvZGljaXR5LmNvbnN0XCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm92aWRlci1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyX2hvbWUvcHJvdmlkZXItdXNlci1wYWdlLmh0bWwnLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIHByb3ZpZGVyczogW1Byb3ZpZGVyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9hcHAvaG91c2UvaG91c2UuY3NzJywgJ3NyYy9zaGFyZWQvY3NzL2xvYWRlci5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJVc2VyUGFnZUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHByb3ZpZGVycyA6ICBQcm92aWRlcltdO1xyXG4gICAgcHJpdmF0ZSBwYWdlQ3JlYXRvcjpQYWdlQ3JlYXRvcjxQcm92aWRlcj47XHJcbiAgICBwcml2YXRlIHBhZ2VOdW1iZXI6bnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6QXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VzOm51bWJlcjtcclxuICAgIG9ubHlBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBwcm92aWRlcklkOm51bWJlcjtcclxuICAgIHByaXZhdGUgcGVyaW9kaWNpdGllczogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvdmlkZXJTZXJ2aWNlOlByb3ZpZGVyU2VydmljZSl7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBwcm92aWRlciBob21lIGNtcFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBlcmlvZGljaXR5IGl0ZW1zOlwiLCBQZXJpb2RpY2l0eUl0ZW1zKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpPTA7IGk8UGVyaW9kaWNpdHlJdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGVyaW9kaWNpdGllcy5wdXNoKFBlcmlvZGljaXR5SXRlbXNbaV0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmdldFBlcmlvZGljaXRpZXNUcmFuc2xhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWFkYWJsZSBwZXJpb2RpY2l0aWVzOiAnLCB0aGlzLnBlcmlvZGljaXRpZXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvdmlkZXJzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRQZXJpb2RpY2l0aWVzVHJhbnNsYXRpb24oKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdvdCBsYW5nXCIsICBIZWFkZXJDb21wb25lbnQudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyk7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5wZXJpb2RpY2l0aWVzLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgSGVhZGVyQ29tcG9uZW50LnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KHRoaXMucGVyaW9kaWNpdGllc1tpXS50ZXh0KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSA6IHN0cmluZykgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucGVyaW9kaWNpdGllc1tpXS50ZXh0ID0gZGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBlcmlvZGljaXR5ID1cIiwgdGhpcy5wZXJpb2RpY2l0aWVzW2ldKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGVyaW9kaWNpdGllczogXCIsIHRoaXMucGVyaW9kaWNpdGllcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyIC0gMTtcclxuICAgICAgICB0aGlzLmdldFByb3ZpZGVyc0J5UGFnZU51bUFuZFN0YXRlKHRoaXMucGFnZU51bWJlcilcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvdmlkZXJzQnlQYWdlTnVtQW5kU3RhdGUodGhpcy5wYWdlTnVtYmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5QXJyYXkoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGFnZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVQYWdlTGlzdChzdGFydDpudW1iZXIsIGVuZDpudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm92aWRlcnNCeVBhZ2VOdW1BbmRTdGF0ZShwYWdlTnVtYmVyOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRQcm92aWRlcnNCeVBhZ2VOdW0gXCIrIHBhZ2VOdW1iZXIgKyBcIjsgb25seSBhY3RpdmU9XCIgKyB0aGlzLm9ubHlBY3RpdmUpO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICtwYWdlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuZW1wdHlBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm92aWRlclNlcnZpY2UuZ2V0UHJvdmlkZXJzQnlTdGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMub25seUFjdGl2ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzID0gZGF0YS5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KCt0aGlzLnBhZ2VDcmVhdG9yLmJlZ2luUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgK3RoaXMucGFnZUNyZWF0b3IuZW5kUGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VzID0gK2RhdGEudG90YWxQYWdlcztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59Il19
