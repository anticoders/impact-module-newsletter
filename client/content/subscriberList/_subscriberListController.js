Modules.Newsletter.controllers.subscriberList = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return [
               Meteor.subscribe(m.nameFor('newsletters')),
               Meteor.subscribe(m.nameFor('subscribers'))
             ];
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
        },
        m: m,
        // newsletters: m.Newsletters.find({}, {sort: {name: 1}});
      };
    },

  });
};
