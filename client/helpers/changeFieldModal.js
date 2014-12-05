// mrt:meteor-editable is also a nice choice

// AntiModals = {};
// no idea why it is not yet loaded
// even worse, setting it to {} also destroys it

NewsletterHelpers = {};

NewsletterHelpers.changeField = function (collection, documentId, fieldName, what) {
  AntiModals.prompt({
    title:    'Update',
    message:  "Change name of " + what + " to:",
    ok:       'Change',
    cancel:   'Cancel',
    closer:   true,
  }, function (error, result) {
    if (!!result && !!result.value) {

      var changes = {};
      changes[fieldName] = result.value;

      collection.update(documentId, {$set: changes});

    }
  });
}