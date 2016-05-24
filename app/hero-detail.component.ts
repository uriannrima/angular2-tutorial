// Importar Component e Inpt Core do Angular
import { Component, Input } from '@angular/core';

// Importar modelo Hero.
import { Hero } from './hero';

// Criar Componente HeroDetailComponent
@Component({
    // Seletor CSS.
    selector: 'my-hero-detail',
    
    // Template do Componente.
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    // Como Hero será uma objeto vindo do componente pai (externo) ao HeroDetailComponent
    // A variavel então precisa ser do tipo "@Input()", ou o Angular ira gerar um erro.
    @Input()
    hero: Hero;
}