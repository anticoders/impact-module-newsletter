Template.newsletter_subscriberList.helpers({

  'subscribers': function () {
    return Template.currentModule().Subscribers
        .find({}, {sort: {updatedAt: -1, createdAt: -1}});
  },

  'length': function (arr) {
    return arr.length;
  },

  'length_more_than_5': function (arr) {
    return arr.length > 5;
  },

  'newsletter_names': function (newsletters) {
    return _.chain(newsletters)
              .map(function (each) {
                return Template.currentModule().Newsletters.findOne(each.newsletterId);
              })
              .pluck('name')
              .first(5)
              .value();
  },

});

Template.newsletter_subscriberList.events = {

  "click #addSubscriber" : function (e, t) {

    // modal with edit?
    
  },

  'click .name': function (e, t) {
    NewsletterHelpers.changeField(
      t.data.m.Subscribers,
      this._id, 
      'name',
      "subscriber name " + this.name)
  },

  'click .email': function (e, t) {
    NewsletterHelpers.changeField(
      t.data.m.Subscribers,
      this._id, 
      'email',
      "the email address " + this.email)
  },

  'click .newsletters': function (e, t) {
    // QUESTION: Is this how I should transfer data?
    var that = this;
    AntiModals.overlay('newsletter_modalSubscribedNewsletters', {data: _.extend(t, {dataSubscriber: that})});
  },

  "click .remove.circle " : function (e, t) {

    var text = "Do you really want to delete subscriber " + this.email + "?";
    var subscriberId = this._id;

    AntiModals.confirm(text, function (error, result) {
      if (!!result) {
        t.data.m.Subscribers
          .remove({_id: subscriberId});
      }
    });

  }

};
