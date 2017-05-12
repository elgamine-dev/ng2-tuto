import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <menu>
            <a routerLink="/">Dash</a>
            <a routerLink="/heroes">Mes héros</a>
        </menu>     
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
     title = 'Tour d\'Afrique (ce beau pays!)'

}
