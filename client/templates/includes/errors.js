Template.errors.helpers({
    errors: function () {
        return Errors.find();
    }
});

Template.error.onRendered(function () {
    var error = this.data;
    Meteor.setInterval(function () {
        Errors.remove(error._id);
    }, 3000);
});