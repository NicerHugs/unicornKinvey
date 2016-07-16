import Backbone from 'backbone';
import User from '../models/user';
import settings from '../settings';
import router from '../router';
import store from '../store';

const Users = Backbone.Collection.extend({
  url: 'https://baas.kinvey.com/user/kid_BJm5kjxv/',
  model: User,
  register: function(username, password) {
    this.create({username, password}, {
      success: function(model) {
        store.session.login(username, password);
        model.unset('password');
      }
    });
  }
});

export default Users;
