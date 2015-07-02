var React = require('react');

module.exports = React.createClass({
    propTypes: {
        repositories: React.PropTypes.array.isRequired
    },
    render: function () {
        var repositories = this.props.repositories.map(function (repository, index) {
            return (
                <li className="list-group-item" key={index}>
                    {repository.html_url && <h4><a href={repository.html_url} target="_blank">{repository.name}</a></h4>}
                    {repository.description && <p>{repository.description}</p>}
                </li>
            );
        });
        return (
            <div>
                <h3>User Repositories</h3>
                <ul className="list-group">
                    {repositories}
                </ul>
            </div>
        );
    }
});
