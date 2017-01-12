import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.helpers({
  todos: function(){
    return Todos.find();
  }
});