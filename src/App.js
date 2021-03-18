import React, { useState, useEffect } from 'react'
import { Products, Menubar, Cart, Checkout } from './components';
import SnackbarSimple  from './components/Utilities/SnackbarSimple';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [open, setOpen] = useState(false);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder ] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

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
    
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart)
    }

    const handleEmptyCart = async () => {

        const {cart} = await commerce.cart.empty();

        setCart(cart);

    }
    
    const refreshCart = async() => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => { 
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <Router> 

            <div>
               <Menubar totalItems={cart.total_unique_items} />}
                <Switch> 
                    <Route exact path="/">
                        <Products products={ products } onAddToCart={handleAddToCart} />
                        {/* <SnackbarSimple open = {open} /> */}

                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} 
                        handleRemoveFromCart = {handleRemoveFromCart}
                        handleEmptyCart = {handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout 
                            cart={cart}  
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
