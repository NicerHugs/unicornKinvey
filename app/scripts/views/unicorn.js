import $ from 'jquery';
import store from '../store';

function unicorn(id) {
  let unicorn = store.unicorns.get(id);
  const template = `
    <div>
      <h2>${unicorn.get('name') || ''}</h2>
      <p>${unicorn.get('color') || ''}</p>
    </div>
  `;

  let $unicorn = $(template);

  return $unicorn;
}

export default unicorn;
