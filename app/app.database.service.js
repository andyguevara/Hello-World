"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// To hold the db and record access calls
var core_1 = require("@angular/core");
var mock_db_1 = require("./mock-db");
var VodRecordService = (function () {
    function VodRecordService() {
    }
    VodRecordService.prototype.getAllVodRecords = function () {
        return Promise.resolve(mock_db_1.AWSRAWDATA.Items);
    };
    VodRecordService.prototype.getVodRecord = function (id) { };
    ; // stub
    return VodRecordService;
}());
VodRecordService = __decorate([
    core_1.Injectable()
], VodRecordService);
exports.VodRecordService = VodRecordService;
//# sourceMappingURL=app.database.service.js.map