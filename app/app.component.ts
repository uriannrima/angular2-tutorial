// Importar Core do Angular.
import { Component } from '@angular/core';

// Modelo de Heroi.
export class Hero {
    id: number;
    name: string;
}

// Definição do Comopnente AppComponent.
@Component({
    // Seletor CSS para Bootstrap do Componente.
    selector: 'my-app',
    
    // Template do Componente.
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label> name: </label>
            <input [(ngModel)]="hero.name" placeholder="Name">
        </div>
    `
})
export class AppComponent {
    // Titulo do App.
    title = 'Tour of Heroes';
    
    // Heroi do App.
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
