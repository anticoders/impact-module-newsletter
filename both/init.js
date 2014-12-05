Modules.Newsletter.init = function(params) {


  // Ensure all params are filled
  // ================================================================================
  params.views      = params.views || {};
  params.views.newsletters = params.views.newsletters || {};
  params.views.subscribers = params.views.subscribers || {};
  params.views.emails = params.views.emails || {};

  params = {
    name:         params.name || 'newsletter',
    title:        params.title || 'Newsletter',
    path:         params.path || '/newsletter',
    layout:       params.layout || 'panels',

    views: {
      newsletters: {
        path:     params.views.newsletters.path || params.path || '/newsletter',
        layout:   params.views.newsletters.layout || params.layout || 'panels',
      },
      subscribers: {
        path:     params.views.subscribers.path || params.path + '/subscribers' || '/newsletter/subscribers',
        layout:   params.views.subscribers.layout || params.layout || 'panels',
      },
      emails: {
        path:     params.views.emails.path || params.path + '/emails' || '/newsletter/emails',
        layout:   params.views.emails.layout || params.layout || 'panels',
      },
    },

    senderEmail: params.senderEmail || "Please set senderEmail",
  };


  // Create instance
  // ================================================================================

  M[params.name] = new Impact.ModuleInstance(Modules.Newsletter, {
    type:     'Newsletter',
    name:     params.name,
    title:    params.title,
    params:   params,
    routes:   {},
  });

  var m = M[params.name];


  // Run initialization
  // ================================================================================

  Modules.Newsletter.init.db(m, params);
  Modules.Newsletter.init.routes(m, params);

  if(Meteor.isServer) {
    Modules.Newsletter.init.privileges(m, params);
    Modules.Newsletter.init.publications(m, params);
    Modules.Newsletter.init.fake(m, params);
    Modules.Newsletter.init.sender(m, params);
  }

  if(Meteor.isClient) {

  }
  
  return m;

};
