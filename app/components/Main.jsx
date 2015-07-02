var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGitHub = require('./SearchGitHub.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: '15px' }}>
                        <SearchGitHub></SearchGitHub>
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler></RouteHandler>
                </div>
            </div>
        );
    }
});
