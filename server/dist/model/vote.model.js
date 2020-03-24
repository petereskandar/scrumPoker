"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var Vote = /** @class */ (function () {
    function Vote(from, content) {
        this.from = from;
        this.content = content;
    }
    return Vote;
}());
exports.Vote = Vote;
var VoteMessage = /** @class */ (function (_super) {
    __extends(VoteMessage, _super);
    function VoteMessage(from, content) {
        return _super.call(this, from, content) || this;
    }
    return VoteMessage;
}(Vote));
exports.VoteMessage = VoteMessage;
