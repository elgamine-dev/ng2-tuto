import { Component, Input  } from '@angular/core';
import { Hero } from './hero';

@Component ({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}}</h2>
            <div>id: {{hero.id}}</div>
            <div>name: {{hero.name}}</div>
            <div>
            <label>name :</label>
            <input [(ngModel)]="hero.name">
            </div>
     </div>
    `

})
export class HeroDetailComponent {
    @Input() hero: Hero;
}