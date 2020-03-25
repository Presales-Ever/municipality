import { RequestTimelineComponent } from './request-timeline/request-timeline.component';
import { CitizenPage2Component } from './citizen-page-2/citizen-page-2.component';
import { CitizenComponent } from './citizen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizenRoutingModule } from './citizen-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewRequestSelectionComponent } from './new-request-selection/new-request-selection.component';
import { NewRequestDetailsComponent } from './new-request-details/new-request-details.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    CitizenComponent,
    HomeComponent,
    CitizenPage2Component,
    ArchiveComponent,
    NewRequestSelectionComponent,
    NewRequestDetailsComponent,
    NewRequestFormComponent,
    RequestTimelineComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    CitizenRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ]
})
export class CitizenModule { }
