import { Page2Component } from './page2/page2.component';
import { InspectorHomeComponent } from './inspector-home/inspector-home.component';
import { InspectorComponent } from './inspector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectorRoutingModule } from './inspector-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    InspectorComponent,
    InspectorHomeComponent,
    Page2Component
  ],
  imports: [
    CommonModule,
    InspectorRoutingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ]
})
export class InspectorModule { }
