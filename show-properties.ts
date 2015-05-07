/**
 * Created by admin on 5/6/2015.
 */
import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
    selector: 'display'
})

@View({
    template: `
    <p> My Name: {{myName}} </p>
    <p> Current time: {{time}}</p>
    <p> Friends: </p>
    <ul>
        <li *for="#name of names">
        {{name}}
        </li>
    </ul>
    `,
    directives: [For]
})

class DisplayComponent {
    myName:string;
    todos:Array<string>;
    time:string;
    names:Array<string>;

    constructor() {
        this.myName = "Malice";
        this.time = (new Date()).toString();
        setInterval(() => this.time = (new Date()).toString(), 1000);
        this.names = ["Fred", "Angela", "Dania", "Simon", "Eddie", "Elena"]
    }
}

bootstrap(DisplayComponent);
