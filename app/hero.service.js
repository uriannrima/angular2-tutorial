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
// Importar Injectable do Core do Angular
var core_1 = require('@angular/core');
// Importar lista de mock-heroes.
var mock_heroes_1 = require('./mock-heroes');
// Injectable determina que este objeto/classe pode ser injetado em um outro componente.
var HeroService = (function () {
    function HeroService() {
    }
    // Método para recuperar os Herois.
    HeroService.prototype.getHeroes = function () {
        // Retornar uma promise com a listagem de hérois disponiveis.
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    // Método para recuperar Herois com "latencia".
    HeroService.prototype.getHeroesSlowly = function () {
        // Criar nova promisse, cujo retorna um Array de Hero.
        // Resolve é um callback com then e catch. 
        return new Promise(function (resolve) {
            // Aguardar 4 segundos.
            // () => { } gera função anonima.
            setTimeout(function () {
                console.log('"Retornou..."');
                // Invocar resolve passando o Mock-Heroes.
                resolve(mock_heroes_1.HEROES);
            }, 4000);
        });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map