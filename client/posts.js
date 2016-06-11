/**
 * Created by trevor on 16. 6. 11..
 */
Template.posts.helpers({
    "posts": function() {
        return Posts.find({},
            {
                sort: {
                    createdAt: -1
                }
            });
    }
});