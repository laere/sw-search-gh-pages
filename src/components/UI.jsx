var React = require('react');
var Search = require('./Search.jsx')
var Img = require('./Img.jsx');
var Info = require('./Info.jsx');

var UI = React.createClass({

  getInitialState: function() {
      return {
        people: [],
      }
  },

  componentDidMount: function() {
    //GRAB API DATA
    fetch('http://swapi.co/api/people')
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        //SET STATE TO RECEIVED JSON DATA
        this.setState({ people: json });
        console.log(json);
        //BIND THIS ELSE IT WILL REFER TO THE FUNCTION
      }.bind(this))
      .catch(function(err) {
        console.log(err);
      })
  },

  render: function() {

      return (
        <div className="ui">
          <header className="search-bar">
            {/*<h1>{filtered}</h1>*/}
            {/*SEARCH BAR TO LOOK UP API INFO*/}
            <Search characters={this.state.people} />
          </header>
          <Img />
          <Info characters={this.state.people}/>
        </div>
    );
  }
});

module.exports = UI;
