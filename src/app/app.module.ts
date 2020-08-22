import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventsListResolverService,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe


} from './events/index'


import {EventsAppComponent} from './events-app.component';
import {Error404Component} from './Errors/404.component';
import { JQ_TOKEN,TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { AuthService } from './user/auth.service'
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

let toastr : Toastr =   window['toastr'];
let jquery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
    { provide : TOASTR_TOKEN, useValue: toastr}, 
    { provide : JQ_TOKEN, useValue: jquery}, 
    EventRouteActivator,
    EventsListResolverService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component : CreateEventComponent) {

  if(component.isDirty) {
    return window.confirm('not saved')
  }

  return true
}
