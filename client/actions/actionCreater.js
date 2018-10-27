export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function decrement(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment

  }
}

export function removeComment(postID,i) {
  return {
    type:'REMOVE_COMMENT',
    postID,
    i
  }
}
