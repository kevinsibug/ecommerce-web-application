import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

const AddressForm = ( {checkoutToken, next }) => {

    const methods = useForm();
    console.log(methods)
 

    return (
        <>
            <Typography variant="h6" gutterBottom> Customer and Shipping Details </Typography>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit((data) => {console.log(data);next({ ...data })} )}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                        <FormInput required name='lastName' label='Last Name' />
                        <FormInput required name='emailAddress' label='Email Address' />
                    </Grid> 
                    <br /> 
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/" variant="outlined"> Back to Shop </Button>
                        <Button type="submit" variant="contained" color="primary">Next </Button>

                    </div>
                

                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
