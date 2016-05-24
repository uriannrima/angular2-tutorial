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
// Importar Component do Core do Angular.
var core_1 = require('@angular/core');
// Importar Hero Detail Component.
var hero_detail_component_1 = require('./hero-detail.component');
// Definição do Comopnente AppComponent.
var AppComponent = (function () {
    function AppComponent() {
        // Titulo do App.
        this.title = 'Tour of Heroes';
        // Listagem de Herois.
        this.heroes = HEROES;
    }
    // Evento para selecionar heroi.
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            // Seletor CSS para Bootstrap do Componente.
            selector: 'my-app',
            // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
            // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
            directives: [hero_detail_component_1.HeroDetailComponent],
            // Template do Componente.
            template: "\n        <!-- NgFor e NgIf s\u00E3o structural directives, pois mudam o corpo do DOM. -->\n        <!-- \"*\" determina que neste ponto ser\u00E1 criado um \"Template\", aonde seu escopo \u00E9 \"independente\". -->\n        <!-- Sendo assim \"let hero\" cria uma variavel \"hero\" somente para o escopo do NgFor. -->\n        <!-- Criando um evento (event)=\"methodName(parameter) para manipula\u00E7\u00E3o. \" -->\n        <!-- Bindings: (input) [output] [(two-way-binding)] -->\n        <!-- [class.cssClass] == true/false utilizado para definir um CSS num componente.. -->\n        \n        <h1>{{title}}</h1>\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <!-- Detalhamento ir\u00E1 aqui. -->\n        <!-- Com o one-way-binding tornamos o selectedHero o \"hero\" do componente hero-detail. -->\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
            // Styles do Componente.
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .heroes {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .heroes li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n        .heroes li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n        }\n        .heroes li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .heroes .text {\n            position: relative;\n            top: -3px;\n        }\n        .heroes .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
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