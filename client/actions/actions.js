


import * as types from './actionTypes.js'


export function refresh(){
    return dispatch => {
        fetch('http://localhost:3001/posts').then(response => {
            response.json().then(data => {
                dispatch({
                    type: types.REFRESH,
                    payload: data
                })
            })
        })
    }
}

export function readComments(postId){
    console.log('postID from readComments: ', typeof postId);
    return dispatch => {
        fetch(`http://localhost:3001/posts/${Number(postId)+1}?_embed=comments`).then(response => {
            response.json().then(data => {
                dispatch({
                    type: types.READCOMMENTS,
                    payload: data
                })
            })
        })
    }
}


