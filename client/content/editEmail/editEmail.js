var schema = new SimpleSchema({

  title:      {type: String, optional: true,},
  content:    {type: String, optional: true,},
  sentAt:     {type: Date,   optional: true,}, 
  sent:       {type: Boolean,},

});


Template.newsletter_editEmail.helpers({
  schema: function() {
    return schema;
  },

});


Template.newsletter_editEmail.events({
  'keyup .__trigger': _.debounce(function(e, t) {
    save(t.data.m, t.data.email, $(t.find('form')).formToJSON());
  }, 250),

});

Template.newsletter_editEmail.destroyed = function() {
  save(this.data.m, this.data.email, $(this.find('form')).formToJSON());
};

var save = function(m, old, document) {
  if (!!document.sentAt) {
    document.sentAt = new Date(document.sentAt);
  }
  m.Emails.update(old._id, {$set: document});
};



// Template.newsletter_editEmail.rendered = function () {

//     // initializing datepicker
//     $('.datetimepicker').datetimepicker({
//       language: 'en'
//     });

//     // var email = this.data.email;

//     // // filling data if it is edit (i.e. not a new email)
//     // if (!!email) {
//     //   $('#inputTitle').val(email.title);
//     //   $('#inputContent').val(email.content);
//     //   $('#inputWhen').data("DateTimePicker").setDate(new Date(email.sentAt));
//     // }

//     // // disabling if already sent
//     // if (!!email && email.sent) {
//     //   $('#inputTitle').prop('disabled', true);
//     //   $('#inputContent').prop('disabled', true);
//     //   $('#inputWhen').data("DateTimePicker").disable();
//     //   $('#submit').prop('disabled', true);
//     // }

// }


Template.newsletter_editEmail.helpers({

  'newsletterName': function (x) {
    if (!!this.email) {
      return this.m.Newsletters.findOne(this.email.newsletterId).name;
    } else {
      return "(error or something)";
    }
  },

  'subscriberCount': function () {
    if (!!this.email) {
      return this.m.Subscribers
               .find({newsletters: {$elemMatch: {newsletterId: this.email.newsletterId}}})
               .count();
    } else {
      return "0";
    }
  },

});


// Template.newsletter_editEmail.events = {

//   "click #submit" : function () {

//     var title = $('#inputTitle').val();
//     var content = $('#inputContent').val();
//     var when = !!$('#inputWhen input').val() && $('#inputWhen').data("DateTimePicker").getDate()._d;

//     if (!content.length) return;

//     var emailId;

//     if (!!this.email) {
//     // updating
//       Template.currentModule().Emails
//         .update(this.email._id, {$set: {
//           title:      title,
//           content:    content,
//           sentAt:     when || moment().valueOf()  
//         }});      
//     } else {
//     // adding new 
//       var emailId = Template.currentModule().Emails
//         .insert({
//           title:      title,
//           content:    content,
//           newsletter: this.newsletter._id,
//           sent:       false,
//           sentAt:     when || moment().valueOf()  
//         });
//     }

//     if (when === false) {
//       Meteor.call('sendNewsletterEmail', emailId,
//                   function (error, result) { if (result) { console.log("Email sent"); } });
//       AntiModals.alert("Email sent!");
//     } else {
//       // it will be sent in its time
//       AntiModals.alert("Email scheduled to be sent!");
//     }

//     if (!this.email) {
//       $('#inputTitle').val("");
//       $('#inputContent').val("");
//       $('#inputWhen input').val("");
//     }
    

//   }
// };