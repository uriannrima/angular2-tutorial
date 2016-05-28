// Imports
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Hero } from '../models/hero';
import { BaseComponent, Effects } from './base.component';

// Importar _routeParams para recuperação de parameterId.
import { RouteParams } from '@angular/router-deprecated';

// Importar _heroService contendo meios de recuperar lista de herois.
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/templates/hero-form.component.html'
})
export class HeroFormComponent extends BaseComponent implements OnInit {
    // Lista de Super Poderes
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    // Heroi default.
    hero: Hero = new Hero();

    // Form foi submetido?
    submitted = false;

    // Form esta ativo?
    active = true;

    constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
        super();
    }

    // ngOnInit invocado para apresentar os componentes padrões.
    ngOnInit() {
        if (this._routeParams.get("id") !== null) {
            let id = +this._routeParams.get("id");
            this._heroService.getHero(id).then(
                hero => {
                    this.hero = hero;
                    this.show("#pnlHeroForm");
                }
            );
        } else {
            this.hero = new Hero();
            this.show("#pnlHeroForm");
        }
    }

    onReturn() {
        if (this.hero.id !== null) {
            window.history.back();
        }
    }

    // Método de Submit do Form.
    onSubmit() {
        // Esconder pnlHeroForm
        this.hide("#pnlHeroForm", () => {
            this._heroService.save(this.hero).then(
                hero => {
                    this.hero = hero;
                    // Remover componentes que não devem aparecer.
                    this.submitted = true;
                    // Mostrar detalhes.
                    this.show("#pnlHeroDetails");
                }
            );
        });
    }

    onEdit() {
        this.hide("#pnlHeroDetails", () => {
            this.submitted = false;
            this.show("#pnlHeroForm");
        });
    }

    // Método que retorna JSON de Diagnostico do Modelo.
    get diagnostic() {
        return JSON.stringify(this.hero);
    }

    // Método para recriar o formulário vazio.
    newHero() {
        // Sumir o form.        
        this.hide("#pnlHeroForm", () => {

            // Recriar HeroForm.
            this.reacreateForm();

            // Mostrar o form.
            this.show("#pnlHeroForm");
        });
    }

    // Recriar formulário de heroi.
    // O formulário não retorna para "pristine" somente ao limpar a variavel que ele referencia.
    // Devido a isso, como workaround, devemos "recria-lo", utilizando *ngIf.
    // "Active" destroi e reconstroi o formulário.
    reacreateForm() {
        // "Destrui-lo"
        this.active = false;

        // Limpar heroi.
        this.hero = new Hero();

        // Aguardar 0 ms para "recriar"" formulário.
        setTimeout(() => {
            // "Recria-lo"
            this.active = true;
        })
    }
}
