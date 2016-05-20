'use strict';

var React = require('react');
var classNames = require('classnames');

var IntegerInputComponent = React.createClass({
    // handleInputChange: function(e) {
    //     this.props.onChange( e.target.value )
    // },

    render: function() {
        var divClasses = classNames('input-group', `${this.props.id}-group` );

        return (
            <div className={divClasses}>
                <span className="input-group-addon" id={`${this.props.id}-addon`}>
                    <i className={this.props.iconClass}></i>
                </span>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <input
                    id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className="form-control integer-input"
                    type="number"
                    min="" step="" />
            </div>
        );
    }
})

module.exports = IntegerInputComponent;
