import React from 'react'

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Menubar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography>
                        <img src='' alt="" height="30px" className={classes.image} /> 
                        Digital Artworks Online Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge color="secondary"> 
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}

export default Menubar
