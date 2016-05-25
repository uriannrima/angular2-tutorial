// Importar Component, Input, Output, OnInit e EventEmitter do Core do Angular
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

// Importar modelo Hero.
import { Hero } from '../models/hero';

// Importar _routeParams para recuperação de parameterId.
import { RouteParams } from '@angular/router-deprecated';

// Importar _heroService contendo meios de recuperar lista de herois.
import { HeroService } from '../services/hero.service';

// Criar Componente HeroDetailComponent
@Component({
    // Seletor CSS.
    selector: 'my-hero-detail',

    // Template do Componente.
    templateUrl: 'app/templates/hero-detail.component.html',

    styleUrls: ['app/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // Como Hero será uma objeto vindo do componente pai (externo) ao HeroDetailComponent
    // A variavel então precisa ser do tipo "@Input()", ou o Angular ira gerar um erro.
    @Input()
    hero: Hero;

    // Como HeroDetail precisa informar para quem o "invocou" que há dados saindo
    // É utilizado um "Output" que neste caso, é um EventEmitter.
    @Output()
    close = new EventEmitter();


    // Variavel para gerenciar se houve navegação.
    navigated: boolean;

    // Variavel para manter valor de error.
    error: any;

    // Construir objeto injetando HeroService e RouteParams.
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) { }

    // Método invocado no momento que o componente termina de inicializar.
    ngOnInit() {
        // Recuperar "id" do _routeParams, e como este vem como "string" soma-lo com "+" o converte para "int".
        if (this._routeParams.get("id") !== null) {
            let id = +this._routeParams.get("id");
            this.navigated = true;
            this._heroService.getHero(id).then(
                hero => {
                    this.hero = hero
                }
            );
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }

    // Método para salvar o heroi criado/atualizado.
    save() {
        this._heroService.save(this.hero).then(
            hero => {
                this.hero = hero;
                this.goBack(hero);
            }
        ).catch(error => {
            // TODO: mostrar mensagem de erro.
            this.error = error;
        });
    }

    // Método para retornar no histórico de navegação.
    // Enviar de volta para quem invocou este comopnente o Heroi salvo.
    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        
        // Se alguém navegou para este componente, retornar para ele.
        if (this.navigated) {
            window.history.back();
        }
    }
}