/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes.js';

// import navbar
//import Navbar from '../components/Navbar';

// import routes
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};


const sideList = (
    <div>
        <List>
            {['Calendar', 'Messages', 'Profile', 'Feed'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Test', 'Dashboard', 'Login'].map((text, index) => (
                <a href="/login"><ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem></a>
            ))}
        </List>
    </div>
);

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };


    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render(){
        return(
                <div>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>

                    <AppBar style={{backgroundColor: '#003d32'}} position="static">
                        <Toolbar>
                            <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Student Life App
                            </Typography>
                        </Toolbar>
                        <img src="/img/hu_logo.png" id="logo-right"/>
                    </AppBar>

                    <Routes />
                </div>
        )
    }
}


export default App;
