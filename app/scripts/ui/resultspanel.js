'use strict';

var React = require('react');

var ResultsPanelComponent = React.createClass({
    render: function() {
        return (
            <div className="results">
                <div className="header">Energy use and cost per year</div>
                <div className="results-row">
                    <div className="data" id="energy">{this.props.energy}</div>
                    <div className="data" id="cost">{this.props.cost}</div>
                </div>
            </div>
        );
    }
});

module.exports = ResultsPanelComponent;
