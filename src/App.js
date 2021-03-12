import React, { useState, useEffect } from 'react'
import { Products, Menubar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <Menubar />
            E-commerce Web Application
            <Products products={ products } />
        </div>
    )
}

export default App
