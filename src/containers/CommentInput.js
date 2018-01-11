import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/CommentInput';
import {add_comment} from '../reducers/comment';

class CommentInputContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler (comment) {
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
          }
    }
    render () {
        return(
            <CommentInput
                onSubmit={this.submitHandler}/>
        )
    }
}

const mapStateToProps = (state) => ({comments:state.comments});
const mapDispathToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(add_comment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(CommentInputContainer)