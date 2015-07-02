var React = require('react');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        biography: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div>
                <h3> User Profile </h3>
                <ul className="list-group">
                    {this.props.biography.avatar_url && <li className="list-group-item"> <img src={this.props.biography.avatar_url} className="img-rounded img-responsive"/></li>}
                    {this.props.biography.name && <li className="list-group-item">Name: {this.props.biography.name}</li>}
                    {this.props.biography.login && <li className="list-group-item">Username: {this.props.biography.login}</li>}
                    {this.props.biography.email && <li className="list-group-item">Email: {this.props.biography.email}</li>}
                    {this.props.biography.location && <li className="list-group-item">Location: {this.props.biography.location}</li>}
                    {this.props.biography.company && <li className="list-group-item">Company: {this.props.biography.company}</li>}
                    {this.props.biography.followers && <li className="list-group-item">Followers: {this.props.biography.followers}</li>}
                    {this.props.biography.following && <li className="list-group-item">Following: {this.props.biography.following}</li>}
                    {this.props.biography.following && <li className="list-group-item">Public Repos: {this.props.biography.public_repos}</li>}
                    {this.props.biography.blog && <li className="list-group-item">Blog: <a href={this.props.biography.blog}> {this.props.biography.blog}</a></li>}
                </ul>
            </div>
        );
    }
});
