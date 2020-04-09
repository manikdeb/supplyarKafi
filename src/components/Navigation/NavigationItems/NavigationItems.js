import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <div>
        <ul className={classes.NavigationItems}>
                <NavigationItem link="/services">Services</NavigationItem> 
                <NavigationItem link="/bulkorderpad">Bulk Order Pad</NavigationItem>
                <NavigationItem link="/generalcatalog">General Catalog</NavigationItem> 
                {!props.isAuthenticated
                    ? <NavigationItem link="/signin" >Sign In</NavigationItem>
                    : <NavigationItem link="/logout">Logout</NavigationItem>
                }
        </ul>
    </div>
);

export default navigationItems;