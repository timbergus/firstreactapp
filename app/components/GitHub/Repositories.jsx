var React = require('react');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repositories: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div>
                <p>User Repositories</p>
                <p>Username: {this.props.username}</p>
                <p>Repositories: {this.props.repositories}</p>
            </div>
        );
    }
});
