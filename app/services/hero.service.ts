// Importar Injectable do Core do Angular
import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

// RxJS possui extensões para o TS/JS, neste caso, importando extensão de "toPromise()".
import 'rxjs/add/operator/toPromise';

// Importar lista de mock-heroes.
// Não mais utilizado.
// import { HEROES } from './mock-heroes';

// Importar modelo de Hero.
import { Hero } from '../models/hero';

// Injectable determina que este objeto/classe pode ser injetado em um outro componente.
@Injectable()
export class HeroService {

    // Definir URL da API.
    private heroesUrl = 'app/heroes';

    // Criar serviço injetando referencia ao Http.
    constructor(private http: Http) { }

    getHero(id: number) : Promise<Hero> {
        // Utilizar método do serviço
        return this.getHeroes().then(
            heroes => {
                return heroes.filter(hero => hero.id == id)[0];
            }
        );
    }

    // Método para recuperar os Herois via API.
    // Possui um retorno "tipado".
    getHeroes(): Promise<Hero[]> {
        // Retornar uma promise com a listagem de hérois disponiveis.
        // return Promise.resolve(HEROES);

        // Retornar usando HTTP:
        // HTTP retorna um "Observable" porém por enquanto, iremos utilizar "Promises"
        // Para isso, utilizamos a extensão toPromise().
        return this.http.get(this.heroesUrl).toPromise()
            // Response contém dados enviados pelo servidor.
            // Convertemos para json, e enviamos os dados em "data" para quem possui a promise.
            .then(response => response.json().data)
            // Catch irá lidar com erros que ocorrerem.
            .catch(this.handleError);
    }

    // Método para adicionar um novo heroi via API.
    private post(hero: Hero): Promise<Hero> {
        // Definir Headers do POST.
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        // Retornar promise, passando para o método de post a URL, JSON do modelo e headers criados.
        // Em sucesso, retornar os dados informados pela API.
        // Em caso de erro, gerenciar este.
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    // Método para atualizar um heroi via API.
    private put(hero: Hero): Promise<Hero> {
        // Definir Headers do PUT.
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // URL do Put é um pouco diferente
        // Sendo URL + /ID
        let url = `${this.heroesUrl}/${hero.id}`;

        // Retornar promise, passando para o método de put a URL, JSON do modelo e headers criados.
        // Em sucesso, retornar o heroi que foi passado via parametro (pois este é o novo modelo).
        // Em caso de erro, gerenciar este.
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    // Método para deletar um heroi via API.
    delete(hero: Hero) {
        // Definir Headers do delete.
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // URL do Delete é um pouco diferente
        // Sendo URL + /ID
        let url = `${this.heroesUrl}/${hero.id}`;

        // Retornar promise, passando para o método de delete a URL e headers criados.
        // Em caso de erro, gerenciar este.
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // Método para salvar a entidade
    // Como os métodos _post e _put são private, o Save irá realizar a regra de negócio para determinar qual chamar.
    save(hero: Hero): Promise<Hero> {
        // Se possui ID, somente atualizar.
        if (hero.id) {
            return this.put(hero);
        }

        // Se não, criar.
        return this.post(hero);
    }

    // Método para gerenciamento de erro durante operações do service.
    private handleError(error: any) {
        console.error('An error occurred', error);

        // Retornar um "reject" para quem possui a promise.
        return Promise.reject(error.message || error);
    }

}