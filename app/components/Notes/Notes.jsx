var React = require('react');
var NotesList = require('./NotesList.jsx');
var AddNote = require('./AddNote.jsx');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <AddNote username={this.props.username} addNote={this.props.addNote}></AddNote>
                <NotesList notes={this.props.notes}></NotesList>
            </div>
        );
    }
});
