import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitizenModule } from './citizen/citizen.module';
import { InspectorModule } from './inspector/inspector.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CitizenModule,
    InspectorModule,
  ],
  exports: [

  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar,Base64ToGallery,Camera,File],
  bootstrap: [AppComponent]
})
export class AppModule {}
