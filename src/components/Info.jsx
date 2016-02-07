var React = require('react');

var Info = React.createClass({
  render: function() {
      return (
        <div className="info">
          <h2 className="info-header">{this.props.name}</h2>
          <p className="info-info"></p>
        </div>
      );
  }
});

module.exports = Info;
