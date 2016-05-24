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
var hero_service_1 = require('./hero.service');
// Importar Router do Angular.
var router_deprecated_1 = require('@angular/router-deprecated');
// Definição do Comopnente HeroesComponent.
var HeroesComponent = (function () {
    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        // Titulo do App.
        this.title = 'Tour of Heroes';
        // Invocar listagem de herois.
        // PORÉM ISTO É ERRADO!
        // this.getHeroes();
        // Deve se evitar lógicas complexas dentro de métodos de construção
        // Principalmente métodos relacionados a carregamento de informações.
    }
    // Evento para selecionar heroi.
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    // Evento para recuperar lista de herois do Serviço.
    HeroesComponent.prototype.getHeroes = function () {
        // Não ira funcionar devido a alteração para utilização de Promise
        // this.heroes = this.heroService.getHeroes();
        var _this = this;
        // A Promise possui 2 métodos: Then e Catch. Then ocorre em sucesso. Catch, em erros.
        // "heroes" antes de "=>" é o parametro passado pelo Then.
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    // Evento invocado no momento que o componente termina de inicializar.
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // Evento invocado ao desejar detalhes de um heroi.
    HeroesComponent.prototype.gotoDetail = function () {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        var link = ['HeroDetail', { id: this.selectedHero.id }];
        // Invocar navegação.
        this.router.navigate(link);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            // Seletor CSS para Bootstrap do Componente.
            selector: 'my-heroes',
            // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
            // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
            directives: [hero_detail_component_1.HeroDetailComponent],
            // Template do Componente.
            templateUrl: 'app/heroes.component.html',
            // Styles do Componente.
            styleUrls: ['app/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
// Stub de Herois.
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
//# sourceMappingURL=heroes.component.js.map