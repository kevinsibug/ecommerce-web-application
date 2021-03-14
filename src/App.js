import React, { useState, useEffect } from 'react'
import { Products, Menubar} from './components';
import SnackbarSimple  from './components/Utilities/SnackbarSimple';
import { commerce } from './lib/commerce';

const App = () => {
    const [open, setOpen] = useState(false);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    };
    
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        
        var inCart = false;
        
        for (var i=0; i < cart.line_items.length; i++ ){
            if (cart.line_items[i].product_id===(productId)) {
                window.alert("Product already in cart.");
                inCart = true;
                // setOpen(true);
                break;
            }
        }

        if (inCart === false) {
            const item = await commerce.cart.add(productId, quantity);
            setCart(item.cart);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div>
            <Menubar totalItems={cart.total_unique_items} />
            <Products products={ products } onAddToCart={handleAddToCart} />
            {/* <SnackbarSimple open = {open} /> */}
        </div>
    )
}

export default App
