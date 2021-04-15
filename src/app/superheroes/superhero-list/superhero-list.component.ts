import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  @Output() superHeroSelectedInGrandchild = new EventEmitter<Superhero>();

  superheroes: Superhero[] = [
    new Superhero('Thor', 'God Of Thunder', 'https://i.imgur.com/6BGINow.jpeg'),
    new Superhero('Iron Man', 'Genius Millionaire Playboy', 'https://i.imgur.com/mGgLmop.jpeg')
  ]
  constructor() { }
  superHeroWasSelected(superdude: Superhero) {
    this.superHeroSelectedInGrandchild.emit(superdude);
  }
  ngOnInit() {
  }

}
