import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div style={{ margin: "-25" }}>
					<NavBar/>
						<Routes>
							<Route exact path="/"  element={<News pageSize={21} key ="business" category={"business"} heading ={"Business"}/>}/>
							<Route exact path="business"  element={<News pageSize={21} key ="business" category={"business"} heading ={"Business"}/>}/>
							<Route exact path="entertainment" element={<News key ="entertainment" pageSize={21} category={"entertainment"} heading ={"Entertainment"}/>}/>
							<Route exact path="general"  element={<News key="general" pageSize={21} category={"general"} heading ={"General"}/>}/>
							<Route exact path="health" element={<News pageSize={21} key ="health" category={"health"} heading ={"Health"}/>}/>
							<Route exact path="science" element={<News pageSize={21} key ="science" category={"science"} heading ={"Science"}/>}/>
							<Route exact path="sports"  element={<News pageSize={21} key ="sports" category={"sports"} heading ={"Sports"}/>}/>
							<Route exact path="technology"  element={<News pageSize={21} key="technology" category={"technology"} heading ={"Technology"}/>}/>
							<Route path='*'element={<div>Please check the URL and try again 😊</div>} ></Route>
						</Routes>
				</div>
		    </BrowserRouter>
		)
	}
}
