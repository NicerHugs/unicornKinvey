import Backbone from 'backbone';

const User = Backbone.Model.extend({
  idAttribute: '_id',
  parse: function(data) {
    return {
      _id: data._id,
      username: data.username
    };
  }
});

export default User;
