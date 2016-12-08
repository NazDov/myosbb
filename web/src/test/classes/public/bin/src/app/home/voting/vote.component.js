System.register(["@angular/core", "ng2-translate", 'moment', './vote.service', './option.service', './vote_form/vote-add-form.component', './vote_form/vote-del-form.component', './vote_form/vote-close-form.component', "../../../shared/services/current.user.service", "../../../shared/pipes/capitalize-first-letter"], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, moment_1, vote_service_1, option_service_1, vote_add_form_component_1, vote_del_form_component_1, vote_close_form_component_1, current_user_service_1, capitalize_first_letter_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (vote_service_1_1) {
                vote_service_1 = vote_service_1_1;
            },
            function (option_service_1_1) {
                option_service_1 = option_service_1_1;
            },
            function (vote_add_form_component_1_1) {
                vote_add_form_component_1 = vote_add_form_component_1_1;
            },
            function (vote_del_form_component_1_1) {
                vote_del_form_component_1 = vote_del_form_component_1_1;
            },
            function (vote_close_form_component_1_1) {
                vote_close_form_component_1 = vote_close_form_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent(voteService, optionService, currentUserService) {
                    this.voteService = voteService;
                    this.optionService = optionService;
                    this.currentUserService = currentUserService;
                    this.voteArr = [];
                    this.currentUser = this.currentUserService.getUser();
                }
                VoteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.voteService.getAllVotes(this.currentUser.osbbId)
                        .then(function (voteArr) { return _this.voteArr = voteArr; })
                        .then(function () { return _this.checkForUserId(); })
                        .then(function () { return _this.countNumberOfRespondents(); })
                        .then(function () { return _this.calculateProgress(); });
                };
                VoteComponent.prototype.checkForUserId = function () {
                    for (var i = 0; i < this.voteArr.length; i++) {
                        if (this.voteArr[i].available && !(this.voteArr[i].usersId.includes(this.currentUser.userId))) {
                            this.voteArr[i].available = true;
                        }
                        else {
                            this.voteArr[i].available = false;
                        }
                    }
                };
                VoteComponent.prototype.countNumberOfRespondents = function () {
                    for (var i = 0; i < this.voteArr.length; i++) {
                        this.voteArr[i].numberOfRespondents = this.voteArr[i].usersId.length;
                    }
                };
                VoteComponent.prototype.openModalWindow = function () {
                    this.voteAddForm.openAddModal();
                };
                VoteComponent.prototype.toScoreOption = function (option, vote) {
                    if ((vote.endTime.valueOf() - new Date().valueOf()) > 0) {
                        if (vote.numberOfRespondents === undefined)
                            vote.numberOfRespondents = 0;
                        vote.numberOfRespondents++;
                        option.users.push(this.currentUser);
                        this.optionService.toScoreOption(option.optionId, this.currentUser.userId);
                    }
                    vote.available = false;
                    this.calcProgressForVote(vote);
                };
                VoteComponent.prototype.createVote = function (vote) {
                    var _this = this;
                    this.voteService.addVote(vote).then(function (vote) { return _this.addVote(vote); });
                };
                VoteComponent.prototype.addVote = function (vote) {
                    this.voteArr.unshift(vote);
                };
                VoteComponent.prototype.calculateProgress = function () {
                    for (var i = 0; i < this.voteArr.length; i++) {
                        this.calcProgressForVote(this.voteArr[i]);
                    }
                };
                VoteComponent.prototype.calcProgressForVote = function (vote) {
                    for (var i = 0; i < vote.options.length; i++) {
                        vote.options[i].progress = this.calcProgressForOption(vote.options[i].users.length, vote.numberOfRespondents);
                    }
                };
                VoteComponent.prototype.calcProgressForOption = function (usersLength, numberOfRespondents) {
                    if (numberOfRespondents !== 0) {
                        return String(Math.round(usersLength / numberOfRespondents * 100));
                    }
                    else {
                        return "0";
                    }
                };
                VoteComponent.prototype.getFormatDate = function (date) {
                    return moment_1.default(date).format("DD.MM.YYYY HH:mm");
                };
                VoteComponent.prototype.deleteVote = function (vote) {
                    var _this = this;
                    this.voteService.deleteVote(vote).then(function (vote) { return _this.deleteVoteFromArr(vote); });
                };
                VoteComponent.prototype.closeVote = function (vote) {
                    vote.available = false;
                    this.voteService.closeVote(vote.voteId);
                };
                VoteComponent.prototype.deleteVoteFromArr = function (vote) {
                    var index = this.voteArr.indexOf(vote);
                    if (index > -1) {
                        this.voteArr.splice(index, 1);
                    }
                };
                VoteComponent.prototype.isCurrentUserCreator = function (vote) {
                    return this.currentUser.userId === vote.user.userId ? true : false;
                };
                __decorate([
                    core_1.ViewChild('voteAddForm'), 
                    __metadata('design:type', vote_add_form_component_1.VoteAddFormComponent)
                ], VoteComponent.prototype, "voteAddForm", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: './src/app/home/voting/vote.html',
                        styleUrls: ['./src/app/home/voting/vote.css'],
                        directives: [vote_add_form_component_1.VoteAddFormComponent, vote_del_form_component_1.VoteDelFormComponent, vote_close_form_component_1.VoteCloseFormComponent],
                        providers: [vote_service_1.VoteService, option_service_1.OptionService],
                        pipes: [capitalize_first_letter_1.CapitalizeFirstLetterPipe, ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [vote_service_1.VoteService, option_service_1.OptionService, current_user_service_1.CurrentUserService])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3ZvdGluZy92b3RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFRSSx1QkFBb0IsV0FBdUIsRUFBVSxhQUEyQixFQUFVLGtCQUFxQztvQkFBM0csZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDM0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELGdDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7eUJBQ3BDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDO3lCQUN2QyxJQUFJLENBQUMsY0FBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQzt5QkFDaEMsSUFBSSxDQUFDLGNBQUssT0FBQSxLQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQzt5QkFDMUMsSUFBSSxDQUFDLGNBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELHNDQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMxQyxFQUFF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Q0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRU8seUNBQWlCLEdBQXpCLFVBQTBCLElBQVU7b0JBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDRDQUFvQixHQUFwQixVQUFxQixJQUFTO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDdkUsQ0FBQztnQkFwR0Q7b0JBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7O2tFQUFBO2dCQVY3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzt3QkFDN0MsVUFBVSxFQUFFLENBQUUsOENBQW9CLEVBQUUsOENBQW9CLEVBQUUsa0RBQXNCLENBQUM7d0JBQ2pGLFNBQVMsRUFBQyxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsQ0FBQzt3QkFDdEMsS0FBSyxFQUFFLENBQUMsbURBQXlCLEVBQUUsNkJBQWEsQ0FBQztxQkFDcEQsQ0FBQzs7aUNBQUE7Z0JBd0dGLG9CQUFDO1lBQUQsQ0F2R0EsQUF1R0MsSUFBQTtZQXZHRCx5Q0F1R0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdm90aW5nL3ZvdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7Vm90ZX0gZnJvbSAnLi92b3RlJztcclxuaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcclxuaW1wb3J0IHtWb3RlU2VydmljZX0gZnJvbSAnLi92b3RlLnNlcnZpY2UnO1xyXG5pbXBvcnQge09wdGlvblNlcnZpY2V9IGZyb20gJy4vb3B0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge1ZvdGVBZGRGb3JtQ29tcG9uZW50fSBmcm9tICcuL3ZvdGVfZm9ybS92b3RlLWFkZC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Vm90ZURlbEZvcm1Db21wb25lbnR9IGZyb20gJy4vdm90ZV9mb3JtL3ZvdGUtZGVsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHtWb3RlQ2xvc2VGb3JtQ29tcG9uZW50fSAgZnJvbSAnLi92b3RlX2Zvcm0vdm90ZS1jbG9zZS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUtZmlyc3QtbGV0dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndm90ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3JjL2FwcC9ob21lL3ZvdGluZy92b3RlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc3JjL2FwcC9ob21lL3ZvdGluZy92b3RlLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogWyBWb3RlQWRkRm9ybUNvbXBvbmVudCwgVm90ZURlbEZvcm1Db21wb25lbnQsIFZvdGVDbG9zZUZvcm1Db21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOltWb3RlU2VydmljZSwgT3B0aW9uU2VydmljZV0sXHJcbiAgICBwaXBlczogW0NhcGl0YWxpemVGaXJzdExldHRlclBpcGUsIFRyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWb3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd2b3RlQWRkRm9ybScpXHJcbiAgICB2b3RlQWRkRm9ybTpWb3RlQWRkRm9ybUNvbXBvbmVudDtcclxuXHJcbiAgICB2b3RlQXJyOiBWb3RlW107XHJcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZvdGVTZXJ2aWNlOlZvdGVTZXJ2aWNlLCBwcml2YXRlIG9wdGlvblNlcnZpY2U6T3B0aW9uU2VydmljZSwgcHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy52b3RlQXJyID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldFVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnZvdGVTZXJ2aWNlLmdldEFsbFZvdGVzKHRoaXMuY3VycmVudFVzZXIub3NiYklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih2b3RlQXJyID0+IHRoaXMudm90ZUFyciA9IHZvdGVBcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4gdGhpcy5jaGVja0ZvclVzZXJJZCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKT0+IHRoaXMuY291bnROdW1iZXJPZlJlc3BvbmRlbnRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4gdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ZvclVzZXJJZCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52b3RlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudm90ZUFycltpXS5hdmFpbGFibGUgJiYgISh0aGlzLnZvdGVBcnJbaV0udXNlcnNJZC5pbmNsdWRlcyh0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCkpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudm90ZUFycltpXS5hdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52b3RlQXJyW2ldLmF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50TnVtYmVyT2ZSZXNwb25kZW50cygpOnZvaWQgeyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52b3RlQXJyLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52b3RlQXJyW2ldLm51bWJlck9mUmVzcG9uZGVudHMgPSB0aGlzLnZvdGVBcnJbaV0udXNlcnNJZC5sZW5ndGg7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWxXaW5kb3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52b3RlQWRkRm9ybS5vcGVuQWRkTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1Njb3JlT3B0aW9uKG9wdGlvbjogT3B0aW9uLCB2b3RlOiBWb3RlKTp2b2lkIHtcclxuICAgICAgICBpZigodm90ZS5lbmRUaW1lLnZhbHVlT2YoKSAtIG5ldyBEYXRlKCkudmFsdWVPZigpKSA+IDApe1xyXG4gICAgICAgICAgICBpZih2b3RlLm51bWJlck9mUmVzcG9uZGVudHMgPT09IHVuZGVmaW5lZCkgdm90ZS5udW1iZXJPZlJlc3BvbmRlbnRzID0gMCA7XHJcbiAgICAgICAgICAgIHZvdGUubnVtYmVyT2ZSZXNwb25kZW50cysrO1xyXG4gICAgICAgICAgICBvcHRpb24udXNlcnMucHVzaCh0aGlzLmN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25TZXJ2aWNlLnRvU2NvcmVPcHRpb24ob3B0aW9uLm9wdGlvbklkLCB0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZvdGUuYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWxjUHJvZ3Jlc3NGb3JWb3RlKHZvdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVZvdGUodm90ZTogVm90ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudm90ZVNlcnZpY2UuYWRkVm90ZSh2b3RlKS50aGVuKHZvdGUgPT4gdGhpcy5hZGRWb3RlKHZvdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFZvdGUodm90ZTogVm90ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudm90ZUFyci51bnNoaWZ0KHZvdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYWxjdWxhdGVQcm9ncmVzcygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52b3RlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1Byb2dyZXNzRm9yVm90ZSh0aGlzLnZvdGVBcnJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQcm9ncmVzc0ZvclZvdGUodm90ZTpWb3RlKTogdm9pZCB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCB2b3RlLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdm90ZS5vcHRpb25zW2ldLnByb2dyZXNzID0gdGhpcy5jYWxjUHJvZ3Jlc3NGb3JPcHRpb24odm90ZS5vcHRpb25zW2ldLnVzZXJzLmxlbmd0aCwgdm90ZS5udW1iZXJPZlJlc3BvbmRlbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjUHJvZ3Jlc3NGb3JPcHRpb24odXNlcnNMZW5ndGg6IG51bWJlciwgbnVtYmVyT2ZSZXNwb25kZW50czogbnVtYmVyKTogc3RyaW5ne1xyXG4gICAgICAgIGlmKG51bWJlck9mUmVzcG9uZGVudHMgIT09IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh1c2Vyc0xlbmd0aCAvIG51bWJlck9mUmVzcG9uZGVudHMgICogMTAwKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtYXREYXRlKGRhdGU6RGF0ZSk6c3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZIEhIOm1tXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVZvdGUodm90ZTogVm90ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudm90ZVNlcnZpY2UuZGVsZXRlVm90ZSh2b3RlKS50aGVuKHZvdGUgPT4gdGhpcy5kZWxldGVWb3RlRnJvbUFycih2b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWb3RlKHZvdGU6IFZvdGUpOnZvaWQge1xyXG4gICAgICAgIHZvdGUuYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52b3RlU2VydmljZS5jbG9zZVZvdGUodm90ZS52b3RlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlVm90ZUZyb21BcnIodm90ZTogVm90ZSk6IHZvaWQge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZvdGVBcnIuaW5kZXhPZih2b3RlKTtcclxuICAgICAgICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZvdGVBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ3VycmVudFVzZXJDcmVhdG9yKHZvdGU6Vm90ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCA9PT0gdm90ZS51c2VyLnVzZXJJZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxufSAgICJdfQ==
