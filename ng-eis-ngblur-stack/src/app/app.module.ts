/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CoreModule } from './@core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//Third Party Imports
import { UIRouterModule } from '@uirouter/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

//Custom Components/Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login/login.service';
import { LoginUserEffectService } from './store/effects/login-user-effect.service';

// Initial Store values
import {INITIAL_APPLICATION_STATE} from './store/application-state';
//Implement reducers
import * as reducerFunctions from './store/reducers/store-reducer';

@NgModule({
  declarations: [AppComponent,LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    StoreModule.provideStore(reducerFunctions.storeReducer,INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoginUserEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    LoginService
  ],
})
export class AppModule {
}
