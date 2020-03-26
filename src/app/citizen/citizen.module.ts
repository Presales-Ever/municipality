import { Page2Component } from './../inspector/page2/page2.component';
import { ActiveRequestsComponent } from './active-requests/active-requests.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';


import {
  MatTableModule,
  MatStepperModule,
  MatExpansionModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarComponentPage } from './calendar/calendar.component';
import { RequestReviewComponent } from './request-review/request-review.component';
@NgModule({
  declarations: [
    Page2Component,
    CitizenComponent,
    HomeComponent,
    CalendarComponentPage,
    CitizenPage2Component,
    ArchiveComponent,
    NewRequestSelectionComponent,
    NewRequestDetailsComponent,
    NewRequestFormComponent,
    RequestTimelineComponent,
    RequestReviewComponent,
    ActiveRequestsComponent
  ],
  imports: [
    MatTableModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    NgCalendarModule,
    FilePondModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    CommonModule,
    CitizenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ]
})
export class CitizenModule { }
