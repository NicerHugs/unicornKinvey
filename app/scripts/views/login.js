import $ from 'jquery';
import store from '../store';

function validate(username, password) {
  if (username && password) {
    return true;
  }
}

const template = `
  <form>
    <label for="username">username</label>
    <input type="text" placeholder="username" name="username" id="username"/>
    <label for="password">password</label>
    <input type="password" placeholder="password" name="password" id="password"/>
    <input type="submit" value="Log In"/>
    <a class="form-alt-link" href="#register">Not a member? Register here</a>
  </form>
`;

function login() {
  let $login = $(template);
  $login.on('submit', function(e) {
    e.preventDefault();
    const username = $(this).find('#username').val().trim();
    const password = $(this).find('#password').val().trim();
    if (validate(username, password)) {
      store.session.login(username, password);
    }
  });
  return $login;
}


export default login;
