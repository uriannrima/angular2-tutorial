// Importar Component e OnInit do Core do Angular.
import { Component, OnInit } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Importar Hero Detail Component.
import { HeroDetailComponent } from './hero-detail.component';

// Importar serviço HeroService para consumo de informações de heroi.
import { HeroService } from './hero.service';

// Importar Router do Angular.
import { Router } from '@angular/router-deprecated';

// Definição do Comopnente HeroesComponent.
@Component({
    // Seletor CSS para Bootstrap do Componente.
    selector: 'my-heroes',

    // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
    // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
    directives: [HeroDetailComponent],

    // Template do Componente.
    templateUrl: 'app/heroes.component.html',

    // Styles do Componente.
    styleUrls: ['app/heroes.component.css']
})
// OnInit é uma interface que contem método NgOnInit, parte do Lifecycle do Angular
// Este método será invocado no momento que o componente terminar de inicializar.
export class HeroesComponent implements OnInit {
    // Titulo do App.
    title = 'Tour of Heroes';

    // Listagem de Herois.
    heroes: Hero[];

    // Heroi selecionado.
    selectedHero: Hero;

    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    constructor(private router: Router, private heroService: HeroService) {

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

    // Evento invocado ao desejar detalhes de um heroi.
    gotoDetail() {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        
        // Invocar navegação.
        this.router.navigate(link);
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