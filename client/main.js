Template.main.events({
    "submit #msg": function (event, template) {
        Meteor.call("addPost", {
            name: "Doggy",
            profile_image: "http://lorempixel.com/64/64/people/",
            pageId: Session.get('pageId'),
            message: template.find('#post').value
        }, function (err, result) {
            if (err) {
                throw(error);
            } else {
                console.log(result);
                template.find('#post').value = "";
            }
        });

        event.preventDefault();
    }
});

Template.main.helpers({
    "page": function () {
        return Session.get("pageId") || 'popular';
    }
});

Template.main.onCreated(function () {
    this.subscribe('getPage', Session.get('pageId'));
});
