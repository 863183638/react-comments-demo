import React,{Component,PropTypes} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteHandler: PropTypes.func
    }
    constructor() {
        super();
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(index) {
        if(this.props.onDeleteHandler) {
            this.props.onDeleteHandler(index);
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((item,index) => {
                    return(
                        <Comment 
                            comment={item}
                            index={index}
                            key={item.username + item.comment}
                            onDeleteHandler={this.onDeleteHandler}/>
                    )
                })}
            </div>
        )
    }
}