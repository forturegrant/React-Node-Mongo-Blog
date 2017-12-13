const initialState={
    content:''
};

export const actionTypes = {
    PUBLISH_COMMENT:"PUBLISH_COMMENT"
};


export const actions = {
    publish_comment:function (content) {
        return{
            type:actionTypes.PUBLISH_COMMENT,
            content
        }
    }
};

export function comment(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PUBLISH_COMMENT:
            return {
                ...state,content:action.data
            };
        default:
            return state
    }
}


