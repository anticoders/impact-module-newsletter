Modules.Newsletter.controllers.newEmail = function(m, params) {
  return Impact.controllers.contentController.extend({

    // QUESTION: It takes some time to load
    // (with intermediate step of an empty newsletter list).
    // Can I speed it?

    action: function() {
      var _id = m.Emails.insert({
        newsletterId:  this.params._id,
        sent:          false,
      });

      location.replace(
        Router.path(m.nameFor('editEmail'), {_id: _id})
      );
    },

  });
};
