
export const loadPostAction = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({type:"LOAD_POST",payload:posts}))
    }
}


export const  addPostAction =(title,body,userId=0,id=0)=>{

    return({type:"ADD_POST",payload:{title,body,userId,id}})
}


export const deletePostAction = (title) => {
    return({type:"DELETE_POST",payload:title})
}

