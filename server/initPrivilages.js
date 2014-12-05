Modules.Newsletter.init.privileges = function(m, params) {

  m.Newsletters.allow({
    insert: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    update: function(userId, items, fields, modifier) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    remove: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    }
  });

  m.Subscribers.allow({
    insert: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    update: function(userId, items, fields, modifier) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    remove: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    }
  });

  m.Emails.allow({
    insert: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    update: function(userId, items, fields, modifier) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    },
    remove: function(userId, items) {
      var user = Meteor.users.findOne(userId);
      return (!!user) && user.admin;
    }
  });

};
