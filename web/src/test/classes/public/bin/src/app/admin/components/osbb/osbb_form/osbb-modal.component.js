System.register(['@angular/core', '@angular/common', 'ng2-bootstrap/ng2-bootstrap', "ng2-translate", "../../../../../shared/pipes/capitalize-first-letter", "../../../../../shared/models/osbb", '../osbb'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, ng2_translate_1, capitalize_first_letter_1, osbb_1, osbb_2;
    var OsbbModalComponent;
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
            },
            function (osbb_1_1) {
                osbb_1 = osbb_1_1;
            },
            function (osbb_2_1) {
                osbb_2 = osbb_2_1;
            }],
        execute: function() {
            OsbbModalComponent = (function () {
                function OsbbModalComponent(builder, element) {
                    this.builder = builder;
                    this.element = element;
                    this.submitAttempt = false;
                    this.osbbDTO = new osbb_2.OsbbDTO();
                    this.created = new core_1.EventEmitter();
                    this.update = new core_1.EventEmitter();
                    this.nameControl = new common_1.Control('', common_1.Validators.required);
                    this.descriptionControl = new common_1.Control('', common_1.Validators.required);
                    this.addressControl = new common_1.Control('', common_1.Validators.required);
                    this.districtControl = new common_1.Control('', common_1.Validators.required);
                    this.creatingForm = builder.group({
                        nameControl: this.nameControl,
                        descriptionControl: this.descriptionControl,
                        addressControl: this.addressControl,
                        districtControl: this.districtControl,
                    });
                }
                OsbbModalComponent.prototype.ngOnInit = function () {
                    if (this.osbb === undefined) {
                        this.osbb = new osbb_1.Osbb();
                    }
                };
                OsbbModalComponent.prototype.showLogo = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        image.src = src;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                };
                OsbbModalComponent.prototype.openAddModal = function () {
                    this.logoUrl = null;
                    this.isEditing = false;
                    this.modalWindow.show();
                };
                OsbbModalComponent.prototype.openEditModal = function (osbb) {
                    this.isEditing = true;
                    this.osbb = osbb;
                    this.name = osbb.name;
                    this.description = osbb.description;
                    this.address = osbb.address;
                    this.district = osbb.district;
                    this.available = osbb.available;
                    if (osbb.logo !== null) {
                        this.logoUrl = osbb.logo.url;
                    }
                    else {
                        this.logoUrl = '';
                    }
                    this.modalWindow.show();
                };
                OsbbModalComponent.prototype.saveButtonAction = function (fileInput) {
                    this.submitAttempt = true;
                    if (this.nameControl.valid && this.descriptionControl.valid
                        && this.addressControl.valid && this.districtControl.valid) {
                        var fileList = fileInput.files;
                        if (this.osbbDTO.isChanged) {
                            console.log("file was changed");
                            this.osbbDTO.file = fileList.item(0);
                        }
                        if (this.isEditing) {
                            console.log("isEditing");
                            this.editOsbb();
                            this.osbbDTO.osbb = this.osbb;
                            this.update.emit(this.osbbDTO);
                        }
                        else {
                            this.osbbDTO.osbb = this.createOsbb();
                            this.created.emit(this.osbbDTO);
                        }
                        this.modalWindow.hide();
                        this.clearForm();
                    }
                };
                OsbbModalComponent.prototype.createOsbb = function () {
                    var osbb = new osbb_1.Osbb();
                    osbb.name = this.name;
                    osbb.description = this.description;
                    osbb.address = this.address;
                    osbb.district = this.district;
                    osbb.creationDate = new Date();
                    return osbb;
                };
                OsbbModalComponent.prototype.toggleChangeLogo = function () {
                    this.osbbDTO.isChanged = true;
                };
                OsbbModalComponent.prototype.editOsbb = function () {
                    this.osbb.name = this.name;
                    this.osbb.description = this.description;
                    this.osbb.address = this.address;
                    this.osbb.district = this.district;
                    this.osbb.available = this.available;
                };
                OsbbModalComponent.prototype.clearForm = function () {
                    this.name = '';
                    this.description = '';
                    this.address = '';
                    this.district = '';
                    this.inputLogo.nativeElement.value = '';
                    this.logoUrl = '';
                    this.submitAttempt = false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], OsbbModalComponent.prototype, "created", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], OsbbModalComponent.prototype, "update", void 0);
                __decorate([
                    core_1.ViewChild('modalWindow'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], OsbbModalComponent.prototype, "modalWindow", void 0);
                __decorate([
                    core_1.ViewChild('inputLogo'), 
                    __metadata('design:type', Object)
                ], OsbbModalComponent.prototype, "inputLogo", void 0);
                OsbbModalComponent = __decorate([
                    core_1.Component({
                        selector: 'osbb-modal',
                        templateUrl: './src/app/admin/components/osbb/osbb_form/osbb-modal.html',
                        styleUrls: ['./src/app/admin/components/osbb/osbb_form/osbb-modal.css', './src/shared/css/general.css'],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, core_1.ElementRef])
                ], OsbbModalComponent);
                return OsbbModalComponent;
            }());
            exports_1("OsbbModalComponent", OsbbModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYl9mb3JtL29zYmItbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQTRCSyw0QkFBb0IsT0FBb0IsRUFBVSxPQUFtQjtvQkFBakQsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO29CQVB0RSxrQkFBYSxHQUFXLEtBQUssQ0FBQztvQkFRMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO29CQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO29CQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzlCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDN0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjt3QkFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO3dCQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7cUJBQ3hDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVBLHFDQUFRLEdBQVI7b0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO3dCQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBSztvQkFDVixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO29CQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9ELE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDO3dCQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ3BCLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRUQseUNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUEsMENBQWEsR0FBYixVQUFjLElBQVU7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDakMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDZDQUFnQixHQUFoQixVQUFpQixTQUFhO29CQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7MkJBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDakYsSUFBSSxRQUFRLEdBQWEsU0FBUyxDQUFDLEtBQUssQ0FBQzt3QkFDekMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7NEJBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVuQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxDQUFDO3dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDckIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHVDQUFVLEdBQVY7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsNkNBQWdCLEdBQWhCO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUNPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUEsc0NBQVMsR0FBVDtvQkFDRyxJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBdElEO29CQUFDLGFBQU0sRUFBRTs7bUVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFFVDtvQkFBQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7dUVBQUE7Z0JBR3pCO29CQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztxRUFBQTtnQkFoQjNCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSwyREFBMkQ7d0JBQ3hFLFNBQVMsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLDhCQUE4QixDQUFDO3dCQUN2RyxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBRSx3QkFBZSxFQUFFLHdCQUFlLENBQUM7d0JBQy9ELGFBQWEsRUFBRSxDQUFDLGlDQUFpQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3FCQUNwRCxDQUFDOztzQ0FBQTtnQkEwSUYseUJBQUM7WUFBRCxDQXpJQSxBQXlJQyxJQUFBO1lBeklELG1EQXlJQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vc2JiL29zYmJfZm9ybS9vc2JiLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIENvbnRyb2wsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTLCBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQgeyBJT3NiYiwgT3NiYiB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL29zYmJcIjtcclxuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2F0dGFjaG1lbnRcIjtcclxuaW1wb3J0IHsgT3NiYkRUTyB9IGZyb20gJy4uL29zYmInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29zYmItbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vc2JiL29zYmJfZm9ybS9vc2JiLW1vZGFsLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL29zYmIvb3NiYl9mb3JtL29zYmItbW9kYWwuY3NzJywgJy4vc3JjL3NoYXJlZC9jc3MvZ2VuZXJhbC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtCU19WSUVXX1BST1ZJREVSU10sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPc2JiTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgQE91dHB1dCgpIGNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxPc2JiRFRPPjtcclxuICAgIEBPdXRwdXQoKSB1cGRhdGU6IEV2ZW50RW1pdHRlcjxPc2JiRFRPPjtcclxuICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnbW9kYWxXaW5kb3cnKVxyXG4gICAgbW9kYWxXaW5kb3c6TW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaW5wdXRMb2dvJykgXHJcbiAgICBpbnB1dExvZ286IGFueTtcclxuXHJcbiAgICBvc2JiRFRPOiBPc2JiRFRPO1xyXG4gICAgb3NiYjpJT3NiYjtcclxuICAgIGlzRWRpdGluZzpib29sZWFuO1xyXG4gICAgbG9nb1VybDpzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgZGlzdHJpY3Q6IHN0cmluZztcclxuICAgIGF2YWlsYWJsZTogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgc3VibWl0QXR0ZW1wdDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBjcmVhdGluZ0Zvcm06IENvbnRyb2xHcm91cDtcclxuICAgIG5hbWVDb250cm9sOiBDb250cm9sO1xyXG4gICAgZGVzY3JpcHRpb25Db250cm9sOiBDb250cm9sO1xyXG4gICAgYWRkcmVzc0NvbnRyb2w6IENvbnRyb2w7XHJcbiAgICBkaXN0cmljdENvbnRyb2w6IENvbnRyb2w7XHJcblxyXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMub3NiYkRUTyA9IG5ldyBPc2JiRFRPKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxPc2JiRFRPPigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxPc2JiRFRPPigpO1xyXG4gICAgICAgIHRoaXMubmFtZUNvbnRyb2wgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkNvbnRyb2wgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzQ29udHJvbCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICB0aGlzLmRpc3RyaWN0Q29udHJvbCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW5nRm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lQ29udHJvbDogdGhpcy5uYW1lQ29udHJvbCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25Db250cm9sOiB0aGlzLmRlc2NyaXB0aW9uQ29udHJvbCxcclxuICAgICAgICAgICAgYWRkcmVzc0NvbnRyb2w6IHRoaXMuYWRkcmVzc0NvbnRyb2wsXHJcbiAgICAgICAgICAgIGRpc3RyaWN0Q29udHJvbDogdGhpcy5kaXN0cmljdENvbnRyb2wsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmKHRoaXMub3NiYiA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5vc2JiID0gbmV3IE9zYmIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvZ28oZXZlbnQpIHtcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UnKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5BZGRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmxvZ29VcmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbmRvdy5zaG93KCk7ICBcclxuICAgIH1cclxuXHJcbiAgICAgb3BlbkVkaXRNb2RhbChvc2JiOklPc2JiKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3NiYiA9IG9zYmI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3NiYi5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBvc2JiLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IG9zYmIuYWRkcmVzcztcclxuICAgICAgICB0aGlzLmRpc3RyaWN0ID0gb3NiYi5kaXN0cmljdDtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZSA9IG9zYmIuYXZhaWxhYmxlO1xyXG4gICAgICAgIGlmKG9zYmIubG9nbyAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dvVXJsID0gb3NiYi5sb2dvLnVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgdGhpcy5sb2dvVXJsID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kYWxXaW5kb3cuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzYXZlQnV0dG9uQWN0aW9uKGZpbGVJbnB1dDphbnkpOnZvaWQge1xyXG4gICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xyXG4gICAgICAgICBpZih0aGlzLm5hbWVDb250cm9sLnZhbGlkICYmIHRoaXMuZGVzY3JpcHRpb25Db250cm9sLnZhbGlkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYWRkcmVzc0NvbnRyb2wudmFsaWQgJiYgdGhpcy5kaXN0cmljdENvbnRyb2wudmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGZpbGVJbnB1dC5maWxlcztcclxuICAgICAgICAgICAgaWYodGhpcy5vc2JiRFRPLmlzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlIHdhcyBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMub3NiYkRUTy5maWxlID0gIGZpbGVMaXN0Lml0ZW0oMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5pc0VkaXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNFZGl0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0T3NiYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vc2JiRFRPLm9zYmIgPSB0aGlzLm9zYmI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMub3NiYkRUTyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vc2JiRFRPLm9zYmIgPSB0aGlzLmNyZWF0ZU9zYmIoKTtcclxuICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkLmVtaXQodGhpcy5vc2JiRFRPKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsV2luZG93LmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT3NiYigpOklPc2JiIHtcclxuICAgICAgICBsZXQgb3NiYiA9IG5ldyBPc2JiKCk7XHJcbiAgICAgICAgb3NiYi5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIG9zYmIuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIG9zYmIuYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcclxuICAgICAgICBvc2JiLmRpc3RyaWN0ID0gdGhpcy5kaXN0cmljdDtcclxuICAgICAgICBvc2JiLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7ICAgXHJcbiAgICAgICAgcmV0dXJuIG9zYmI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ2hhbmdlTG9nbygpIHtcclxuICAgICAgICB0aGlzLm9zYmJEVE8uaXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0T3NiYigpOiB2b2lkIHtcclxuICAgICAgICAgICB0aGlzLm9zYmIubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICB0aGlzLm9zYmIuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgIHRoaXMub3NiYi5hZGRyZXNzID0gdGhpcy5hZGRyZXNzO1xyXG4gICAgICAgICAgIHRoaXMub3NiYi5kaXN0cmljdCA9IHRoaXMuZGlzdHJpY3Q7XHJcbiAgICAgICAgICAgdGhpcy5vc2JiLmF2YWlsYWJsZSA9IHRoaXMuYXZhaWxhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgICBjbGVhckZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYW1lPScnO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249Jyc7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzPScnO1xyXG4gICAgICAgIHRoaXMuZGlzdHJpY3Q9Jyc7XHJcbiAgICAgICAgdGhpcy5pbnB1dExvZ28ubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubG9nb1VybD0nJztcclxuICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=
