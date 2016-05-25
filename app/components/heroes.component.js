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
// Importar Component e OnInit do Core do Angular.
var core_1 = require('@angular/core');
// Importar Hero Detail Component.
var hero_detail_component_1 = require('./hero-detail.component');
// Importar serviço HeroService para consumo de informações de heroi.
var hero_service_1 = require('../services/hero.service');
// Importar Router do Angular.
var router_deprecated_1 = require('@angular/router-deprecated');
// Definição do Comopnente HeroesComponent.
var HeroesComponent = (function () {
    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    function HeroesComponent(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
        // Titulo do App.
        this.title = 'Tour of Heroes';
        // Invocar listagem de herois.
        // PORÉM ISTO É ERRADO!
        // this.getHeroes();
        // Deve se evitar lógicas complexas dentro de métodos de construção
        // Principalmente métodos relacionados a carregamento de informações.
    }
    // Método para selecionar heroi.
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    };
    // Método para recuperar lista de herois do Serviço.
    HeroesComponent.prototype.getHeroes = function () {
        // Não ira funcionar devido a alteração para utilização de Promise
        // this.heroes = this.heroService.getHeroes();
        var _this = this;
        // A Promise possui 2 métodos: Then e Catch. Then ocorre em sucesso. Catch, em erros.
        // "heroes" antes de "=>" é o parametro passado pelo Then.
        this._heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message;
    };
    // Método invocado no momento que o componente termina de inicializar.
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // Método invocado ao desejar detalhes de um heroi.
    HeroesComponent.prototype.gotoDetail = function () {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        var link = ['HeroDetail', { id: this.selectedHero.id }];
        // Invocar navegação.
        this._router.navigate(link);
    };
    // Método para gerenciar criação de um novo heroi.
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    // Método para fechar parte da interface para salvar heroi.
    // Quando ocorre evento "close" do HeroDetail é enviado um heroi, que foi salvo.
    // Este heroi então é passado para este método.
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    // Método para deletar heroi.
    HeroesComponent.prototype.delete = function (hero, event) {
        var _this = this;
        // Parar evento?
        event.stopPropagation();
        // Invocar serviço para deletar heroi.
        this._heroService
            .delete(hero)
            .then(function (response) {
            // Filtrar lista por sometne herois que não são o heroi deletado.
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroesComponent = __decorate([
        core_1.Component({
            // Seletor CSS para Bootstrap do Componente.
            selector: 'my-heroes',
            // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
            // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
            directives: [hero_detail_component_1.HeroDetailComponent],
            // Template do Componente.
            templateUrl: 'app/templates/heroes.component.html',
            // Styles do Componente.
            styleUrls: ['app/styles/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map