import React from 'react';
import LoginForm from './components/Login_Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';

function App() {
	// const [user, setUser]= useState({username:"", password:"", message:""});

	return (

		<div className='App'>

			<header>

				<div id="myLinks">
					<nav>
						<a>Home</a>
						<a>About</a>
						<a>Footer</a>
					</nav>
				</div>
				<div className="header">
					<h1>Potluck Planner</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div>

			</header>

			<body>
				<div className="section-one">
					<h2>Know who is coming</h2>
					<p>Whenever you send a invitation to someone they will get a pop up asking if they are coming or not. this helps you see what you need,and help save money!</p>
					<button>Learn more</button>
				</div>
				<div className="section-two">
					<div>
						<img src="https://thinklocalvictoria.com/wp-content/uploads/2021/02/Saveur-Website-280px-x-200px.png" />
					</div>
					<div className="text">
						<h2>Who is bringing the food?</h2>
						<p>Now you dont have to worry who is bringing what. With are app the person you invite can post what food they are bringing.</p>
						<button>Learn More</button>
					</div>

				</div>
				<footer>
					<Router>
						<Switch>
							<Route exact component={LoginForm} path="/" />
							<Route path="/home" component={Home} />
						</Switch>
					</Router>
					<div className="footer">
						<h3>Email</h3>
						<p>potluck@outlook.com</p>

						<h3>Phone</h3>
						<p>372-654-4503</p>


						<h3>Address</h3>
						<p>231 Hollow bastion Street</p>
						<p>Shibuya KH 0000</p>
					</div>
				</footer>
			</body>


			{/* <Router>
			<header className='App-header'>
			</header>
			<Switch>
				<Route exact path='/'>
					<LoginForm user={user} setUser={setUser}/>
				</Route>
				<Route exact path='/home'>
					<Home user={user} setUser={setUser}/>
				</Route>
			</Switch>
			</Router> */}
		</div>
	)
}

export default App
