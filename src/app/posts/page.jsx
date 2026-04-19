import React from 'react'

// const getpost = async () => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         return res.json()
// }



const getpost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!res.ok){
            throw new Error('failed to fetch data')
        }
        return res.json()
}



// const getpost = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         return res.json()
//     }
//     catch(err){
//         throw new Error ('failed the posts data')
//     }
// }


const PostsPage = async () => {
    // const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts=await res.json()

    const posts = await getpost()
    return (
        <div>
            <h3>Posts:{posts.length}</h3>
        </div>
    )
}

export default PostsPage
