import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';


//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { InterceptorService } from './auth/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    [
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
