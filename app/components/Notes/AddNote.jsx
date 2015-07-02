var React = require('react');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    },
    render: function () {
        return (
            <div className="input-group" style={{ marginBottom: '10px' }}>
                <input type="text" className="form-control" ref="note" placeholder="Add new note..."/>
                <span className="input-group-btn">
                    <button className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        );
    }
});
