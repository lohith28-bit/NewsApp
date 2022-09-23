import React, { Component } from 'react'
import loading1 from './loading1.gif'

export class Spinning extends Component {
  render() {
	return (
	  <div className='m-auto w-50 text-center'>
		<img src={loading1} alt="loading" style={{width : "250px"}} />
	  </div>
	)
  }
}

export default Spinning;
