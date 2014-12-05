Modules.Newsletter.controllers.emailList = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return [
               Meteor.subscribe(m.nameFor('emails')),
               Meteor.subscribe(m.nameFor('newsletters')),
             ];
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
      };
    },

  });
};
