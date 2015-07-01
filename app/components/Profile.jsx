var React = require('react');
var Router = require('react-router');
var Repositories = require('./GitHub/Repositories.jsx');
var UserProfile = require('./GitHub/UserProfile.jsx');
var Notes = require('./Notes/Notes.jsx');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

module.exports = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: ['note1', 'note2'],
            biography: {
                name: 'Gustavo',
                surname: 'Muñoz',
                age: 35
            },
            repositories: ['repo1', 'repo2']
        };
    },
    componentDidMount: function () {
        this.ref = new Firebase('https://firstreactapp.firebaseio.com/');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount: function () {
        this.unbind('notes');
    },
    handleAddNote: function (newNote) {
        this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} biography={this.state.biography}></UserProfile>
                </div>
                <div className="col-md-4">
                    <Repositories username={username} repositories={this.state.repositories}></Repositories>
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} addNote={this.handleAddNote}></Notes>
                </div>
            </div>
        );
    }
});
