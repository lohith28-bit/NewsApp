import React, { Component } from 'react'
import download from "./download.jpg"

export default class Newsitem extends Component {
  render() {
	let { title , description, imgUrl, Urlid} = this.props;
	return (
	  <div >
		<div className="card">
			<img src={imgUrl == null ? download : imgUrl} alt="..." style={{maxHeight : "300px"}}/>
			<div className="card-body">
				<h5 className="card-title">{title}...</h5>
				<p className="card-text">{description}...</p>
				<a href={Urlid} target ="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
			</div>
		</div>
	  </div>
	)
  }
}
