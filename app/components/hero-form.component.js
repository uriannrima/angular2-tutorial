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
// Imports
var core_1 = require('@angular/core');
var hero_1 = require('../models/hero');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        // Lista de Super Poderes
        this.powers = ['Select a power', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        // Heroi default.
        this.hero = new hero_1.Hero(1, "", this.powers[0]);
        // Form foi submetido?
        this.submitted = false;
    }
    // Método de Submit do Form.
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // Método que retorna JSON de Diagnostico do Modelo.
        get: function () {
            return JSON.stringify(this.hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/templates/hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map