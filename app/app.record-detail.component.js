// Holds the code for connecting to AWS
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
var VodRecordDetailComponent = (function () {
    function VodRecordDetailComponent() {
        this.viewtitle = 'View/Edit Record';
    }
    return VodRecordDetailComponent;
}());
__decorate([
    core_1.Input('params'),
    __metadata("design:type", DetailParams)
], VodRecordDetailComponent.prototype, "params", void 0);
VodRecordDetailComponent = __decorate([
    core_1.Component({
        selector: 'vodrecord-detail',
        template: "\n  <div *ngIf=\"params.vodrecord\">\n    <h2>{{viewtitle}}</h2>\n    <div><label>House ID: &nbsp; </label>{{params.vodrecord.houseId}}</div>\n    <div>\n      <label>Title: &nbsp; </label>\n      {{params.jobInfo.title}}\n      <p>\n    </div>\n  </div>\n "
    })
], VodRecordDetailComponent);
exports.VodRecordDetailComponent = VodRecordDetailComponent;
var DetailParams = (function () {
    function DetailParams() {
    }
    return DetailParams;
}());
exports.DetailParams = DetailParams;
//# sourceMappingURL=app.record-detail.component.js.map