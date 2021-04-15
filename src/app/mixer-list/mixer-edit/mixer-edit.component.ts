import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Superpower } from 'src/app/shared/superpower.model';

@Component({
  selector: 'app-mixer-edit',
  templateUrl: './mixer-edit.component.html',
  styleUrls: ['./mixer-edit.component.css']
})
export class MixerEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('levelInput') levelInputRef: ElementRef;
  @Output('powerAddedEvent') addPowerEmitter = new EventEmitter<Superpower>();
  constructor() { }

  ngOnInit() {
  }

  onPowerAdd() {
    const powerName = this.nameInputRef.nativeElement.value;
    const powerLevel = this.levelInputRef.nativeElement.value;
    const addedSuperPower = new Superpower(powerName, powerLevel)
    this.addPowerEmitter.emit(addedSuperPower);
  }
}
