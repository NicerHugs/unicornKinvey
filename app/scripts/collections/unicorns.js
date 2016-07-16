import Backbone from 'backbone';
import Unicorn from '../models/unicorn';

const Unicorns = Backbone.Collection.extend({
  model: Unicorn,
  url: 'https://baas.kinvey.com/appdata/kid_BJm5kjxv/unicorns'
});

export default Unicorns;
