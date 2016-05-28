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
// Importar Injectable do Core do Angular
var core_1 = require('@angular/core');
var VisibilityService = (function () {
    function VisibilityService() {
        // Animation effect.
        this.effect = 'blind';
        // Animation options.
        this.option = { direction: 'up' };
        // Animation duration.
        this.duraction = 1000;
    }
    VisibilityService.prototype.show = function (elementId, complete) {
        $('#' + elementId).show(this.effect, this.option, this.duraction, complete);
    };
    VisibilityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VisibilityService);
    return VisibilityService;
}());
exports.VisibilityService = VisibilityService;
//# sourceMappingURL=visibility.service.js.map