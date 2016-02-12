var postsData = [
    {
        title : 'Introducing Newscope',
        author : 'K',
        url : 'http://asdasd.com'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://asdasd.com'
    }
];

Template.postsList.helpers({
    posts: postsData
});