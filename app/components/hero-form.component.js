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
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        // Heroi default.
        this.hero = new hero_1.Hero();
        // Form foi submetido?
        this.submitted = false;
        // Form esta ativo?
        this.active = true;
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
    // Método para recriar o formulário vazio.
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        // Recriar hero.
        this.hero = new hero_1.Hero();
        // Desativar o form.
        this.active = false;
        // Aguardar 0ms e reativar o form.
        // Com isso, as validações deste são "recriadas".
        setTimeout(function () { return _this.active = true; }, 0);
    };
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