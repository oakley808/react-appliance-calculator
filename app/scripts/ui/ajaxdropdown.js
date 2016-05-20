'use strict';

var React = require('react');
var classNames = require('classnames');

var Dropdown = React.createClass({

    getInitialState: function() {
      return { data: [] };
    },

    componentDidMount: function() {
        if( this.props.apiConfig ) {
            $.ajax({
                dataType: 'json',
                type: 'GET',
                url: this.props.apiConfig.url,
                data: {
                    api_key:   this.props.apiConfig.api_key
                  , series_id: this.props.apiConfig.series_id
                },
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.apiConfig.url, status, err.toString());
                }.bind(this)
            });
        }
    },


    render: function(){
        //console.log('data', this.data)
        var options = this.props.items.map(function(item){
            return <option value={item.value}>{item.name}</option>;
        });

        var opts = this.props.settings

        var divClasses = classNames('input-group', `${opts.id}-group`)

        return (
            <div className={divClasses}>
                <span className="input-group-addon" id={`${opts.id}-addon`}>
                    <i className={opts.iconClass}></i>
                </span>
                <label htmlFor={opts.id}>{opts.labelText}</label>
                <select
                    id={opts.id}
                    className="form-control"
                    data-show-subtext="true"
                    aria-describedby="state-addon">

                    {options}
                </select>
            </div>
        )
    }
});



module.exports = Dropdown;
