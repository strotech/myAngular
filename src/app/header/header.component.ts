import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: 'header.component.html',
    selector: 'app-header'
})
export class HeaderComponent {
    @Output('story') featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}