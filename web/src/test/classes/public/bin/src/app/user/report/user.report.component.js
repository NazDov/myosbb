System.register(["@angular/core", "@angular/common", "./report.service", "rxjs/Rx", "ng2-bootstrap/ng2-bootstrap", "./report.filter", "@angular/platform-browser", "ng2-select", "ng2-translate", "../../../shared/pipes/capitalize-first-letter", "../../header/header.component", "@angular/forms", "./download/report.downloader.service", '../../../shared/services/regex.all.text'], function(exports_1, context_1) {
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
    var core_1, common_1, report_service_1, ng2_bootstrap_1, report_filter_1, platform_browser_1, ng2_select_1, ng2_translate_1, capitalize_first_letter_1, header_component_1, forms_1, report_downloader_service_1, Regex;
    var UserReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (report_service_1_1) {
                report_service_1 = report_service_1_1;
            },
            function (_1) {},
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (report_filter_1_1) {
                report_filter_1 = report_filter_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (report_downloader_service_1_1) {
                report_downloader_service_1 = report_downloader_service_1_1;
            },
            function (Regex_1) {
                Regex = Regex_1;
            }],
        execute: function() {
            UserReportComponent = (function () {
                function UserReportComponent(_reportService, sanitizer, fileDownloaderService) {
                    this._reportService = _reportService;
                    this.sanitizer = sanitizer;
                    this.fileDownloaderService = fileDownloaderService;
                    this.reports = [];
                    this.selectedReport = {
                        reportId: null,
                        name: '',
                        description: '',
                        creationDate: '',
                        filePath: '',
                        userId: null
                    };
                    this.pageList = [];
                    this.dates = [];
                    this.active = true;
                    this.order = true;
                    this.pending = false;
                    this.onSearch = false;
                    this.rows = [10, 20, 50];
                    this.pageParams = { pageNumber: 1, sortedBy: null, orderType: false, rowNum: 10 };
                    this.currentUser = header_component_1.HeaderComponent.currentUserService.currentUser;
                }
                UserReportComponent.prototype.onClickShowOptional = function () {
                    this.dateToActive = false;
                    this.dateToActive = false;
                    this.searchOptional.show();
                };
                UserReportComponent.prototype.openEditModal = function (report) {
                    this.selectedReport = report;
                    console.log('selected report: ' + this.selectedReport);
                    this.editModal.show();
                };
                UserReportComponent.prototype.isDateValid = function (date) {
                    return /\d{4}-\d{2}-\d{2}/.test(date);
                };
                UserReportComponent.prototype.onEditReportSubmit = function () {
                    var _this = this;
                    console.log('saving report: ' + this.selectedReport);
                    this.editModal.hide();
                    this._reportService.editAndSave(this.selectedReport)
                        .subscribe(function () {
                        _this.refresh();
                    }, function (error) {
                        console.log(error);
                    });
                };
                UserReportComponent.prototype.closeEditModal = function () {
                    var _this = this;
                    this.active = false;
                    console.log('closing edt modal');
                    this.editModal.hide();
                    setTimeout(function () {
                        _this.active = true;
                    }, 0);
                };
                UserReportComponent.prototype.openDelModal = function (id) {
                    this.reportId = id;
                    console.log('show', this.reportId);
                    this.delModal.show();
                };
                UserReportComponent.prototype.closeDelModal = function () {
                    var _this = this;
                    console.log('delete', this.reportId);
                    this.delModal.hide();
                    this._reportService.deleteReportById(this.reportId)
                        .subscribe(function () {
                        _this.refresh();
                    }, function (error) {
                        console.log(error);
                    });
                };
                UserReportComponent.prototype.ngOnInit = function () {
                    console.log('current user: ', this.currentUser.lastName);
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.refresh = function () {
                    console.log('refreshing...');
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.getReportsByPageNum = function () {
                    var _this = this;
                    this.pending = true;
                    return this._reportService.getAllUserReports(this.currentUser.userId, this.pageParams)
                        .subscribe(function (data) {
                        _this.pending = false;
                        _this.pageCreator = data;
                        _this.reports = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                        _this.dates = data.dates;
                    }, function (error) {
                        _this.pending = false;
                        console.error(error);
                    });
                };
                ;
                UserReportComponent.prototype.selectRowNum = function (row) {
                    console.log("get by row number: " + row);
                    this.pageParams.rowNum = row;
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.sanitizeUrlData = function (reports) {
                    var safeUrlReports = [];
                    for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
                        var report = reports_1[_i];
                        report.filePath = this.sanitizer.bypassSecurityTrustUrl(report.filePath).toString();
                        safeUrlReports.push(report);
                    }
                    return safeUrlReports;
                };
                UserReportComponent.prototype.selectByPageNumber = function (num) {
                    this.pageParams.pageNumber = num;
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.prevPage = function () {
                    this.pageParams.pageNumber -= 1;
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.nextPage = function () {
                    this.pageParams.pageNumber += 1;
                    this.getReportsByPageNum();
                };
                UserReportComponent.prototype.emptyArray = function () {
                    while (this.pageList.length) {
                        this.pageList.pop();
                    }
                };
                UserReportComponent.prototype.preparePageList = function (start, end) {
                    this.emptyArray();
                    for (var i = start; i <= end; i++) {
                        this.pageList.push(i);
                    }
                };
                UserReportComponent.prototype.sortBy = function (name) {
                    var _this = this;
                    console.log('sorted by ', name);
                    this.pageParams.orderType = !this.pageParams.orderType;
                    console.log('order by asc', this.order);
                    this.pageParams.sortedBy = name;
                    this._reportService.getAllUserReports(this.currentUser.userId, this.pageParams)
                        .subscribe(function (data) {
                        _this.pageCreator = data;
                        _this.reports = data.rows;
                        _this.preparePageList(+_this.pageCreator.beginPage, +_this.pageCreator.endPage);
                        _this.totalPages = +data.totalPages;
                    }, function (error) {
                        console.error(error);
                    });
                };
                UserReportComponent.prototype.ngOnDestroy = function () {
                    // this.subscriber.unsubscribe();
                };
                UserReportComponent.prototype.getDistinctDates = function () {
                    var distinctDates = [];
                    for (var _i = 0, _a = this.reports; _i < _a.length; _i++) {
                        var report = _a[_i];
                        if (distinctDates.indexOf(report.creationDate) < 0)
                            distinctDates.push(report.creationDate);
                    }
                    return distinctDates;
                };
                UserReportComponent.prototype.refreshDateFrom = function (value) {
                    console.log('date from', value);
                    this.dateFrom = value.text;
                    this.dateFromActive = false;
                };
                UserReportComponent.prototype.selectedDateFrom = function (value) {
                    console.log('selected date from', value);
                    this.dateFromActive = true;
                };
                UserReportComponent.prototype.refreshDateTo = function (value) {
                    console.log('date to', value);
                    this.dateTo = value.text;
                    this.dateToActive = false;
                };
                UserReportComponent.prototype.selectedDateTo = function (value) {
                    console.log('selected date to', value);
                    this.dateToActive = true;
                };
                UserReportComponent.prototype.onClickSearchByDates = function () {
                    var _this = this;
                    this.searchOptional.hide();
                    if (this.dateTo && this.dateFrom) {
                        this._reportService.searchUserReportsByDates(this.currentUser.userId, this.dateFrom, this.dateTo)
                            .subscribe(function (data) {
                            _this.onSearch = true;
                            _this.reports = data;
                            _this.preparePageList(_this.pageParams.pageNumber, _this.pageParams.pageNumber);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                };
                UserReportComponent.prototype.onClickSearchByParam = function (value) {
                    var _this = this;
                    if (value.trim().length && Regex.TEXT.test(value)) {
                        console.log('search by ', value);
                        this._reportService.searchUserReportsByInputParam(this.currentUser.userId, value)
                            .subscribe(function (data) {
                            _this.onSearch = true;
                            _this.reports = data;
                            _this.preparePageList(_this.pageParams.pageNumber, _this.pageParams.pageNumber);
                        }, function (error) {
                            console.error(error);
                        });
                    }
                };
                UserReportComponent.prototype.matches = function (value) {
                    /* text matching cyrillic alphabet also */
                    if (Regex.TEXT.test(value)) {
                        return true;
                    }
                    return false;
                };
                UserReportComponent.prototype.download = function (report) {
                    var id = report.reportId;
                    console.log('id: ' + id);
                    var filePath = report.filePath;
                    var docType = filePath.substring(filePath.lastIndexOf('.') + 1);
                    console.log('docType: ' + docType);
                    this.fileDownloaderService.downloadBy(id, docType);
                };
                __decorate([
                    core_1.ViewChild('delModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserReportComponent.prototype, "delModal", void 0);
                __decorate([
                    core_1.ViewChild('editModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserReportComponent.prototype, "editModal", void 0);
                __decorate([
                    core_1.ViewChild('searchOptional'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], UserReportComponent.prototype, "searchOptional", void 0);
                UserReportComponent = __decorate([
                    core_1.Component({
                        selector: 'my-report',
                        templateUrl: 'src/app/user/report/report.html',
                        providers: [report_service_1.ReportService, report_downloader_service_1.FileDownloaderService],
                        directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES, forms_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        styleUrls: ['src/app/user/report/report.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
                        pipes: [report_filter_1.ReportFilter, ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe]
                    }), 
                    __metadata('design:paramtypes', [report_service_1.ReportService, platform_browser_1.DomSanitizationService, report_downloader_service_1.FileDownloaderService])
                ], UserReportComponent);
                return UserReportComponent;
            }());
            exports_1("UserReportComponent", UserReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC91c2VyLnJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOEJBO2dCQStCSSw2QkFBb0IsY0FBNkIsRUFDN0IsU0FBaUMsRUFDakMscUJBQTRDO29CQUY1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBd0I7b0JBQ2pDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7b0JBL0J4RCxZQUFPLEdBQWEsRUFBRSxDQUFDO29CQUN2QixtQkFBYyxHQUFXO3dCQUM3QixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsRUFBRTt3QkFDUixXQUFXLEVBQUUsRUFBRTt3QkFDZixZQUFZLEVBQUUsRUFBRTt3QkFDaEIsUUFBUSxFQUFFLEVBQUU7d0JBQ1osTUFBTSxFQUFFLElBQUk7cUJBQ2YsQ0FBQztvQkFFTSxhQUFRLEdBQWtCLEVBQUUsQ0FBQztvQkFFN0IsVUFBSyxHQUFhLEVBQUUsQ0FBQztvQkFNckIsV0FBTSxHQUFZLElBQUksQ0FBQztvQkFDdkIsVUFBSyxHQUFZLElBQUksQ0FBQztvQkFHdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFFaEIsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDMUIsU0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFFOUIsZUFBVSxHQUFlLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUszRixJQUFJLENBQUMsV0FBVyxHQUFHLGtDQUFlLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2dCQUN0RSxDQUFDO2dCQUVELGlEQUFtQixHQUFuQjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsMkNBQWEsR0FBYixVQUFjLE1BQWM7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYLFVBQVksSUFBWTtvQkFDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxnREFBa0IsR0FBbEI7b0JBQUEsaUJBV0M7b0JBVkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7eUJBQy9DLFNBQVMsQ0FBQzt3QkFDSCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUMsRUFDRCxVQUFDLEtBQUs7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBRWYsQ0FBQztnQkFFRCw0Q0FBYyxHQUFkO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsMENBQVksR0FBWixVQUFhLEVBQVU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsMkNBQWEsR0FBYjtvQkFBQSxpQkFTQztvQkFSRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDOUMsU0FBUyxDQUFDO3dCQUNQLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQyxFQUFFLFVBQUMsS0FBSzt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFHRCxxQ0FBTyxHQUFQO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELGlEQUFtQixHQUFuQjtvQkFBQSxpQkFpQkM7b0JBaEJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDZixTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUNSLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQzVDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDNUIsQ0FBQyxFQUNELFVBQUMsS0FBSzt3QkFDRixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQzs7Z0JBR0QsMENBQVksR0FBWixVQUFhLEdBQVc7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBR0QsNkNBQWUsR0FBZixVQUFnQixPQUFpQjtvQkFDN0IsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO29CQUV4QixHQUFHLENBQUMsQ0FBZSxVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sQ0FBQzt3QkFBdEIsSUFBSSxNQUFNLGdCQUFBO3dCQUNYLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3BGLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQy9CO29CQUVELE1BQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsZ0RBQWtCLEdBQWxCLFVBQW1CLEdBQVc7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztvQkFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWO29CQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDZDQUFlLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLEdBQVc7b0JBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0wsQ0FBQztnQkFHRCxvQ0FBTSxHQUFOLFVBQU8sSUFBWTtvQkFBbkIsaUJBZ0JDO29CQWZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUMxRSxTQUFTLENBQUMsVUFBQyxJQUFJO3dCQUNSLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDNUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsQ0FBQyxFQUNELFVBQUMsS0FBSzt3QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUdELHlDQUFXLEdBQVg7b0JBQ0ksaUNBQWlDO2dCQUNyQyxDQUFDO2dCQUVPLDhDQUFnQixHQUF4QjtvQkFDSSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLEdBQUcsQ0FBQyxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksQ0FBQzt3QkFBM0IsSUFBSSxNQUFNLFNBQUE7d0JBQ1gsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUMvQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDL0M7b0JBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFFekIsQ0FBQztnQkFHRCw2Q0FBZSxHQUFmLFVBQWdCLEtBQVU7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDhDQUFnQixHQUFoQixVQUFpQixLQUFVO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBVTtvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNENBQWMsR0FBZCxVQUFlLEtBQVU7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELGtEQUFvQixHQUFwQjtvQkFBQSxpQkFlQztvQkFkRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQzs2QkFDNUYsU0FBUyxDQUFDLFVBQUMsSUFBSTs0QkFDUixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7NEJBQ3BCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDakYsQ0FBQyxFQUNELFVBQUMsS0FBSzs0QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUN0QixDQUFDLENBQUMsQ0FBQTtvQkFDZCxDQUFDO2dCQUdMLENBQUM7Z0JBRUQsa0RBQW9CLEdBQXBCLFVBQXFCLEtBQWE7b0JBQWxDLGlCQWFDO29CQVpHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NkJBQzVFLFNBQVMsQ0FBQyxVQUFDLElBQUk7NEJBQ1IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2pGLENBQUMsRUFDRCxVQUFDLEtBQUs7NEJBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNqQiwwQ0FBMEM7b0JBQzFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFjO29CQUNuQixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDL0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXZELENBQUM7Z0JBalFEO29CQUFDLGdCQUFTLENBQUMsVUFBVSxDQUFDOztxRUFBQTtnQkFDdEI7b0JBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3NFQUFBO2dCQUN2QjtvQkFBQyxnQkFBUyxDQUFDLGdCQUFnQixDQUFDOzsyRUFBQTtnQkE1QmhDO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSxpQ0FBaUM7d0JBQzlDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsaURBQXFCLENBQUM7d0JBQ2pELFVBQVUsRUFBRSxDQUFDLGdDQUFnQixFQUFFLHdCQUFlLEVBQUUsOEJBQWlCLEVBQUUsdUJBQWUsRUFBRSxpQ0FBaUIsQ0FBQzt3QkFDdEcsYUFBYSxFQUFFLENBQUMsaUNBQWlCLENBQUM7d0JBQ2xDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDO3dCQUN4RyxLQUFLLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7cUJBQ2xFLENBQUM7O3VDQUFBO2dCQW9SRiwwQkFBQztZQUFELENBblJBLEFBbVJDLElBQUE7WUFuUkQscURBbVJDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlcG9ydC91c2VyLnJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtSZXBvcnR9IGZyb20gXCIuL3JlcG9ydC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tIFwiLi9yZXBvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VDcmVhdG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BhZ2UuY3JlYXRvci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge01PREFMX0RJUkVDVElWRVMsIEJTX1ZJRVdfUFJPVklERVJTLCBNb2RhbERpcmVjdGl2ZSwgQlVUVE9OX0RJUkVDVElWRVN9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtSZXBvcnRGaWx0ZXJ9IGZyb20gXCIuL3JlcG9ydC5maWx0ZXJcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1NFTEVDVF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLXNlbGVjdFwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLWZpcnN0LWxldHRlclwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7RmlsZURvd25sb2FkZXJTZXJ2aWNlfSBmcm9tIFwiLi9kb3dubG9hZC9yZXBvcnQuZG93bmxvYWRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVBhcmFtc30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvc2VhcmNoLm1vZGVsXCI7XHJcbmltcG9ydCBGaWxlU2VydmVyID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maWxlLnNlcnZlci5wYXRoXCIpO1xyXG5pbXBvcnQgUmVnZXggPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcmVnZXguYWxsLnRleHQnKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktcmVwb3J0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC91c2VyL3JlcG9ydC9yZXBvcnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtSZXBvcnRTZXJ2aWNlLCBGaWxlRG93bmxvYWRlclNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW01PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgU0VMRUNUX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgQlVUVE9OX0RJUkVDVElWRVNdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW0JTX1ZJRVdfUFJPVklERVJTXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL3VzZXIvcmVwb3J0L3JlcG9ydC5jc3MnLCAnc3JjL3NoYXJlZC9jc3MvbG9hZGVyLmNzcycsICdzcmMvc2hhcmVkL2Nzcy9nZW5lcmFsLmNzcyddLFxyXG4gICAgcGlwZXM6IFtSZXBvcnRGaWx0ZXIsIFRyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgcmVwb3J0czogUmVwb3J0W10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRSZXBvcnQ6IFJlcG9ydCA9IHtcclxuICAgICAgICByZXBvcnRJZDogbnVsbCxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnJyxcclxuICAgICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgICAgdXNlcklkOiBudWxsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBwYWdlQ3JlYXRvcjogUGFnZUNyZWF0b3I8UmVwb3J0PjtcclxuICAgIHByaXZhdGUgcGFnZUxpc3Q6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgdG90YWxQYWdlczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkYXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgZGF0ZUZyb206IHN0cmluZztcclxuICAgIHByaXZhdGUgZGF0ZVRvOiBzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKCdkZWxNb2RhbCcpIHB1YmxpYyBkZWxNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdlZGl0TW9kYWwnKSBwdWJsaWMgZWRpdE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaE9wdGlvbmFsJykgcHVibGljIHNlYXJjaE9wdGlvbmFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgb3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBkYXRlRnJvbUFjdGl2ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZGF0ZVRvQWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlcG9ydElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9uU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJvd3M6IG51bWJlcltdID0gWzEwLCAyMCwgNTBdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlcjtcclxuICAgIHByaXZhdGUgcGFnZVBhcmFtczogUGFnZVBhcmFtcyA9IHtwYWdlTnVtYmVyOiAxLCBzb3J0ZWRCeTogbnVsbCwgb3JkZXJUeXBlOiBmYWxzZSwgcm93TnVtOiAxMH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlRG93bmxvYWRlclNlcnZpY2U6IEZpbGVEb3dubG9hZGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTaG93T3B0aW9uYWwoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGVUb0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoT3B0aW9uYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0TW9kYWwocmVwb3J0OiBSZXBvcnQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUmVwb3J0ID0gcmVwb3J0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCByZXBvcnQ6ICcgKyB0aGlzLnNlbGVjdGVkUmVwb3J0KTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEYXRlVmFsaWQoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIC9cXGR7NH0tXFxkezJ9LVxcZHsyfS8udGVzdChkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXRSZXBvcnRTdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyByZXBvcnQ6ICcgKyB0aGlzLnNlbGVjdGVkUmVwb3J0KTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5fcmVwb3J0U2VydmljZS5lZGl0QW5kU2F2ZSh0aGlzLnNlbGVjdGVkUmVwb3J0KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRWRpdE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NpbmcgZWR0IG1vZGFsJyk7XHJcbiAgICAgICAgdGhpcy5lZGl0TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGVsTW9kYWwoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVwb3J0SWQgPSBpZDtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2hvdycsIHRoaXMucmVwb3J0SWQpO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGVsTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScsIHRoaXMucmVwb3J0SWQpO1xyXG4gICAgICAgIHRoaXMuZGVsTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UuZGVsZXRlUmVwb3J0QnlJZCh0aGlzLnJlcG9ydElkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdXNlcjogJywgdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5nZXRSZXBvcnRzQnlQYWdlTnVtKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hpbmcuLi4nKTtcclxuICAgICAgICB0aGlzLmdldFJlcG9ydHNCeVBhZ2VOdW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXBvcnRzQnlQYWdlTnVtKCkge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2V0QWxsVXNlclJlcG9ydHModGhpcy5jdXJyZW50VXNlci51c2VySWQsXHJcbiAgICAgICAgICAgIHRoaXMucGFnZVBhcmFtcylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNyZWF0b3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0cyA9IGRhdGEucm93cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQYWdlTGlzdCgrdGhpcy5wYWdlQ3JlYXRvci5iZWdpblBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICt0aGlzLnBhZ2VDcmVhdG9yLmVuZFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlcyA9ICtkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGEuZGF0ZXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgc2VsZWN0Um93TnVtKHJvdzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgYnkgcm93IG51bWJlcjogXCIgKyByb3cpO1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5yb3dOdW0gPSByb3c7XHJcbiAgICAgICAgdGhpcy5nZXRSZXBvcnRzQnlQYWdlTnVtKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNhbml0aXplVXJsRGF0YShyZXBvcnRzOiBSZXBvcnRbXSk6IFJlcG9ydFtdIHtcclxuICAgICAgICBsZXQgc2FmZVVybFJlcG9ydHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcmVwb3J0IG9mIHJlcG9ydHMpIHtcclxuICAgICAgICAgICAgcmVwb3J0LmZpbGVQYXRoID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChyZXBvcnQuZmlsZVBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHNhZmVVcmxSZXBvcnRzLnB1c2gocmVwb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYWZlVXJsUmVwb3J0cztcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RCeVBhZ2VOdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlciA9IG51bTtcclxuICAgICAgICB0aGlzLmdldFJlcG9ydHNCeVBhZ2VOdW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlciAtPSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVwb3J0c0J5UGFnZU51bSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyICs9IDE7XHJcbiAgICAgICAgdGhpcy5nZXRSZXBvcnRzQnlQYWdlTnVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlBcnJheSgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wYWdlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTGlzdC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBhZ2VMaXN0KHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbXB0eUFycmF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxpc3QucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNvcnRCeShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc29ydGVkIGJ5ICcsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFnZVBhcmFtcy5vcmRlclR5cGUgPSAhdGhpcy5wYWdlUGFyYW1zLm9yZGVyVHlwZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JkZXIgYnkgYXNjJywgdGhpcy5vcmRlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlUGFyYW1zLnNvcnRlZEJ5ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdldEFsbFVzZXJSZXBvcnRzKHRoaXMuY3VycmVudFVzZXIudXNlcklkLCB0aGlzLnBhZ2VQYXJhbXMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDcmVhdG9yID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydHMgPSBkYXRhLnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QoK3RoaXMucGFnZUNyZWF0b3IuYmVnaW5QYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArdGhpcy5wYWdlQ3JlYXRvci5lbmRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZXMgPSArZGF0YS50b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgICAgICAvLyB0aGlzLnN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RpbmN0RGF0ZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBkaXN0aW5jdERhdGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcmVwb3J0IG9mIHRoaXMucmVwb3J0cykge1xyXG4gICAgICAgICAgICBpZiAoZGlzdGluY3REYXRlcy5pbmRleE9mKHJlcG9ydC5jcmVhdGlvbkRhdGUpIDwgMClcclxuICAgICAgICAgICAgICAgIGRpc3RpbmN0RGF0ZXMucHVzaChyZXBvcnQuY3JlYXRpb25EYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3RpbmN0RGF0ZXM7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWZyZXNoRGF0ZUZyb20odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRlIGZyb20nLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHZhbHVlLnRleHQ7XHJcbiAgICAgICAgdGhpcy5kYXRlRnJvbUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkRGF0ZUZyb20odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBkYXRlIGZyb20nLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRlRnJvbUFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaERhdGVUbyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGUgdG8nLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRlVG8gPSB2YWx1ZS50ZXh0O1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWREYXRlVG8odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBkYXRlIHRvJywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU2VhcmNoQnlEYXRlcygpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaE9wdGlvbmFsLmhpZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVG8gJiYgdGhpcy5kYXRlRnJvbSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLnNlYXJjaFVzZXJSZXBvcnRzQnlEYXRlcyh0aGlzLmN1cnJlbnRVc2VyLnVzZXJJZCwgdGhpcy5kYXRlRnJvbSwgdGhpcy5kYXRlVG8pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBhZ2VMaXN0KHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VQYXJhbXMucGFnZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tTZWFyY2hCeVBhcmFtKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCAmJiBSZWdleC5URVhULnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggYnkgJywgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLnNlYXJjaFVzZXJSZXBvcnRzQnlJbnB1dFBhcmFtKHRoaXMuY3VycmVudFVzZXIudXNlcklkLCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUGFnZUxpc3QodGhpcy5wYWdlUGFyYW1zLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVBhcmFtcy5wYWdlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoZXModmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8qIHRleHQgbWF0Y2hpbmcgY3lyaWxsaWMgYWxwaGFiZXQgYWxzbyAqL1xyXG4gICAgICAgIGlmIChSZWdleC5URVhULnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWQocmVwb3J0OiBSZXBvcnQpIHtcclxuICAgICAgICBsZXQgaWQgPSByZXBvcnQucmVwb3J0SWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkOiAnICsgaWQpO1xyXG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHJlcG9ydC5maWxlUGF0aDtcclxuICAgICAgICBsZXQgZG9jVHlwZSA9IGZpbGVQYXRoLnN1YnN0cmluZyhmaWxlUGF0aC5sYXN0SW5kZXhPZignLicpICsgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvY1R5cGU6ICcgKyBkb2NUeXBlKTtcclxuICAgICAgICB0aGlzLmZpbGVEb3dubG9hZGVyU2VydmljZS5kb3dubG9hZEJ5KGlkLCBkb2NUeXBlKTtcclxuXHJcbiAgICB9XHJcbn0iXX0=
