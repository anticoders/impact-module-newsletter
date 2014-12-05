Modules.Newsletter.init.publications = function(m, params) {


  Meteor.publish(m.nameFor('newsletters'), function() {
    return m.Newsletters.find({});
  });

  Meteor.publish(m.nameFor('subscribers'), function() {
    return m.Subscribers.find({});
  });

  Meteor.publish(m.nameFor('emails'), function() {
    return m.Emails.find({});
  });

};
