import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroe';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
        // return new Promise(resolve=> {
        //     setTimeout(()=> resolve(HEROES), 2000);
        // })
    }
}