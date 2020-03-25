import { Page2Component } from './page2/page2.component';
import { InspectorHomeComponent } from './inspector-home/inspector-home.component';
import { InspectorComponent } from './inspector.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
        path: 'page2',
        component: Page2Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorRoutingModule { }
