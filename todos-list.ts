/**
 * Created by buggy on 5/7/15.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {DisplayComponent} from './show-properties'

@Component({
    selector: 'todos-list'
})

@View({
    template: `
        <input #name (keyup)="displayTodos($event)">
        <button (click)="addTodo(name.value)">Add Todo</button>
        <ul>
            <li *for="#todo of todos">
            {{todo}}
            </li>
        </ul>
        <p *if="tooMuchBark()">This dog barks too much yo!</p>
        <display></display>
    `,
    directives: [For, DisplayComponent, If]
})
export class TodosListComponent {
    todos: Array<string>;
    constructor(){
        this.todos = ["bark bark", "jump the rope"]
    }
    addTodo(val: string){
        this.todos.push(val);
    }
    displayTodos($event){
        if ($event.which === 13){
            this.todos.push($event.target.value);
            $event.target.value = null;
        }
    }
    tooMuchBark(){
        return this.todos.length > 2
    }
}

