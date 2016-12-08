System.register(["@angular/core", "@angular/common", "ng2-charts/ng2-charts", "./bill.chart.service.component", "ng2-translate", "../../../../shared/pipes/capitalize-first-letter", "ng2-select", "../bill.service"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_charts_1, bill_chart_service_component_1, ng2_translate_1, capitalize_first_letter_1, ng2_select_1, bill_service_1;
    var BillChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_charts_1_1) {
                ng2_charts_1 = ng2_charts_1_1;
            },
            function (bill_chart_service_component_1_1) {
                bill_chart_service_component_1 = bill_chart_service_component_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (bill_service_1_1) {
                bill_service_1 = bill_service_1_1;
            }],
        execute: function() {
            BillChartComponent = (function () {
                function BillChartComponent(_billChartService, _billService) {
                    this._billChartService = _billChartService;
                    this._billService = _billService;
                    this.percentageChartData = { totalPercentagePaid: 0, totalPercentageDebt: 0 };
                    this.showPercentageChartLabels = ['% оплачених', '% заборгованих'];
                    this.showPercentageChartData = [];
                    this.percentageChartType = 'pie';
                    this.barChartType = 'bar';
                    this.barChartLegend = true;
                    this.years = [];
                    this.bills = [];
                    this.barChartData = { years: null, innerBarChart: null };
                    this.showBarChartLabels = [];
                    this.showBarChartData = [
                        { data: [], label: this.showPercentageChartLabels[0] },
                        { data: [], label: this.showPercentageChartLabels[1] }
                    ];
                    this.barChartOptions = {
                        scaleShowVerticalLines: false,
                        responsive: true
                    };
                    this.currentYear = new Date().getFullYear();
                    console.log('todays date ' + this.currentYear);
                }
                BillChartComponent.prototype.fetchBarChartData = function () {
                    var _this = this;
                    this._billChartService.getBarChartData(this.currentYear)
                        .subscribe(function (data) {
                        _this.barChartData = data;
                        console.log('bill chart data: ' + JSON.stringify(_this.barChartData));
                        _this.years = data.years;
                        _this.showBarChartLabels = _this.fillInBarChartLabels(_this.barChartData.innerBarChart);
                        _this.showBarChartData[0].data = _this.fillInPaidBillData(_this.barChartData.innerBarChart);
                        _this.showBarChartData[1].data = _this.fillInUnPaidBillData(_this.barChartData.innerBarChart);
                    }, function (error) {
                        console.log(error);
                    });
                };
                BillChartComponent.prototype.refreshBillChartData = function () {
                    this.fetchPieBillChartData();
                };
                BillChartComponent.prototype.ngOnInit = function () {
                    this.fetchBarChartData();
                    this.fetchPieBillChartData();
                };
                BillChartComponent.prototype.fetchPieBillChartData = function () {
                    var _this = this;
                    this._billChartService.getPercentageChartData()
                        .subscribe(function (data) {
                        console.log('received: ', JSON.stringify(data));
                        _this.percentageChartData = data;
                        _this.showPercentageChartData = _this.fillPieChartData();
                    }, function (error) {
                        console.log(error);
                    });
                };
                BillChartComponent.prototype.fillPieChartData = function () {
                    var tempArr = [];
                    tempArr.push(this.percentageChartData.totalPercentagePaid);
                    tempArr.push(this.percentageChartData.totalPercentageDebt);
                    return tempArr;
                };
                BillChartComponent.prototype.chartPieClicked = function (e) {
                    console.log(e);
                };
                BillChartComponent.prototype.chartPieHovered = function (e) {
                    console.log(e);
                };
                BillChartComponent.prototype.chartBarClicked = function (e) {
                    console.log(e);
                    this.fetchBarChartData();
                };
                BillChartComponent.prototype.chartBarHovered = function (e) {
                    console.log(e);
                };
                BillChartComponent.prototype.refreshYear = function (value) {
                };
                BillChartComponent.prototype.selectByYear = function (value) {
                    console.log('select year: ' + value.text);
                    this.currentYear = +value.id;
                    this.fetchBarChartData();
                };
                BillChartComponent.prototype.fillInBarChartLabels = function (innerBarCharts) {
                    var monthsData = [];
                    for (var _i = 0, innerBarCharts_1 = innerBarCharts; _i < innerBarCharts_1.length; _i++) {
                        var _barChart = innerBarCharts_1[_i];
                        monthsData.push(_barChart.month);
                    }
                    return monthsData;
                };
                BillChartComponent.prototype.fillInPaidBillData = function (innerBarChart) {
                    var tempBarChartData = [];
                    for (var _i = 0, innerBarChart_1 = innerBarChart; _i < innerBarChart_1.length; _i++) {
                        var _barChart = innerBarChart_1[_i];
                        tempBarChartData.push(_barChart.totalPaid);
                    }
                    return tempBarChartData;
                };
                BillChartComponent.prototype.fillInUnPaidBillData = function (innerBarChart) {
                    var tempBarChartData = [];
                    for (var _i = 0, innerBarChart_2 = innerBarChart; _i < innerBarChart_2.length; _i++) {
                        var _barChart = innerBarChart_2[_i];
                        tempBarChartData.push(_barChart.totalUnPaid);
                    }
                    return tempBarChartData;
                };
                BillChartComponent = __decorate([
                    core_1.Component({
                        selector: 'bill-chart',
                        templateUrl: 'src/app/user/bills/chart/bill.chart.html',
                        providers: [bill_chart_service_component_1.BillChartService, bill_service_1.BillService],
                        directives: [common_1.CORE_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_charts_1.CHART_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        inputs: ['bills']
                    }), 
                    __metadata('design:paramtypes', [bill_chart_service_component_1.BillChartService, bill_service_1.BillService])
                ], BillChartComponent);
                return BillChartComponent;
            }());
            exports_1("BillChartComponent", BillChartComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2JpbGxzL2NoYXJ0L2JpbGwuY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQXVCSSw0QkFBb0IsaUJBQW1DLEVBQ25DLFlBQXlCO29CQUR6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkF2QnRDLHdCQUFtQixHQUF3QixFQUFDLG1CQUFtQixFQUFFLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDNUYsOEJBQXlCLEdBQWEsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDeEUsNEJBQXVCLEdBQWEsRUFBRSxDQUFDO29CQUN2Qyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7b0JBQzVCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO29CQUM3QixtQkFBYyxHQUFZLElBQUksQ0FBQztvQkFDOUIsVUFBSyxHQUFrQixFQUFFLENBQUM7b0JBQzFCLFVBQUssR0FBZSxFQUFFLENBQUM7b0JBRXhCLGlCQUFZLEdBQWlCLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQ2hFLHVCQUFrQixHQUFhLEVBQUUsQ0FBQztvQkFDbEMscUJBQWdCLEdBQVU7d0JBQzdCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxFQUFDO3dCQUNwRCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBQztxQkFDdkQsQ0FBQztvQkFHSyxvQkFBZSxHQUFRO3dCQUMxQixzQkFBc0IsRUFBRSxLQUFLO3dCQUM3QixVQUFVLEVBQUUsSUFBSTtxQkFDbkIsQ0FBQztvQkFJRSxJ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QUNuRCxJQUFJLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztvQkFDcEMsR0FBRyxDQUFDLENBQWtCLFVBQWEsRUFBYiwrQkFBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxDQUFDO3dCQUEvQixJQUFJLFNBQVMsc0JBQUE7d0JBQ2QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDaEQ7b0JBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM1QixDQUFDO2dCQWpJTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsMENBQTBDO3dCQUN2RCxTQUFTLEVBQUUsQ0FBQywrQ0FBZ0IsRUFBRSwwQkFBVyxDQUFDO3dCQUMxQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDhCQUFpQixFQUFFLHdCQUFlLEVBQUUsNkJBQWdCLENBQUM7d0JBQ25GLEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7d0JBQ2pELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztxQkFDcEIsQ0FBQzs7c0NBQUE7Z0JBMkhGLHlCQUFDO1lBQUQsQ0ExSEEsQUEwSEMsSUFBQTtZQTFIRCxtREEwSEMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYmlsbHMvY2hhcnQvYmlsbC5jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1jaGFydHMvbmcyLWNoYXJ0c1wiO1xyXG5pbXBvcnQge1BlcmNlbnRhZ2VDaGFydERhdGEsIEJhckNoYXJ0RGF0YSwgSUJhckNoYXJ0fSBmcm9tIFwiLi9jaGFydC5kYXRhLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge0JpbGxDaGFydFNlcnZpY2V9IGZyb20gXCIuL2JpbGwuY2hhcnQuc2VydmljZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1zZWxlY3RcIjtcclxuaW1wb3J0IHtCaWxsU2VydmljZX0gZnJvbSBcIi4uL2JpbGwuc2VydmljZVwiO1xyXG5pbXBvcnQge0JpbGxEVE99IGZyb20gXCIuLi9zaG93X2JpbGxfZHRvLmludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2JpbGwtY2hhcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvYXBwL3VzZXIvYmlsbHMvY2hhcnQvYmlsbC5jaGFydC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0JpbGxDaGFydFNlcnZpY2UsIEJpbGxTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFNFTEVDVF9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIENIQVJUX0RJUkVDVElWRVNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIGlucHV0czogWydiaWxscyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaWxsQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHBlcmNlbnRhZ2VDaGFydERhdGE6IFBlcmNlbnRhZ2VDaGFydERhdGEgPSB7dG90YWxQZXJjZW50YWdlUGFpZDogMCwgdG90YWxQZXJjZW50YWdlRGVidDogMH07XHJcbiAgICBwdWJsaWMgc2hvd1BlcmNlbnRhZ2VDaGFydExhYmVsczogc3RyaW5nW10gPSBbJyUg0L7Qv9C70LDRh9C10L3QuNGFJywgJyUg0LfQsNCx0L7RgNCz0L7QstCw0L3QuNGFJ107XHJcbiAgICBwdWJsaWMgc2hvd1BlcmNlbnRhZ2VDaGFydERhdGE6IG51bWJlcltdID0gW107XHJcbiAgICBwdWJsaWMgcGVyY2VudGFnZUNoYXJ0VHlwZSA9ICdwaWUnO1xyXG4gICAgcHVibGljIGJhckNoYXJ0VHlwZTogc3RyaW5nID0gJ2Jhcic7XHJcbiAgICBwdWJsaWMgYmFyQ2hhcnRMZWdlbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSB5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiaWxsczogQmlsbERUTyBbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBiYXJDaGFydERhdGE6IEJhckNoYXJ0RGF0YSA9IHt5ZWFyczogbnVsbCwgaW5uZXJCYXJDaGFydDogbnVsbH07XHJcbiAgICBwdWJsaWMgc2hvd0JhckNoYXJ0TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIHNob3dCYXJDaGFydERhdGE6IGFueVtdID0gW1xyXG4gICAgICAgIHtkYXRhOiBbXSwgbGFiZWw6IHRoaXMuc2hvd1BlcmNlbnRhZ2VDaGFydExhYmVsc1swXX0sXHJcbiAgICAgICAge2RhdGE6IFtdLCBsYWJlbDogdGhpcy5zaG93UGVyY2VudGFnZUNoYXJ0TGFiZWxzWzFdfVxyXG4gICAgXTtcclxuICAgIHByaXZhdGUgY3VycmVudFllYXI6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgYmFyQ2hhcnRPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgc2NhbGVTaG93VmVydGljYWxMaW5lczogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9iaWxsQ2hhcnRTZXJ2aWNlOiBCaWxsQ2hhcnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYmlsbFNlcnZpY2U6IEJpbGxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndG9kYXlzIGRhdGUgJyArIHRoaXMuY3VycmVudFllYXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZldGNoQmFyQ2hhcnREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuX2JpbGxDaGFydFNlcnZpY2UuZ2V0QmFyQ2hhcnREYXRhKHRoaXMuY3VycmVudFllYXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyQ2hhcnREYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmlsbCBjaGFydCBkYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5iYXJDaGFydERhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJzID0gZGF0YS55ZWFycztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCYXJDaGFydExhYmVscyA9IHRoaXMuZmlsbEluQmFyQ2hhcnRMYWJlbHModGhpcy5iYXJDaGFydERhdGEuaW5uZXJCYXJDaGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QmFyQ2hhcnREYXRhWzBdLmRhdGEgPSB0aGlzLmZpbGxJblBhaWRCaWxsRGF0YSh0aGlzLmJhckNoYXJ0RGF0YS5pbm5lckJhckNoYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCYXJDaGFydERhdGFbMV0uZGF0YSA9IHRoaXMuZmlsbEluVW5QYWlkQmlsbERhdGEodGhpcy5iYXJDaGFydERhdGEuaW5uZXJCYXJDaGFydCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaEJpbGxDaGFydERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaFBpZUJpbGxDaGFydERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hCYXJDaGFydERhdGEoKTtcclxuICAgICAgICB0aGlzLmZldGNoUGllQmlsbENoYXJ0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmV0Y2hQaWVCaWxsQ2hhcnREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuX2JpbGxDaGFydFNlcnZpY2UuZ2V0UGVyY2VudGFnZUNoYXJ0RGF0YSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZUNoYXJ0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGVyY2VudGFnZUNoYXJ0RGF0YSA9IHRoaXMuZmlsbFBpZUNoYXJ0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFBpZUNoYXJ0RGF0YSgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnIgPSBbXTtcclxuICAgICAgICB0ZW1wQXJyLnB1c2godGhpcy5wZXJjZW50YWdlQ2hhcnREYXRhLnRvdGFsUGVyY2VudGFnZVBhaWQpO1xyXG4gICAgICAgIHRlbXBBcnIucHVzaCh0aGlzLnBlcmNlbnRhZ2VDaGFydERhdGEudG90YWxQZXJjZW50YWdlRGVidCk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYXJ0UGllQ2xpY2tlZChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhcnRQaWVIb3ZlcmVkKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFydEJhckNsaWNrZWQoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgdGhpcy5mZXRjaEJhckNoYXJ0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFydEJhckhvdmVyZWQoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoWWVhcih2YWx1ZTogYW55KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEJ5WWVhcih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCB5ZWFyOiAnICsgdmFsdWUudGV4dCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9ICt2YWx1ZS5pZDtcclxuICAgICAgICB0aGlzLmZldGNoQmFyQ2hhcnREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsSW5CYXJDaGFydExhYmVscyhpbm5lckJhckNoYXJ0czogSUJhckNoYXJ0W10pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1vbnRoc0RhdGEgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBfYmFyQ2hhcnQgb2YgaW5uZXJCYXJDaGFydHMpIHtcclxuICAgICAgICAgICAgbW9udGhzRGF0YS5wdXNoKF9iYXJDaGFydC5tb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb250aHNEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsbEluUGFpZEJpbGxEYXRhKGlubmVyQmFyQ2hhcnQ6IElCYXJDaGFydFtdKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQmFyQ2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9iYXJDaGFydCBvZiBpbm5lckJhckNoYXJ0KSB7XHJcbiAgICAgICAgICAgIHRlbXBCYXJDaGFydERhdGEucHVzaChfYmFyQ2hhcnQudG90YWxQYWlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBCYXJDaGFydERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsSW5VblBhaWRCaWxsRGF0YShpbm5lckJhckNoYXJ0OiBJQmFyQ2hhcnRbXSk6bnVtYmVyW10ge1xyXG4gICAgICAgIGxldCB0ZW1wQmFyQ2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IF9iYXJDaGFydCBvZiBpbm5lckJhckNoYXJ0KSB7XHJcbiAgICAgICAgICAgIHRlbXBCYXJDaGFydERhdGEucHVzaChfYmFyQ2hhcnQudG90YWxVblBhaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcEJhckNoYXJ0RGF0YTtcclxuICAgIH1cclxufSJdfQ==
