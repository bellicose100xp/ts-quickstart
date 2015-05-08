/**
 * Created by admin on 5/6/2015.
 */
/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TodosListComponent} from './todos-list'

@Component({
    selector: 'my-app'
})

@View({
    template: `
    <h1> Hello {{name}} </h1>
    <todos-list></todos-list>
    `,
    directives: [TodosListComponent]
})

class MyAppComponent {
    name: string;

    constructor(){
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);
