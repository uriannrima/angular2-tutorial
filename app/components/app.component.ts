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
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// Configuração de Rota
// O Router irá colocar o conteudo do componente referenciado exatamente abaixo de <router-outlet>
@RouteConfig([
    {
        // Path analisado no Browser.
        path: '/heroes',
        // Nome para utilização no Router Link
        name: 'Heroes',
        // Componente que será invocado.
        component: HeroesComponent
    },
    {
        // Path analisado no Browser.
        path: '/dashboard',
        // Nome para utilização no Router Link
        name: 'Dashboard',
        // Componente que será invocado.
        component: DashboardComponent,
        // Esta rota é considerada a padrão?
        useAsDefault: true
    },
    {
        // Path analisado no Browser contendo "parameterId".
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        // Path analisado no Browser contendo "parameterId".
        path: '/form',
        name: 'HeroForm',
        component: HeroFormComponent
    }
])
// Definição do Comopnente AppComponent.
@Component({
    // Seletor CSS.
    selector: 'my-app',

    styleUrls: ['app/styles/app.component.css'],

    // Template do Componente.
    template: `
        <h1>{{title}}</h1>
        <!-- routerLink define qual Route esta sendo definida ao clicar naquele elemento. -->
        <!-- Heroes irá nos "redirecionar" para o Componente HeroesComponent. -->
        <!-- 
            Como AppComponent contem o "root" para a navegação e teoricamente faz o route para outras paginas
            ela é considerada uma Router Component. 
        -->
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,

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
