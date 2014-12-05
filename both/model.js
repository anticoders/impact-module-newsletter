Modules.Newsletter.init.db = function(m, params) {

  //
  // Newsletters
  //
  m.Newsletters = new Meteor.Collection(params.name + '_newsletters');

  m.Newsletters.attachSchema(new SimpleSchema({
    name:        {type: String},

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },
  }));

  //
  // Subscribers
  //
  m.Subscribers = new Meteor.Collection(params.name + '_subscribers');

  m.Subscribers.attachSchema(new SimpleSchema({
    name:         {type: String},
    email:        {type: String},    // regEx: SimpleSchema.RegEx.WeakEmail gives error
    newsletters:  {type: [new SimpleSchema({
      newsletterId: {type: String}
    })]},

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },
  }));

  //
  // Emails
  //
  m.Emails = new Meteor.Collection(params.name + '_emails');

  m.Emails.attachSchema(new SimpleSchema({
    title:          {type: String, optional: true},
    content:        {type: String, optional: true},
    newsletterId:   {type: String},  // QUESTION: foreign keys via strings?
    sent:           {type: Boolean},
    sentAt:         {type: Date, optional: true}, 

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    // QUESTION: how to not update it when onlu "sent" is changed?
    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },
  }));

};
