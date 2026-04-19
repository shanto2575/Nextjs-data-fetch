import BooksCard from '@/UI/BooksCard'
import React from 'react'

const getbooks=async()=>{
    const res=await fetch('http://localhost:5000/books',{
        cache:'no-cache'
    })
    return res.json()
}
const BooksPage = async() => {
    const books=await getbooks()
    return (
        <div>
            <h2>book:{books.length}</h2>
            <div className='grid grid-cols-3 gap-10'>
                {books.map(book=><BooksCard key={book.id} book={book}></BooksCard>)}
            </div>
        </div>
    )
}

export default BooksPage