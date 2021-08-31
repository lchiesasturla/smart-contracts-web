import React from 'react'
import Logo from '../../../assets/logo.png'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        width: '125px',
        height: '150px'
    }
})

const Topbar = () => {
    const classes = useStyles();
    return ( 
        <header className={classes.header}>
            <img src={Logo} alt='Logo' className={classes.logo}/>
        </header>
    );
}
 
export default Topbar;