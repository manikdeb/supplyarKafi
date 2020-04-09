import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <div>
        <ul className={classes.NavigationItems}>
                {!props.isAuthenticated
                    ? <NavigationItem  link="/signin">My Account</NavigationItem>
                    : <NavigationItem  link="/myaccount">Manik Deb</NavigationItem>
                }
        </ul>
    </div>
);

export default navigationItems;