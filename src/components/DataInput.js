import React, { Component } from 'react'

export default class DataInput extends Component {
  render() {
    return (
      <div className="thirdOuterDiv">
        <label htmlFor="population">POPULATION</label><br/>
        <input className='anime' type="text" name="population" id="population" data-population ="population" required />
        <br/>
        <label htmlFor="elapse">TIME TO ELAPSE</label><br/>
        <input className='anime' type="text" name="elapse-time" id="elapse" data-time-to-elapse ="elapse" required />
        <br/>
        <label htmlFor="reported-cases">REPORTED CASES</label><br/>
        <input className='anime' type="text" name="reported-cases" id="reported-cases" data-reported-cases ="reported-cases" required />
        <br/>
        <label htmlFor="total-hospital-beds">TOTAL HOSPITAL BEDS</label><br/>
        <input className='anime' type="text" name="hospital-beds" id="total-hospital-beds" data-total-hospital-beds ="total-hospital-beds" required />
        <br/>
        <label htmlFor="period-type">PERIOD TYPE</label><br/>
        <select name="periodType" id="period-type" data-period-type ="period-type">
          <option value="days">DAYS</option>
          <option value="weeks">WEEKS</option>
          <option value="months">MONTHS</option>
        </select>
        <br />
        <button data-go-estimate="go-estimate">Submit</button>
      </div>
    )
  }
}
