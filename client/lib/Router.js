Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'navbars': {to: 'navbars'},
  },
});

Router.setTemplateNameConverter(function (str) { return str; });

Router.route('/', {
  name: 'home',
  path: '/',
  where: 'client',
  action: function(){
    if(Meteor.user()){
      this.template = 'welcome';
    } else {
      this.template = 'home';
    }
    this.render();
  }
});

Router.route('/welcome', 'welcome');

Router.route('/view1', 'view1');

Router.route('/view2', 'view2');


// XXX comment this out to see the package routes kick in
Router.route('/(.*)', {
  name: 'optional',
  path: '/(.*)',
  action: function () {
    console.log('wtf? i ran');
    console.log(this);
    this.next();
  }
});