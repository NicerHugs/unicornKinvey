import $ from 'jquery';
import store from '../store';

function home(e) {
  console.log('rendering home');
  const template = `
    <div>
      welcome home ${store.session.get('username') || ''}!
      <ul>
      </ul>
    </div>
  `;

  let $home = $(template);

  store.unicorns.forEach(function(corn) {
    const $corn = $(`
      <li><a href="#unicorns/${corn.get('_id')}">${corn.get('name')}</a></li>
    `);
    $home.find('ul').append($corn);
  });
  return $home;
}

export default home;
