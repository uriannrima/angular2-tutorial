// Imports
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Hero } from '../models/hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/templates/hero-form.component.html'
})
export class HeroFormComponent {
    // Lista de Super Poderes
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    // Heroi default.
    hero: Hero = new Hero();

    // Form foi submetido?
    submitted = false;
    
    // Form esta ativo?
    active = true;

    // Método de Submit do Form.
    onSubmit() {
        this.submitted = true;
    }

    // Método que retorna JSON de Diagnostico do Modelo.
    get diagnostic() {
        return JSON.stringify(this.hero);
    }

    // Método para recriar o formulário vazio.
    newHero() {
        // Recriar hero.
        this.hero = new Hero();
        
        // Desativar o form.
        this.active = false;
        
        // Aguardar 0ms e reativar o form.
        // Com isso, as validações deste são "recriadas".
        setTimeout(() => this.active = true, 0);
    }
}
