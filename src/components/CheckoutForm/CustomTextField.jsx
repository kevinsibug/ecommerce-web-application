import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ register, name, label, required }) => {

    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>

            <Controller
                control={control}
                name={name}
                render={(
                    { onChange, onBlur, value, name, ref },
                    { invalid, isTouched, isDirty }
                ) => (
                    <TextField
                        name={name}
                        label={label}
                        required={required}
                        inputRef={register({
                            required: 'You must provide the email address!',
                        })}
                    />
                )}


            />
        </Grid>
    )

}

export default FormInput
