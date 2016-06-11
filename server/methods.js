Meteor.methods({
    "addPost": function (obj) {
        Posts.insert({
            author: {
                name: obj.name,
                profile_image: obj.profile_image
            },
            pageId: obj.pageId,
            createdAt : new Date(),
            message: obj.message
        });
    }
});


/*
 client 에서 Method.call 실행하면 불리는 코드이다
 주로 폼 submit 같은 요청에 대한 처리


 유저가 현재 글을 작성한 pageId 를 저장해서 관심사별로 db 에 저장해서 나중에 불러올 수 있도록 한다.
 Gravatar 는 특정 유저에게 랜덤한 프로필 이미지를 제공하는 서비스이고 d 는 아바타의 타입이다.
 */