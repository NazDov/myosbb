System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "ng2-translate", 'moment', '../vote', '../../../../shared/models/User', '../option', "../../../../shared/pipes/capitalize-first-letter"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_bootstrap_2, ng2_translate_1, moment_1, vote_1, User_1, option_1, capitalize_first_letter_1;
    var VoteAddFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (vote_1_1) {
                vote_1 = vote_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (option_1_1) {
                option_1 = option_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            }],
        execute: function() {
            VoteAddFormComponent = (function () {
                function VoteAddFormComponent(builder) {
                    this.builder = builder;
                    this.create = new core_1.EventEmitter();
                    this.optionArr = [];
                    this.submitAttempt = false;
                    this.question = new common_1.Control('', common_1.Validators.required);
                    this.creatingForm = builder.group({
                        question: this.question,
                    });
                    this.optionInputStr = "";
                }
                VoteAddFormComponent.prototype.openAddModal = function () {
                    this.addVoteModal.show();
                };
                VoteAddFormComponent.prototype.closeAddModal = function () {
                    this.clearAddModal();
                    this.addVoteModal.hide();
                };
                VoteAddFormComponent.prototype.clearAddModal = function () {
                    this.submitAttempt = false;
                    this.optionArr = [];
                    this.endTimeStr = '';
                    this.questionInputStr = '';
                    this.optionInputStr = '';
                };
                VoteAddFormComponent.prototype.addOption = function (description) {
                    var opt = new option_1.Option();
                    opt.description = description;
                    opt.users = [];
                    this.optionArr.push(opt);
                    this.optionInputStr = "";
                };
                VoteAddFormComponent.prototype.toggleSubmitAttempt = function () {
                    this.submitAttempt = true;
                };
                VoteAddFormComponent.prototype.onCreateVoting = function () {
                    if (this.question.valid && this.isOptionArrSizeCorrect() && this.isEndTimeCorrect()) {
                        this.create.emit(this.createVote());
                        this.closeAddModal();
                    }
                };
                VoteAddFormComponent.prototype.createVote = function () {
                    var vote = new vote_1.Vote();
                    vote.description = this.questionInputStr;
                    vote.options = this.optionArr;
                    vote.available = true;
                    vote.usersId = [];
                    vote.startTime = new Date();
                    vote.endTime = this.castEndTimeStringToDate();
                    vote.user = this.currentUser;
                    return vote;
                };
                VoteAddFormComponent.prototype.castEndTimeStringToDate = function () {
                    return moment_1.default(this.endTimeStr).toDate();
                };
                VoteAddFormComponent.prototype.isEndTimeCorrect = function () {
                    var startTime = new Date();
                    var res = this.castEndTimeStringToDate().valueOf() - startTime.valueOf();
                    return res > 0 || res === NaN ? true : false;
                };
                VoteAddFormComponent.prototype.isOptionInputEmpty = function () {
                    return this.optionInputStr.length == 0 ? true : false;
                };
                VoteAddFormComponent.prototype.isOptionArrSizeCorrect = function () {
                    return this.optionArr.length >= 2 ? true : false;
                };
                VoteAddFormComponent.prototype.deleteOption = function (option) {
                    this.optionArr.splice(this.optionArr.indexOf(option), 1);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VoteAddFormComponent.prototype, "create", void 0);
                __decorate([
                    core_1.ViewChild('addVoteModal'), 
                    __metadata('design:type', ng2_bootstrap_2.ModalDirective)
                ], VoteAddFormComponent.prototype, "addVoteModal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', User_1.User)
                ], VoteAddFormComponent.prototype, "currentUser", void 0);
                VoteAddFormComponent = __decorate([
                    core_1.Component({
                        selector: 'vote-add-form',
                        templateUrl: './src/app/home/voting/vote_form/vote-add-form.html',
                        styleUrls: ['./src/app/home/voting/vote_form/vote-add-form.css'],
                        directives: [common_1.FORM_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], VoteAddFormComponent);
                return VoteAddFormComponent;
            }());
            exports_1("VoteAddFormComponent", VoteAddFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3ZvdGluZy92b3RlX2Zvcm0vdm90ZS1hZGQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQWlCSSw4QkFBb0IsT0FBb0I7b0JBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUMxQixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDRDQUFhLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDRDQUFhLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFD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QkFoQlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLG9EQUFvRDt3QkFDakUsU0FBUyxFQUFDLENBQUMsbURBQW1ELENBQUM7d0JBQy9ELFVBQVUsRUFBQyxDQUFDLHdCQUFlLEVBQUUsZ0NBQWdCLEVBQUUsd0JBQWUsQ0FBQzt3QkFDL0QsYUFBYSxFQUFFLENBQUMsaUNBQWlCLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7cUJBQ3BELENBQUM7O3dDQUFBO2dCQWtHRiwyQkFBQztZQUFELENBakdBLEFBaUdDLElBQUE7WUFqR0QsdURBaUdDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZvdGluZy92b3RlX2Zvcm0vdm90ZS1hZGQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TU9EQUxfRElSRUNUSVZFUywgQlNfVklFV19QUk9WSURFUlN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TW9kYWxEaXJlY3RpdmV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQge1ZvdGV9IGZyb20gJy4uL3ZvdGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuLi9vcHRpb24nO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2b3RlLWFkZC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL2hvbWUvdm90aW5nL3ZvdGVfZm9ybS92b3RlLWFkZC1mb3JtLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOlsnLi9zcmMvYXBwL2hvbWUvdm90aW5nL3ZvdGVfZm9ybS92b3RlLWFkZC1mb3JtLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczpbRk9STV9ESVJFQ1RJVkVTLCBNT0RBTF9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVNdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZvdGVBZGRGb3JtQ29tcG9uZW50IHtcclxuXHJcbiAgICBvcHRpb25BcnI6T3B0aW9uW107XHJcbiAgICBAT3V0cHV0KCkgY3JlYXRlOiBFdmVudEVtaXR0ZXI8Vm90ZT47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnYWRkVm90ZU1vZGFsJylcclxuICAgIGFkZFZvdGVNb2RhbDpNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBASW5wdXQoKSBjdXJyZW50VXNlcjpVc2VyO1xyXG5cclxuICAgIGNyZWF0aW5nRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgcXVlc3Rpb246IENvbnRyb2w7XHJcbiAgICBzdWJtaXRBdHRlbXB0OiBib29sZWFuO1xyXG4gICAgb3B0aW9uSW5wdXRTdHI6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uSW5wdXRTdHI6IHN0cmluZztcclxuICAgIGVuZFRpbWVTdHI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPFZvdGU+KCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25BcnIgPSBbXTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpbmdGb3JtID0gYnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9uSW5wdXRTdHI9XCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRWb3RlTW9kYWwuc2hvdygpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBZGRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWRkTW9kYWwoKTtcclxuICAgICAgICB0aGlzLmFkZFZvdGVNb2RhbC5oaWRlKCk7IFxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWRkTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcHRpb25BcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZFRpbWVTdHIgPSAnJztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uSW5wdXRTdHIgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbklucHV0U3RyPScnO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9wdGlvbihkZXNjcmlwdGlvbjpzdHJpbmcpOnZvaWQge1xyXG4gICAgICAgIGxldCBvcHQgPSBuZXcgT3B0aW9uKCk7XHJcbiAgICAgICAgb3B0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgb3B0LnVzZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5vcHRpb25BcnIucHVzaChvcHQpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uSW5wdXRTdHI9XCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTdWJtaXRBdHRlbXB0KCl7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVZvdGluZygpOnZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucXVlc3Rpb24udmFsaWQgJiYgdGhpcy5pc09wdGlvbkFyclNpemVDb3JyZWN0KCkgJiYgdGhpcy5pc0VuZFRpbWVDb3JyZWN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUuZW1pdCh0aGlzLmNyZWF0ZVZvdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZGRNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWb3RlKCk6Vm90ZSB7XHJcbiAgICAgICAgbGV0IHZvdGUgPSBuZXcgVm90ZSgpO1xyXG4gICAgICAgIHZvdGUuZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXN0aW9uSW5wdXRTdHI7XHJcbiAgICAgICAgdm90ZS5vcHRpb25zID0gdGhpcy5vcHRpb25BcnI7XHJcbiAgICAgICAgdm90ZS5hdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHZvdGUudXNlcnNJZCA9IFtdO1xyXG4gICAgICAgIHZvdGUuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2b3RlLmVuZFRpbWUgPSAgdGhpcy5jYXN0RW5kVGltZVN0cmluZ1RvRGF0ZSgpO1xyXG4gICAgICAgIHZvdGUudXNlciA9IHRoaXMuY3VycmVudFVzZXI7XHJcbiAgICAgICAgcmV0dXJuIHZvdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzdEVuZFRpbWVTdHJpbmdUb0RhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudCh0aGlzLmVuZFRpbWVTdHIpLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW5kVGltZUNvcnJlY3QoKTpib29sZWFuIHtcclxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5jYXN0RW5kVGltZVN0cmluZ1RvRGF0ZSgpLnZhbHVlT2YoKSAtIHN0YXJ0VGltZS52YWx1ZU9mKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcyA+IDAgfHwgcmVzPT09TmFOID8gdHJ1ZTogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcHRpb25JbnB1dEVtcHR5KCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uSW5wdXRTdHIubGVuZ3RoID09IDAgPyB0cnVlOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wdGlvbkFyclNpemVDb3JyZWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkFyci5sZW5ndGggPj0gMj8gdHJ1ZTogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlT3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25BcnIuc3BsaWNlKHRoaXMub3B0aW9uQXJyLmluZGV4T2Yob3B0aW9uKSwxKTtcclxuICAgIH1cclxufSJdfQ==
