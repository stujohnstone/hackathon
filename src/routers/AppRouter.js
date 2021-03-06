import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Tags from "../components/Tags";
import PublicRoute from "./PublicRoute";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import AddPostPage from '../pages/AddPostPage';
import ExamplePost from "../components/ExamplePost";
import ShowNotifications from "../components/ShowNotifications";
import HomePage from "../pages/HomePage";

const history = createBrowserHistory();

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute exact path="/" component={LandingPage}/>
                <PublicRoute path="/signin" component={SignInPage}/>
                <PublicRoute path="/signup" component={SignUpPage}/>
                <PublicRoute path="/dashboard" component={DashboardPage}/>
                <PublicRoute path="/addpost" component={AddPostPage}/>
                <PublicRoute path="/notifications" component={ShowNotifications}/>
                <PublicRoute path="/newnotification" component={ExamplePost}/>
                <PublicRoute path="/home" component={HomePage}/>
                <PublicRoute path="/tags" component={Tags}/>
            </Switch>
        </Router>
    );

};
