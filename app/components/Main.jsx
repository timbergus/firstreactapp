var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: '15px' }}>
                        MENU
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler></RouteHandler>
                </div>
            </div>
        );
    }
});
