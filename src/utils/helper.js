export const updatedComment = (comment, targetId, newComment) => {
    const commentsCopy = JSON.parse(JSON.stringify(comment));

    for (const comment of commentsCopy) {
        if (comment.id === targetId) {
            comment.replies.push({
                id: new Date().getTime(),
                comment: newComment,
                replies: []
            })
        }
    }

    if (comment.replies.length > 0) {
        comment.replies = updatedComment(comment.replies, targetId, newComment)
    }

    return commentsCopy;
}