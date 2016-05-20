'use strict';

var React = require('react');
var classNames = require('classnames');

var Dropdown = React.createClass({

    render: function(){
        var options = this.props.appliances.map(function(item){
            return <option value={item.value}>{item.name}</option>;
        });

        var opts = this.props.settings

        var divClasses = classNames('input-group', `${opts.id}-group`, 'active' )

        return (
            <div className={divClasses}>
                <span className="input-group-addon" id={`${opts.id}-addon`}>
                    <i className={opts.iconClass}></i>
                </span>
                <label htmlFor={opts.id}>{opts.labelText}</label>
                <select
                    id={opts.id}
                    className="form-control"
                    {options}
                </select>
            </div>
        )
    }
});



module.exports = Dropdown;
