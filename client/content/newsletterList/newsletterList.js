Template.newsletter_newsletterList.helpers({

  'newsletters': function () {
    return Template.currentModule().Newsletters
      .find({}, {sort: {createdAt: -1}});
  },

  'subscriberCount': function (newsletterId) {
    return Template.currentModule().Subscribers
             .find({newsletters: {$elemMatch: {newsletterId: newsletterId}}})
             .count();
  },

});

Template.newsletter_newsletterList.events = {

  //"click .fa.envelope-o" via link/routing

  "click .remove.circle" : function () {

    var text = "Do you really want to delete newsletter " + this.name + "?";
    var newsletterId = this._id;

    AntiModals.confirm(text, function (error, result) {
      console.log(result);
      if (!!result) {
        Meteor.call("removeNewsletter", newsletterId, function (error, result) {  });
      }
    });

  },

  'click .name': function (e, t) {
    NewsletterHelpers.changeField(
      t.data.m.Newsletters,
      this._id, 
      'name',
      "the newsletter " + this.name)
  }

};