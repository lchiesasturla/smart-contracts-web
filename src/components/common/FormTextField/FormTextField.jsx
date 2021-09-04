import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
    },
    input: {
        width: '95%',
        marginTop: '20px'
    }
}));

const FormTextField = ({ field, updateObj, updateFunc, isAddress, error }) => {
    const classes = useStyles();
    
    const {label, name, type, variant, size} = field;

    return (
        <Grid item xs={size} className={classes.container}>
            <TextField 
                className={classes.input} 
                label={label} 
                type={type} 
                variant={variant} 
                name={name} 
                value={isAddress ? updateObj.address[name] : updateObj[name]} 
                onChange={updateFunc}
                InputLabelProps={{ shrink: true }}
                error={error?.length > 0}
                helperText={error}
            />
        </Grid>
    );
}
 
export default FormTextField;