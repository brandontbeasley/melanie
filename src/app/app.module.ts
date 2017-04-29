// core & third party
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './detail/detail.component';

// services
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {  component: DetailComponent, path: 'detail/:id' },
      {  path: '**', pathMatch: 'full', redirectTo: 'detail/Home' }
    ]),
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
