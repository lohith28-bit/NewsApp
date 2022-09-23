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
	article = [
		{
		"source": {
		"id": "techcrunch",
		"name": "TechCrunch"
		},
		"author": "Jagmeet Singh",
		"title": "India's Daalchini raises $4M to make smart stores and vending machines ubiquitous",
		"description": "Retail tech startup Daalchini, which offers smart vending machines to hundreds of brands in India, has raised $4 million as it works to establish autonomous smart stores and vending machines in every 200 meters of habitable area in the country. The Noida-base…",
		"url": "https://techcrunch.com/2022/09/07/daalchini-series-a-4-million-usd-funding-smart-vending-machines-india/",
		"urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/daalchini_founders_prerna_kalra_vidya_bhushan.jpeg",
		"publishedAt": "2022-09-07T12:43:21Z",
		"content": "Retail tech startup Daalchini, which offers smart vending machines to hundreds of brands in India, has raised $4 million as it works to establish autonomous smart stores and vending machines in every… [+4088 chars]"
		},
		{
		"source": {
		"id": "der-tagesspiegel",
		"name": "Der Tagesspiegel"
		},
		"author": "Nathalie Trappe",
		"title": "„Technisch nicht machbar“: AKW-Betreiber rät vom Reservebetrieb von Isar 2 ab",
		"description": "Der EON-Konzern sieht viele Probleme in den Plänen des Bundeswirtschaftsministeriums für den AKW-Weiterbetrieb. Man bleibe im Austausch mit der Regierung.",
		"url": "https://www.tagesspiegel.de/wirtschaft/technisch-nicht-machbar-akw-betreiber-rat-vom-reservebetrieb-von-isar-2-ab-8616829.html",
		"urlToImage": "https://www.tagesspiegel.de/images/akwjpg/alternates/BASE_16_9_W1400/akwjpg.jpeg",
		"publishedAt": "2022-09-07T12:34:24+00:00",
		"content": "Der Betreiber des Kernkraftwerks Isar 2 hält die Pläne eines Weiterbetriebs von zwei AKWs in Deutschland zum Jahresende für nicht möglich. Das geht aus einem Schreiben von Guido Knott, dem Chef von P… [+1398 chars]"
		},
		{
		"source": {
		"id": "msnbc",
		"name": "MSNBC"
		},
		"author": "Ja&#x27;han Jones",
		"title": "Amazon acquisition of iRobot vacuum cleaners is a surveillance nightmare",
		"description": "The Federal Trade Commission reportedly is investigating Amazon’s deals to acquire two companies that would help the tech giant collect even more personal data.",
		"url": "https://www.msnbc.com/the-reidout/reidout-blog/amazon-irobot-vacuum-cleaner-surveillance-ftc-rcna46417",
		"urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-09/220906-ROB-Amazon-iRobot-jg-c6bbf9.jpg",
		"publishedAt": "2022-09-07T12:11:37Z",
		"content": "On Friday, Politico reported that the Federal Trade Commission is investigating Amazons agreement to acquire two companies that would help the tech giant become an even bigger hoarder of peoples pers… [+2193 chars]"
		},
		{
		"source": {
		"id": "engadget",
		"name": "Engadget"
		},
		"author": "https://www.engadget.com/about/editors/steve-dent",
		"title": "Sony unveils 'world's first' robotic pan-tilt-zoom full-frame mirrorless camera | Engadget",
		"description": "Sony has unveiled an unusual mirrorless camera that essentially marries the FX6 cinema camera's tech with remote-controlled robotics..",
		"url": "https://www.engadget.com/sony-fr7-robotic-pan-tilt-zoom-camera-074952775.html",
		"urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/d9396050-2e79-11ed-b7df-40872a5e2306",
		"publishedAt": "2022-09-07T11:37:21.6004297Z",
		"content": "Sony has unveiled an unusual mirrorless camera that essentially marries the FX6 cinema camera's tech with remote-controlled robotics. Called the FR7, it's the \"world's first\" pan-tilt-zoom full-frame… [+2510 chars]"
		},
		{
		"source": {
		"id": "wired",
		"name": "Wired"
		},
		"author": "Wired",
		"title": "Banning Phones in Class? Not So Fast",
		"description": "Tech dependence is following many students back to school—but waging a war against devices helps no one.",
		"url": "https://www.wired.com/story/cell-phone-bans-school/",
		"urlToImage": "https://media.wired.com/photos/6317e88a00704d14b5ffb7ca/191:100/w_1280,c_limit/phones-in-class.jpg",
		"publishedAt": "2022-09-07T11:00:00Z",
		"content": "A few weeks into my return to teaching part-time this spring, I paused my walk around the classroom to watch two young women in body-con dresses writhe in unison to a song I could not hear. The women… [+3486 chars]"
		},
		{
		"source": {
		"id": "the-wall-street-journal",
		"name": "The Wall Street Journal"
		},
		"author": "Tim Higgins",
		"title": "Apple’s iPhone 14 Lineup to Headline Wednesday Product Event",
		"description": "Apple begins a third year of nudging customers to iPhones with 5G-capable technology, betting iterative enhancements will still appeal to buyers who haven’t upgraded to the latest offerings.",
		"url": "https://www.wsj.com/articles/iphone-14-lineup-apple-event-launch-11662500247?mod=hp_lead_pos7",
		"urlToImage": "https://images.wsj.net/im-616376/social",
		"publishedAt": "2022-09-07T10:03:00Z",
		"content": "Apple on Wednesday begins a third year of nudging customers to iPhones with 5G-capable technology, betting iterative enhancements will still appeal to buyers who havent upgraded to the latest offerin… [+224 chars]"
		},
		{
		"source": {
		"id": "axios",
		"name": "Axios"
		},
		"author": "Scott Rosenberg",
		"title": "Back-to-the-office moves leave tech uneasy",
		"description": "Apple's in-office mandate strikes a discordant note in the industry that made remote work possible.",
		"url": "https://www.axios.com/2022/09/07/remote-work-tech-office-apple",
		"urlToImage": "https://images.axios.com/JWSzk4yIS8GC1A2ZM2FSh5vJfC4=/0x0:1920x1080/1366x768/2022/09/07/1662509595642.jpg",
		"publishedAt": "2022-09-07T09:46:05Z",
		"content": "A lot of CEOs are itching to get workers back to the office, but tech CEOs who want that face an extra uphill battle: After all, theirs is the industry that made remote work possible.\r\nWhy it matters… [+3228 chars]"
		},
		{
		"source": {
		"id": "engadget",
		"name": "Engadget"
		},
		"author": "https://www.engadget.com/about/editors/steve-dent",
		"title": "Signal makes Google strike organizer Meredith Walker its first president | Engadget",
		"description": "Privacy-focused messaging app Signal has hired former Google manager and tech critic Meredith Whittaker as its first president..",
		"url": "https://www.engadget.com/signal-hires-meredith-walker-as-president-092649184.html",
		"urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/c310ee10-2e88-11ed-bf67-803f023d875e",
		"publishedAt": "2022-09-07T09:37:18.9053508Z",
		"content": "Privacy-focused messaging app Signal has hired former Google manager and tech critic Meredith Whittaker as its first president, it announced in a blog post. She's already on the board of directors, a… [+1683 chars]"
		},
		{
		"source": {
		"id": "le-monde",
		"name": "Le Monde"
		},
		"author": "Philippe Escande",
		"title": "« Dans le tableau peu réjouissant de la tech chinoise, Tencent est la société qui s’en sort le mieux »",
		"description": "En attendant que le beau temps revienne, le groupe supprime 5 000 emplois, vend ses participations les moins rentables et continue d’investir dans des pépites bon marché, comme Ubisoft, observe Philippe Escande, éditorialiste économique au « Monde ».",
		"url": "https://www.lemonde.fr/economie/article/2022/09/07/dans-le-tableau-peu-rejouissant-de-la-tech-chinoise-tencent-est-la-societe-qui-s-en-sort-le-mieux_6140531_3234.html",
		"urlToImage": "https://img.lemde.fr/2022/09/07/73/0/4000/2666/1440/960/60/0/6f49640_1662540532393-tencent.jpg",
		"publishedAt": "2022-09-07T08:52:38Z",
		"content": "Devant les bureaux de Tencent, à Shenzhen (Guangdong), en Chine, le 26 mai 2021. NOEL CELIS / AFP\r\nLa patience est une grande constante de la stratégie chinoise. Comme le suggérait déjà le général Su… [+2544 chars]"
		},
		{
		"source": {
		"id": "fox-sports",
		"name": "Fox Sports"
		},
		"author": "FOX Sports",
		"title": "MLB Playoff Watch: Astros cruising, Yankees struggling, Mariners soaring",
		"description": "Technically, 10 teams are still in the hunt in the American League playoff race. Jordan Shusterman looks at the latest developments.",
		"url": "http://www.foxsports.com/stories/mlb/mlb-playoff-watch-astros-cruising-yankees-struggling-mariners-soaring",
		"urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/09.06.22_ALContendersWatch_16x9.jpg?ve=1&tl=1",
		"publishedAt": "2022-09-07T00:50:09Z",
		"content": "By Jordan Shusterman\r\nFOX Sports MLB Writer\r\nWith less than a month to go in the regular season, theres only one thing we know for certain when it comes to the American League playoff picture: The ro… [+10149 chars]"
		},
		{
		"source": {
		"id": "recode",
		"name": "Recode"
		},
		"author": "Sara Morrison",
		"title": "Sen. Klobuchar’s Big Tech antitrust bill is up against a lot of Big Tech money",
		"description": "“It is an incredible amount of money I’m up against.”",
		"url": "https://www.vox.com/recode/2022/9/6/23332620/amy-klobuchar-antitrust-code-2022",
		"urlToImage": "https://cdn.vox-cdn.com/thumbor/LtXrdEjW6J0KQyWB32Dd1Y9NNd8=/0x91:4912x2663/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24000117/GettyImages_1323755563.jpg",
		"publishedAt": "2022-09-07T00:06:05Z",
		"content": "Amy Klobuchars antitrust push is not dead, the Democratic senator told Kara Swisher at the Code Conference on Tuesday.\r\nNever count us out when the cause is right and its something we need to tackle,… [+3340 chars]"
		},
		{
		"source": {
		"id": "ars-technica",
		"name": "Ars Technica"
		},
		"author": "Ashley Belanger",
		"title": "Leaked “shopping list” reveals Russia’s most “desperately” needed war tech",
		"description": "Ukraine says Russia's military arsenal has dwindled by nearly half.",
		"url": "https://arstechnica.com/tech-policy/2022/09/leaked-shopping-list-reveals-russias-most-desperately-needed-war-tech/",
		"urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/09/GettyImages-1242971729-760x380.jpg",
		"publishedAt": "2022-09-06T20:12:01+00:00",
		"content": "240 with 101 posters participating\r\nUkrainian Prime Minister Denys Shmyhal this week told Politico that he expects that diminished access to technology will be the driving force staving off Russia's … [+3148 chars]"
		},
		{
		"source": {
		"id": "goteborgs-posten",
		"name": "Göteborgs-Posten"
		},
		"author": "Joel Arvidsson",
		"title": "Här är techbolagen som betalar mest i lön – Göteborgsbolag i topp",
		"description": "Google och Facebook i topp – men även två doldisar från Göteborg",
		"url": "http://www.gp.se/ekonomi/h%C3%A4r-%C3%A4r-techbolagen-som-betalar-mest-i-l%C3%B6n-1.80344457",
		"urlToImage": "https://www.gp.se/image/policy:1.80344373:1662473571/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
		"publishedAt": "2022-09-06T06:16:42Z",
		"content": null
		},
		{
		"source": {
		"id": "wired",
		"name": "Wired"
		},
		"author": "Wired",
		"title": "Y Combinator, Silicon Valley’s Most Powerful ‘Mafia,’ Gets a New Boss",
		"description": "The startup incubator birthed big names like Airbnb and Stripe. Incoming CEO Garry Tan says he’ll tap the program’s alumni network to generate new tech giants.",
		"url": "https://www.wired.com/story/silicon-valleys-most-powerful-mafia-gets-a-new-boss",
		"urlToImage": "https://media.wired.com/photos/63111628f64c675d6d1a5121/191:100/w_1280,c_limit/Garry-Tan-YCombinator-Business-R0MKB3.jpg",
		"publishedAt": "2022-09-02T11:00:00Z",
		"content": "The power of Y Combinator has always been its network. The legendary Silicon Valley startup accelerator is known for smelting mere ideas into some of the most successful companies in technology, incl… [+2756 chars]"
		},
		{
		"source": {
		"id": "recode",
		"name": "Recode"
		},
		"author": "Jason Del Rey",
		"title": "Leaked internal memo reveals Amazon’s anti-union strategies",
		"description": "Inside the tech giant’s plan to neutralize one of America’s most powerful unions.",
		"url": "https://www.vox.com/recode/23282640/leaked-internal-memo-reveals-amazons-anti-union-strategies-teamsters",
		"urlToImage": "https://cdn.vox-cdn.com/thumbor/zRomhFa6e4Lu7KR4D11YSmmRKcE=/0x200:2800x1666/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23908023/GettyImages_1231889284.jpg",
		"publishedAt": "2022-07-29T10:00:00Z",
		"content": "In June 2021, the International Brotherhood of Teamsters, one of the most powerful unions in the world, published a special resolution about Amazon, labeling the tech giant an existential threat and … [+16131 chars]"
		},
		{
		"source": {
		"id": "t3n",
		"name": "T3n"
		},
		"author": "Jörn Brien",
		"title": "Quantenakku soll E-Autos in Sekunden voll laden können",
		"description": "Akkus von E-Autos könnten dank Quantentechnologie künftig in Sekunden statt in Stunden geladen werden – wie je",
		"url": "https://t3n.de/news/quantenakku-e-auto-schnell-laden-1461272/",
		"urlToImage": "https://t3n.de/news/wp-content/uploads/2022/03/E-Auto-Quantenakku-Schnellladen.jpg",
		"publishedAt": "2022-03-24T13:45:54Z",
		"content": "Der Begriff Schnellladestation könnte mit Quantentechnologie eine neue Dimension bekommen. Quantenakkus gelten als vielversprechend für hohe Ladegeschwindigkeiten und die Speicherung von Energie  bis… [+2018 chars]"
		}
		];
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
