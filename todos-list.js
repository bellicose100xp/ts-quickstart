if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var show_properties_1 = require('./show-properties');
var TodosListComponent = (function () {
    function TodosListComponent() {
        this.todos = ["bark bark", "jump the rope"];
    }
    TodosListComponent.prototype.addTodo = function (val) {
        this.todos.push(val);
    };
    TodosListComponent.prototype.displayTodos = function ($event) {
        if ($event.which === 13) {
            this.todos.push($event.target.value);
            $event.target.value = null;
        }
    };
    TodosListComponent.prototype.tooMuchBark = function () {
        return this.todos.length > 2;
    };
    TodosListComponent = __decorate([
        angular2_1.Component({
            selector: 'todos-list'
        }),
        angular2_1.View({
            template: "\n        <input #name (keyup)=\"displayTodos($event)\">\n        <button (click)=\"addTodo(name.value)\">Add Todo</button>\n        <ul>\n            <li *for=\"#todo of todos\">\n            {{todo}}\n            </li>\n        </ul>\n        <p *if=\"tooMuchBark()\">This dog barks too much yo!</p>\n        <display></display>\n    ",
            directives: [angular2_1.For, show_properties_1.DisplayComponent, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [])
    ], TodosListComponent);
    return TodosListComponent;
})();
exports.TodosListComponent = TodosListComponent;
