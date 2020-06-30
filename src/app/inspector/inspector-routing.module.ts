import { PinMapComponent } from './pin-map/pin-map.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DutyDetailComponent } from './duty-detail/duty-detail.component';
import { MyDutiesComponent } from './my-duties/my-duties.component';
import { InboxComponent } from './inbox/inbox.component';
import { InspectorHomeComponent } from './inspector-home/inspector-home.component';
import { InspectorComponent } from './inspector.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponentPage } from './calendar/calendar.component';
import { PinsComponent } from './pins/pins.component';


const routes: Routes = [
  {
    path: '',
    component: InspectorComponent,
    children: [
      {
        path: 'home',
        component: InspectorHomeComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'my-duties',
        component: MyDutiesComponent,
      },
      {
        path: 'my-duties/:dutyId',
        component: DutyDetailComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponentPage,
      },
      {
        path: 'pins',
        component: PinsComponent,
      },
      {
        path: 'pin-map',
        component: PinMapComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorRoutingModule { }
