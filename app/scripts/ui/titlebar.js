'use strict';

var React = require('react');

var TitleBarComponent = React.createClass({
    render: function() {
        return (
            <div className="title">{this.props.title}</div>
        );
    }
});

module.exports = TitleBarComponent;
