Template.navbars.events({
  'click #logout, tap #logout': function(e, t){
    Meteor.logout(function(){
      Router.go('/');
    });
  },
})