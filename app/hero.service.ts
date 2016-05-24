// Importar Injectable do Core do Angular
import { Injectable } from '@angular/core';

// Importar lista de mock-heroes.
import { HEROES } from './mock-heroes';

// Importar modelo de Hero.
import { Hero }from './hero';

// Injectable determina que este objeto/classe pode ser injetado em um outro componente.
@Injectable()
export class HeroService {
    
    getHero(id: number) {
        // Retornar um promise.resolve contendo o primeiro elemento de heroes, 
        // cujo seu id seja igual ao parametro id. 
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    // Método para recuperar os Herois.
    getHeroes() {
        // Retornar uma promise com a listagem de hérois disponiveis.
        return Promise.resolve(HEROES);
    }

    // Método para recuperar Herois com "latencia".
    getHeroesSlowly() {
        // Criar nova promisse, cujo retorna um Array de Hero.
        // Resolve é um callback com then e catch. 
        return new Promise<Hero[]>(
            resolve => {
                // Aguardar 4 segundos.
                // () => { } gera função anonima.
                setTimeout(() => {
                    console.log('"Retornou..."');
                    // Invocar resolve passando o Mock-Heroes.
                    resolve(HEROES)
                }, 1500)
            }
        );
    }
}