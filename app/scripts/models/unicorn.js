import Backbone from 'backbone';

const Unicorn = Backbone.Model.extend({
  idAttribute: '_id',
  parse: function(data) {
    return {
      creator: data._acl.creator,
      name: data.name,
      _id: data._id,
      color: data.color
    };
  }
});

export default Unicorn;
