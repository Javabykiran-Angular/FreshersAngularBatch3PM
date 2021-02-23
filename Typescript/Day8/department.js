"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(r) {
        this.role = r;
    }
    //setter Method
    Department.prototype.setRole = function (role) {
        this.role = role;
    };
    //Getter Method
    Department.prototype.getRole = function () {
        return (this.role);
    };
    return Department;
}());
exports.Department = Department;
