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
var http_1 = require('@angular/http');
// RxJS possui extensões para o TS/JS, neste caso, importando extensão de "toPromise()".
require('rxjs/add/operator/toPromise');
// Injectable determina que este objeto/classe pode ser injetado em um outro componente.
var HeroService = (function () {
    // Criar serviço injetando referencia ao Http.
    function HeroService(http) {
        this.http = http;
        // Definir URL da API.
        this.heroesUrl = 'app/heroes';
    }
    HeroService.prototype.getHero = function (id) {
        // Utilizar método do serviço
        return this.getHeroes().then(function (heroes) {
            return heroes.filter(function (hero) { return hero.id == id; })[0];
        });
    };
    // Método para recuperar os Herois via API.
    // Possui um retorno "tipado".
    HeroService.prototype.getHeroes = function () {
        // Retornar uma promise com a listagem de hérois disponiveis.
        // return Promise.resolve(HEROES);
        // Retornar usando HTTP:
        // HTTP retorna um "Observable" porém por enquanto, iremos utilizar "Promises"
        // Para isso, utilizamos a extensão toPromise().
        return this.http.get(this.heroesUrl).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Método para adicionar um novo heroi via API.
    HeroService.prototype.post = function (hero) {
        // Definir Headers do POST.
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        // Retornar promise, passando para o método de post a URL, JSON do modelo e headers criados.
        // Em sucesso, retornar os dados informados pela API.
        // Em caso de erro, gerenciar este.
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Método para atualizar um heroi via API.
    HeroService.prototype.put = function (hero) {
        // Definir Headers do PUT.
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // URL do Put é um pouco diferente
        // Sendo URL + /ID
        var url = this.heroesUrl + "/" + hero.id;
        // Retornar promise, passando para o método de put a URL, JSON do modelo e headers criados.
        // Em sucesso, retornar o heroi que foi passado via parametro (pois este é o novo modelo).
        // Em caso de erro, gerenciar este.
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    // Método para deletar um heroi via API.
    HeroService.prototype.delete = function (hero) {
        // Definir Headers do delete.
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // URL do Delete é um pouco diferente
        // Sendo URL + /ID
        var url = this.heroesUrl + "/" + hero.id;
        // Retornar promise, passando para o método de delete a URL e headers criados.
        // Em caso de erro, gerenciar este.
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Método para salvar a entidade
    // Como os métodos _post e _put são private, o Save irá realizar a regra de negócio para determinar qual chamar.
    HeroService.prototype.save = function (hero) {
        // Se possui ID, somente atualizar.
        if (hero.id) {
            return this.put(hero);
        }
        // Se não, criar.
        return this.post(hero);
    };
    // Método para gerenciamento de erro durante operações do service.
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        // Retornar um "reject" para quem possui a promise.
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map