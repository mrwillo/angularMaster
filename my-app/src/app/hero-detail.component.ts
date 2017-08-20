/**
 * Created by willo on 8/20/17.
 */
import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label> {{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
