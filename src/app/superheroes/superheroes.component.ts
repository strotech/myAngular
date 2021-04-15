import { Component, OnInit } from '@angular/core';
import { Superhero } from './superhero.model';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  selectedSh: Superhero;
  constructor() { }

  ngOnInit() {
  }

}
