// server-side of newsletter removal,
// as multi updates are not allowed on client-side

// QUESTION: And how to access this collection server-side?

Meteor.methods({

  removeNewsletter: function (newsletterId) {

    // or maybe rather disable?
    // (otherwise there will be a problem in emails history)

    Modules.Newsletter.Newsletters
      .remove({_id: newsletterId});

    Modules.Newsletter.Subscribers
      .update(
        {newsletters: newsletterId},
        {$pull: {newsletters: {newsletterId: newsletterId}}},
        {multi: true}
      );

    return true;

  }

});

