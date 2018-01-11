const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

export default function (state,action) {
    if(!state) {
        state = {comments:[]} 
    }
    switch (action.type) {
        case ADD_COMMENT: 
            console.log('新增了');
            return {comments:[...state.comments,action.comment]};
        case DELETE_COMMENT:
            console.log('删除了');
            return {
                comments:[
                    ...state.comments.slice(0,action.index),
                    ...state.comments.slice(action.index+1)]
            }
        default:
            return state
      }
}

export const add_comment = (comment) => {
    return { type: ADD_COMMENT,comment };
}

export const delete_comment = (index) => {
    return { type: DELETE_COMMENT,index };
}