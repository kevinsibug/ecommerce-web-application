import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();

    console.log(product);

    return <div>test</div> 

    return (
        <Card className={classes.root}>
               <CardMedia className={classes.media} image={product.image} title={product.name} />
               <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name} 
                        </Typography>

                    </div>
                    <Typography variant="body2" color="TextSecondary"> {product.description}
                    </Typography>
    
               </CardContent>
            
               <CardActions disableSpacing className={classes.cardActions}>
                    <Typography variant="body2" color="TextSecondary"> {product.price}</Typography>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
               </CardActions>
        </Card>
    );
}

export default Product
