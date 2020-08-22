import { FormControl,FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISession} from '../shared/index'



@Component({
    selector: 'create-session',
    templateUrl : './create-session.component.html',
    styles:[`
    em {float : right; color:#E056C5;padding-left : 10px;}
    .error input { background-color : #e5c5c5}
    .error :: -webkit-input-placeholder { color : #999;}
    `],
})


export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelSession = new EventEmitter();
     name : FormControl
     presenter : FormControl
     duration : FormControl
     level : FormControl
     abstract : FormControl
    newSessionForm : FormGroup

    constructor(private router : Router) {
       
    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])
        this.newSessionForm = new FormGroup({
            name : this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.duration,
            abstract : this.abstract

        })
    }

    saveSession(formValues) {
        
        let session : ISession =  {
            id : undefined,
            name : formValues.name,
            presenter : formValues.presenter,
            duration : +formValues.duration,
            level : formValues.level,
            abstract : formValues.abstract,
            voters : []
        }

        this.saveNewSession.emit(session)
    }

    cancel()
    {
        this.cancelSession.emit()
    }

}