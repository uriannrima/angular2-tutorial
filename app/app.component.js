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
// Definição do Comopnente AppComponent.
var AppComponent = (function () {
    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    function AppComponent(heroService) {
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
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    // Evento para recuperar lista de herois do Serviço.
    AppComponent.prototype.getHeroes = function () {
        // Não ira funcionar devido a alteração para utilização de Promise
        // this.heroes = this.heroService.getHeroes();
        var _this = this;
        // A Promise possui 2 métodos: Then e Catch. Then ocorre em sucesso. Catch, em erros.
        // "heroes" antes de "=>" é o parametro passado pelo Then.
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    // Evento invocado no momento que o componente termina de inicializar.
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent = __decorate([
        core_1.Component({
            // Seletor CSS para Bootstrap do Componente.
            selector: 'my-app',
            // Providers contem a lista de componentes/classes injetadas no componente.
            // Sem este, o injetor não consegue determinar quais objetos estão sendo injetados na construção.
            providers: [hero_service_1.HeroService],
            // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
            // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
            directives: [hero_detail_component_1.HeroDetailComponent],
            // Template do Componente.
            template: "\n        <!-- NgFor e NgIf s\u00E3o structural directives, pois mudam o corpo do DOM. -->\n        <!-- \"*\" determina que neste ponto ser\u00E1 criado um \"Template\", aonde seu escopo \u00E9 \"independente\". -->\n        <!-- Sendo assim \"let hero\" cria uma variavel \"hero\" somente para o escopo do NgFor. -->\n        <!-- Criando um evento (event)=\"methodName(parameter) para manipula\u00E7\u00E3o. \" -->\n        <!-- Bindings: (input) [output] [(two-way-binding)] -->\n        <!-- [class.cssClass] == true/false utilizado para definir um CSS num componente.. -->\n        \n        <h1>{{title}}</h1>\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <!-- Detalhamento ir\u00E1 aqui. -->\n        <!-- Com o one-way-binding tornamos o selectedHero o \"hero\" do componente hero-detail. -->\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
            // Styles do Componente.
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .heroes {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .heroes li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n        .heroes li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n        }\n        .heroes li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .heroes .text {\n            position: relative;\n            top: -3px;\n        }\n        .heroes .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map