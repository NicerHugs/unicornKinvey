import _ from 'underscore';
import Backbone from 'backbone';
import store from '../store';
import router from '../router';

const Session = Backbone.Model.extend({
  url: 'https://baas.kinvey.com/user/kid_BJm5kjxv/',
  parse: function(data) {
    if (data) {
      return {
        _id: data._id,
        authtoken: data._kmd.authtoken,
        username: data.username
      };
    }
  },
  login: function(username, password) {
    this.save({username, password}, {
      url: this.url + 'login',
      success: function(model, data) {
        store.users.add(data);
        model.unset('password');
        localStorage.setItem('authtoken', model.get('authtoken'));
        router.navigate('/', {trigger: true});
      },
      error: function() {
        localStorage.removeItem('authtoken');
      }
    });
  },
  retreive: function() {
    this.fetch({
      url: this.url + '_me',
      success: function(model, data) {
        store.users.add(data);
      },
      error: function() {
        localStorage.removeItem('authtoken');
      }
    });
  },
  logout: function() {
    this.save(null, {
      url: this.url + '_logout',
      success: function() {
        localStorage.removeItem('authtoken');
        _.each(store, function(i) {
          return i.reset ? i.reset() : i.clear();
        });
        router.navigate('login', {trigger: true});
    }});
  }
});

export default Session;
