### Installation

```
npm install torii -D
```

```
ember install ember-cli-simple-auth
```

```
ember install ember-cli-simple-auth-torii
```

### Create new facebook app

[https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

[https://developers.facebook.com/docs/facebook-login/v2.4](https://developers.facebook.com/docs/facebook-login/v2.4)

### Set Contact email on Settings

### Set website url on Settings (+Add Platform)

```
http://localhost:4200
```

### Activate app on Status and Overview

### Configure torii in config/environment.js

```javascript
ENV['torii'] = {
  providers: {
    'facebook-oauth2': {
      apiKey: 'APP_ID',
      redirectUri: 'http://localhost:4200'
    }
  }
};
```

### Create a protected route 'settings' and add it to the nav

```
ember g route settings
```

```html
<li>
    {{link-to 'Settings' 'settings'}}
</li>
```

### Change app/routes/application.js

```javascript
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
...
export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    return books
      .map(b => Ember.Object.create(b))
      .sortBy('title');
  },
  actions: {
    facebookLogin() {
      var route = this;
      this.get('session')
        .authenticate('simple-auth-authenticator:torii', 'facebook-oauth2')
        .then(function () {
          route.transitionTo('settings');
        },function () {
          alert("Rejected!");
        });
    }
  }
});

```

### Add content to app/templates/settings.hbs

```html
<h2>Settings</h2>
{{#if session.isAuthenticated}}
    <p>Hi logged in user!</p>
    <p>
        <button {{action 'invalidateSession'}}>Logout</button>
    </p>
{{else}}
    <p>Hi guest</p>
    <p>
        <button {{action 'facebookLogin'}}>Login with Facebook</button>
    </p>
{{/if}}
```




