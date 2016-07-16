import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import store from './store';
import renderLogin from './views/login';
import renderRegister from './views/register';
import renderHome from './views/home';
import renderUnicornForm from './views/createUnicorn';
import renderUnicorn from './views/unicorn';

const $container = $('.container');

function removeListeners() {
  _.each(store, function(obj){
    obj.off();
  });
}

const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    login: 'login',
    register: 'register',
    'unicorns/new': 'createUnicorn',
    'unicorns/:id': 'unicorn',
    'users/me': 'myUnicorns',
    'users/:id': 'usersCorns',
    logout: 'logout'
  },
  home: function() {
    function render() {
      const $home = renderHome();
      $container.empty().append($home);
    }
    removeListeners();
    store.session.on('change', render);
    store.unicorns.on('add update change', render);
    store.unicorns.fetch();
    render();
  },
  createUnicorn: function() {
    removeListeners();
    const $form = renderUnicornForm();
    $container.empty().append($form);
  },
  unicorn: function(id) {
    function render(id) {
      const $unicorn = renderUnicorn(id);
      $container.empty().append($unicorn);
    }
    removeListeners();
    if (store.unicorns.get(id)) {
      store.unicorns.get(id).on('change', () => {
        render(id);
      });
    } else {
      store.unicorns.add({_id: id});
      store.unicorns.get(id).fetch();
      store.unicorns.get(id).on('change', () => {
        render(id);
      });
    }
    render(id);
  },
  login: function() {
    removeListeners();
    const $login = renderLogin();
    $container.empty().append($login);
  },
  register: function() {
    removeListeners();
    const $register = renderRegister();
    $container.empty().append($register);
  },
  logout: function() {
    removeListeners();
    store.session.logout();
  }
});

const router = new Router();

export default router;
