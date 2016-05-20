
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    IntegerInput = require("./ui/integerinput"),
    DropDownMenu = require("./ui/ajaxdropdown"),
    TitleBarComponent = require('./ui/titlebar'),
    ResultsPanelComponent = require('./ui/resultspanel'),
    mountNode = document.getElementById("app");

React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');




var appliancesList = [
    { name : "Aquarium equipment" , value : "24"},
    { name : "Boom box" , value : "8"},
    { name : "Cable box" , value : "140"},
    { name : "CD player" , value : "7"},
    { name : "Ceiling fan" , value : "35"},
    { name : "Clothes dryer" , value : "2790"},
    { name : "Clothes washer" , value : "255"},
    { name : "Coffee maker" , value : "1000"},
    { name : "Compactors" , value : "400"},
    { name : "Computer - desktop PC" , value : "75"},
    { name : "Computer - notebook PC" , value : "25"},
    { name : "Deep fryer" , value : "1000"},
    { name : "Desktop computer monitor" , value : "42"},
    { name : "Dishwasher" , value : "330"},
    { name : "DVD/VCR" , value : "17"},
    { name : "Electric blanket" , value : "400"},
    { name : "Electronic air cleaner/filter" , value : "50"},
    { name : "Furnace fan" , value : "295"},
    { name : "Garage door opener" , value : "400"},
    { name : "Hair dryer" , value : "710"},
    { name : "Humidifier" , value : "11"},
    { name : "Iron" , value : "1100"},
    { name : "Lawn sprinkler" , value : "11"},
    { name : "Microwave oven" , value : "1500"},
    { name : "Other" , value : "0"},
    { name : "Pool pump" , value : "1000"},
    { name : "Portable spa" , value : "4350"},
    { name : "Printer (inkjet)" , value : "13"},
    { name : "Printer (laser)" , value : "250"},
    { name : "Printer/multi-function" , value : "18"},
    { name : "Receiver" , value : "28"},
    { name : "Rechargeable power tool" , value : "13"},
    { name : "Refrigerator" , value : "225"},
    { name : "Router/DSL/cable modem" , value : "6"},
    { name : "Slow cooker" , value : "200"},
    { name : "Space heater" , value : "1320"},
    { name : "Stereo systems" , value : "33"},
    { name : "Television, analog, <40&quot;" , value : "86"},
    { name : "Television, analog, >40&quot;" , value : "156"},
    { name : "Television, CRT" , value : "60"},
    { name : "Television, CRT - projection" , value : "225"},
    { name : "Television, DLP" , value : "175"},
    { name : "Television, ED/HD TV, <40&quot;" , value : "150"},
    { name : "Television, ED/HD TV, >40&quot;" , value : "234"},
    { name : "Television, LCD" , value : "150"},
    { name : "Television, plasma" , value : "300"},
    { name : "Television set-top box" , value : "20"},
    { name : "Toaster" , value : "1100"},
    { name : "Toaster oven" , value : "1051"},
    { name : "Torchiere lamp-halogen" , value : "300"},
    { name : "Vacuum" , value : "542"},
    { name : "Video game system" , value : "36"},
    { name : "Water heater" , value : "4500"},
    { name : "Waterbed heater" , value : "350"},
    { name : "Well pump" , value : "725"}
]
var statesList = [
    { value : "US" , name : "US Average" },
    { value : "AL" , name : "Alabama" },
    { value : "AK" , name : "Alaska" },
    { value : "AZ" , name : "Arizona" },
    { value : "AR" , name : "Arkansas" },
    { value : "CA" , name : "California" },
    { value : "CO" , name : "Colorado" },
    { value : "CT" , name : "Connecticut" },
    { value : "DE" , name : "Delaware" },
    { value : "DC" , name : "Dist. of Columbia" },
    { value : "FL" , name : "Florida" },
    { value : "GA" , name : "Georgia" },
    { value : "HI" , name : "Hawaii" },
    { value : "ID" , name : "Idaho" },
    { value : "IL" , name : "Illinois" },
    { value : "IN" , name : "Indiana" },
    { value : "IA" , name : "Iowa" },
    { value : "KS" , name : "Kansas" },
    { value : "KY" , name : "Kentucky" },
    { value : "LA" , name : "Louisiana" },
    { value : "ME" , name : "Maine" },
    { value : "MD" , name : "Maryland" },
    { value : "MA" , name : "Massachusetts" },
    { value : "MI" , name : "Michigan" },
    { value : "MN" , name : "Minnesota" },
    { value : "MS" , name : "Mississippi" },
    { value : "MO" , name : "Missouri" },
    { value : "MT" , name : "Montana" },
    { value : "NE" , name : "Nebraska" },
    { value : "NV" , name : "Nevada" },
    { value : "NH" , name : "New Hampshire" },
    { value : "NJ" , name : "New Jersey" },
    { value : "NM" , name : "New Mexico" },
    { value : "NY" , name : "New York" },
    { value : "NC" , name : "North Carolina" },
    { value : "ND" , name : "North Dakota" },
    { value : "OH" , name : "Ohio" },
    { value : "OK" , name : "Oklahoma" },
    { value : "OR" , name : "Oregon" },
    { value : "PA" , name : "Pennsylvania" },
    { value : "RI" , name : "Rhode Island" },
    { value : "SC" , name : "South Carolina" },
    { value : "SD" , name : "South Dakota" },
    { value : "TN" , name : "Tennessee" },
    { value : "TX" , name : "Texas" },
    { value : "UT" , name : "Utah" },
    { value : "VT" , name : "Vermont" },
    { value : "VA" , name : "Virginia" },
    { value : "WA" , name : "Washington" },
    { value : "WV" , name : "West Virginia" },
    { value : "WI" , name : "Wisconsin" },
    { value : "WY" , name : "Wyoming" }
]

var apiConfig = {
    url: '//api.eia.gov/series/'
  , api_key: '4A8DA35AF7501244A974E9603C4FF11B'
  , series_id: 'ELEC.PRICE.XX-RES.Q'
}

var App = React.createClass({
    getInitialState: function() {
        return {
            rates: [], // cached ajax utility rate data

            title: 'APPLIANCE ENERGY CALCULATOR',

            watts: {
                labelText: 'Wattage',
                iconClass: 'fa fa-bolt',
                value: 24,
                id: 'watts'
            },
            appliance: {
                labelText: 'My appliance',
                iconClass: 'fa fa-lightbulb-o',
                value: 24, //aquarium equipment
                id: 'appliance'
            },
            rate: {
                labelText: 'Utility rate',
                iconClass: 'fa fa-money',
                value: 12, //us avg
                id: 'state'
            },
            hours: {
                labelText: 'Hours used per day',
                iconClass: 'fa fa-clock-o',
                value: 0,
                id: 'hours'
            },
            days: {
                labelText: 'Days used per year',
                iconClass: 'fa fa-calendar',
                value: 0,
                id: 'days'
            },
            energy: null,
            cost: null
        };
    },


    // todo: add special case math for refrigerator (see original app for details)
    calculate: function(){
        var watts = this.state.watts.value,
            rate = this.state.rate.value,
            hours = this.state.hours.value,
            days = this.state.days.value,
            completed = false,
            energy = 0,
            cost = 0;

        if( watts && rate && hours && days ) {
            console.log('calculate')

            console.debug('watts:',watts,'hours:',hours,'days:',days, 'rate:',rate)
            energy = watts * hours * days / 1000 // convert to kW
            cost = Math.round( energy * rate ) / 100 // convert cents to dollars
            cost = cost.toFixed(2) // prettify dollars/cents

            console.debug('energy:',energy,'cost:',cost)

            this.setState({
                energy: energy,
                cost: cost
            })
        }
    },

    updateSubtext: function( abbr ){
        //$states.find('option:eq('+index+')').data('subtext', '$0.'+rate+'/kWh');
        //$states.selectpicker('refresh');


        var rate = this.state.rates.filter( state => {
            return state.value === abbr
        })

        if ( rate.length ) {
            rate = `$0.${this.state.rate.value}/kWh`
        }

        return rate[0]
    },

    handleStatesChange: function(e){
        console.log('e:',e);
        this.getStateUtilityRates(e)
    },

    getStateUtilityRates: function(e){
        var series_id = apiConfig.series_id.replace( 'XX', e.target.value )

        $.ajax({
            dataType: 'json',
            type: 'GET',
            url: apiConfig.url,
            data: {
                api_key:   apiConfig.api_key,
                series_id: series_id
            }
        })
        .done( (results) => {
            var rate = { ...this.state.rate }
            rate.value = Math.round( results.series[0].data[0][1] )
            this.setState({ rate: rate }, this.calculate)
        })
        .fail( (xhr, status, err) => {
            console.error( status, err.toString() )
        })

    },


    // todo - combine event handlers
    handleWattageChange: function(e){
        var watts = { ...this.state.watts }
        watts.value = e.target.value
        this.setState({ watts: watts }, this.calculate )
    },

    handleHoursChange: function(e){
        var hours = { ...this.state.hours }
        hours.value = e.target.value
        this.setState({ hours: hours }, this.calculate )
    },

    handleDaysChange: function(e){
        var days = { ...this.state.days }
        days.value = e.target.value
        this.setState( { days: days }, this.calculate )
    },

    render: function() {

        var appliances = appliancesList.map( (appliance) => {
            return <option key={appliance.name} value={appliance.value}>{appliance.name}</option>
        })

        var states = statesList.map( (state) => {
            return (
                <option
                    key={state.value}
                    value={state.value}
                    data-subtext={this.updateSubtext(state.value)}>
                    {state.name}
                </option>
            )
        })


        return (
            <div>
                <TitleBarComponent title={this.state.title} />

                <div className="input-group appliances-group">
                    <span className="input-group-addon" id="applaince-addon">
                        <i className="fa fa-lightbulb-o"></i>
                    </span>
                    <label htmlFor="appliances">My appliance</label>
                    <React.Bootstrap.Select
                        onChange={this.handleWattageChange}
                        id="appliances"
                        data-live-search="true"
                        data-live-search-placeholder="Search the appliance list">
                        {appliances}
                    </React.Bootstrap.Select>
                </div>

                <IntegerInput
                    value={this.state.watts.value}
                    labelText={this.state.watts.labelText}
                    iconClass={this.state.watts.iconClass}
                    onChange={this.handleWattageChange}
                    id={this.state.watts.id} />

                <div className="input-group states-group">
                    <span className="input-group-addon" id="state-addon">
                        <i className="fa fa-money"></i>
                    </span>
                    <label htmlFor="states">Utility rate</label>
                    <React.Bootstrap.Select
                        onChange={this.handleStatesChange}
                        id="states"
                        className="form-control"
                        data-show-subtext="true"
                        aria-describedby="state-addon">
                        {states}
                    </React.Bootstrap.Select>
                </div>

                <IntegerInput
                    value={this.state.hours.value}
                    labelText={this.state.hours.labelText}
                    iconClass={this.state.hours.iconClass}
                    onChange={this.handleHoursChange}
                    id={this.state.hours.id} />

                <IntegerInput
                    value={this.state.days.value}
                    labelText={this.state.days.labelText}
                    iconClass={this.state.days.iconClass}
                    onChange={this.handleDaysChange}
                    id={this.state.days.id} />

                <ResultsPanelComponent
                    energy={this.state.energy}
                    cost={this.state.cost} />
            </div>
        );
    }
});


ReactDOM.render(<App />, mountNode);
