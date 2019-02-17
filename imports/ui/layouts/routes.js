/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

// import routes
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/Not-Found';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashbaord from '../pages/Dashboard';
import Admin from '../pages/Admin';

// import hoc to pass additional props to routes
import PropsRoute from '../pages/PropsRoute';

const Routes = props => (
            <Router>
                <div>
                    {props.loggingIn}
                    <Switch>
                        <PropsRoute exact path="/" component={Landing} {...props}/>
                        <PropsRoute path="/login" component={Login}  {...props}/>
                        <PropsRoute path="/register" component={Register} {...props}/>
                        <PropsRoute
                            path="/recover-password"
                            component={RecoverPassword}
                        />
                        <PropsRoute
                            path="/reset-password/:token"
                            component={ResetPassword}
                        />
                        <PropsRoute component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );

Router.propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    userReady: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

export default withTracker(() => {
    const userSub = Meteor.subscribe('user');
    const user = Meteor.user();
    const userReady = userSub.ready() && !!user;
    const loggingIn = Meteor.loggingIn();
    const loggedIn = !loggingIn && userReady;
    return {
        loggingIn,
        userReady,
        loggedIn,
    };
})(Routes);
