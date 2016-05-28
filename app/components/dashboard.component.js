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
// Importar Component e OnInit do Core do Angular
var core_1 = require('@angular/core');
// Importar serviço HeroService para consumo de informações de heroi.
var hero_service_1 = require('../services/hero.service');
// Importar Router do Angular.
var router_deprecated_1 = require('@angular/router-deprecated');
// Definição do Componente DashboardComponent.
var DashboardComponent = (function () {
    // Constuir e injetar HeroService e Router.
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        // Heroes é array do tipo Hero, inicializado com array vazio.
        this.heroes = [];
    }
    // Evento invocado no momento que o componente termina de inicializar.
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes.slice(0, 4);
        });
    };
    // Evento invocado para ir para o detalhamento do heroi.
    DashboardComponent.prototype.gotoDetail = function (hero) {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        var link = ['HeroForm', { id: hero.id }];
        // Invocar navegação.
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            // Seletor CSS
            selector: 'my-dashboard',
            // Template do Componente.
            // template: '<h3>My Dashboard</h3>'
            templateUrl: '/app/templates/dashboard.component.html',
            styleUrls: ['app/styles/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map