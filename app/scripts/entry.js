import Backbone from 'backbone';
import $ from 'jquery';

import router from './router';
import store from './store';
import settings from './settings';

Backbone.history.start();

// if (store.session.get('authtoken')) {
//   router.navigate('/', {trigger: true});
// } else {
//   router.navigate('login', {trigger: true});
// }
