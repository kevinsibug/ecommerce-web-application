import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './styles'

const CartItem = ( {item, onRemoveFromCart } ) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent} >
                <Typography variant="h4"> {item.name} </Typography>
                <Typography variant="h5"> {item.line_total.formatted_with_symbol} </Typography> 
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons} >
                    <Typography> Quantity: 1 </Typography>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
            
        </Card>
    )
}

export default CartItem
