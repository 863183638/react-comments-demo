import React,{Component,PropTypes} from 'react';

export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor() {
    super();
    this.state = {
      username: '',
      comment: ''
    }
    this.usernameInputHandler = this.usernameInputHandler.bind(this);
    this.commentInputHandler = this.commentInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  usernameInputHandler(e) {
    this.setState({
      username: e.target.value
    })
  }

  commentInputHandler(e) {
    this.setState({
      comment: e.target.value
    })
  }

  submitHandler() {
    if(this.props.onSubmit) {
      this.props.onSubmit({...this.state,createdTime:new Date().getTime()});
    }
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
              value={this.state.username}
              onChange={this.usernameInputHandler}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              value={this.state.comment}
              onChange={this.commentInputHandler}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.submitHandler}>
            发布
          </button>
        </div>
      </div>
    )
  }
}