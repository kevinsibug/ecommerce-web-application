import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ handleOpen, product, onAddToCart }) => {
    const classes = useStyles();

    console.log(product);


    const handleClick = (e, image) => {
        e.preventDefault();
        console.log(e)
        handleOpen(image);
    }

    return (
        <Card className={classes.root}>
            <CardMedia onClick = {(e) => handleClick(e, product.media.source)} className={classes.media} image={product.media.source} title={product.name} style = {{cursor: 'pointer'}} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary">
                </Typography>

            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="body2" color="textSecondary"> {product.price.formatted_with_symbol}</Typography>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product
