import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        search: function (query) {
            if ( query === undefined || query <= 0 ) {
                this.transitionTo('search');
            }
            else {
                this.transitionTo('search.result', query);
            }
        }
    }
});
