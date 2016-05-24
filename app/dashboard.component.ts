// Importar Component e OnInit do Core do Angular
import { Component, OnInit } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Importar serviço HeroService para consumo de informações de heroi.
import { HeroService } from './hero.service';

// Importar Router do Angular.
import { Router } from '@angular/router-deprecated';

// Definição do Componente DashboardComponent.
@Component({
    // Seletor CSS
    selector: 'my-dashboard',

    // Template do Componente.
    // template: '<h3>My Dashboard</h3>'
    templateUrl: '/app/dashboard.component.html',
    
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent {
    // Heroes é array do tipo Hero, inicializado com array vazio.
    heroes: Hero[] = []

    // Constuir e injetar HeroService e Router.
    constructor(private router: Router, private heroService: HeroService) { }

    // Evento invocado no momento que o componente termina de inicializar.
    ngOnInit() {
        this.heroService.getHeroesSlowly().then(
            heroes => {
                this.heroes = heroes.slice(1, 5)
            }
        );
    }

    // Evento invocado para ir para o detalhamento do heroi.
    gotoDetail(hero: Hero) {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        let link = ['HeroDetail', { id: hero.id }];
        
        // Invocar navegação.
        this.router.navigate(link);
    }
}