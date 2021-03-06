/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-ember-reading-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.contentSecurityPolicy = {
    //   'default-src': "'self' http://localhost:4200",
    //   'connect-src': "'self' http://localhost:4200 https://openlibrary.org",
    //   'default-src': "'none'",
    //   'script-src': "'self' connect.facebook.net",
    //   'font-src': "'self'",
    //   'img-src': "'self' www.facebook.com",
    //   'report-uri':"'localhost'",
    //   'style-src': "'self' 'unsafe-inline'",
    //   'frame-src': "'self' s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    // };
    ENV.contentSecurityPolicy = {
      'default-src': "'self' http://localhost:4200",
      'connect-src': "'self' http://localhost:4200 https://openlibrary.org"
    };
    ENV['torii'] = {
      providers: {
        'facebook-oauth2': {
          apiKey: '904777482939227',
          redirectUri: 'http://localhost:4200'
        }
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
