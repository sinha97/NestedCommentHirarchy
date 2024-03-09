const commentsData = [
    {
        id: 0,
        comment: 'first comment',
        replies: [
            {
                id: 1,
                comment: 'first reply',
                replies: []
            },
            {
                id: 2,
                comment: 'second reply',
                replies: []
            },
            {
                id: 3,
                comment: 'third reply',
                replies: [
                    {
                        id: 4,
                        comment: 'first comment reply',
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        comment: 'second comment',
        replies: []
    }
];

export default commentsData;