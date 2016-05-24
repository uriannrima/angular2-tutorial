// Importar Component e OnInit do Core do Angular.
import { Component, OnInit } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Importar Hero Detail Component.
import { HeroDetailComponent } from './hero-detail.component';

// Importar serviço HeroService para consumo de informações de heroi.
import { HeroService } from './hero.service';

// Definição do Comopnente AppComponent.
@Component({
    // Seletor CSS para Bootstrap do Componente.
    selector: 'my-app',

    // Providers contem a lista de componentes/classes injetadas no componente.
    // Sem este, o injetor não consegue determinar quais objetos estão sendo injetados na construção.
    providers: [HeroService],

    // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
    // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
    directives: [HeroDetailComponent],

    // Template do Componente.
    template: `
        <!-- NgFor e NgIf são structural directives, pois mudam o corpo do DOM. -->
        <!-- "*" determina que neste ponto será criado um "Template", aonde seu escopo é "independente". -->
        <!-- Sendo assim "let hero" cria uma variavel "hero" somente para o escopo do NgFor. -->
        <!-- Criando um evento (event)="methodName(parameter) para manipulação. " -->
        <!-- Bindings: (input) [output] [(two-way-binding)] -->
        <!-- [class.cssClass] == true/false utilizado para definir um CSS num componente.. -->
        
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <!-- Detalhamento irá aqui. -->
        <!-- Com o one-way-binding tornamos o selectedHero o "hero" do componente hero-detail. -->
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,

    // Styles do Componente.
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
})
// OnInit é uma interface que contem método NgOnInit, parte do Lifecycle do Angular
// Este método será invocado no momento que o componente terminar de inicializar.
export class AppComponent implements OnInit {
    // Titulo do App.
    title = 'Tour of Heroes';

    // Listagem de Herois.
    heroes: Hero[];

    // Heroi selecionado.
    selectedHero: Hero;

    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    constructor(private heroService: HeroService) {

        // Invocar listagem de herois.
        // PORÉM ISTO É ERRADO!
        // this.getHeroes();
        // Deve se evitar lógicas complexas dentro de métodos de construção
        // Principalmente métodos relacionados a carregamento de informações.
    }

    // Evento para selecionar heroi.
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    // Evento para recuperar lista de herois do Serviço.
    getHeroes() {
        // Não ira funcionar devido a alteração para utilização de Promise
        // this.heroes = this.heroService.getHeroes();

        // A Promise possui 2 métodos: Then e Catch. Then ocorre em sucesso. Catch, em erros.
        // "heroes" antes de "=>" é o parametro passado pelo Then.
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    // Evento invocado no momento que o componente termina de inicializar.
    ngOnInit() {
        this.getHeroes();
    }
}

// Stub de Herois.
var HEROES: Hero[] = [
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