
// THIS FILE WAS AUTO-GENERATED BY IMPACT.
// DO NOT MODIFY THIS FILE!
// Write to package.impact.js instead.

Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:module-newsletter',
  version:  '0.1.0',
});

Package.onUse(function (api, where) {
  
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);


  //-- IMPACT: FILES --//

  api.addFiles([
    "both/_index.js",
    "both/init.js",
    "both/model.js",
    "both/routes.js",
  ], ["client", "server"]);


  api.addFiles([
    "client/content/editEmail/editEmail.html",
    "client/content/emailList/emailList.html",
    "client/content/newsletterList/addNewsletter.html",
    "client/content/newsletterList/newsletterList.html",
    "client/content/subscriberList/modalSubscribedNewsletters.html",
    "client/content/subscriberList/subscriberList.html",
    "client/content/editEmail/_editEmailController.js",
    "client/content/editEmail/editEmail.js",
    "client/content/emailList/_emailListController.js",
    "client/content/emailList/emailList.js",
    "client/content/newEmail/_newEmailController.js",
    "client/content/newsletterList/_newsletterListController.js",
    "client/content/newsletterList/addNewsletter.js",
    "client/content/newsletterList/newsletterList.js",
    "client/content/subscriberList/_subscriberListController.js",
    "client/content/subscriberList/modalSubscribedNewsletters.js",
    "client/content/subscriberList/subscriberList.js",
    "client/helpers/changeFieldModal.js",
  ], "client");


  api.addFiles([
    "server/initFake.js",
    "server/initPrivilages.js",
    "server/initPublications.js",
    "server/removeNewsletter.js",
    "server/sendNewsletter.js",
  ], "server");


});