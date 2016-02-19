if (Posts.find().count() === 0) {
    Posts.insert({
        title : 'Introducing Newscope',
        author : 'K',
        url : 'http://asdasd.com'
    });

    Posts.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://asdasd.com'
    });
}