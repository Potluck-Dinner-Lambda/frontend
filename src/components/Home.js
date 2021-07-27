import React from 'react'
import {useHistory} from 'react-router-dom'


function Home(props) {
    const{ user, setUser }=props;
    console.log('Home',user)
    const hist = useHistory();
    const routeToLogin =() =>{
        hist.push('/');}

    const Logout =()=>{
        setUser({username:"", password:""});
        routeToLogin();
    }
    return (
        <div>
            <header className="App-Header">
                <div className = "welcome">
				<h1>Potluck planner</h1>
                <h2><span>{user}</span></h2>
          		<button onClick={Logout}>Logout</button>
                </div>
            </header>
        		
        </div>
    )
}

export default Home

