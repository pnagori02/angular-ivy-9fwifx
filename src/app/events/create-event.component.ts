import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EventService} from './shared/index'


@Component({
    styles:[`
    em {float : right; color:#E056C5;padding-left : 10px;}
    .error input { background-color : #e5c5c5}
    .error :: -webkit-input-placeholder { color : #999;}
    `],
    templateUrl: 'create-event.component.html'
  })


  export class CreateEventComponent {
      newEvent
     isDirty: boolean =  true
    constructor(private router : Router, private eventService : EventService) {

    }

    ngOnInit() {

    }

    cancel()
    {
        this.router.navigate(['/events'])
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
  }