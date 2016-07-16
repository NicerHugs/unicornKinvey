import $ from 'jquery';
import store from '../store';

function validate(username, password) {
  if (username && password) {
    return true;
  }
}

const template = `
  <form>
    <label for="email">email</label>
    <input type="email" placeholder="email" name="email" id="email"/>
    <label for="username">username</label>
    <input type="text" placeholder="username" name="username" id="username"/>
    <label for="password">password</label>
    <input type="password" placeholder="password" name="password" id="password"/>
    <label for="confirm-password">confirm password</label>
    <input type="password" placeholder="confirm password" name="password" id="confirm-password"/>
    <input type="submit" value="Register"/>
    <a class="form-alt-link" href="#login">Already a member? Log in here</a>
  </form>
`;

function register() {
  let $register = $(template);
  $register.on('submit', function(e) {
    e.preventDefault();
    const username = $(this).find('#username').val().trim();
    const password = $(this).find('#password').val().trim();
    if (validate(username, password)) store.users.register(username, password);
  });
  return $register;
}

export default register;
