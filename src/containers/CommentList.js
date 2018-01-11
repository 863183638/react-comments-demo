import React,{ Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { delete_comment } from '../reducers/comment';

class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteHandler: PropTypes.func
    }
    render() {
        return (
            <CommentList 
                comments={this.props.comments}
                onDeleteHandler={this.props.onDeleteHandler}/>
        )
    }
}

const mapStateToProps = (state) =>({comments:state.comments});
const mapDispatchToProps = (dispatch) =>{
    return {
        onDeleteHandler: (index) => {
            dispatch(delete_comment(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer);