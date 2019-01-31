import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

// This marks the class as one that participates in the dependency injection system.The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
@Injectable({
  providedIn: 'root'
  // When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // In this tutorial, HeroService.getHeroes() will return an Observable in part because it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.
    return of(HEROES);
  }
}
