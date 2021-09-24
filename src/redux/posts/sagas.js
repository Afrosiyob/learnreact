import { takeEvery, call, all, fork } from 'redux-saga/effects'
import { GET_POSTS } from '../actions'
import { fetchGetPost } from '../services/api.service'

function* watchGetPost () {
    yield takeEvery( GET_POSTS, workGetPost )
}

function* workGetPost () {
    const { response, error } = yield call( fetchGetPost )

    if ( response ) {
        console.log( response );
    } else {
        console.log( error );
    }

}

export default function* postSaga () {
    yield all( fork[
        watchGetPost
    ] )
}