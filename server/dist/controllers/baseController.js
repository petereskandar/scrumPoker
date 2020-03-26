"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nconf = require("nconf");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.jsonResponse = function (res, code, message) {
        return res.status(code).json({ message: message });
    };
    BaseController.prototype.ok = function (res, dto) {
        if (!!dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    };
    // save local data
    BaseController.prototype.saveData = function (key, value) {
        nconf.file('../config/app.json');
        nconf.set(key, value);
    };
    BaseController.prototype.created = function (res) {
        return res.sendStatus(201);
    };
    BaseController.prototype.clientError = function (res, message) {
        return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized');
    };
    BaseController.prototype.notFound = function (res, message) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Unauthorized');
    };
    BaseController.prototype.fail = function (res, error) {
        return res.status(500).json({
            message: error.toString()
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
