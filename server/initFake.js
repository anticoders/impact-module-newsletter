Modules.Newsletter.init.fake = function(m, params) {

  if(!process.env.FAKE) return;
  if(m.Newsletters.findOne({})) return;
  
  console.log('FAKING DATA FOR MODULE: ' + m.name);

  // faking Newsletters

  _.times(5, function() {
    m.Newsletters.insert({
      name: Fake.word(),

      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf(),
    });
  });


  // faking Subscribers

  var newsletterIds = m.Newsletters
    .find({})
    .fetch()
    .map(function (each) { return each._id; });

  var counts_distribution = [1, 1, 1, 1, 2, 2, 3, 4];

  _.times(40, function() {

    var fakeUser = Fake.user();

    var newsletters = _.sample(newsletterIds, _.sample(counts_distribution))
                       .map(function (x) {return {newsletterId: x}; }); 

    m.Subscribers.insert({
      name: fakeUser.fullname,
      email: fakeUser.email,
      newsletters: newsletters,

      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf(),
    });
  });

  // faking Emails

  _.times(20, function() {

    var sentAt = new Date (moment().valueOf() + 1000 * 60 * 60 * 24 * 3 * (Math.random() - 0.5));

    m.Emails.insert({
      title:         Fake.sentence(_.sample([2, 2, 3])),
      content:       Fake.sentence(_.sample([20, 40, 60, 100])),
      newsletterId:  _.sample(newsletterIds),

      sentAt:    sentAt,
      sent:      sentAt < moment().valueOf(),

      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf(),
    });
  });

};