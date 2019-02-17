/* eslint-disable react/jsx-one-expression-per-line */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const PublicNav = () => [
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Student Life
            </Typography>
        </Toolbar>
    </AppBar>
];

const SearchBar = () => (
  <div> </div>
);

const LoggedInNav = () => [
  <SearchBar key="searchbar" />,
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                News
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
];


const Navbar = ({ loggedIn }) => (
    <AppBar style={{backgroundColor: '#003d32'}} position="static">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                HU Student Life
            </Typography>
        </Toolbar>
        <img src="/img/hu_logo.png" id="logo-right"/>
    </AppBar>
);

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Navbar;
