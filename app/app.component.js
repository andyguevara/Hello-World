"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_database_service_1 = require("./app.database.service");
var app_record_detail_component_1 = require("./app.record-detail.component");
var AppComponent = (function () {
    function AppComponent(vodRecordService) {
        this.vodRecordService = vodRecordService;
        this.title = 'Blizzard Workflow Manager Dashboard';
        this.params = new app_record_detail_component_1.DetailParams();
    }
    AppComponent.prototype.getRecords = function () {
        var _this = this;
        this.vodRecordService.getAllVodRecords().then(function (records) { return _this.records = records; });
    };
    AppComponent.prototype.onSelect = function (rec) {
        this.selectedRecord = rec;
        //    console.log("Got here1");
        this.vodData = rec.vodJobInfo;
        this.jobInfo = JSON.parse(this.vodData);
        this.params.vodrecord = this.selectedRecord;
        this.params.jobInfo = this.jobInfo;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'bwm-app',
        template: "\n    <h2>{{title}}</h2>\n    <ul class=\"records\">\n      <li *ngFor=\"let rec of records\"\n        [class.selected]=\"rec === selectedRecord\"\n        (click)=\"onSelect(rec)\">\n        {{rec.houseId}} &nbsp; {{rec.updateDate}} &nbsp; {{rec.vodState}}\n      </li>\n    </ul>\n    <vodrecord-detail [params]=\"params\"></vodrecord-detail>\n    ",
        providers: [app_database_service_1.VodRecordService]
    }),
    __metadata("design:paramtypes", [app_database_service_1.VodRecordService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map