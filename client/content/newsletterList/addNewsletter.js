Template.newsletter_addNewsletter.events = {

  "click #submit" : function (e, t) {

    var name = $('#name').val();

    if (name.length) {

      t.data.m.Newsletters.insert({
        name:      name,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
      });
      // or server-side to make dates consistent?

      $('#name').val("");
      
    }
    
  }
};