import {take,put,call} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as CommentActionTypes} from '../reducers/commentReducer'

export function* publishComment(content) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(post,'/detail/publishComment',content);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* publishCommentFlow() {
    while (true) {
        let request = yield take(CommentActionTypes.PUBLISH_COMMENT);
        console.log(request)
        if(request.content.description === '') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入评论内容', msgType: 0});
        }
        if(request.content.description){
            let response =yield call(publishComment,request.content);
            if(response&&response.code === 0){
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'评论成功!',msgType:1});
            yield put({type:CommentActionTypes.PUBLISH_COMMENT,data:response.data.description})
            }
        }
    }
}