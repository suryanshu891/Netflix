import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Productlist() {
    const [products, setProducts] = useState([]);
    const [searchquery, setSearchquery] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filteredProducts = products.filter(product => {
        return product.brand.toLowerCase().includes(searchquery.toLowerCase());
    });
    const handleSearchChange = event => {
        setSearchquery(event.target.value);
    };
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <div className="mb-4">
                <input
                    type="text" placeholder="Search by brand"
                    value={searchquery} onChange={handleSearchChange} className="px-4 py-2 bg-slate-800 text-emerald-600 border rounded-md w-[25vw]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
                        <Link to={`/Productdetail/${product.id}`}>
                            <img src={product.images[1]} alt="" />
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-500">{product.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Productlist;
