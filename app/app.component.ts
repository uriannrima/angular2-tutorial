// Importar Component do Core do Angular.
import { Component } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Importar Hero Detail Component.
import { HeroDetailComponent } from './hero-detail.component';

// Definição do Comopnente AppComponent.
@Component({
    // Seletor CSS para Bootstrap do Componente.
    selector: 'my-app',
    
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
    styles:[`
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
export class AppComponent {
    // Titulo do App.
    title = 'Tour of Heroes';

    // Listagem de Herois.
    heroes = HEROES;

    // Heroi selecionado.
    selectedHero: Hero;

    // Evento para selecionar heroi.
    onSelect(hero: Hero) {
        this.selectedHero = hero;
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