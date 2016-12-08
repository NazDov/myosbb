System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var GoogleplaceDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            GoogleplaceDirective = (function () {
                function GoogleplaceDirective(el, model) {
                    var _this = this;
                    this.model = model;
                    this.setAddress = new core_1.EventEmitter();
                    this._el = el.nativeElement;
                    this.modelValue = this.model;
                    var input = this._el;
                    this.autocomplete = new google.maps.places.Autocomplete(input, {});
                    google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
                        var place = _this.autocomplete.getPlace();
                        _this.invokeEvent(place);
                    });
                }
                GoogleplaceDirective.prototype.invokeEvent = function (place) {
                    this.setAddress.emit(place);
                };
                GoogleplaceDirective.prototype.onInputChange = function () {
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], GoogleplaceDirective.prototype, "setAddress", void 0);
                GoogleplaceDirective = __decorate([
                    core_1.Directive({
                        selector: '[googleplace]',
                        providers: [common_1.NgModel],
                        host: {
                            '(input)': 'onInputChange()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, common_1.NgModel])
                ], GoogleplaceDirective);
                return GoogleplaceDirective;
            }());
            exports_1("GoogleplaceDirective", GoogleplaceDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uX3VzZXIvZ29vZ2xlcGxhY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBT0UsOEJBQVksRUFBYyxFQUFTLEtBQWE7b0JBUGxELGlCQXlCQztvQkFsQm9DLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBTnRDLGVBQVUsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBTzNELElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFO3dCQUNoRSxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN6QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFZO29CQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFHRCw0Q0FBYSxHQUFiO2dCQUNBLENBQUM7Z0JBdkJEO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBUlg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsU0FBUyxFQUFFLENBQUMsZ0JBQU8sQ0FBQzt3QkFDcEIsSUFBSSxFQUFFOzRCQUNKLFNBQVMsRUFBRyxpQkFBaUI7eUJBQzlCO3FCQUNGLENBQUM7O3dDQUFBO2dCQTBCRiwyQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQsdURBeUJDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uX3VzZXIvZ29vZ2xlcGxhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZGVjbGFyZSB2YXIgZ29vZ2xlOmFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dvb2dsZXBsYWNlXScsXHJcbiAgcHJvdmlkZXJzOiBbTmdNb2RlbF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyhpbnB1dCknIDogJ29uSW5wdXRDaGFuZ2UoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVwbGFjZURpcmVjdGl2ZSAge1xyXG4gIEBPdXRwdXQoKSBzZXRBZGRyZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBtb2RlbFZhbHVlOmFueTtcclxuICBhdXRvY29tcGxldGU6YW55O1xyXG4gIHByaXZhdGUgX2VsOkhUTUxFbGVtZW50O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYscHJpdmF0ZSBtb2RlbDpOZ01vZGVsKSB7XHJcbiAgICB0aGlzLl9lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLm1vZGVsVmFsdWUgPSB0aGlzLm1vZGVsO1xyXG4gICAgdmFyIGlucHV0ID0gdGhpcy5fZWw7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0LCB7fSk7XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLmF1dG9jb21wbGV0ZSwgJ3BsYWNlX2NoYW5nZWQnLCAoKT0+IHtcclxuICAgICAgdmFyIHBsYWNlID0gdGhpcy5hdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgICAgdGhpcy5pbnZva2VFdmVudChwbGFjZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludm9rZUV2ZW50KHBsYWNlOk9iamVjdCkge1xyXG4gICAgdGhpcy5zZXRBZGRyZXNzLmVtaXQocGxhY2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UoKSB7XHJcbiAgfVxyXG59Il19
