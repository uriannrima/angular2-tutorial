// Importar Component, Input e OnInit do Core do Angular
import { Component, Input, OnInit } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Importar RouteParams para recuperação de parameterId.
import { RouteParams } from '@angular/router-deprecated';

// Importar HeroService contendo meios de recuperar lista de herois.
import { HeroService } from './hero.service';

// Criar Componente HeroDetailComponent
@Component({
    // Seletor CSS.
    selector: 'my-hero-detail',

    // Template do Componente.
    templateUrl: 'app/hero-detail.component.html',
    
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // Como Hero será uma objeto vindo do componente pai (externo) ao HeroDetailComponent
    // A variavel então precisa ser do tipo "@Input()", ou o Angular ira gerar um erro.
    @Input()
    hero: Hero;

    // Construir objeto injetando HeroService e RouteParams.
    constructor(private heroService: HeroService, private routeParams: RouteParams) { }

    // Evento invocado no momento que o componente termina de inicializar.
    ngOnInit() {
        // Recuperar "id" do routeParams, e como este vem como "string" soma-lo com "+" o converte para "int".
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id).then(
            hero => {
                this.hero = hero
            }
        );
    }
    
    // Evento para retornar no histórico de navegação.
    goBack() {
        window.history.back();
    }
}