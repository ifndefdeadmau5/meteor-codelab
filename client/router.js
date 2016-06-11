/**
 * Created by trevor on 16. 6. 11..
 */
FlowRouter.route('/page/:pageId', {
    name: 'main',
        action: function(params){
        Session.set('pageId', params.pageId );
    }
});