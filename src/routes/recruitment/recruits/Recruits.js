import React, { Component } from 'react';

class Recruits extends Component {
  render() {
    return (
      <div className="recruits">
        목록 {this.props.match.params.menu}
      </div>
    );
  }
}


export default Recruits;