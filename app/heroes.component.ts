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

    // Variavel para controle da interface.
    addingHero: boolean;

    // Variavel para manter valor de error.
    error: any;

    // Utilizamos o Constructor para Injetar objetos no Componente.
    // Desta forma, HeroService é injetado no AppComponent e é criado uma referência privada para este como "heroService".
    constructor(private _router: Router, private _heroService: HeroService) {

        // Invocar listagem de herois.
        // PORÉM ISTO É ERRADO!
        // this.getHeroes();
        // Deve se evitar lógicas complexas dentro de métodos de construção
        // Principalmente métodos relacionados a carregamento de informações.
    }

    // Método para selecionar heroi.
    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    // Método para recuperar lista de herois do Serviço.
    getHeroes() {
        // Não ira funcionar devido a alteração para utilização de Promise
        // this.heroes = this.heroService.getHeroes();

        // A Promise possui 2 métodos: Then e Catch. Then ocorre em sucesso. Catch, em erros.
        // "heroes" antes de "=>" é o parametro passado pelo Then.
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error); // TODO: Display error message;
    }

    // Método invocado no momento que o componente termina de inicializar.
    ngOnInit() {
        this.getHeroes();
    }

    // Método invocado ao desejar detalhes de um heroi.
    gotoDetail() {
        // Criar array definindo um RouteLink, com Nome e Parameter Id
        let link = ['HeroDetail', { id: this.selectedHero.id }];

        // Invocar navegação.
        this._router.navigate(link);
    }

    // Método para gerenciar criação de um novo heroi.
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    // Método para fechar parte da interface para salvar heroi.
    // Quando ocorre evento "close" do HeroDetail é enviado um heroi, que foi salvo.
    // Este heroi então é passado para este método.
    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    // Método para deletar heroi.
    delete(hero: Hero, event: any) {
        // Parar evento?
        event.stopPropagation();

        // Invocar serviço para deletar heroi.
        this._heroService
            .delete(hero)
            .then(response => {
                // Filtrar lista por sometne herois que não são o heroi deletado.
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
}