import { Component, OnInit } from '@angular/core';
import { Superpower } from '../shared/superpower.model';

@Component({
  selector: 'app-mixer-list',
  templateUrl: './mixer-list.component.html',
  styleUrls: ['./mixer-list.component.css']
})
export class MixerListComponent implements OnInit {
  superpowers: Superpower[] = [
    new Superpower('Super Strength', 150),
    new Superpower('X-Ray Vision', 100)
  ]
  constructor() { }

  ngOnInit() {
  }
  onSuperpowerAdded(sp: Superpower) {
    this.superpowers.push(sp);
  }

}
