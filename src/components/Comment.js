import React,{Component,PropTypes} from 'react';

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteHandler: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            time:''
        }
        this._updateTime = this._updateTime.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentWillMount() {
        this._updateTime();
        this.timer = setInterval(() => {
            this._updateTime();
        },5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onDeleteHandler() {
        if(this.props.onDeleteHandler) {
            this.props.onDeleteHandler(this.props.index);
        }
    }

    _updateTime() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
        time: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    render () {
        const comment = this.props.comment;
        return(
            <div className='comment'>
                <div className='comment-user'>
                <span className='comment-username'>
                    {comment.username}
                </span>：
                </div>
                <p>{comment.comment}</p>
                <span className='comment-createdtime'>
                {this.state.time}
                </span>
                <span
                onClick={this.onDeleteHandler}
                className='comment-delete'>
                删除
                </span>
            </div>
        );
    }
}