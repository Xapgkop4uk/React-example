var Comment = require('../models/Comment')

module.exports = {

  find: function(params, callback) {
    Comment.find(params, function(err, Comments){
      if (err){
        callback(err, null)
        return
      }

      callback(null, Comments)
    })
  },

  findById: function(id, callback) {
    Comment.findById(id, function(err, Comment){
      if (err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  create : function(params, callback){

    Comment.create(params, function(err, Comment){
      if (err){
        callback(err, null)
        return
      }

      callback(null, Comment)
    })
  },

  update: function(id, params, callback){
    Comment.findById(id , params, {new:true}, function(err, Comment){
      if (err){
        callback(err, null)
        return
      }

      callback(null, Comment)
    })
  },

  delete: function(id, callback){
    Comment.findByIdAndRemove(id, function(err){
      if (err){
        callback(err, null)
        return
      }

      callback(null, null);
    })
  }
}
