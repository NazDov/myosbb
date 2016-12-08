System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "ng2-translate", "../../../../shared/pipes/capitalize-first-letter"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_translate_1, capitalize_first_letter_1;
    var VoteCloseFormComponent;
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
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            }],
        execute: function() {
            VoteCloseFormComponent = (function () {
                function VoteCloseFormComponent() {
                    this.close = new core_1.EventEmitter();
                }
                VoteCloseFormComponent.prototype.openCloseModal = function (vote) {
                    this.vote = vote;
                    this.closeModal.show();
                };
                VoteCloseFormComponent.prototype.getEndTime = function () {
                    var time;
                    if (this.vote !== undefined) {
                        time = this.vote.endTime;
                    }
                    return new Date(time).toLocaleString();
                };
                VoteCloseFormComponent.prototype.closeVote = function () {
                    this.close.emit(this.vote);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VoteCloseFormComponent.prototype, "close", void 0);
                __decorate([
                    core_1.ViewChild('closeModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], VoteCloseFormComponent.prototype, "closeModal", void 0);
                VoteCloseFormComponent = __decorate([
                    core_1.Component({
                        selector: 'vote-close-form',
                        templateUrl: './src/app/home/voting/vote_form/vote-close-form.html',
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteCloseFormComponent);
                return VoteCloseFormComponent;
            }());
            exports_1("VoteCloseFormComponent", VoteCloseFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3ZvdGluZy92b3RlX2Zvcm0vdm90ZS1jbG9zZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQVlJO29CQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7Z0JBQzFDLENBQUM7Z0JBTkQsK0NBQWMsR0FBZCxVQUFlLElBQVM7b0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUtELDJDQUFVLEdBQVY7b0JBQ0ksSUFBSSxJQUFJLENBQUM7b0JBQ1QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzdCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQyxDQUFDO2dCQUVGLDBDQUFTLEdBQVQ7b0JBQ0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQXhCRDtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQUdUO29CQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzswRUFBQTtnQkFaNUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsc0RBQXNEO3dCQUNuRSxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBRSx3QkFBZSxDQUFDO3dCQUM5QyxhQUFhLEVBQUUsQ0FBQyxpQ0FBaUIsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLENBQUMsNkJBQWEsRUFBRSxtREFBeUIsQ0FBQztxQkFDcEQsQ0FBQzs7MENBQUE7Z0JBNEJGLDZCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCwyREEyQkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdm90aW5nL3ZvdGVfZm9ybS92b3RlLWNsb3NlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTLCBNb2RhbERpcmVjdGl2ZX0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5cclxuaW1wb3J0IHtWb3RlfSBmcm9tIFwiLi4vdm90ZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2b3RlLWNsb3NlLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvaG9tZS92b3Rpbmcvdm90ZV9mb3JtL3ZvdGUtY2xvc2UtZm9ybS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU10sXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbQlNfVklFV19QUk9WSURFUlNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVm90ZUNsb3NlRm9ybUNvbXBvbmVudCB7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8Vm90ZT47XHJcbiAgICBwcml2YXRlIHZvdGU6IFZvdGU7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnY2xvc2VNb2RhbCcpXHJcbiAgICBjbG9zZU1vZGFsOk1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIG9wZW5DbG9zZU1vZGFsKHZvdGU6Vm90ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudm90ZSA9IHZvdGU7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsLnNob3coKTsgICBcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFZvdGU+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kVGltZSgpOnN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRpbWU7XHJcbiAgICAgICAgaWYodGhpcy52b3RlICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLnZvdGUuZW5kVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICBjbG9zZVZvdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMudm90ZSk7XHJcbiAgICB9XHJcbn0iXX0=
