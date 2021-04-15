import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Superhero } from '../../superhero.model';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {
  @Input('superGuy') sh: Superhero;
  @Output() superHeroSelectedEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSuperheroSelected() {
    this.superHeroSelectedEventEmitter.emit();
  }


}
