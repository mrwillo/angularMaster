/**
 * Created by willo on 7/5/17.
 */
angular.module("todoList").component("todoList",{
	templateUrl:"todo-list/todo-list.template.html",
	controller: function(){
		var comp = this;
		comp.todoItems = [];
		comp.todoItem = {};
		comp.addItem= function() {
			if (comp.todoItem.name && comp.todoItem.name.length >3 ) {
				comp.todoItems.push(comp.todoItem);
				comp.todoItem = {};
			} else {
				comp.todoItem.error = "input-err"
				
			}
		}
	}
})

"~!@#$%^&C*B(A)[]-_".replace(/[^a-zA-Z0-9-_\[\]]/g,"")
