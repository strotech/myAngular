import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerEditComponent } from './mixer-edit.component';

describe('MixerEditComponent', () => {
  let component: MixerEditComponent;
  let fixture: ComponentFixture<MixerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
