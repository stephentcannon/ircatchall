SinglePageLogin.config({
  loginTitle: 'Login',
  signupTitle: 'Sign Up',
  forgotPasswordTitle: 'Retrieve Password',
  canRetrievePassword: true,
  passwordSignupFields: 'EMAIL_ONLY',
  forbidClientAccountCreation: false,
  routeAfterLogin: '/welcome',
  routeAfterSignUp: '/welcome',
  forceLogin: true, // this must be false or the catch all won't render
  exceptRoutes: ['home']
});