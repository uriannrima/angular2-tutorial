// Importar Component do Core do Angular
import { Component } from '@angular/core';

// Importar HeroService contendo meios de recuperar lista de herois.
import { HeroService } from '../services/hero.service';

// Importar HeroesComponent contendo listagem dos herois.
import { HeroesComponent } from './heroes.component';

// Importar DashboardComponent contendo top herois.
import { DashboardComponent } from './dashboard.component';

// Importar DashboardComponent contendo top herois.
import { HeroDetailComponent } from './hero-detail.component';

// Importar HeroFormComponent contendo formulário de heroi.
import { HeroFormComponent } from './hero-form.component';

// Importar Configurações de Router, Directives e Providers (Services).
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

// Configuração de Rota
// O Router irá colocar o conteudo do componente referenciado exatamente abaixo de <router-outlet>
@Routes([
    {
        // Path analisado no Browser.
        path: '/heroes',
        // Componente que será invocado.
        component: HeroesComponent
    },
    {
        // Path analisado no Browser.
        path: '/',
        // Componente que será invocado.
        component: DashboardComponent,
    },
    {
        // Path analisado no Browser contendo "parameterId".
        path: '/detail/:id',
        component: HeroDetailComponent
    },
    {
        // Path analisado no Browser contendo "parameterId".
        path: '/form/:id',
        component: HeroFormComponent
    }
])
// Definição do Comopnente AppComponent.
@Component({
    // Seletor CSS.
    selector: 'my-app',

    styleUrls: ['app/styles/app.component.css'],

    // Template do Componente.
    templateUrl: 'app/templates/app.component.html',

    // Com "Directives" informamos para o Component quais elementos HTML ele deve considerar
    // Sem este, ele ve <my-hero-detail> e considera uma tag comum.
    directives: [ROUTER_DIRECTIVES],

    // Providers contem a lista de componentes/classes injetadas no componente.
    // Sem este, o injetor não consegue determinar quais objetos estão sendo injetados na construção.
    providers: [HeroService, ROUTER_PROVIDERS],
})
export class AppComponent {
    // Titulo da Aplicação.
    title = 'Tour of Heroes';
}
