import React, { Component } from 'react'
import Cell from './Cell.js'

class Row extends Component {
  render() {
    /*
    - set row to desired cell length
    - iterate and add each cell component to the row
    - pass down the state and the rowIndex from the Row by setting the state prop and rowIndex props
    - set the cellIndex to i
    */

    const row = [];
    for (let i = 0; i < 5; i++) {
      let cell = <Cell key= {i} state={this.props.state} rowIndex={this.props.rowIndex} cellIndex={i}/>
      row.push(cell)
      console.log('cellIndex', this.props.rowIndex * 5 + i)
    }
    return (
      <div className="Row">
        {row}
      </div>
    )
  }
}


export default Row;