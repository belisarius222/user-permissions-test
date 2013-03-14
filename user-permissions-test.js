if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

  Template.hello.events({
    'click input' : function () {
      Meteor.users.update(Meteor.userId(),{$set: {'profile.herp':'derp'}});
    }
  });
}