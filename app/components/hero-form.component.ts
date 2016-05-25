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
    powers = ['Select a power', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    // Heroi default.
    hero: Hero = new Hero(1, "", this.powers[0]);

    // Form foi submetido?
    submitted = false;

    // Método de Submit do Form.
    onSubmit() {
        this.submitted = true;
    }

    // Método que retorna JSON de Diagnostico do Modelo.
    get diagnostic() {
        return JSON.stringify(this.hero);
    }
}
