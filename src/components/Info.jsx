var React = require('react');

var Info = React.createClass({


  render: function() {
      return (
        <div className="info">
          <h2 className="info-header">Header</h2>
          <p className="info-info">Info</p>
        </div>
      );
  }
});

module.exports = Info;
