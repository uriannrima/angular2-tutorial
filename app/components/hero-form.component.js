"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_component_1 = require('./base.component');
// Importar RouteParams para recuperação de parameterId.
var router_1 = require('@angular/router');
// Importar HeroService contendo meios de recuperar lista de herois.
var hero_service_1 = require('../services/hero.service');
var HeroFormComponent = (function (_super) {
    __extends(HeroFormComponent, _super);
    function HeroFormComponent(heroService, routeSegment) {
        _super.call(this);
        this.heroService = heroService;
        this.routeSegment = routeSegment;
        // Lista de Super Poderes
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        // Heroi default.
        this.hero = new hero_1.Hero();
        // Form foi submetido?
        this.submitted = false;
        // Form esta ativo?
        this.active = true;
    }
    // ngOnInit invocado para apresentar os componentes padrões.
    HeroFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeSegment.getParam("id") !== null) {
            var id = +this.routeSegment.getParam("id");
            this.heroService.getHero(id).then(function (hero) {
                _this.hero = hero;
                _this.show("#pnlHeroForm");
            });
        }
        else {
            this.hero = new hero_1.Hero();
            this.show("#pnlHeroForm");
        }
    };
    HeroFormComponent.prototype.onReturn = function () {
        if (this.hero.id !== null) {
            window.history.back();
        }
    };
    // Método de Submit do Form.
    HeroFormComponent.prototype.onSubmit = function () {
        var _this = this;
        // Esconder pnlHeroForm
        this.hide("#pnlHeroForm", function () {
            _this.heroService.save(_this.hero).then(function (hero) {
                _this.hero = hero;
                // Remover componentes que não devem aparecer.
                _this.submitted = true;
                // Mostrar detalhes.
                _this.show("#pnlHeroDetails");
            });
        });
    };
    HeroFormComponent.prototype.onEdit = function () {
        var _this = this;
        this.hide("#pnlHeroDetails", function () {
            _this.submitted = false;
            _this.show("#pnlHeroForm");
        });
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
        // Sumir o form.        
        this.hide("#pnlHeroForm", function () {
            // Recriar HeroForm.
            _this.reacreateForm();
            // Mostrar o form.
            _this.show("#pnlHeroForm");
        });
    };
    // Recriar formulário de heroi.
    // O formulário não retorna para "pristine" somente ao limpar a variavel que ele referencia.
    // Devido a isso, como workaround, devemos "recria-lo", utilizando *ngIf.
    // "Active" destroi e reconstroi o formulário.
    HeroFormComponent.prototype.reacreateForm = function () {
        var _this = this;
        // "Destrui-lo"
        this.active = false;
        // Limpar heroi.
        this.hero = new hero_1.Hero();
        // Aguardar 0 ms para "recriar"" formulário.
        setTimeout(function () {
            // "Recria-lo"
            _this.active = true;
        });
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/templates/hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteSegment])
    ], HeroFormComponent);
    return HeroFormComponent;
}(base_component_1.BaseComponent));
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map