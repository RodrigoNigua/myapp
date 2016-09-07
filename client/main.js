import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.SUMA.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.SUMA.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.SUMA.events({
  'click #SUMA'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click #RESTA'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() - 1);
  },
});
