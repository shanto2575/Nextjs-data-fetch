import React from 'react'

export const generateStaticParams=async()=>{
    const res=await fetch('http://localhost:5000/books')
    const book=await res.json()
    
    return book.slice(1,3).map(book=>({bookid:book.id}))
}
const BooksDetailsPage = async({params}) => {
    const {bookId}=await params;

    const res=await fetch(`http://localhost:5000/books/${bookId}`)
    const {title,author,category,description}=await res.json()

    
    
    return (
        <div className='space-y-4 p-6 border rounded-2xl  my-5'>
            <h3>Title : {title}</h3>
            <p>Author : {author}</p>
            <p>Category : {category}</p>
            <p>Description : {description}</p>
        </div>
    )
}

export default BooksDetailsPage