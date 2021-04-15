import { Component, OnInit, Input } from '@angular/core';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css']
})
export class SuperheroDetailComponent implements OnInit {
  @Input() superChar: Superhero;
  constructor() { }

  ngOnInit() {
  }

}
