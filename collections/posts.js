Posts = new Meteor.Collection('posts');

Meteor.methods({
    postInsert: function(postAtributes) {
        check(Meteor.userId(), String);
    }
});