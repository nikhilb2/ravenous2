export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(postId, author, comment) {
  console.log("fire comment")
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment

  }
}

export function removeComment(postId,i) {
  console.log('removed')
  return {
    type:'REMOVE_COMMENT',
    postId,
    i
  }
}
