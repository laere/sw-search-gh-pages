var React = require('react');


var Search = React.createClass({

    getInitialState: function() {
      return {
        value: '',
        isExpanded: false,
        characterInfo: ''
      }
    },

    handleOnChange: function(e) {
      this.setState({
        value: e.target.value,
      });
    },

    render: function() {
      if (this.props.characters.length <= 0) {
        return this.renderLoading();
      } else {
        return this.renderSearch();
      }
    },

    renderLoading: function() {

      return (
        <div>
          ...loading data...
        </div>
      )
    },

    expandOnFocus: function() {
      this.setState({isExpanded: true});
    },

    expandOnBlur: function() {
      this.setState({isExpanded: false});
    },

    renderSuggestionList: function() {
        //Desired name equals input value
        var desiredName = this.state.value;
        //Filter through results array for matching name, return name if it exists.
        var matchingResults = this.props.characters.results.filter(function(result) {
          console.log(desiredName);
          return result.name.toLowerCase().indexOf(desiredName) !== -1;
        });

        var isExpanded = this.state.isExpanded;
        return matchingResults.map(function(matchingResult, i) {
            return (
                <div value={isExpanded} className="list-of-names" key={i}>
                    <div className="name" onClick={this.handleClick}>{matchingResult.name}</div>
                </div>
            )
        });
    },

    handleClick: function() {
      console.log('you clicked ' + matchingResult.name);
    },

    // renderCharacterClick: function() {
    //   return matchingResults.map(function(matchingResult, i) {
    //     return (
    //       <div onClick={this.handleClick.bind(this)} key={i}></div>
    //     )
    //   });
    // },

    renderSearch: function() {

        return (
            <div>
                <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/ecommerce-5/100/search-01-128.png" width="16px" height="16px" />
                <input type="text" className="search" placeholder="Search..." value={this.state.value} onChange={this.handleOnChange} onFocus={this.expandOnFocus} onBlur={this.expandOnBlur} />
                {/*Return the name of each object*/}
                {this.state.isExpanded ? this.renderSuggestionList() : null}
            </div>
        );
    },

});

module.exports = Search;
