import React from 'react'

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {

    e.preventDefault();
    console.log("sumbitted")
    console.log(this.refs)
    const { postId} = this.props.params;
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  renderComments (comment,i) {
    const {removeComment} = this.props
    return (
      <div className="comment" key={i}>

        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={() => removeComment(this.props.params.postId,i)} >&times;</button>
        </p>

      </div>

    )
  }

  render() {
    return(
    <div className='comments'>
      {this.props.postComments.map((comment,i) => this.renderComments(comment,i))}
      <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref='author' placeholder='author' />
        <input type='text' ref='comment' placeholder='comment' />
        <input type='submit' hidden />
      </form>
    </div>)
  }
}
export default Comments
