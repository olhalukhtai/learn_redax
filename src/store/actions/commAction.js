import { CommentService } from "../../API/PostService"


export const loadCommAction =(posts,title) =>{
    let idPost

    return(dispatch)=>{

        posts.find(post => {if(post.title==title){
            console.log(post)
            console.log(post.id)
            idPost=post.id
        }
        })
        
        async function getComment(id){
            const comments=await CommentService.getAll(id)
            return comments
        }

        const comments=getComment(idPost)
        console.log(comments)
        comments.then(comments=>
            dispatch({type:"LOAD_COMM",payload:comments}))
        
    }
}

export const addCommAction =(posts,body,email,name,titlePost,id=0,postId=0,) =>{
    let idPost
    posts.find(post => {if(post.title==titlePost){
        idPost=post.id
    }
    })
    
return ({type:"ADD_COMM",payload:{body,email,name,titlePost,id,postId}})
    
}






