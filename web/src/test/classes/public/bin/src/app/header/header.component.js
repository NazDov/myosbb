System.register(['@angular/core', '@angular/router', '@angular/common', 'rxjs/Rx', "../../shared/services/login.stats", "@angular/http", "ng2-translate/ng2-translate", 'ng2-bs-dropdown/dropdown', "../login/login.service", "../../shared/services/current.user.service", "../../shared/pipes/capitalize-first-letter", 'ng2-bs3-modal', './header.notice.service', '@angular/core/src/facade/async', "./../user/settings/settings.service"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, login_stats_1, http_1, ng2_translate_1, dropdown_1, login_service_1, current_user_service_1, capitalize_first_letter_1, ng2_bs3_modal_1, header_notice_service_1, async_1, router_2, settings_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (login_stats_1_1) {
                login_stats_1 = login_stats_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (header_notice_service_1_1) {
                header_notice_service_1 = header_notice_service_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(noticeService, settingsService, _currentUserService, _loginService, _loginStat, _route, router, translate, http, _loginservice) {
                    var _this = this;
                    this.noticeService = noticeService;
                    this.settingsService = settingsService;
                    this._currentUserService = _currentUserService;
                    this._loginService = _loginService;
                    this._loginStat = _loginStat;
                    this._route = _route;
                    this.router = router;
                    this.translate = translate;
                    this.http = http;
                    this._loginservice = _loginservice;
                    this.rrr = true;
                    this.languages = ['en', 'uk'];
                    this.selectedLang = 'uk';
                    this.reouterUrl = 'login';
                    this.noticeArr = [];
                    this.ticketNoticeLength = 0;
                    this.commentNoticeLength = 0;
                    this.ticketNotice = [];
                    this.commentNotice = [];
                    this.wordT = '';
                    this.wordM = '';
                    this._loginStat.loggedInObserver$.subscribe(function (stat) {
                        _this.isLoggedIn = stat;
                    });
                    HeaderComponent.translateService = translate;
                    HeaderComponent.currentUserService = _currentUserService;
                    var userLang = navigator.language.split('-')[1]; // use navigator lang if available
                    userLang = /(en|uk)/gi.test(userLang) ? userLang : 'uk';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translate.setDefaultLang('uk');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    this.selectedLang = userLang;
                    translate.use(this.selectedLang);
                    translate.currentLang = this.selectedLang;
                    console.log("default lang: ", translate.currentLang);
                    console.log("shared sevice: ", HeaderComponent.translateService);
                    console.log("shared sevice: ", HeaderComponent.currentUserService);
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        return _this.isLoggedIn = params['status'];
                    });
                    HeaderComponent.currentUserService = this._currentUserService;
                    this.getNotice();
                };
                HeaderComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                HeaderComponent.prototype.onSelect = function (lang) {
                    this.selectedLang = lang;
                    this.translate.use(lang);
                    this.translate.currentLang = lang;
                    console.log("current lang: ", this.translate.currentLang);
                };
                HeaderComponent.prototype.getNotice = function () {
                    var _this = this;
                    this.settingsService.getSettingsForUser()
                        .then(function (settings) { return _this.settings = settings; });
                    async_1.TimerWrapper.setInterval(function () {
                        if (_this._loginService.checkLogin() && _this.isSettings() == true) {
                            _this.noticeService.getNotice().subscribe(function (data) {
                                _this.noticeArr = data,
                                    _this.devideNotice();
                            });
                        }
                    }, 7000);
                };
                HeaderComponent.prototype.isSettings = function () {
                    if (this.settings.answer == true ||
                        this.settings.comment == true ||
                        this.settings.creator == true ||
                        this.settings.answer == true) {
                        return true;
                    }
                    return false;
                };
                HeaderComponent.prototype.devideNotice = function () {
                    this.ticketNotice = [];
                    this.commentNotice = [];
                    for (var i = 0; i < this.noticeArr.length; i++) {
                        if (this.noticeArr[i].typeNotice == 'TO_CREATOR' ||
                            this.noticeArr[i].typeNotice == 'TO_ASSIGNED') {
                            this.ticketNotice.push(this.noticeArr[i]);
                        }
                        if (this.noticeArr[i].typeNotice == 'MESSAGE' ||
                            this.noticeArr[i].typeNotice == 'ANSWER') {
                            this.commentNotice.push(this.noticeArr[i]);
                        }
                        this.ticketNoticeLength = this.ticketNotice.length;
                        this.commentNoticeLength = this.commentNotice.length;
                        this.wordT = this.wordTNews();
                        this.wordM = this.wordMNews();
                    }
                };
                HeaderComponent.prototype.removeCommentNotice = function (notice) {
                    var index = this.commentNotice.indexOf(notice);
                    this.hideNotice(notice);
                    if (index > -1) {
                        console.log("deleting notice!!!");
                        this.commentNotice.splice(index, 1);
                        this.noticeService.deleteNotice(notice);
                        this.commentNoticeLength--;
                    }
                };
                HeaderComponent.prototype.removeTicketNotice = function (notice) {
                    var index = this.ticketNotice.indexOf(notice);
                    this.hideNotice(notice);
                    if (index > -1) {
                        console.log("deleting notice!!!");
                        this.ticketNotice.splice(index, 1);
                        this.noticeService.deleteNotice(notice);
                        this.ticketNoticeLength--;
                    }
                };
                HeaderComponent.prototype.hideNotice = function (notice) {
                    if (this._currentUserService.getRole() == "ROLE_ADMIN") {
                        this.router.navigate(['admin/' + notice.path]);
                    }
                    if (this._currentUserService.getRole() == "ROLE_MANAGER") {
                        this.router.navigate(['manager/' + notice.path]);
                    }
                    else {
                        this.router.navigate(['home/' + notice.path]);
                    }
                };
                HeaderComponent.prototype.wordTNews = function () {
                    var num = Math.abs((this.ticketNotice.length) % 100) % 10;
                    if (num >= 5 && num < 20)
                        return "pending_task";
                    if (num > 1 && num < 5)
                        return "pending_tasks";
                    if (num == 1)
                        return "pending_task1";
                    return "pending_task1";
                };
                HeaderComponent.prototype.wordMNews = function () {
                    var num = Math.abs((this.commentNotice.length) % 100) % 10;
                    if (num == 1)
                        return "noticeComment";
                    if (num > 1 && num < 5)
                        return "noticeComment3";
                    return "noticeComments";
                };
                HeaderComponent.prototype.getTime = function (time) {
                    return new Date(time).toLocaleTimeString();
                };
                HeaderComponent.prototype.routerNavigate = function () {
                    if (this._loginService.checkLogin()) {
                        if (this._currentUserService.getRole() == "ROLE_ADMIN") {
                            this.router.navigate(['admin']);
                        }
                        if (this._currentUserService.getRole() == "ROLE_USER") {
                            this.router.navigate(['home/wall']);
                        }
                        if (this._currentUserService.getRole() == "ROLE_MANAGER") {
                            this.router.navigate(['manager']);
                        }
                    }
                    else {
                        this.router.navigate(['login']);
                    }
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        templateUrl: 'src/app/header/header.html',
                        providers: [login_stats_1.LoginStat, login_service_1.LoginService, header_notice_service_1.NoticeService, settings_service_1.SettingsService],
                        inputs: ['isLoggedIn'],
                        directives: [router_1.ROUTER_DIRECTIVES, dropdown_1.DROPDOWN_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        styleUrls: ['src/app/user/ticket/ticket.css']
                    }), 
                    __metadata('design:paramtypes', [header_notice_service_1.NoticeService, settings_service_1.SettingsService, current_user_service_1.CurrentUserService, login_service_1.LoginService, login_stats_1.LoginStat, router_1.ActivatedRoute, router_2.Router, ng2_translate_1.TranslateService, http_1.Http, login_service_1.LoginService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQW1CSSx5QkFBb0IsYUFBMkIsRUFDM0IsZUFBK0IsRUFDL0IsbUJBQXNDLEVBQ3RDLGFBQTBCLEVBQzFCLFVBQW9CLEVBQ3BCLE1BQXFCLEVBQ3JCLE1BQWEsRUFDYixTQUEwQixFQUMxQixJQUFTLEVBQ1QsYUFBMEI7b0JBNUJsRCxpQkFzTUM7b0JBbkx1QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO29CQUN0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtvQkFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtvQkFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtvQkFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDYixjQUFTLEdBQVQsU0FBUyxDQUFpQjtvQkFDMUIsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDVCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtvQkF2QjlDLFFBQUcsR0FBVyxJQUFJLENBQUM7b0JBQ25CLGNBQVMsR0FBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLGlCQUFZLEdBQVUsSUFBSSxDQUFDO29CQUMzQixlQUFVLEdBQVUsT0FBTyxDQUFDO29CQUM1QixjQUFTLEdBQVksRUFBRSxDQUFDO29CQUN4Qix1QkFBa0IsR0FBVSxDQUFDLENBQUM7b0JBQzlCLHdCQUFtQixHQUFVLENBQUMsQ0FBQztvQkFDL0IsaUJBQVksR0FBWSxFQUFFLENBQUM7b0JBQ3ZCLGtCQUFhLEdBQVksRUFBRSxDQUFDO29CQUNoQyxVQUFLLEdBQVUsRUFBRSxDQUFDO29CQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFDO29CQWVkLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUUsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDN0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO29CQUVILGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7b0JBQzdDLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztvQkFDekQsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7b0JBQ25GLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3hELGtHQUFrRztvQkFDbEcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFL0IsMkZBQTJGO29CQUMzRixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztvQkFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2pDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQzFDLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUFsQyxDQUFrQyxDQUFDLENBQUM7b0JBQ3hDLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7b0JBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsa0NBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRixtQ0FBUyxHQUFUO29CQUFBLGlCQWNFO29CQWJHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUU7eUJBQ3BDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBRyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7b0JBQy9DLG9CQUFZLENBQUMsV0FBVyxDQUFDO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUMvRCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxJQUFJO2dDQUNBLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtvQ0FDckIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzRCQUN4QixDQUFDLENBQ0osQ0FBQTt3QkFDTCxDQUFDO29CQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFFWixDQUFDO2dCQUVELG9DQUFVLEdBQVY7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSTt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSTt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSTt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUdELHNDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO29CQUV4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFlBQVk7NEJBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsQ0FBQzt3QkFFTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTOzRCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25ELENBQUM7d0JBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO3dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7d0JBRXJELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQztnQkFDTCxDQUFDO2dCQUVBLDZDQUFtQixHQUFuQixVQUFvQixNQUFhO29CQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMvQixDQUFDO2dCQUNMLENBQUM7Z0JBR0QsNENBQWtCLEdBQWxCLFVBQW1CLE1BQWE7b0JBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV4QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxvQ0FBVSxHQUFWLFVBQVcsTUFBYTtvQkFFaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDaEQsQ0FBQztnQkFFVCxDQUFDO2dCQUVELG1DQUFTLEdBQVQ7b0JBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUM7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLGVBQWUsQ0FBQztvQkFDM0IsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzt3QkFDVCxNQUFNLENBQUMsZUFBZSxDQUFDO29CQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELG1DQUFTLEdBQVQ7b0JBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMzRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO3dCQUNULE1BQU0sQ0FBQyxlQUFlLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO29CQUM1QixNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsaUNBQU8sR0FBUCxVQUFRLElBQVM7b0JBQ2IsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsd0NBQWMsR0FBZDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLENBQUM7Z0JBRUwsQ0FBQztnQkFoTkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsU0FBUyxFQUFFLENBQUMsdUJBQVMsRUFBRSw0QkFBWSxFQUFFLHFDQUFhLEVBQUUsa0NBQWUsQ0FBQzt3QkFDcEUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN0QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw4QkFBbUIsRUFBRSxnQ0FBZ0IsRUFBRSx3QkFBZSxDQUFDO3dCQUN2RixLQUFLLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLG1EQUF5QixDQUFDO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztxQkFHaEQsQ0FBQzs7bUNBQUE7Z0JBd01GLHNCQUFDO1lBQUQsQ0F0TUEsQUFzTUMsSUFBQTtZQXRNRCw2Q0FzTUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IExvZ2luU3RhdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc3RhdHNcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGV9IGZyb20gXCJuZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgRFJPUERPV05fRElSRUNUSVZFUyB9IGZyb20gJ25nMi1icy1kcm9wZG93bi9kcm9wZG93bic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyUGlwZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHsgTU9EQUxfRElSRUNUSVZFUyB9IGZyb20gJ25nMi1iczMtbW9kYWwnO1xyXG5pbXBvcnQgeyBOb3RpY2UsIE5vdGljZVR5cGUgfSBmcm9tICcuL25vdGljZSc7XHJcbmltcG9ydCB7IE5vdGljZVNlcnZpY2UgfSBmcm9tICcuL2hlYWRlci5ub3RpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7IFRpbWVyV3JhcHBlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2ZhY2FkZS9hc3luYyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuLy4uL3VzZXIvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLy4uL3VzZXIvc2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TdGF0LCBMb2dpblNlcnZpY2UsIE5vdGljZVNlcnZpY2UsIFNldHRpbmdzU2VydmljZV0sXHJcbiAgICBpbnB1dHM6IFsnaXNMb2dnZWRJbiddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEUk9QRE9XTl9ESVJFQ1RJVkVTLCBNT0RBTF9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBDYXBpdGFsaXplRmlyc3RMZXR0ZXJQaXBlXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldC5jc3MnXVxyXG5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uRGVzdHJveSB7XHJcbiAgICBzdGF0aWMgdHJhbnNsYXRlU2VydmljZTpUcmFuc2xhdGVTZXJ2aWNlO1xyXG4gICAgc3RhdGljIGN1cnJlbnRVc2VyU2VydmljZTpDdXJyZW50VXNlclNlcnZpY2U7XHJcbiAgICBpc0xvZ2dlZEluOmJvb2xlYW47XHJcbiAgICBzdWI6YW55O1xyXG4gICAgcnJyOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbGFuZ3VhZ2VzOkFycmF5PHN0cmluZz4gPSBbJ2VuJywgJ3VrJ107XHJcbiAgICBzZWxlY3RlZExhbmc6c3RyaW5nID0gJ3VrJztcclxuICAgIHJlb3V0ZXJVcmw6c3RyaW5nID0gJ2xvZ2luJztcclxuICAgIG5vdGljZUFycjpOb3RpY2VbXSA9IFtdO1xyXG4gICAgdGlja2V0Tm90aWNlTGVuZ3RoOm51bWJlciA9IDA7XHJcbiAgICBjb21tZW50Tm90aWNlTGVuZ3RoOm51bWJlciA9IDA7XHJcbiAgICB0aWNrZXROb3RpY2U6Tm90aWNlW10gPSBbXTtcclxuICAgICAgICBjb21tZW50Tm90aWNlOk5vdGljZVtdID0gW107XHJcbiAgICB3b3JkVDpzdHJpbmcgPSAnJztcclxuICAgIHdvcmRNOnN0cmluZyA9ICcnO1xyXG5cclxuICAgIHNldHRpbmdzOlNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWNlU2VydmljZTpOb3RpY2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6U2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycmVudFVzZXJTZXJ2aWNlOkN1cnJlbnRVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2xvZ2luU2VydmljZTpMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9sb2dpblN0YXQ6TG9naW5TdGF0LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTpUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOkh0dHAsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9sb2dpbnNlcnZpY2U6TG9naW5TZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZ2luU3RhdC5sb2dnZWRJbk9ic2VydmVyJCAuc3Vic2NyaWJlKHN0YXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBzdGF0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBIZWFkZXJDb21wb25lbnQudHJhbnNsYXRlU2VydmljZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlID0gX2N1cnJlbnRVc2VyU2VydmljZTtcclxuICAgICAgICB2YXIgdXNlckxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVsxXTsgLy8gdXNlIG5hdmlnYXRvciBsYW5nIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIHVzZXJMYW5nID0gLyhlbnx1aykvZ2kudGVzdCh1c2VyTGFuZykgPyB1c2VyTGFuZyA6ICd1ayc7XHJcbiAgICAgICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ3VrJyk7XHJcblxyXG4gICAgICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZyA9IHVzZXJMYW5nO1xyXG4gICAgICAgIHRyYW5zbGF0ZS51c2UodGhpcy5zZWxlY3RlZExhbmcpO1xyXG4gICAgICAgIHRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9IHRoaXMuc2VsZWN0ZWRMYW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBsYW5nOiBcIiwgdHJhbnNsYXRlLmN1cnJlbnRMYW5nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNoYXJlZCBzZXZpY2U6IFwiLCBIZWFkZXJDb21wb25lbnQudHJhbnNsYXRlU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFyZWQgc2V2aWNlOiBcIiwgSGVhZGVyQ29tcG9uZW50LmN1cnJlbnRVc2VyU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PlxyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBwYXJhbXNbJ3N0YXR1cyddKTtcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXJTZXJ2aWNlID0gdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZ2V0Tm90aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTphbnkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QobGFuZykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZztcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS51c2UobGFuZyk7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBsYW5nOiBcIiwgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpO1xyXG4gICAgfVxyXG5cclxuICAgZ2V0Tm90aWNlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldFNldHRpbmdzRm9yVXNlcigpXHJcbiAgICAgICAgICAgIC50aGVuKHNldHRpbmdzID0+dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzKTtcclxuICAgICAgICBUaW1lcldyYXBwZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9naW5TZXJ2aWNlLmNoZWNrTG9naW4oKSAmJiB0aGlzLmlzU2V0dGluZ3MoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0Tm90aWNlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGljZUFyciA9IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWRlTm90aWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNzAwMClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNTZXR0aW5ncygpOmJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFuc3dlciA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29tbWVudCA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY3JlYXRvciA9PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYW5zd2VyID09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGV2aWRlTm90aWNlKCl7XHJcbiAgICAgICAgdGhpcy50aWNrZXROb3RpY2UgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbW1lbnROb3RpY2UgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm90aWNlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vdGljZUFycltpXS50eXBlTm90aWNlID09ICdUT19DUkVBVE9SJyB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpY2VBcnJbaV0udHlwZU5vdGljZSA9PSAnVE9fQVNTSUdORUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWNrZXROb3RpY2UucHVzaCh0aGlzLm5vdGljZUFycltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub3RpY2VBcnJbaV0udHlwZU5vdGljZSA9PSAnTUVTU0FHRScgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWNlQXJyW2ldLnR5cGVOb3RpY2UgPT0gJ0FOU1dFUicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnROb3RpY2UucHVzaCh0aGlzLm5vdGljZUFycltpXSk7IFxyXG4gICAgICAgICAgICB9ICAgICBcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0Tm90aWNlTGVuZ3RoID0gdGhpcy50aWNrZXROb3RpY2UubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnROb3RpY2VMZW5ndGggPSB0aGlzLmNvbW1lbnROb3RpY2UubGVuZ3RoO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53b3JkVCA9IHRoaXMud29yZFROZXdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMud29yZE0gPSB0aGlzLndvcmRNTmV3cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgcmVtb3ZlQ29tbWVudE5vdGljZShub3RpY2U6Tm90aWNlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21tZW50Tm90aWNlLmluZGV4T2Yobm90aWNlKTtcclxuICAgICAgICB0aGlzLmhpZGVOb3RpY2Uobm90aWNlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIG5vdGljZSEhIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50Tm90aWNlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWNlU2VydmljZS5kZWxldGVOb3RpY2Uobm90aWNlKTtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50Tm90aWNlTGVuZ3RoLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVUaWNrZXROb3RpY2Uobm90aWNlOk5vdGljZSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudGlja2V0Tm90aWNlLmluZGV4T2Yobm90aWNlKTtcclxuICAgICAgICB0aGlzLmhpZGVOb3RpY2Uobm90aWNlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIG5vdGljZSEhIVwiKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXROb3RpY2Uuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmRlbGV0ZU5vdGljZShub3RpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tldE5vdGljZUxlbmd0aC0tOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTm90aWNlKG5vdGljZTpOb3RpY2UpIHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlLmdldFJvbGUoKSA9PSBcIlJPTEVfQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhZG1pbi8nK25vdGljZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT0gXCJST0xFX01BTkFHRVJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtYW5hZ2VyLycrbm90aWNlLnBhdGhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lLycrbm90aWNlLnBhdGhdKTsgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB3b3JkVE5ld3MoKTpzdHJpbmcge1xyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLmFicygodGhpcy50aWNrZXROb3RpY2UubGVuZ3RoKSAlIDEwMCkgJSAxMDtcclxuICAgICAgICBpZiAobnVtID49IDUgJiYgbnVtIDwgMjApXHJcbiAgICAgICAgICAgIHJldHVybiBcInBlbmRpbmdfdGFza1wiO1xyXG4gICAgICAgIGlmIChudW0gPiAxICYmIG51bSA8IDUpXHJcbiAgICAgICAgICAgIHJldHVybiBcInBlbmRpbmdfdGFza3NcIjtcclxuICAgICAgICBpZiAobnVtID09IDEpXHJcbiAgICAgICAgICAgIHJldHVybiBcInBlbmRpbmdfdGFzazFcIjtcclxuICAgICAgICByZXR1cm4gXCJwZW5kaW5nX3Rhc2sxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd29yZE1OZXdzKCk6c3RyaW5nIHtcclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5hYnMoKHRoaXMuY29tbWVudE5vdGljZS5sZW5ndGgpICUgMTAwKSAlIDEwO1xyXG4gICAgICAgIGlmIChudW0gPT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIFwibm90aWNlQ29tbWVudFwiO1xyXG4gICAgICAgIGlmIChudW0gPiAxICYmIG51bSA8IDUpXHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vdGljZUNvbW1lbnQzXCI7XHJcbiAgICAgICAgcmV0dXJuIFwibm90aWNlQ29tbWVudHNcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKHRpbWU6RGF0ZSk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyTmF2aWdhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luU2VydmljZS5jaGVja0xvZ2luKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT0gXCJST0xFX0FETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT0gXCJST0xFX1VTRVJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL3dhbGwnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT0gXCJST0xFX01BTkFHRVJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtYW5hZ2VyJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
