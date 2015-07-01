var React = require('react');
var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');
var Profile = require('../components/Profile.jsx');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile}></Route>
        <DefaultRoute handler={Home}></DefaultRoute>
    </Route>
);
