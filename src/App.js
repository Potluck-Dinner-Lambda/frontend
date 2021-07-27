import React from 'react';
import LoginForm from './components/Login_Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';

function App() {
	// const [user, setUser]= useState({username:"", password:"", message:""});
		  
	return (
		<div className='App'>			
		<Router>
			<Switch>
				<Route exact component={LoginForm} path="/"/>
				<Route path="/home" component={Home}/>
			</Switch>
		</Router>
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
