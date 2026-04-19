import ProductCard from '@/UI/ProductCard'

const getProduct = async () => {
    const res = await fetch('http://localhost:5000/products', {
        next:{revalidate:20}
    }
    )
    return res.json()
}
const ProductsPage = async () => {
    const products = await getProduct()
    console.log(products)
    return (
        <div>
            <h2>ProductsPage:{products.length}</h2>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default ProductsPage