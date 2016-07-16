import $ from 'jquery';
import Session from './models/session';
import Users from './collections/users';
import Unicorns from './collections/unicorns';
import settings from './settings';

$(document).ajaxSend(function(event, xhr) {
  if (store.session.get('authtoken')) {
    xhr.setRequestHeader('Authorization', 'Kinvey ' + store.session.get('authtoken'));
  } else {
    xhr.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

let store = {
  session: new Session(),
  users: new Users(),
  unicorns: new Unicorns()
};

store.session.on('change', function() {
  console.log('session chnanged', store.session.toJSON());
})

if (localStorage.getItem('authtoken')) {
  store.session.set('authtoken', localStorage.getItem('authtoken'));
  store.session.retreive();
}

export default store;
