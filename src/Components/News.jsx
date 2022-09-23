import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinning from './Spinning';
import PropTypes from 'prop-types';


export default class News extends Component {
	static defaultProps = {
		category : "business",
		pageSize : 21
	}
	static ReactPropTypes = {
		category : PropTypes.string,
		pageSize : PropTypes.number
	}
	constructor(){
		super();
		this.state= {
			articles :[],
			loading : false,
			page : 1
		};
	}
	randomDisc = "Heads of state and official overseas guests attended the event on Sunday evening at Buckingham Palace, which marked the first time Charles and Camilla met many of the world's most powerful players since becoming King and Queen Consort.";
	randomTitle ="Hundreds of dignitaries were pictured arriving by bus as the reception began.";
	
	async componentDidMount(){
		let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=3dbabe7092884cb6a994a297ae598851&page=1&pageSize=${this.props.pageSize}`;
		this.setState({loading : true});
		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({ articles: parsedData.articles,
			totalResults:parsedData.totalResults,
		 	loading : false
		 })
	}
	handlePrevClick= async ()=>{
		if(this.state.page - 1 <= Math.ceil(this.state.totalResults/20)){
			let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=3dbabe7092884cb6a994a297ae598851&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
			this.setState({loading : true});
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page : this.state.page-1,
				articles : parsedData.articles,
				loading : false
			})
		}
	}
	handleNext = async()=>{
		if(this.state.page + 1 <= Math.ceil(this.state.totalResults/20)){
			let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=3dbabe7092884cb6a994a297ae598851&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
			this.setState({loading : true});
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page : this.state.page+1,
				articles : parsedData.articles,
				loading :false
			})
		}
	}
  render() {
	return (
	  <div className='container my-3'>
	  	<h1 className='my-4 text-center'><strong>NewsDive</strong> - Top Headlines {this.props.heading}</h1>
		{this.state.loading && <Spinning />}
		<div className="row">
		{!this.state.loading && (this.state.articles || []).map((element) => {
			return <div className="col-md-4 my-3"  key ={element.url}>
			<Newsitem title = {element.title == null? this.randomTitle.slice(0,21) : element.title.slice(0,21)} description = {element.description == null? this.randomDisc.slice(0,90):element.description.slice(0,90)} imgUrl ={element.urlToImage} Urlid ={element.url}/>
			</div>
		})}
		</div>
		<div className="d-flex justify-content-between">
				<button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
				<button type="button" className="btn btn-dark" disabled={this.state.page>=4} onClick={this.handleNext}>Next &rarr;</button>
		</div>
	  </div>
	)
  }
}
