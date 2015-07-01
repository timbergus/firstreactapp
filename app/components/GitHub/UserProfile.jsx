var React = require('react');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        biography: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div>
                <p>User Profile</p>
                <p>Username: {this.props.username}</p>
                <p>Biography: {this.props.biography}</p>
            </div>
        );
    }
});
