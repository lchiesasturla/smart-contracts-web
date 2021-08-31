import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { Note, Notifications, Receipt } from '@material-ui/icons';

const useStyles = makeStyles({
    navigationContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    navigation: {
        width: 500,
        position: 'absolute',
        bottom: '50px',
        boxShadow: '0px 3px 4px lightGray',
    }
})

const NavigationBar = () => {
    const classes = useStyles();
    const [section, setSection] = useState(0);
    const [items, setItems] = useState([
        {id: 1, label: 'Mis contratos', icon: Note},
        {id: 2, label: 'Avisos', icon: Notifications},
        {id: 3, label: 'Recibos', icon: Receipt},
    ])
    
    return (
        <div className={classes.navigationContainer}>
            <BottomNavigation
                value={section}
                onChange={(event, newSection) => {
                    setSection(newSection);
                }}
                showLabels
                className={classes.navigation}
            >
                {items.map(item => (
                    <BottomNavigationAction label={item.label} icon={<item.icon/>} key={item.id}/>
                ))}
            </BottomNavigation>
        </div>

    );
}

export default NavigationBar;