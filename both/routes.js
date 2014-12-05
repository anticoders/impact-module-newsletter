Modules.Newsletter.init.routes = function(m, params) {


  Router.map(function () {

    // USER ROUTES //============================================================

    //// There will be something for subscribing and unsubscribing
    //
    // this.route(m.nameFor('list'), {
    //   path: params.views.list.path,
    //   template: 'blog_list',
    //   layoutTemplate: params.views.list.layout + 'Layout',
    //   controller: m.clientController('list', params),
    // });


    // ADMIN ROUTES //============================================================

    Panels.Content.moduleBulbs.push({
      title: params.title,
      name: m.nameFor(),
      url: '/content' + params.path,
      icon: 'paperclip',

      subbulbs: [{
        title: 'Subscribers',
        name: 'subscribers',
        url: '/content' + params.path + '/subscribers',
      }, {
        title: 'Emails',
        name: 'subscribers',
        url: '/content' + params.path + '/emails',
      }],
    });



    this.route(m.nameFor('newsletterList'), {
      path: '/content' + params.path,
      template: 'newsletter_newsletterList',
      controller: m.clientController('newsletterList', params),
    });

    this.route(m.nameFor('subscriberList'), {
      path: '/content' + params.path + '/subscribers',
      template: 'newsletter_subscriberList',
      controller: m.clientController('subscriberList', params),
    });

    this.route(m.nameFor('emailList'), {
      path: '/content' + params.path + '/emails',
      template: 'newsletter_emailList',
      controller: m.clientController('emailList', params),
    });

    this.route(m.nameFor('newEmail'), {
      path: '/content' + params.path + '/new/:_id',
      template: 'newsletter_editEmail',
      controller: m.clientController('newEmail', params),
    });

    this.route(m.nameFor('editEmail'), {
      path: '/content' + params.path + '/edit/:_id',
      template: 'newsletter_editEmail',
      controller: m.clientController('editEmail', params),
    });

  });
};


