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
// Importar Component, Input, Output, OnInit e EventEmitter do Core do Angular
var core_1 = require('@angular/core');
// Importar modelo Hero.
var hero_1 = require('../models/hero');
// Importar RouteParams para recuperação de parameterId.
var router_1 = require('@angular/router');
// Importar HeroService contendo meios de recuperar lista de herois.
var hero_service_1 = require('../services/hero.service');
// Criar Componente HeroDetailComponent
var HeroDetailComponent = (function () {
    // Construir objeto injetando HeroService e RouteParams.
    function HeroDetailComponent(heroService, routeSegment) {
        this.heroService = heroService;
        this.routeSegment = routeSegment;
        // Como HeroDetail precisa informar para quem o "invocou" que há dados saindo
        // É utilizado um "Output" que neste caso, é um EventEmitter.
        this.close = new core_1.EventEmitter();
    }
    // Método invocado no momento que o componente termina de inicializar.
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recuperar "id" do routeParams, e como este vem como "string" soma-lo com "+" o converte para "int".
        if (this.routeSegment.getParam("id") !== null) {
            var id = +this.routeSegment.getParam("id");
            this.navigated = true;
            this.heroService.getHero(id).then(function (hero) {
                _this.hero = hero;
            });
        }
        else {
            this.navigated = false;
            this.hero = new hero_1.Hero();
        }
    };
    // Método para salvar o heroi criado/atualizado.
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.save(this.hero).then(function (hero) {
            _this.hero = hero;
            _this.goBack(hero);
        }).catch(function (error) {
            // TODO: mostrar mensagem de erro.
            _this.error = error;
        });
    };
    // Método para retornar no histórico de navegação.
    // Enviar de volta para quem invocou este comopnente o Heroi salvo.
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        // Se alguém navegou para este componente, retornar para ele.
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "close", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            // Seletor CSS.
            selector: 'my-hero-detail',
            // Template do Componente.
            templateUrl: 'app/templates/hero-detail.component.html',
            styleUrls: ['app/styles/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteSegment])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map