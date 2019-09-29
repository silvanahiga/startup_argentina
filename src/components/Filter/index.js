import React from 'react';
import "./style.css"

class Filter extends React.Component {
  handleChange(e) {
    console.log(e.target.value)
    const input = e.target.value
    this.props.dataInput(input)
  }
  render() {
    return (
      <div className="filter">

        <input placeholder="Buscar" onChange={(e) => this.handleChange(e)} type="text" />


      </div>
    )
  }
}



export default Filter;