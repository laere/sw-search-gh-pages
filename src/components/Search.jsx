var React = require('react');

var Search = React.createClass({

    getInitialState: function() {
      return {
        value: ''
      }
    },

    handleOnChange: function(e) {
      this.setState({
        value: e.target.value
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

    hideList: function() {
        $('list-of-names').hide();
    },

    renderSearch: function() {
        //Desired name equals input value
        var desiredName = this.state.value;
        //Filter through results array for matching name, return name if it exists.
        var matchingResults = this.props.characters.results.filter(function(result) {
            return result.name.toLowerCase().indexOf(desiredName) !== -1;
        });

        return (
            <div onFocus={this.hideList}>
                <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/ecommerce-5/100/search-01-128.png" width="16px" height="16px" />
                <input type="text" className="search" value={this.state.value} onChange={this.handleOnChange}/>
                {/*Return the name of each object*/}
                {matchingResults.map(function(matchingResult, i) {
                    return (
                        <div className="list-of-names" key={i} >
                            <div className="name">{matchingResult.name}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
});

module.exports = Search;
