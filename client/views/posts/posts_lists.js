var postsData = [
    {
        title : 'Introducing Newscope',
        author : 'K',
        url : 'http://'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://'
    }
];

Template.postsList.helpers({
    posts: postsData
});