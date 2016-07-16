import $ from 'jquery';
import store from '../store';
import router from '../router';

function form() {
  const template = `
    <form>
      <label for="name">Unicorn Name</label>
      <input type="text" placeholder="Unicorn Name" name="name" id="name">
      <label for="color">Unicorn Color</label>
      <input type="text" placeholder="Unicorn Color" name="color" id="color">
      <input type="submit" value="Save Unicorn"/>
    </form>
  `;
  let $form = $(template);

  $form.on('submit', function(e) {
    e.preventDefault();
    store.unicorns.create({
      name: $form.find('#name').val(),
      color: $form.find('#color').val()
    }, {
      success: function() {
        router.navigate('/', {trigger: true});
      }
    });
  });
  return $form;
}

export default form;
