import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitizenComponent } from './citizen.component';

describe('CitizenComponent', () => {
  let component: CitizenComponent;
  let fixture: ComponentFixture<CitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
