var React = require('react');

module.exports = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {

    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeHolder="Add new note..."/>
                <span className="input-group-btn">
                    <button className="btn btn-default" onClick={this.handleSubmit}></button>
                </span>
            </div>
        );
    }
});
