import React from 'react';
import SwipeableViews from "react-swipeable-views";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabPanel/TabPanel";
import './FullWidthTabs.css'
import Joystick from "./Joystick/Joystick";
import Games from "./Games/Games";
import Station from "./Station/Station";



export default function FullWidthTabs(props) {



    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
    }));
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <div className={classes.root}>
            <h2>Товары</h2>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Консоли" {...a11yProps(0)} />
                    <Tab label="Джойстики" {...a11yProps(1)} />
                    <Tab label="Диски" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Station disable={props.disable} cart={props.cart} data={props.data} addToCart={props.addToCart}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                   <Joystick disable={props.disable} cart={props.cart}  data={props.data} addToCart={props.addToCart}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Games disable={props.disable} cart={props.cart}  data={props.data} addToCart={props.addToCart}/>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}