Template.newsletter_emailList.helpers({

  'emails': function () {
    return Template.currentModule().Emails
      .find({}, {sort: {updatedAt: -1, createdAt: -1}});
  },

  'newsletterName': function (newsletterId) {
    var newsletter = Template.currentModule().Newsletters.findOne(newsletterId);
    newsletter = newsletter || {name: "(removed)"};  // dealing with removed newsletters
    return newsletter.name;
  },

  'length': function (arr) {
    return !!arr ? arr.length : 0;
  },

});

Template.newsletter_emailList.events = {

  // "click .fa-edit" -> via link

  "click .remove.circle" : function () {

    var text = "Do you really want to delete email " + this.title + "?";
    var emailId = this._id;

    AntiModals.confirm(text, function (error, result) {

      if (!!result) {
        Template.currentModule().Emails.remove(emailId);
      }

    });

  }

};