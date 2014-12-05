Modules.Newsletter.controllers.editEmail = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return [
               Meteor.subscribe(m.nameFor('emails'), this.params._id),
               Meteor.subscribe(m.nameFor('newsletters')),
               Meteor.subscribe(m.nameFor('subscribers')),
             ];
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
        email: m.Emails.findOne(this.params._id)
      };
    },

  });
};
