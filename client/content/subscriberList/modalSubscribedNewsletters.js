Template.newsletter_modalSubscribedNewsletters.rendered = function () {
  $('.ui.checkbox').checkbox();
};


Template.newsletter_modalSubscribedNewsletters.helpers({

  'newslettersEnriched': function () {

    var that = this;
    var subscriberId = this.dataSubscriber._id;
    var subscribedNewsletterIds = _.pluck(this.dataSubscriber.newsletters, 'newsletterId');
    return this.data.m.Newsletters.find()
             .map(function (each) {
              var subscribed = _.contains(subscribedNewsletterIds, each._id);
              return _.extend(each, {
                       subscriberId: subscriberId,
                       subscribed:   subscribed,
                     });
    });
  },

});


Template.newsletter_modalSubscribedNewsletters.events = {

  "change .checkbox" : function (e, t) {

    // QUESTION: Is there a way to directly check if checkbox is checked or unchecked?

    var newsletterId = this._id;
    var subscriberId = this.subscriberId;

    if (this.subscribed) {

      // yes, yes: data.data
      t.data.data.m.Subscribers
        .update(subscriberId, {$pull: {newsletters: {newsletterId: newsletterId}}});

    } else {

      t.data.data.m.Subscribers
        .update(subscriberId, {$push: {newsletters: {newsletterId: newsletterId}}});

    }

    this.subscribed = !this.subscribed;

  }

};
