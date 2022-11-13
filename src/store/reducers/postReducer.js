
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";
const  DELETE_POST="DELETE_POST";

const defaultState = {
    posts: []
}

export default (state=defaultState, {type,payload}) => {
    switch(type) {
        case LOAD_POST: {
            return {posts:payload}
        }
        case ADD_POST: {
            console.log(payload)
            console.log(state);
            let {id}=payload
            let {userId}=payload
            state.posts.forEach((post,idx)=>{id=idx+1})
            console.log(id)

            return {posts:[...state.posts,{...payload,id:id,}]}
        }
        case DELETE_POST: {
            const filterPosts=[...state.posts].filter(p=>!p.title.startsWith(payload)) 
            return {posts:filterPosts}
        }
        default: {
            return state
        }
    }
}
