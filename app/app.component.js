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
// Importar Component do Core do Angular
var core_1 = require('@angular/core');
// Importar HeroService contendo meios de recuperar lista de herois.
var hero_service_1 = require('./hero.service');
// Importar HeroesComponent contendo listagem dos herois.
var heroes_component_1 = require('./heroes.component');
// Importar DashboardComponent contendo top herois.
var dashboard_component_1 = require('./dashboard.component');
// Importar DashboardComponent contendo top herois.
var hero_detail_component_1 = require('./hero-detail.component');
// Importar Configurações de Router, Directives e Providers (Services).
var router_deprecated_1 = require('@angular/router-deprecated');
// Configuração de Rota
// O Router irá colocar o conteudo do componente referenciado exatamente abaixo de <router-outlet>
var AppComponent = (function () {
    function AppComponent() {
        // Titulo da Aplicação.
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                // Path analisado no Browser.
                path: '/heroes',
                // Nome para utilização no Router Link
                name: 'Heroes',
                // Componente que será invocado.
                component: heroes_component_1.HeroesComponent
            },
            {
                // Path analisado no Browser.
                path: '/dashboard',
                // Nome para utilização no Router Link
                name: 'Dashboard',
                // Componente que será invocado.
                component: dashboard_component_1.DashboardComponent,
                // Esta rota é considerada a padrão?
                useAsDefault: true
            },
            {
                // Path analisado no Browser contendo "parameterId".
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            }
        ]),
        core_1.Component({
            // Seletor CSS.
            selector: 'my-app',
            styleUrls: ['app/app.component.css'],
            // Template do Componente.
            template: "\n        <h1>{{title}}</h1>\n        <!-- routerLink define qual Route esta sendo definida ao clicar naquele elemento. -->\n        <!-- Heroes ir\u00E1 nos \"redirecionar\" para o Componente HeroesComponent. -->\n        <!-- \n            Como AppComponent contem o \"root\" para a navega\u00E7\u00E3o e teoricamente faz o route para outras paginas\n            ela \u00E9 considerada uma Router Component. \n        -->\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Heroes']\">Heroes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
            // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            // Providers contem a lista de componentes/classes injetadas no componente.
            // Sem este, o injetor não consegue determinar quais objetos estão sendo injetados na construção.
            providers: [hero_service_1.HeroService, router_deprecated_1.ROUTER_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map