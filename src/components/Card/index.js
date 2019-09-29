import React from 'react';
import "./style.css"


class Card extends React.Component {
  render() {
    return (
      <div className="cards">
        <div className="image">

          <img src={this.props.image} />
        </div>

        <div className="wrap_info">
          <div className="top">
            <h1>{this.props.name} </h1>

          </div>
          <div className="down">
            {this.props.description}</div>

        </div>
      </div>
    )
  }
}



export default Card