import Link from 'next/link'
import React from 'react'

const BooksCard = ({ book }) => {
    // console.log(book)
    const { id, title, author, category, description } = book
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <p>{category}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/books/${id}`}>
                        <button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BooksCard
